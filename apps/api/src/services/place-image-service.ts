import type { S3Client } from '@aws-sdk/client-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { placeImages } from '@placeastro/database';
import type {
  CreatePlaceImageSchemaType,
  PlaceImageError,
} from '@placeastro/shared';
import { and, desc, eq } from 'drizzle-orm';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { type Result, ResultAsync, err, ok } from 'neverthrow';

export async function listPlaceImages(db: DrizzleD1Database) {
  return db.select().from(placeImages).orderBy(desc(placeImages.createdAt));
}

export async function getPlaceImageByKey(
  db: DrizzleD1Database,
  key: string,
): Promise<Result<typeof placeImages.$inferSelect, PlaceImageError>> {
  const [catalogue, catalogueNumber] = key.split('/');
  if (!catalogue || !catalogueNumber) {
    return err({ type: 'INVALID_KEY', message: `Invalid key format: ${key}` });
  }
  if (catalogue !== 'M' && catalogue !== 'NGC') {
    return err({
      type: 'INVALID_KEY',
      message: `Unknown catalogue: ${catalogue}`,
    });
  }

  const results = await db
    .select()
    .from(placeImages)
    .where(
      and(
        eq(placeImages.catalogue, catalogue as 'M' | 'NGC'),
        eq(placeImages.catalogueNumber, catalogueNumber),
      ),
    );

  const image = results[0];
  if (!image) {
    return err({ type: 'NOT_FOUND', message: `Image not found: ${key}` });
  }
  return ok(image);
}

export function createPlaceImage(
  db: DrizzleD1Database,
  input: CreatePlaceImageSchemaType & { url: string },
): ResultAsync<void, PlaceImageError> {
  return ResultAsync.fromPromise(
    db
      .insert(placeImages)
      .values({ id: crypto.randomUUID(), ...input })
      .then(() => undefined),
    (e) => ({ type: 'DB_ERROR' as const, message: String(e) }),
  );
}

export function getUploadUrl(
  s3: S3Client,
  bucket: string,
  imgixHostname: string,
  input: { key: string },
): ResultAsync<{ uploadUrl: string; imgixUrl: string }, PlaceImageError> {
  return ResultAsync.fromPromise(
    getSignedUrl(s3, new PutObjectCommand({ Bucket: bucket, Key: input.key }), {
      expiresIn: 60,
    }).then((uploadUrl) => ({
      uploadUrl,
      imgixUrl: `https://${imgixHostname}/${input.key}`,
    })),
    (e) => ({ type: 'S3_ERROR' as const, message: String(e) }),
  );
}
