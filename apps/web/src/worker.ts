interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    // Strip /docs prefix for asset lookup
    url.pathname = url.pathname.replace(/^\/docs/, '') || '/';
    return env.ASSETS.fetch(new Request(url, request));
  },
};
