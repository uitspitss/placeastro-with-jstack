import { j } from './jstack';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { placeImageRouter } from './routers/place-image-router';
import { createAuth } from './lib/auth';
import type { Env } from '@/types/worker-configuration';

/**
 * This is your base API.
 * Here, you can handle errors, not-found responses, cors and more.
 *
 * @see https://jstack.app/docs/backend/app-router
 */
const api = j
  .router()
  .basePath('/api')
  .use('/auth/*', async (c, next) => {
    const { CORS_ORIGIN } = c.env as Env;

    const corsMiddleware = cors({
      origin: `${CORS_ORIGIN}`,
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    });
    return corsMiddleware(c, next);
  })
  .use('*', async (c, next) => {
    const { CORS_ORIGIN } = c.env as Env;

    const corsMiddleware = cors({
      origin: `${CORS_ORIGIN}`,
      allowHeaders: ['x-is-superjson'],
      exposeHeaders: ['x-is-superjson'],
      credentials: true,
    });
    return corsMiddleware(c, next);
  })
  .use('*', async (c, next) => {
    const auth = createAuth(c);
    c.set('auth', auth);
    return next();
  })
  .use(logger())
  .on(['POST', 'GET'], '/auth/*', async (c) => {
    const response = c.get('auth').handler(c.req.raw);
    return response;
  })
  .onError(j.defaults.errorHandler);

/**
 * This is the main router for your server.
 * All routers in /server/routers should be added here manually.
 */
const appRouter = j.mergeRouters(api, {
  placeImages: placeImageRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
