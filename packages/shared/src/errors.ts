import { z } from 'zod';

export const placeImageErrorSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('NOT_FOUND'), message: z.string() }),
  z.object({ type: z.literal('INVALID_KEY'), message: z.string() }),
  z.object({ type: z.literal('DB_ERROR'), message: z.string() }),
  z.object({ type: z.literal('S3_ERROR'), message: z.string() }),
]);

export type PlaceImageError = z.infer<typeof placeImageErrorSchema>;
