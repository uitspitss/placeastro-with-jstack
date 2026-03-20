import { drizzle } from 'drizzle-orm/d1';
import type { Context } from 'hono';
import { Hono } from 'hono';
import { trackPageview } from '../lib/umami';
import type { HonoEnv } from '../orpc';
import {
  getPlaceImageByKey,
  listPlaceImages,
} from '../services/place-image-service';

function buildImgixParams(
  w: string,
  h: string,
  credits: string,
): URLSearchParams {
  const p = new URLSearchParams();
  p.append('txt64', btoa(`credit: ${credits}`));
  p.append('txt-color', 'FFFFFF');
  p.append('txt-shad', '5');
  p.append('txt-fit', 'max');
  p.append('fit', 'fillmax');
  p.append('fill', 'blur');
  p.append('w', w);
  p.append('h', h);
  return p;
}

export const imageRoutes = new Hono<HonoEnv>();

// biome-ignore lint/suspicious/noExplicitAny: Hono Context generic variance
function sendTracking(c: Context<HonoEnv, any>, url: string) {
  c.executionCtx.waitUntil(
    trackPageview({
      host: c.env.UMAMI_HOST,
      websiteId: c.env.UMAMI_WEBSITE_ID,
      url,
      hostname: new URL(c.req.raw.url).hostname,
      userAgent: c.req.raw.headers.get('User-Agent') ?? undefined,
      language:
        c.req.raw.headers.get('Accept-Language')?.split(',')[0] ?? undefined,
    }),
  );
}

// GET /random — must be registered before /:catalogue/:catalogueNumber
imageRoutes.get('/random', async (c) => {
  sendTracking(c, '/random');
  const w = c.req.query('w') ?? '400';
  const h = c.req.query('h') ?? '400';

  const db = drizzle(c.env.DB);
  const images = await listPlaceImages(db);
  if (!images.length) {
    return c.text('Not found images', 404);
  }

  const placeImage = images[Math.floor(Math.random() * images.length)];
  if (!placeImage) {
    return c.text('Not found image', 404);
  }

  const imgixParams = buildImgixParams(w, h, placeImage.credits);
  const resImage = await fetch(`${placeImage.url}?${imgixParams.toString()}`);
  const contentType = resImage.headers.get('Content-Type');
  if (!contentType) {
    return c.text('Not found content type', 404);
  }

  return new Response(await resImage.arrayBuffer(), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });
});

// GET /:catalogue/:catalogueNumber/info
imageRoutes.get('/:catalogue/:catalogueNumber/info', async (c) => {
  const { catalogue, catalogueNumber } = c.req.param();
  sendTracking(c, `/${catalogue}/${catalogueNumber}/info`);
  const upper = catalogue.toUpperCase();

  const db = drizzle(c.env.DB);
  const result = await getPlaceImageByKey(db, `${upper}/${catalogueNumber}`);
  if (result.isErr()) {
    const status = result.error.type === 'INVALID_KEY' ? 400 : 404;
    return c.text(result.error.message, status);
  }
  const placeImage = result.value;

  return c.json(
    {
      credit: placeImage.credits,
      sourceUrl: placeImage.sourceUrl,
      name: `${placeImage.catalogue}${placeImage.catalogueNumber}`,
    },
    200,
    { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30' },
  );
});

// GET /:catalogue/:catalogueNumber — proxy image from imgix
imageRoutes.get('/:catalogue/:catalogueNumber', async (c) => {
  const { catalogue, catalogueNumber } = c.req.param();
  sendTracking(c, `/${catalogue}/${catalogueNumber}`);
  const w = c.req.query('w') ?? '400';
  const h = c.req.query('h') ?? '400';

  const upper = catalogue.toUpperCase();

  const db = drizzle(c.env.DB);
  const result = await getPlaceImageByKey(db, `${upper}/${catalogueNumber}`);
  if (result.isErr()) {
    const status = result.error.type === 'INVALID_KEY' ? 400 : 404;
    return c.text(result.error.message, status);
  }
  const placeImage = result.value;

  const imgixParams = buildImgixParams(w, h, placeImage.credits);
  const resImage = await fetch(`${placeImage.url}?${imgixParams.toString()}`);
  const contentType = resImage.headers.get('Content-Type');
  if (!contentType) {
    return c.text('Not found content type', 404);
  }

  return new Response(await resImage.arrayBuffer(), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=30',
    },
  });
});
