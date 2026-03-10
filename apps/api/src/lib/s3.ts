import { S3Client } from '@aws-sdk/client-s3';
import { getContext } from 'hono/context-storage';
import type { HonoEnv } from '../orpc';

export const getS3Client = () => {
  const c = getContext<HonoEnv>();

  return new S3Client({
    region: 'auto',
    endpoint: c.env.R2_ENDPOINT,
    credentials: {
      accessKeyId: c.env.R2_ACCESS_KEY_ID,
      secretAccessKey: c.env.R2_SECRET_ACCESS_KEY,
    },
  });
};
