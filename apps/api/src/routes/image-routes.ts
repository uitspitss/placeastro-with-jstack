import type { PlaceImageError } from '@placeastro/shared';
import { drizzle } from 'drizzle-orm/d1';
import type { Context } from 'hono';
import { Hono } from 'hono';
import { createMiddleware } from 'hono/factory';
import type { ContentfulStatusCode } from 'hono/utils/http-status';
import { ResultAsync, err, ok } from 'neverthrow';
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
      return new Response(cached.body, cached);
    }

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
  } catch {
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

function errorToStatus(error: PlaceImageError): ContentfulStatusCode {
  switch (error.type) {
    case 'INVALID_KEY':
      return 400;
    case 'NOT_FOUND':
      return 404;
    default:
      return 500;
  }
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
  return listPlaceImages(db)
    .andThen((images) => {
      const image = images[Math.floor(Math.random() * images.length)];
      return image
        ? ok(image)
        : err<never, PlaceImageError>({
            type: 'NOT_FOUND',
            message: 'Not found images',
          });
    })
    .andThen((placeImage) => {
      const imgixParams = buildImgixParams(w, h, placeImage.credits);
      return ResultAsync.fromSafePromise<Response, PlaceImageError>(
        fetch(`${placeImage.url}?${imgixParams.toString()}`),
      ).andThen((res) => {
        const contentType = res.headers.get('Content-Type');
        return contentType
          ? ok({ res, contentType })
          : err<never, PlaceImageError>({
              type: 'NOT_FOUND',
              message: 'Not found content type',
            });
      });
    })
    .match(
      async ({ res, contentType }) =>
        new Response(await res.arrayBuffer(), {
          headers: { 'Content-Type': contentType },
        }),
      (error) => c.text(error.message, errorToStatus(error)),
    );
});

// GET /:catalogue/:catalogueNumber/info
imageRoutes.get('/:catalogue/:catalogueNumber/info', edgeCache, async (c) => {
  const { catalogue, catalogueNumber } = c.req.param();
  sendTracking(c, `/${catalogue}/${catalogueNumber}/info`);
  const upper = catalogue.toUpperCase();

  const db = drizzle(c.env.DB);
  return getPlaceImageByKey(db, `${upper}/${catalogueNumber}`).match(
    (placeImage) =>
      c.json(
        {
          credit: placeImage.credits,
          sourceUrl: placeImage.sourceUrl,
          name: `${placeImage.catalogue}${placeImage.catalogueNumber}`,
        },
        200,
      ),
    (error) => c.text(error.message, errorToStatus(error)),
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
  return getPlaceImageByKey(db, `${upper}/${catalogueNumber}`)
    .andThen((placeImage) => {
      const imgixParams = buildImgixParams(w, h, placeImage.credits);
      return ResultAsync.fromSafePromise<Response, PlaceImageError>(
        fetch(`${placeImage.url}?${imgixParams.toString()}`),
      ).andThen((res) => {
        const contentType = res.headers.get('Content-Type');
        return contentType
          ? ok({ res, contentType })
          : err<never, PlaceImageError>({
              type: 'NOT_FOUND',
              message: 'Not found content type',
            });
      });
    })
    .match(
      async ({ res, contentType }) =>
        new Response(await res.arrayBuffer(), {
          headers: { 'Content-Type': contentType },
        }),
      (error) => c.text(error.message, errorToStatus(error)),
    );
});
