import { createPlaceImageSchema, getUploadUrlSchema } from '@placeastro/shared';
import { z } from 'zod';
import { unwrapOrThrow } from '../lib/result';
import { getS3Client } from '../lib/s3';
import { privateProcedure, publicProcedure } from '../orpc';
import {
  createPlaceImage,
  getPlaceImageByKey,
  getUploadUrl,
  listPlaceImages,
} from '../services/place-image-service';

export const placeImageRouter = {
  health: publicProcedure.handler(async () => 'OK' as const),

  list: publicProcedure.handler(async ({ context }) => {
    return unwrapOrThrow(await listPlaceImages(context.db));
  }),

  getByKey: publicProcedure
    .input(z.object({ key: z.string() }))
    .handler(async ({ context, input }) => {
      return unwrapOrThrow(await getPlaceImageByKey(context.db, input.key));
    }),

  create: privateProcedure
    .input(createPlaceImageSchema.merge(z.object({ url: z.string().url() })))
    .handler(async ({ context, input }) => {
      return unwrapOrThrow(await createPlaceImage(context.db, input));
    }),

  getUploadUrl: privateProcedure
    .input(getUploadUrlSchema)
    .handler(async ({ context, input }) => {
      const { IMGIX_HOSTNAME, R2_BUCKET } = context.env;
      const s3 = getS3Client();
      return unwrapOrThrow(
        await getUploadUrl(s3, R2_BUCKET, IMGIX_HOSTNAME, input),
      );
    }),
};
