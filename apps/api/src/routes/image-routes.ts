import { drizzle } from 'drizzle-orm/d1';
import type { Context } from 'hono';
import { Hono } from 'hono';
import { createMiddleware } from 'hono/factory';
import { trackPageview } from '../lib/umami';
import type { HonoEnv } from '../orpc';
import {
  getPlaceImageByKey,
  listPlaceImages,
} from '../services/place-image-service';

const CACHE_TTL_SECONDS = 3600;

const edgeCache = createMiddleware<HonoEnv>(async (c, next) => {
  try {
    const cache = (caches as unknown as { default: Cache }).default;
    const cacheKey = new Request(c.req.url, { method: 'GET' });

    const cached = await cache.match(cacheKey);
    if (cached) {
      console.log('[cache] HIT', c.req.url);
      return new Response(cached.body, cached);
    }

    console.log('[cache] MISS', c.req.url);
    await next();

    if (c.res.ok) {
      const response = c.res.clone();
      const cachedResponse = new Response(response.body, response);
      cachedResponse.headers.set(
        'Cache-Control',
        `public, s-maxage=${CACHE_TTL_SECONDS}`,
      );
      c.executionCtx.waitUntil(cache.put(cacheKey, cachedResponse));
    }
  } catch (e) {
    console.error('[cache] error:', e);
    await next();
  }
});

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
imageRoutes.get('/random', edgeCache, async (c) => {
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
    },
  });
});

// GET /:catalogue/:catalogueNumber/info
imageRoutes.get('/:catalogue/:catalogueNumber/info', edgeCache, async (c) => {
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
  );
});

// GET /:catalogue/:catalogueNumber — proxy image from imgix
imageRoutes.get('/:catalogue/:catalogueNumber', edgeCache, async (c) => {
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
    },
  });
});
