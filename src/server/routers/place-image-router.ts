import { placeImages } from '@/server/db/schema';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { and, desc, eq } from 'drizzle-orm';
import { env } from 'hono/adapter';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';
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

  getByKey: publicProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ c, ctx, input }) => {
      const { db } = ctx;

      const [catalogue, catalogueNumber] = input.key.split('/');
      if (!catalogue || !catalogueNumber) {
        throw new HTTPException(400, { message: 'Invalid key' });
      }

      if (catalogue !== 'M' && catalogue !== 'NGC') {
        throw new HTTPException(400, { message: 'Invalid catalogue' });
      }

      const images = await db
        .select()
        .from(placeImages)
        .where(
          and(
            eq(placeImages.catalogue, catalogue),
            eq(placeImages.catalogueNumber, catalogueNumber),
          ),
        );
      if (!images.length) {
        throw new HTTPException(404, { message: 'Image not found' });
      }

      return c.superjson(images[0]);
    }),

  create: privateProcedure
    .input(createPlaceImageSchema.merge(z.object({ url: z.string().url() })))
    .post(async ({ ctx, c, input }) => {
      const { db } = ctx;

      const placeImage = await db.insert(placeImages).values({
        id: crypto.randomUUID(),
        ...input,
        catalogue: input.catalogue,
      });

      return c.superjson(placeImage);
    }),

  getUploadUrl: privateProcedure
    .input(getUploadUrlSchema)
    .post(async ({ ctx, c, input }) => {
      const { IMGIX_HOSTNAME, R2_BUCKET } = env(c);

      const s3 = getS3Client(c);
      const uploadUrl = await getSignedUrl(
        s3,
        new PutObjectCommand({ Bucket: R2_BUCKET, Key: input.key }),
        {
          expiresIn: 60, // 1 min
        },
      );

      const imgixUrl = `https://${IMGIX_HOSTNAME}/${input.key}`;

      return c.superjson({ uploadUrl, imgixUrl });
    }),
});
