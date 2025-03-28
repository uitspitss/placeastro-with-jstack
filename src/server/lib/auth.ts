import { betterAuth, type BetterAuthOptions } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@/server/db/auth-schema';
import type { Context } from 'hono';

const baseConfig = {
  emailAndPassword: {
    enabled: true,
  },
} satisfies BetterAuthOptions;

export const createAuth = (c: Context) => {
  const db = drizzle(c.env.DB);

  const auth = betterAuth({
    ...baseConfig,
    trustedOrigins: [c.env.CORS_ORIGIN],
    database: drizzleAdapter(db, {
      provider: 'sqlite',
      usePlural: true,
      schema,
    }),
  });

  return auth;
};
export type Auth = ReturnType<typeof createAuth>;
