import { client } from '@/lib/client';
import { createQueryKey } from '@/lib/query-key';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

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
    queryFn: () => client.placeImages.getByKey({ key: imageKey }),
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
      <img
        src={placeImage.url}
        alt={imageKey ?? 'place image'}
        className="absolute inset-0 w-full h-full object-cover rounded-md"
      />
    </div>
  );
}
