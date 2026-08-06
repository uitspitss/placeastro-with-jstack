import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from './button';

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Upload image' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="destructive" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="ghost" />
      <Button {...args} variant="link" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="sm" />
      <Button {...args} size="default" />
      <Button {...args} size="lg" />
      <Button {...args} size="icon" aria-label="upload">
        ↑
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    // disabled の見た目は CSS 由来（opacity-50）なので描画結果からは分からない
    const button = canvas.getByRole('button');
    await expect(getComputedStyle(button).opacity).toBe('0.5');
    await expect(getComputedStyle(button).pointerEvents).toBe('none');
  },
};

/**
 * グローバル CSS（src/globals.css）が preview に読み込まれているかの番人。
 * toBeVisible は素の HTML でも通るので、実測値でしか保証できない。
 * これが落ちたら他のストーリーの見た目は一切信用できない。
 */
export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');
    const style = getComputedStyle(button);

    // --primary: hsl(36 72% 54%)
    await expect(style.backgroundColor).toBe('rgb(222, 155, 53)');
    // --font-body: Outfit（preview-head.html で読み込んでいる）
    await expect(style.fontFamily).toContain('Outfit');
  },
};
