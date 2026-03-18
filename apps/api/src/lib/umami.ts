/**
 * Send a pageview event to Umami's server-side tracking API.
 * Designed to be called inside `waitUntil()` so it never blocks the response.
 */
export async function trackPageview(opts: {
  host: string;
  websiteId: string;
  url: string;
  hostname: string;
  referrer?: string;
  userAgent?: string;
  language?: string;
}): Promise<void> {
  await fetch(`${opts.host}/api/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': opts.userAgent ?? 'Cloudflare-Worker',
    },
    body: JSON.stringify({
      payload: {
        website: opts.websiteId,
        url: opts.url,
        hostname: opts.hostname,
        referrer: opts.referrer ?? '',
        language: opts.language ?? '',
      },
      type: 'event',
    }),
  });
}
