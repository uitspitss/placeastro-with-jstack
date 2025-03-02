import { drizzle } from 'drizzle-orm/d1';
import { drizzle as drizzleBS3 } from 'drizzle-orm/better-sqlite3';
import { env } from 'hono/adapter';
import { type InferMiddlewareOutput, jstack } from 'jstack';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
interface Env {
  Bindings: { DB: D1Database; CORS_ORIGIN: string };
}

export const j = jstack.init<Env>();

/**
 * Type-safely injects database into all procedures
 * @see https://jstack.app/docs/backend/middleware
 *
 * For deployment to Cloudflare Workers
 * @see https://developers.cloudflare.com/workers/tutorials/postgres/
 */
const databaseMiddleware = j.middleware(async ({ c, ctx, next }) => {
  const { DB } = env(c);

  const db = process.env.LOCAL_DB_PATH
    ? drizzleBS3(process.env.LOCAL_DB_PATH)
    : drizzle(DB);

  return await next({ db });
});
type DatabaseMiddlewareOutput = InferMiddlewareOutput<
  typeof databaseMiddleware
>;

const authMiddleware = j.middleware(async ({ c, ctx, next }) => {
  const { db } = ctx as DatabaseMiddlewareOutput;

  const auth = betterAuth({
    database: drizzleAdapter(db, {
      provider: 'sqlite',
    }),
  });

  await next({ auth });
});
type AuthMiddlewareOutput = InferMiddlewareOutput<typeof authMiddleware>;

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure
  .use(databaseMiddleware)
  .use(authMiddleware);
