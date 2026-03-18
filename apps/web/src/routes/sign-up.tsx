import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-up')({
  beforeLoad: async () => {
    // NOTE: ユーザーの新規追加をしないので、/sign-up は閉じる
    throw redirect({ to: '/' });
  },
  component: () => null,
});
