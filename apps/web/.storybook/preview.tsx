import type { Decorator, Preview } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import '../src/globals.css';

// 本番は index.html の <html class="dark"> でダークテーマ固定
document.documentElement.classList.add('dark');

/**
 * useQuery を使うコンポーネントのため。
 * ストーリーごとに作り直して、キャッシュが隣のストーリーへ漏れないようにする。
 */
const withQueryClient: Decorator = (Story) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: false },
          mutations: { retry: false },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};

// アプリ本体のコンテナ幅・余白（__root.tsx の mx-auto max-w-5xl px-6）に合わせる
const withAppContainer: Decorator = (Story) => (
  <div className="mx-auto max-w-5xl px-6 py-6">
    <Story />
  </div>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [withQueryClient, withAppContainer],
};

export default preview;
