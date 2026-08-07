import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import type { AppRouter } from '@placeastro/api';

/**
 * oRPC は url を内部で `new URL()` に渡すので、相対パスを与えると
 * ブラウザで `Failed to construct 'URL': Invalid URL` になる
 * （react-query がリトライするので、画面上は永久に読み込み中に見える）。
 *
 * VITE_API_URL が空のときは vite の proxy 越しに同一オリジンへ出すのが意図なので、
 * ここで origin を補って絶対 URL にする。
 *
 * base ではなく連結で組むのは、auth-client の baseURL と同じく
 * VITE_API_URL のパスまで含めて前置きにするため（`new URL('/api/rpc', apiUrl)`
 * だとパス付きの値を渡したときにパスが落ちる）。
 */
export function resolveRpcUrl(
  apiUrl: string | undefined,
  origin: string,
): string {
  const prefix = apiUrl?.replace(/\/$/, '');
  return new URL(prefix ? `${prefix}/api/rpc` : '/api/rpc', origin).toString();
}

const link = new RPCLink({
  url: resolveRpcUrl(import.meta.env.VITE_API_URL, window.location.origin),
  fetch: (input, init) =>
    globalThis.fetch(input, { ...init, credentials: 'include' }),
});

export const client: RouterClient<AppRouter> = createORPCClient(link);
