import { client } from '@/lib/client';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, mocked } from 'storybook/test';
import PlaceImage from './place-image';

const stub = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" fill="hsl(220 40% 20%)"/><circle cx="48" cy="48" r="22" fill="hsl(36 72% 54%)"/></svg>',
)}`;

const meta = {
  component: PlaceImage,
  tags: ['ai-generated'],
  args: { imageKey: 'M/16' },
} satisfies Meta<typeof PlaceImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Found: Story = {
  async beforeEach() {
    mocked(client.placeImages.getByKey).mockResolvedValue({
      id: 'm16',
      url: stub,
      credits: 'NASA / ESA',
      sourceUrl: 'https://esahubble.org/images/m16/',
      catalogue: 'M',
      catalogueNumber: '16',
      createdAt: '2026-01-01 00:00:00',
      updatedAt: '2026-01-01 00:00:00',
      deletedAt: null,
    });
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByAltText('M/16')).toBeVisible();
  },
};

export const Failed: Story = {
  async beforeEach() {
    mocked(client.placeImages.getByKey).mockRejectedValue(
      new Error('Invalid key format: M'),
    );
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByText('Error: Invalid key format: M'),
    ).toBeVisible();
  },
};

export const WithCustomSize: Story = {
  args: { className: 'w-40 h-40' },
  beforeEach: Found.beforeEach,
  play: async ({ canvas }) => {
    // cn() で w-24 h-24 を上書きできること（tailwind-merge の効きを見る）
    const wrapper = (await canvas.findByAltText('M/16')).parentElement;
    await expect(getComputedStyle(wrapper as Element).width).toBe('160px');
  },
};
