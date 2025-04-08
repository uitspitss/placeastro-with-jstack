import { placeImages } from '@/server/db/schema';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { desc } from 'drizzle-orm';
import { env } from 'hono/adapter';
import { j, privateProcedure, publicProcedure } from '../jstack';
import { getS3Client } from '../lib/s3';
import {
  createPlaceImageSchema,
  getUploadUrlSchema,
} from '../schema/place-image-schema';

export const placeImageRouter = j.router({
  health: publicProcedure.query(async ({ c }) => {
    return c.superjson('OK');
  }),

  list: publicProcedure.query(async ({ c, ctx }) => {
    const { db } = ctx;

    const images = await db
      .select()
      .from(placeImages)
      .orderBy(desc(placeImages.createdAt));

    return c.superjson(images);
  }),

  create: privateProcedure
    .input(createPlaceImageSchema)
    .post(async ({ ctx, c, input }) => {
      const { db } = ctx;
      const { R2, IMGIX_HOSTNAME } = env(c);

      if (input.catalogue !== 'M' && input.catalogue !== 'NGC') {
        return c.superjson(
          {
            error: 'Invalid catalogue type.',
          },
          400,
        );
      }

      const id = crypto.randomUUID();
      const key = `${input.catalogue}/${id}`;
      // const blob = new Blob([input.file], { type: input.file.type });
      // await R2.put(key, blob);
      const url = `https://${IMGIX_HOSTNAME}/${key}`;

      const placeImage = await db.insert(placeImages).values({
        id,
        ...input,
        catalogue: input.catalogue,
        url,
      });

      return c.superjson(placeImage);
    }),

  getUploadUrl: privateProcedure
    .input(getUploadUrlSchema)
    .post(async ({ ctx, c, input }) => {
      const { IMGIX_HOSTNAME, R2_BUCKET, CLOUDFLARE_ACCOUNT_ID } = env(c);
      console.log('🚧 | .post | CLOUDFLARE_ACCOUNT_ID:', CLOUDFLARE_ACCOUNT_ID);

      const s3 = getS3Client(c);
      const url = await getSignedUrl(
        s3,
        new PutObjectCommand({ Bucket: R2_BUCKET, Key: input.key }),
        {
          expiresIn: 60, // 1 min
        },
      );

      const imgixUrl = `https://${IMGIX_HOSTNAME}/${input.key}`;

      return c.superjson({ url, imgixUrl });
    }),
});
