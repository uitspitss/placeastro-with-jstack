import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ORPCError } from '@orpc/server';
import { placeImages } from '@placeastro/database';
import { createPlaceImageSchema, getUploadUrlSchema } from '@placeastro/shared';
import { z } from 'zod';
import { getS3Client } from '../lib/s3';
import { privateProcedure, publicProcedure } from '../orpc';
import {
  getPlaceImageByKey,
  listPlaceImages,
} from '../services/place-image-service';

export const placeImageRouter = {
  health: publicProcedure.handler(async () => 'OK' as const),

  list: publicProcedure.handler(async ({ context }) => {
    return listPlaceImages(context.db);
  }),

  getByKey: publicProcedure
    .input(z.object({ key: z.string() }))
    .handler(async ({ context, input }) => {
      const image = await getPlaceImageByKey(context.db, input.key);
      if (!image) {
        throw new ORPCError('NOT_FOUND', { message: 'Image not found' });
      }
      return image;
    }),

  create: privateProcedure
    .input(createPlaceImageSchema.merge(z.object({ url: z.string().url() })))
    .handler(async ({ context, input }) => {
      return context.db.insert(placeImages).values({
        id: crypto.randomUUID(),
        ...input,
      });
    }),

  getUploadUrl: privateProcedure
    .input(getUploadUrlSchema)
    .handler(async ({ context, input }) => {
      const { IMGIX_HOSTNAME, R2_BUCKET } = context.env;
      const s3 = getS3Client();
      const uploadUrl = await getSignedUrl(
        s3,
        new PutObjectCommand({ Bucket: R2_BUCKET, Key: input.key }),
        { expiresIn: 60 },
      );
      const imgixUrl = `https://${IMGIX_HOSTNAME}/${input.key}`;
      return { uploadUrl, imgixUrl };
    }),
};
