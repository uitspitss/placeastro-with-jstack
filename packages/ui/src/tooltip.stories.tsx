import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen } from 'storybook/test';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

const meta = {
  component: Tooltip,
  tags: ['ai-generated'],
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Copy URL</Button>
      </TooltipTrigger>
      <TooltipContent>https://placeastro.u7s.dev/m/16</TooltipContent>
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 閉じている間、中身は DOM に無い（Portal + Radix の制御） */
export const Closed: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toHaveAttribute(
      'data-state',
      'closed',
    );
  },
};

export const OpenOnHover: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.hover(canvas.getByRole('button'));

    // Portal で document.body 直下に出るので canvas ではなく screen から探す
    const tooltip = await screen.findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('https://placeastro.u7s.dev/m/16');
  },
};
