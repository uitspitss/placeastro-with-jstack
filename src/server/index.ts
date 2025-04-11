import { env } from 'hono/adapter';
import { contextStorage } from 'hono/context-storage';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { type ServerContext, j } from './jstack';
import { createAuth } from './lib/auth';
import { placeImageRouter } from './routers/place-image-router';

/**
 * This is your base API.
 * Here, you can handle errors, not-found responses, cors and more.
 *
 * @see https://jstack.app/docs/backend/app-router
 */
const api = j
  .router()
  .basePath('/api')
  .use(logger())
  .use(contextStorage())
  .use('/auth/*', async (c: ServerContext, next) => {
    const { CORS_ORIGIN } = env(c);

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
  .use('*', async (c: ServerContext, next) => {
    const { CORS_ORIGIN } = env(c);

    const corsMiddleware = cors({
      origin: `${CORS_ORIGIN}`,
      allowHeaders: ['x-is-superjson', 'Content-Type'],
      allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT'],
      exposeHeaders: ['x-is-superjson'],
      credentials: true,
    });
    return corsMiddleware(c, next);
  })
  .use('*', async (c: ServerContext, next) => {
    const auth = createAuth();
    c.set('auth', auth);

    return await next();
  })
  .on(['POST', 'GET'], '/auth/*', async (c) => {
    return c.get('auth').handler(c.req.raw);
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
