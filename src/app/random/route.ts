import { getClient } from '@/lib/client';

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const w = searchParams.get('w') || '400';
  const h = searchParams.get('h') || '400';

  const res = await getClient().placeImages.list.$get();
  if (!res.ok) {
    return new Response('Not found images', { status: 404 });
  }
  const placeImages = await res.json();
  if (!placeImages.length) {
    return new Response('Not found images', { status: 404 });
  }
  const placeImage =
    placeImages[Math.floor(Math.random() * placeImages.length)];
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
    headers: { 'Content-Type': contentType },
  });
}
