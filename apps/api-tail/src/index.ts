import {
  type SentryStacktrace,
  parseStackTrace,
} from './lib/parse-stack-trace';
import {
  type SentryLevel,
  isSentryLevel,
  unixMsToSentryTimestamp,
} from './lib/sentry';
import {
  DEFAULT_IGNORED_STATUS_CODES,
  shouldSampleStatusCode,
} from './lib/status-code';
import type { Env } from './types/env';

interface SentryBreadcrumb {
  type: string;
  category: string;
  timestamp: number;
  level?: SentryLevel;
  message?: string;
  data?: Record<string, unknown>;
}

interface SentryException {
  type: string;
  value: string;
  stacktrace?: SentryStacktrace;
}

interface SentryRequest {
  method: string;
  url: string;
  headers: Record<string, string>;
  env: Record<string, unknown>;
}

interface SentryEvent {
  event_id: string;
  timestamp: number;
  level: SentryLevel;
  logger: string;
  message: { message: string };
  platform: string;
  fingerprint: string[];
  breadcrumbs: SentryBreadcrumb[];
  exception: SentryException[];
  release?: string;
  tags: Record<string, unknown>;
  contexts: Record<string, unknown>;
  request?: SentryRequest;
}

type TraceException = TraceItem['exceptions'][number] & { stack?: string };

function workerEventToEventType(itemEvent: TraceItem['event']): string {
  if (!itemEvent) {
    return 'unknown';
  }
  if ('request' in itemEvent) {
    return 'fetch';
  }
  if ('scheduledTime' in itemEvent && 'cron' in itemEvent) {
    return 'cron';
  }
  if ('scheduledTime' in itemEvent) {
    return 'alarm';
  }
  if ('queue' in itemEvent) {
    return 'queue';
  }
  if ('mailFrom' in itemEvent) {
    return 'email';
  }
  return 'custom';
}

function logLevelToSentryLevel(logLevel: string): SentryLevel {
  switch (logLevel) {
    case 'log':
      return 'info';
    case 'warn':
      return 'warning';
    default:
      return isSentryLevel(logLevel) ? logLevel : 'debug';
  }
}

function outcomeToSentryLevel(outcome: string): SentryLevel {
  switch (outcome) {
    case 'exceededCpu':
    case 'exceededMemory':
      return 'fatal';
    case 'exception':
      return 'error';
    case 'ok':
      return 'info';
    default:
      return 'warning';
  }
}

function outcomeToMessage(outcome: string): string {
  switch (outcome) {
    case 'exceededCpu':
      return 'Exceeded CPU';
    case 'exceededMemory':
      return 'Exceeded Memory';
    case 'exception':
      return 'Script Threw Exception';
    case 'canceled':
      return 'Client Disconnected';
    case 'ok':
      return 'Success';
    default:
      return 'Internal';
  }
}

function processExceptions(exceptions: TraceException[]): SentryException[] {
  return exceptions.map((exception) => ({
    type: exception.name,
    value: exception.message,
    stacktrace: parseStackTrace(exception.stack),
  }));
}

function randomBetween0and1(): number {
  const buffer = new Uint32Array(1);
  crypto.getRandomValues(buffer);
  return buffer[0] / 4294967295;
}

function shouldSampleException(exceptionSamplingRate: number): boolean {
  if (!exceptionSamplingRate) {
    return false;
  }
  return randomBetween0and1() * 100 <= exceptionSamplingRate;
}

function consoleLogToString(logMessage: unknown): string {
  const pieces = Array.isArray(logMessage) ? logMessage : [logMessage];
  return pieces
    .map((p) => (typeof p === 'string' ? p : JSON.stringify(p)))
    .join(', ');
}

const retryableFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  const response = await fetch(input, init);
  if (response.status === 429) {
    const retryAfter = Number.parseFloat(
      response.headers.get('Retry-After') || '0',
    );
    await new Promise((resolve) => {
      setTimeout(resolve, retryAfter * 1000);
    });
    return retryableFetch(input, init);
  }
  return response;
};

const REQUEST_CF_KEYS = [
  'asn',
  'colo',
  'continent',
  'country',
  'timezone',
  'httpProtocol',
  'requestPriority',
  'tlsCipher',
  'tlsClientAuth',
  'tlsExportedAuthenticator',
  'tlsVersion',
] as const;

