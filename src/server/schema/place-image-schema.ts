import { z } from 'zod';

export const createPlaceImageSchema = z.object({
  catalogue: z.string().min(1),
  catalogueNumber: z.string().min(1),
  credits: z.string().min(1),
  sourceUrl: z.string().url(),
  // file: z
  //   .instanceof(File)
  //   .refine((file) => file.size > 0, 'The file is required.'),
  file: z.any(),
});

export type CreatePlaceImageSchemaType = z.infer<typeof createPlaceImageSchema>;

export const getUploadUrlSchema = z.object({
  key: z.string().min(1),
});

export type GetUploadUrlSchemaType = z.infer<typeof getUploadUrlSchema>;
