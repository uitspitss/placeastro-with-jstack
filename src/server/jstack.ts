import type { Env } from '@/types/worker-configuration';
import { drizzle } from 'drizzle-orm/d1';
import type { Context } from 'hono';
import { env } from 'hono/adapter';
import { type InferMiddlewareOutput, jstack } from 'jstack';
import { createAuth } from './lib/auth';

export type ServerContext = Context<{ Bindings: Env }>;

export const j = jstack.init<{ Bindings: Env }>();

/**
 * Type-safely injects database into all procedures
 * @see https://jstack.app/docs/backend/middleware
 *
 * For deployment to Cloudflare Workers
 * @see https://developers.cloudflare.com/workers/tutorials/postgres/
 */
const databaseMiddleware = j.middleware(async ({ c, ctx, next }) => {
  const { DB } = env(c);
  const db = drizzle(DB);

  return await next({ db });
});
type DatabaseMiddlewareOutput = InferMiddlewareOutput<
  typeof databaseMiddleware
>;

const authMiddleware = j.middleware(async ({ c, ctx, next }) => {
  const auth = createAuth(c);

  return await next({ auth });
});
type AuthMiddlewareOutput = InferMiddlewareOutput<typeof authMiddleware>;

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure.use(databaseMiddleware);

/**
 * Private (authenticated) procedures
 */
export const privateProcedure = publicProcedure.use(authMiddleware);
