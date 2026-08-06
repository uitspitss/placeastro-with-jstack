import { dirname, isAbsolute, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const here = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(here, '../src');

/**
 * ブラウザで評価させたくないモジュールの差し替え表。
 * key は拡張子なしの絶対パス、value はモック実体。
 *
 * @/lib/client は oRPC クライアントなので、そのままだと
 * ストーリーが実 API を叩きにいく（= ネットワーク次第で結果が変わる）。
 */
const moduleMocks: Record<string, string> = {
  [resolve(srcDir, 'lib/client')]: resolve(srcDir, 'lib/__mocks__/client.js'),
};

/**
 * Vite の解決を横取りしてモックへ差し替える。
 * sb.mock() と違い、コンポーネントから張られた推移的な import も捕まえられる。
 *
 * Vite の alias プラグインは pre プラグインより先に走るので、
 * `@/lib/client` は絶対パスに化けた状態でここへ来る。相対・エイリアス・
 * 絶対のどれで書かれても同じファイルなら捕まるように正規化して比較する。
 */
function mockModules() {
  return {
    name: 'mock-modules',
    enforce: 'pre' as const,
    resolveId(source: string, importer: string | undefined) {
      const path = source.split('?')[0] ?? source;

      let target: string | null = null;
      if (path.startsWith('@/')) {
        target = resolve(srcDir, path.slice(2));
      } else if (isAbsolute(path)) {
        target = path;
      } else if (importer && path.startsWith('.')) {
        target = resolve(dirname(importer), path);
      }
      if (!target) return null;

      const withoutExt = target.replace(/\.(m?[jt]sx?)$/, '');
      return moduleMocks[withoutExt] ?? null;
    },
  };
}

/**
 * 先に固定しておく依存。テスト実行中に dep optimizer が走ると
 * ページがリロードされて、その時走っていたテストが落ちる。
 * vitest.config.ts からも参照するので、ここを唯一の定義にする。
 */
export const optimizeDepsInclude = [
  'react',
  'react-dom/client',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  '@tanstack/react-query',
  'lucide-react',
  '@heroicons/react/24/outline',
  'embla-carousel-react',
  'embla-carousel-autoplay',
  '@radix-ui/react-tooltip',
  'usehooks-ts',
];

const config: StorybookConfig = {
  // ストーリーは対象と同じ場所に置く（components/foo.stories.tsx）。
  // glob の起点が2つあるとサイドバーの階層が揃わないので、
  // packages/ui 側は titlePrefix でまとめる（autotitle は維持される）
  stories: [
    '../src/**/*.stories.tsx',
    {
      directory: '../../../packages/ui/src',
      files: '**/*.stories.tsx',
      titlePrefix: 'ui',
    },
  ],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',

  viteFinal(vite) {
    // アプリは /docs/ 配下に配信するが Storybook は自身のルートから配信する
    vite.base = '/';

    vite.plugins ??= [];
    vite.plugins.push(mockModules());

    // vitest 経由でも storybook dev でも同じ解決になるよう明示する
    vite.resolve ??= {};
    vite.resolve.alias = Array.isArray(vite.resolve.alias)
      ? [...vite.resolve.alias, { find: '@', replacement: srcDir }]
      : { ...vite.resolve.alias, '@': srcDir };

    vite.optimizeDeps ??= {};
    vite.optimizeDeps.include = [
      ...(vite.optimizeDeps.include ?? []),
      ...optimizeDepsInclude,
    ];

    return vite;
  },
};

export default config;