export default {
  async tail(events: TraceItem[], env: Env): Promise<void> {
    const blockedHeaders = env.BLOCKED_HEADERS.map((header) =>
      header.toLowerCase(),
    );
    const ignoredStatusCodes =
      env.IGNORED_STATUS_CODES ?? DEFAULT_IGNORED_STATUS_CODES;

    for (const item of events) {
      const outcome = item.outcome;
      const eventType = workerEventToEventType(item.event);
      const eventTimestamp = item.eventTimestamp ?? Date.now();

      const scriptTags: Record<string, boolean> = {};
      for (const tag of item.scriptTags ?? []) {
        scriptTags[tag] = true;
      }

      const event: SentryEvent = {
        event_id: crypto.randomUUID().replaceAll('-', ''),
        timestamp: unixMsToSentryTimestamp(eventTimestamp),
        level: outcomeToSentryLevel(outcome),
        logger: env.TAIL_WORKER_SCRIPT_NAME,
        message: {
          message: outcomeToMessage(outcome),
        },
        platform: 'javascript',
        fingerprint: [outcome, eventType],
        breadcrumbs: [],
        exception: processExceptions(item.exceptions as TraceException[]),
        release: item.scriptVersion?.id,
        tags: {
          ...scriptTags,
          eventType,
          outcome,
          scriptName: item.scriptName,
        },
        contexts: {
          cloud_resource: {
            'cloud.provider': 'cloudflare',
            'cloud.platform': 'workers',
          },
        },
      };

      const breadcrumbs = event.breadcrumbs;
      const tags = event.tags;
      let isSampledRequest = false;

      if (item.event) {
        if ('request' in item.event) {
          const request = item.event.request;
          const url = new URL(request.url);
          const statusCode = item.event.response?.status || 500;
          const cf = (request.cf ?? {}) as Record<string, unknown>;
          const requestEnv: Record<string, unknown> = {};
          for (const key of REQUEST_CF_KEYS) {
            requestEnv[key] = cf[key];
          }

          event.request = {
            method: request.method,
            url: request.url,
            headers: Object.entries(request.headers).reduce<
              Record<string, string>
            >((headers, [key, value]) => {
              if (!blockedHeaders.includes(key.toLowerCase())) {
                headers[key] = value;
              }
              return headers;
            }, {}),
            env: requestEnv,
          };

          breadcrumbs.push({
            type: 'http',
            category: 'request',
            timestamp: unixMsToSentryTimestamp(eventTimestamp),
            data: {
              url: request.url,
              method: request.method,
              status_code: statusCode,
            },
          });

          event.fingerprint.push(
            url.origin,
            url.pathname,
            request.method,
            `${statusCode}`,
          );

          const rayIdKey = Object.keys(request.headers).find(
            (key) => key.toLowerCase() === 'cf-ray',
          );
          if (rayIdKey) {
            tags.rayId = request.headers[rayIdKey];
          }

          if (
            outcome === 'ok' &&
            shouldSampleStatusCode(
              statusCode,
              env.STATUS_CODES_TO_SAMPLING_RATES,
              ignoredStatusCodes,
            )
          ) {
            isSampledRequest = true;
            event.message = {
              message: item.event.response
                ? `${statusCode} Response`
                : 'No response',
            };
            if (statusCode >= 400) {
              event.level = 'error';
            }
          }
        } else if ('scheduledTime' in item.event) {
          tags.scheduledTime =
            item.event.scheduledTime instanceof Date
              ? item.event.scheduledTime.toISOString()
              : item.event.scheduledTime;
        } else if ('queue' in item.event) {
          tags.queue = item.event.queue;
          tags.batchSize = item.event.batchSize;
        } else if ('mailFrom' in item.event) {
          tags.mailFrom = item.event.mailFrom;
          tags.rcptTo = item.event.rcptTo;
          tags.rawSize = item.event.rawSize;
        }
      }

      for (const log of item.logs) {
        breadcrumbs.push({
          type: 'debug',
          category: `console.${log.level}`,
          message: consoleLogToString(log.message),
          level: logLevelToSentryLevel(log.level),
          timestamp: unixMsToSentryTimestamp(log.timestamp),
        });
      }

      for (const payload of item.diagnosticsChannelEvents) {
        breadcrumbs.push({
          type: 'debug',
          category: `channel.${payload.channel}`,
          message: consoleLogToString(payload.message),
          level: 'debug',
          timestamp: unixMsToSentryTimestamp(payload.timestamp),
        });
      }

      for (const exception of item.exceptions) {
        breadcrumbs.push({
          type: 'error',
          level: 'error',
          category: exception.name,
          message: exception.message,
          timestamp: unixMsToSentryTimestamp(exception.timestamp),
        });
        event.fingerprint.push(exception.name);
        event.exception.push({
          type: exception.name,
          value: exception.message,
        });
      }

      breadcrumbs.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return 1;
        }
        if (a.timestamp < b.timestamp) {
          return -1;
        }
        return 0;
      });

      const lastBreadcrumb = breadcrumbs.length
        ? breadcrumbs[breadcrumbs.length - 1]
        : null;
      if (lastBreadcrumb?.type === 'error') {
        breadcrumbs.pop();
      }

      if (
        isSampledRequest ||
        (event.exception.length &&
          shouldSampleException(env.EXCEPTION_SAMPLING_RATE))
      ) {
        const sentry = new URL(env.SENTRY_DSN);
        sentry.pathname = `/api${sentry.pathname}/store/`;
        await retryableFetch(sentry, {
          method: 'POST',
          body: JSON.stringify(event),
          headers: {
            'content-type': 'application/json',
            'x-sentry-auth': `Sentry sentry_key=${sentry.username},sentry_secret=${sentry.password}`,
          },
        });
      }
    }
  },
} satisfies ExportedHandler<Env>;
