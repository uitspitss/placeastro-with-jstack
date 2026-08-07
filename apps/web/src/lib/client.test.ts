import { describe, expect, it } from 'vitest';
import { resolveRpcUrl } from './client';

describe('resolveRpcUrl', () => {
  it('VITE_API_URL があればそのオリジンを使う', () => {
    expect(
      resolveRpcUrl('https://placeastro.u7s.dev', 'http://localhost:3100'),
    ).toBe('https://placeastro.u7s.dev/api/rpc');
  });

  it('VITE_API_URL の末尾スラッシュで二重スラッシュにならない', () => {
    expect(
      resolveRpcUrl('https://placeastro.u7s.dev/', 'http://localhost:3100'),
    ).toBe('https://placeastro.u7s.dev/api/rpc');
  });

  // 空 = vite の proxy 経由（ローカル開発・E2E）。相対パスのままだと
  // oRPC が内部で new URL() に渡した時点で落ちる
  it('VITE_API_URL が空なら同一オリジンの絶対 URL になる', () => {
    expect(resolveRpcUrl('', 'http://localhost:3100')).toBe(
      'http://localhost:3100/api/rpc',
    );
  });

  it('VITE_API_URL が未定義でも同一オリジンの絶対 URL になる', () => {
    expect(resolveRpcUrl(undefined, 'http://localhost:3100')).toBe(
      'http://localhost:3100/api/rpc',
    );
  });
});
