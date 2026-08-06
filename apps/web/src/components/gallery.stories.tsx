import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Gallery } from './gallery';

/** ネットワークに依存させないため、画像はインライン SVG の data URI にする */
const stub = (label: string, hue: number) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="hsl(${hue} 40% 20%)"/><text x="100" y="108" font-family="sans-serif" font-size="28" fill="hsl(36 72% 54%)" text-anchor="middle">${label}</text></svg>`,
  )}`;

const meta = {
  component: Gallery,
  tags: ['ai-generated'],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrls: [stub('M16', 220), stub('M42', 280), stub('M74', 160)],
  },
};

export const Single: Story = {
  args: { imageUrls: [stub('M16', 220)] },
};

/** 空配列でも落ちないこと。カルーセルの中身が空になるだけ */
export const Empty: Story = {
  args: { imageUrls: [] },
  // alt="" の装飾画像なので role では引けない。要素数で見る
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelectorAll('img')).toHaveLength(0);
  },
};
