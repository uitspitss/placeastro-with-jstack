import { Carousel, CarouselContent, CarouselItem } from '@placeastro/ui';
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
            <div className="overflow-hidden rounded-xl border border-border/50">
              <img
                src={imageUrl}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
