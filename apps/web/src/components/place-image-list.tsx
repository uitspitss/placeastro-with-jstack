'use client';

import { getClient } from '@/lib/client';
import { createQueryKey } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export const PlaceImageList = () => {
  const {
    data: placeImages,
    isPending: isPendingPlaceImages,
    error,
  } = useQuery({
    queryKey: createQueryKey('placeImage').list(),
    queryFn: async () => {
      const res = await getClient().placeImages.list.$get();
      return await res.json();
    },
  });

  if (isPendingPlaceImages) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!placeImages || placeImages.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {placeImages.map((image) => (
        <div key={image.id} className="border rounded-lg overflow-hidden">
          <Image
            src={image.url}
            alt={image.credits}
            className="object-cover"
            width={100}
            height={100}
          />
          <div className="p-2">
            <p className="text-sm font-semibold">Credits: {image.credits}</p>
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm"
            >
              Source: {image.sourceUrl}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
