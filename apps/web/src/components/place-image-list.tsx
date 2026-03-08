import { client } from '@/lib/client';
import { createQueryKey } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

export const PlaceImageList = () => {
  const {
    data: placeImages,
    isPending: isPendingPlaceImages,
    error,
  } = useQuery({
    queryKey: createQueryKey('placeImage').list(),
    queryFn: () => client.placeImages.list(),
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
          <img
            src={image.url}
            alt={image.credits}
            className="object-cover w-full h-auto"
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
