import { z } from 'zod';

export const createPlaceImageSchema = z.object({
  id: z.string(),
  catalogueNumber: z.string(),
  url: z.string().url(),
  uploadedBy: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const getUploadUrlSchema = z.object({
  fileName: z.string(),
  fileType: z.string(),
  catalogueNumber: z.string(),
});