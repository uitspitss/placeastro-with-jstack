import { expect, test } from '@playwright/test';

test('ランディングが開き、エンドポイント一覧が並ぶ', async ({ page }) => {
  await page.goto('/docs/');

  await expect(
    page.getByRole('heading', { level: 1, name: 'placeastro' }),
  ).toBeVisible();

  // ギャラリーの画像は外部ホスト（imgix / placehold.co）に出ていくので待たない
  await expect(page.getByText('https://placeastro.u7s.dev/m/16')).toBeVisible();
});
