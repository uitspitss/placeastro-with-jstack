import { z } from 'zod';

export const schema = z.object({
  catalogue: z.string().min(1),
  catalogueNumber: z.string().min(1),
  credits: z.string().min(1),
  sourceUrl: z.string().url(),
  file: z.any(),
  // file: z
  //   .instanceof(FileList)
  //   .refine((files) => files.length > 0, 'The file is required.')
  //   .transform<File>((files) => files.item(0) as File),
  // .preprocess(
  //   (value) => (Array.isArray(value) ? value : [value]),
  //   z.array(z.instanceof(File)),
  // )
  // .refine((files) => files.length > 0, 'The file is required.')
  // .transform<File>((files) => files[0] as File),
});

export type SchemaType = z.infer<typeof schema>;
