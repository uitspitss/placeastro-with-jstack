import { AspectRatio } from '@placeastro/ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@placeastro/ui';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

type Props = {
  imageUrls: string[];
};

export function Gallery({ imageUrls }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 5_000, stopOnInteraction: false }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {imageUrls.map((imageUrl) => (
          <CarouselItem key={imageUrl} className="relative">
            <AspectRatio ratio={1 / 1}>
              <img
                src={imageUrl}
                alt="placeholder image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
