import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyToClipboard } from './copy-to-clipboard';

const meta = {
  component: CopyToClipboard,
  tags: ['ai-generated'],
  args: { text: 'https://placeastro.u7s.dev/m/16' },
} satisfies Meta<typeof CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * クリック先が <button> ではなく素の <svg> なので、キーボードから到達できず
 * アクセシブルネームも無い。a11y アドオンのパネルで違反として出る。
 */
export const Default: Story = {};
