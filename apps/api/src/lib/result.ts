import { ORPCError } from '@orpc/server';
import type { PlaceImageError } from '@placeastro/shared';
import type { Result } from 'neverthrow';

const orpcCodeMap = {
  NOT_FOUND: 'NOT_FOUND',
  INVALID_KEY: 'BAD_REQUEST',
  DB_ERROR: 'INTERNAL_SERVER_ERROR',
  S3_ERROR: 'INTERNAL_SERVER_ERROR',
} as const satisfies Record<PlaceImageError['type'], string>;

export function unwrapOrThrow<T>(result: Result<T, PlaceImageError>): T {
  if (result.isOk()) return result.value;
  const code = orpcCodeMap[result.error.type];
  throw new ORPCError(code, { message: result.error.message });
}
