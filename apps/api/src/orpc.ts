/// <reference path="./types/worker-configuration.d.ts" />

import { ORPCError, os } from '@orpc/server';
import { drizzle } from 'drizzle-orm/d1';
import { createAuth } from './lib/auth';

export type InitialContext = {
  env: Cloudflare.Env;
  request: Request;
};

export type HonoEnv = {
  Bindings: Cloudflare.Env;
  Variables: {
    auth: ReturnType<typeof createAuth>;
  };
};

const base = os.$context<InitialContext>();

const databaseMiddleware = base.middleware(async ({ context, next }) => {
  const db = drizzle(context.env.DB);
  return next({ context: { db } });
});

const authMiddleware = base.middleware(async ({ context, next }) => {
  const auth = createAuth();
  const session = await auth.api.getSession({
    headers: context.request.headers,
  });
  if (!session) {
    throw new ORPCError('UNAUTHORIZED');
  }
  return next({
    context: { auth, user: session.user, session: session.session },
  });
});

export const publicProcedure = base.use(databaseMiddleware);
export const privateProcedure = publicProcedure.use(authMiddleware);
