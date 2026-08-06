import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * portless 使用時は `portless get api` で API の URL を取得する。
 * portless 未使用時は localhost:8080 にフォールバック。
 */
function resolveApiTarget(): string {
  // E2E は固定ポートの wrangler dev を使う（playwright.config.ts が渡す）
  if (process.env.E2E_API_URL) {
    return process.env.E2E_API_URL;
  }
  if (process.env.PORT) {
    try {
      return execFileSync('portless', ['get', 'api'], {
        encoding: 'utf-8',
      }).trim();
    } catch {}
  }
  return 'http://localhost:8080';
}

const apiTarget = resolveApiTarget();

/**
 * 本番は Cloudflare のルート設定が `/docs*` を web、それ以外を api に振り分けて
 * 同一オリジンになる。ローカル（dev / preview）はプロキシでそれを再現する。
 */
const apiProxy = {
  '/api': { target: apiTarget, changeOrigin: true, secure: false },
  '/m': { target: apiTarget, changeOrigin: true, secure: false },
  '/random': { target: apiTarget, changeOrigin: true, secure: false },
};

export default defineConfig({
  base: '/docs/',
  plugins: [
    TanStackRouterVite(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: apiProxy,
  },
  // E2E は `vite preview`（ビルド成果物）に対して走るので、ここにも同じ経路が要る
  preview: {
    proxy: apiProxy,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
