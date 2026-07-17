export type SentryLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';

const SENTRY_LEVELS: readonly SentryLevel[] = [
  'fatal',
  'error',
  'warning',
  'info',
  'debug',
];

export function isSentryLevel(level: string): level is SentryLevel {
  return (SENTRY_LEVELS as readonly string[]).includes(level);
}

/** Cloudflare の unix ミリ秒を Sentry の timestamp(秒)に変換する。 */
export function unixMsToSentryTimestamp(unixMs: number): number {
  return unixMs / 1000;
}
