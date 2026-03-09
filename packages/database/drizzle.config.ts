import type { Config } from 'drizzle-kit';
import 'dotenv/config';

const baseConfig = {
  dialect: 'sqlite',
  schema: ['./src/schema.ts', './src/auth-schema.ts'],
} satisfies Config;

const prodConfig = {
  ...baseConfig,
  out: './drizzle',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID as string,
    token: process.env.CLOUDFLARE_D1_TOKEN as string,
  },
} satisfies Config;
const localConfig = {
  ...baseConfig,
  dbCredentials: {
    url: process.env.LOCAL_DB_PATH as string,
  },
} satisfies Config;

export default process.env.NODE_ENV === 'production' ? prodConfig : localConfig;
