import { placeImages } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import { env } from 'hono/adapter';
import { j, privateProcedure, publicProcedure } from '../jstack';
import { schema } from '../schema/place-image-schema';

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

  create: privateProcedure.input(schema).mutation(async ({ ctx, c, input }) => {
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

    const key = `${input.catalogue}/${crypto.randomUUID()}`;
    const blob = new Blob([input.file], { type: input.file.type });
    await R2.put(key, blob);
    const url = `https://${IMGIX_HOSTNAME}/${key}`;

    const placeImage = await db.insert(placeImages).values({
      id: crypto.randomUUID(),
      ...input,
      catalogue: input.catalogue,
      url,
    });

    return c.superjson(placeImage);
  }),
});
