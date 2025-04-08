import { getClient } from '@/lib/client';

type Params = {
  params: {
    catalogue: string;
    catalogueNumber: number;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { catalogue, catalogueNumber } = params;
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const w = searchParams.get('w');
  const h = searchParams.get('h');

  const upperCasedCatalogue = catalogue.toUpperCase();
  const catalogues = ['M', 'NGC'];
  if (!catalogues.includes(upperCasedCatalogue)) {
    return new Response('Not found catalogue', { status: 404 });
  }

  const res = await getClient().placeImages.getByKey.$get({
    key: `${upperCasedCatalogue}/${catalogueNumber}`,
  });
  if (!res.ok) {
    return new Response('Not found image', { status: 404 });
  }
  const placeImage = await res.json();
  if (!placeImage) {
    return new Response('Not found image', { status: 404 });
  }

  // creating imgix params
  const imgixParams = new URLSearchParams();
  const credits = btoa(`credits: ${placeImage.credits}`);
  imgixParams.append('txt64', credits);

  // text
  imgixParams.append('txt-color', 'FFFFFF');
  imgixParams.append('txt-shad', '5');
  imgixParams.append('txt-fit', 'max');

  // size
  imgixParams.append('fit', 'fillmax');
  imgixParams.append('fill', 'blur');
  if (w && Number(w) > 0) {
    imgixParams.append('w', w);
  }
  if (h && Number(h) > 0) {
    imgixParams.append('h', h);
  }

  // fetching image to imgix
  const resImage = await fetch(`${placeImage.url}?${imgixParams.toString()}`);
  const contentType = res.headers.get('Content-Type');
  if (!contentType) {
    return new Response('Not found content type', { status: 404 });
  }

  return new Response(await resImage.arrayBuffer(), {
    headers: { 'Content-Type': contentType },
  });
}
