import { placeImages } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import { z } from 'zod';
import { j, publicProcedure } from '../jstack';

export const placeImageRouter = j.router({
  list: publicProcedure.query(async ({ c, ctx }) => {
    const { db } = ctx;

    const images = await db
      .select()
      .from(placeImages)
      .orderBy(desc(placeImages.createdAt));

    return c.superjson(images ?? null);
  }),

  create: publicProcedure
    .input(
      z.object({
        url: z.string().min(1),
        credits: z.string().min(1),
        sourceUrl: z.string().min(1),
        catalogue: z.union([z.literal('M'), z.literal('NGC')]),
        catalogueNumber: z.string().min(1),
        creatorId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, c, input }) => {
      const { db } = ctx;

      const placeImage = await db.insert(placeImages).values({
        id: crypto.randomUUID(),
        ...input,
      });

      return c.superjson(placeImage);
    }),
});
