import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const slides = ['M16', 'M42', 'M74'];

// satisfies ではなく型注釈。embla の型が推論に載ると
// declaration 出力時に TS2742（可搬でない型）になる
const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['ai-generated'],
  // 前後ボタンが -left-12 / -right-12 に絶対配置されるので、はみ出さない余白を取る
  decorators: [
    (Story) => (
      <div className="px-16">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((label) => (
          <CarouselItem key={label}>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-border/50 bg-secondary text-2xl font-semibold">
              {label}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

/** 先頭では戻れない。disabled は embla の状態を反映した結果で、描画だけでは分からない */
export const AtFirstSlide: Story = {
  play: async ({ canvas }) => {
    await waitFor(() =>
      expect(
        canvas.getByRole('button', { name: 'Previous slide' }),
      ).toBeDisabled(),
    );
    await expect(
      canvas.getByRole('button', { name: 'Next slide' }),
    ).toBeEnabled();
  },
};

export const Looping: Story = {
  args: { opts: { loop: true } },
  play: async ({ canvas }) => {
    // loop 有効時は先頭でも両方向に進める
    await waitFor(() =>
      expect(
        canvas.getByRole('button', { name: 'Previous slide' }),
      ).toBeEnabled(),
    );
  },
};

export const NavigatesToLastSlide: Story = {
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getAllByRole('group')).toHaveLength(slides.length);

    const next = canvas.getByRole('button', { name: 'Next slide' });
    await userEvent.click(next);
    await userEvent.click(next);

    // 末尾まで来たら進めなくなり、戻れるようになる
    await waitFor(() => expect(next).toBeDisabled());
    await expect(
      canvas.getByRole('button', { name: 'Previous slide' }),
    ).toBeEnabled();
  },
};
