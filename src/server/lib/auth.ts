import * as schema from '@/server/db/auth-schema';
import { type BetterAuthOptions, betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/d1';
import type { ServerContext } from '../jstack';

const baseConfig = {
  emailAndPassword: {
    enabled: true,
  },
} satisfies BetterAuthOptions;

export const createAuth = (c: ServerContext) => {
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
