import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';
import { optimizeDepsInclude } from './.storybook/main';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // vite.config.ts は読まれないので、@ エイリアスはここでも張る
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // 事前バンドルを固定しないと、テスト中のリロードでテストが落ちる
  optimizeDeps: { include: optimizeDepsInclude },
  test: {
    passWithNoTests: true,
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'happy-dom',
          // unit は `.test.*`、E2E（Playwright）は e2e/ の `.spec.ts`。
          // Playwright の既定 testMatch は `*.spec.ts` も拾うので、
          // 拡張子とディレクトリの両方で取り合いを塞いでおく
          include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
        },
      },
      {
        extends: true,
        // .storybook/main.ts の stories を読み、各ストーリーを1テストとして走らせる
        plugins: [storybookTest({ configDir: `${root}.storybook` })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
