import { onError } from '@orpc/server';
import { RPCHandler } from '@orpc/server/fetch';
import { Hono } from 'hono';
import { contextStorage } from 'hono/context-storage';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { createAuth } from './lib/auth';
import type { HonoEnv } from './orpc';
import { placeImageRouter } from './routers/place-image-router';
import { imageRoutes } from './routes/image-routes';

export const appRouter = {
  placeImages: placeImageRouter,
};

export type AppRouter = typeof appRouter;

const rpcHandler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error('[oRPC error]', error);
    }),
  ],
});

const app = new Hono<HonoEnv>();

app.use('*', logger());
app.use('*', contextStorage());

app.use('/api/*', async (c, next) => {
  return cors({
    origin: c.env.CORS_ORIGIN,
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT'],
    exposeHeaders: ['Content-Length'],
    credentials: true,
  })(c, next);
});

app.use('/api/*', async (c, next) => {
  c.set('auth', createAuth());
  return next();
});

app.on(['POST', 'GET'], '/api/auth/*', (c) => {
  return c.get('auth').handler(c.req.raw);
});

app.use('/api/rpc/*', async (c, next) => {
  const { matched, response } = await rpcHandler.handle(c.req.raw, {
    prefix: '/api/rpc',
    context: {
      env: c.env,
      request: c.req.raw,
    },
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
});

app.get('/', (c) => c.redirect('/docs'));

app.route('/', imageRoutes);

export default app;
