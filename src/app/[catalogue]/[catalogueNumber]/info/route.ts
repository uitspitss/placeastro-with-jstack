import { getClient } from '@/lib/client';
import { ResultAsync } from 'neverthrow';

type Params = {
  params: Promise<{
    catalogue: string;
    catalogueNumber: number;
  }>;
};

export async function GET(request: Request, { params }: Params) {
  const { catalogue, catalogueNumber } = await params;

  const upperCasedCatalogue = catalogue.toUpperCase();
  const catalogues = ['M', 'NGC'];
  if (!catalogues.includes(upperCasedCatalogue)) {
    return new Response('Not found catalogue', { status: 404 });
  }

  const response = await ResultAsync.fromThrowable(() =>
    getClient().placeImages.getByKey.$get({
      key: `${upperCasedCatalogue}/${catalogueNumber}`,
    }),
  )();

  if (response.isErr()) {
    return new Response('Not found image', { status: 404 });
  }

  const res = await response.unwrapOr(undefined);
  if (!res || !res.ok) {
    return new Response('Not found image', { status: 404 });
  }
  const placeImage = await res.json();
  if (!placeImage) {
    return new Response('Not found image', { status: 404 });
  }
  const info = {
    credits: placeImage.credits,
    sourceUrl: placeImage.sourceUrl,
    name: `${placeImage.catalogue}${placeImage.catalogueNumber}`,
  };

  return new Response(JSON.stringify(info));
}
