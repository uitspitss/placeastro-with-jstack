import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
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
            {/* <div className="p-1 relative"> */}
            <AspectRatio ratio={1 / 1} className="w-full rounded-xl border">
              <Image
                src={imageUrl}
                alt="placeholder image"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
