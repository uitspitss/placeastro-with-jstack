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
          <CarouselItem key={imageUrl}>
            <img
              src={imageUrl}
              alt="placeholder image"
              className="w-full aspect-square object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
