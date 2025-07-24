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
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const w = searchParams.get('w') || '400';
  const h = searchParams.get('h') || '400';

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

  const res = await response.unwrapOr({ ok: false } as Response);
  if (!res.ok) {
    return new Response('Not found image', { status: 404 });
  }
  const placeImage = await res.json();
  if (!placeImage) {
    return new Response('Not found image', { status: 404 });
  }

  // creating imgix params
  const imgixParams = new URLSearchParams();
  const credits = btoa(`credit: ${placeImage.credits}`);
  imgixParams.append('txt64', credits);

  // text
  imgixParams.append('txt-color', 'FFFFFF');
  imgixParams.append('txt-shad', '5');
  imgixParams.append('txt-fit', 'max');

  // size
  imgixParams.append('fit', 'fillmax');
  imgixParams.append('fill', 'blur');
  imgixParams.append('w', w);
  imgixParams.append('h', h);

  // fetching image to imgix
  const resImage = await fetch(`${placeImage.url}?${imgixParams.toString()}`);
  const contentType = res.headers.get('Content-Type');
  if (!contentType) {
    return new Response('Not found content type', { status: 404 });
  }

  return new Response(await resImage.arrayBuffer(), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=30',
    },
  });
}
