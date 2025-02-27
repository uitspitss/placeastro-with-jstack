import { drizzle } from 'drizzle-orm/d1';
import { drizzle as drizzleBS3 } from 'drizzle-orm/better-sqlite3';
import { env } from 'hono/adapter';
import { jstack } from 'jstack';
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
const databaseMiddleware = j.middleware(async ({ c, next }) => {
  const { DB } = env(c);

  if (process.env.LOCAL_DB_PATH) {
    const db = drizzleBS3(process.env.LOCAL_DB_PATH);
    return await next({ db });
  }

  const db = drizzle(DB);
  return await next({ db });
});

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure.use(databaseMiddleware);
