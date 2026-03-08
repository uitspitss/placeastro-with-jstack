import { placeImages } from '@placeastro/database';
import { and, desc, eq } from 'drizzle-orm';
import type { DrizzleD1Database } from 'drizzle-orm/d1';

export async function listPlaceImages(db: DrizzleD1Database) {
  return db.select().from(placeImages).orderBy(desc(placeImages.createdAt));
}

export async function getPlaceImageByKey(db: DrizzleD1Database, key: string) {
  const [catalogue, catalogueNumber] = key.split('/');
  if (!catalogue || !catalogueNumber) return null;
  if (catalogue !== 'M' && catalogue !== 'NGC') return null;

  const results = await db
    .select()
    .from(placeImages)
    .where(
      and(
        eq(placeImages.catalogue, catalogue as 'M' | 'NGC'),
        eq(placeImages.catalogueNumber, catalogueNumber),
      ),
    );
  return results[0] ?? null;
}
