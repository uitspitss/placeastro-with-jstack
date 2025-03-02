import { betterAuth, type BetterAuthOptions } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/d1';
import { drizzle as drizzleBS3 } from 'drizzle-orm/better-sqlite3';
import type { Context } from 'hono';
import type { Env } from '@/types/worker-configuration';

const baseConfig = {
  emailAndPassword: {
    enabled: true,
  },
} satisfies BetterAuthOptions;

// ローカル開発環境のみで使用することを想定
export const auth = betterAuth({
  ...baseConfig,
  database: drizzleAdapter(drizzleBS3(process.env.LOCAL_DB_PATH as string), {
    provider: 'sqlite',
    usePlural: true,
  }),
});

export const getAuth = (c: Context<{ Bindings: Env }>) =>
  betterAuth({
    ...baseConfig,
    database: drizzleAdapter(drizzle(c.env.DB), {
      provider: 'sqlite',
      usePlural: true,
    }),
  });
