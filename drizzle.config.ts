import type { Config } from 'drizzle-kit';
import 'dotenv/config';

const prodConfig = {
  out: './drizzle',
  schema: './src/server/db/schema.ts',
  driver: 'd1-http',
  dialect: 'sqlite',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID as string,
    token: process.env.CLOUDFLARE_D1_TOKEN as string,
  },
} satisfies Config;
const localConfig = {
  schema: './src/server/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.LOCAL_DB_PATH as string,
  },
} satisfies Config;

export default process.env.NODE_ENV === 'production' ? prodConfig : localConfig;
