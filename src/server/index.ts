import { j } from './jstack';
import { cors } from 'hono/cors';
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
  .use('*', async (c, next) => {
    const corsMiddleware = cors({
      allowHeaders: ['x-is-superjson'],
      exposeHeaders: ['x-is-superjson'],
      // @ts-ignore
      origin: `${c.env.CORS_ORIGIN}`,
      credentials: true,
    });
    return corsMiddleware(c, next);
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
