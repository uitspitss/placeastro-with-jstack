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
    proxy: {
      '/api': {
        target: apiTarget,
        changeOrigin: true,
        secure: false,
      },
      '/m': {
        target: apiTarget,
        changeOrigin: true,
        secure: false,
      },
      '/random': {
        target: apiTarget,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
