import { client } from '@/lib/client';
import { createQueryKey } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';
import { ExternalLink, Loader2 } from 'lucide-react';

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
    return (
      <div className="flex items-center gap-2 py-12 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading catalog...
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3">
        <p className="text-sm text-destructive">Error: {error.message}</p>
      </div>
    );
  }

  if (!placeImages || placeImages.length === 0) {
    return (
      <div className="rounded-lg border border-border/50 bg-secondary/50 px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          No images in catalog yet
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {placeImages.map((image) => (
        <div
          key={image.id}
          className="code-card group overflow-hidden rounded-xl"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image.url}
              alt={image.credits}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <p className="truncate text-sm font-medium">{image.credits}</p>
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
