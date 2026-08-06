import { expect, test } from '@playwright/test';

test.describe('未ログイン', () => {
  // このブロックだけ storageState を捨ててセッション無しにする
  test.use({ storageState: { cookies: [], origins: [] } });

  test('/docs/upload は /docs/login に飛ばされる', async ({ page }) => {
    await page.goto('/docs/upload');

    await expect(page).toHaveURL(/\/docs\/login$/);
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  });
});

test.describe('ログイン済み', () => {
  test('/docs/upload が開く', async ({ page }) => {
    await page.goto('/docs/upload');

    await expect(
      page.getByRole('heading', { level: 1, name: 'Upload' }),
    ).toBeVisible();
  });

  test('カタログ一覧が oRPC 経由でシードを返す', async ({ page }) => {
    await page.goto('/docs/upload');

    // seed.sql の credits。DB → API → oRPC → 描画 まで通っていることの確認
    await expect(page.getByText('Adam Evans')).toBeVisible();
  });
});
