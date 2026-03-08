import type { AppRouter } from '@placeastro/api';
import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';

const link = new RPCLink({
  url: import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/rpc`
    : '/api/rpc',
  fetch: (input, init) =>
    globalThis.fetch(input, { ...init, credentials: 'include' }),
});

export const client: RouterClient<AppRouter> = createORPCClient(link);
