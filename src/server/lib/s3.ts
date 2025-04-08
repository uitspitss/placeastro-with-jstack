import { S3Client } from '@aws-sdk/client-s3';
import type { ServerContext } from '../jstack';

export const getS3Client = (c: ServerContext) => {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${c.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: c.env.R2_ACCESS_KEY_ID,
      secretAccessKey: c.env.R2_SECRET_ACCESS_KEY,
    },
  });
};
