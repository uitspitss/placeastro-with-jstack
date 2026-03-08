import { z } from 'zod';

export const createPlaceImageSchema = z.object({
  catalogue: z.enum(['M', 'NGC']),
  catalogueNumber: z.string().min(1),
  credits: z.string().min(1),
  sourceUrl: z.string().url(),
});

export type CreatePlaceImageSchemaType = z.infer<typeof createPlaceImageSchema>;

export const getUploadUrlSchema = z.object({
  key: z.string().min(1),
});

export type GetUploadUrlSchemaType = z.infer<typeof getUploadUrlSchema>;
