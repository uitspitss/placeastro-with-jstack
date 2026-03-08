'use client';
import { getClient } from '@/lib/client';
import { createQueryKey } from '@/lib/query-key';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

type Props = {
  imageKey: string;
  className?: string;
};

export default function PlaceImage({ imageKey, className }: Props) {
  const {
    data: placeImage,
    isLoading,
    error,
  } = useQuery({
    queryKey: createQueryKey('placeImage').detail(imageKey),
    queryFn: async () => {
      const res = await getClient().placeImages.getByKey.$get({
        key: imageKey,
      });
      if (!res.ok) {
        throw new Error('Failed to fetch image');
      }
      return res.json();
    },
  });

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }
  if (!placeImage) {
    return <div>No image found</div>;
  }
  if (isLoading || !placeImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cn('relative w-24 h-24', className)}>
      <Image
        src={placeImage.url}
        alt={imageKey ?? 'place image'}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  );
}
