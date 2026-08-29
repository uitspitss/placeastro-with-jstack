import * as schema from '@placeastro/database/auth-schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/d1';
import { getContext } from 'hono/context-storage';
import type { HonoEnv } from '../orpc';

export const createAuth = () => {
  const c = getContext<HonoEnv>();
  const db = drizzle(c.env.DB);

  const auth = betterAuth({
    emailAndPassword: {
      enabled: true,
      // 本番は新規ユーザーを受け付けない。/sign-up 画面を redirect で塞いでも
      // POST /api/auth/sign-up/email は直接叩けるので、API 側で閉じる。
      // 値が無ければ閉じる（fail-closed）。開けるのは wrangler.jsonc の
      // 既定 vars（ローカル開発と E2E）だけ
      disableSignUp: c.env.ALLOW_SIGN_UP !== 'true',
    },
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
