import { ORPCError } from '@orpc/server';
import type { PlaceImageError } from '@placeastro/shared';
import { err, ok } from 'neverthrow';
import { describe, expect, it } from 'vitest';
import { unwrapOrThrow } from './result';

describe('unwrapOrThrow', () => {
  it('Ok の場合は値を返す', () => {
    const result = ok<string, PlaceImageError>('hello');
    expect(unwrapOrThrow(result)).toBe('hello');
  });

  it('NOT_FOUND エラーは ORPCError NOT_FOUND を throw', () => {
    const result = err<string, PlaceImageError>({
      type: 'NOT_FOUND',
      message: 'Image not found',
    });
    expect(() => unwrapOrThrow(result)).toThrow(ORPCError);
    try {
      unwrapOrThrow(result);
    } catch (e) {
      expect(e).toBeInstanceOf(ORPCError);
      expect((e as ORPCError<string, unknown>).code).toBe('NOT_FOUND');
    }
  });

  it('INVALID_KEY エラーは ORPCError BAD_REQUEST を throw', () => {
    const result = err<string, PlaceImageError>({
      type: 'INVALID_KEY',
      message: 'Bad key',
    });
    expect(() => unwrapOrThrow(result)).toThrow(ORPCError);
    try {
      unwrapOrThrow(result);
    } catch (e) {
      expect((e as ORPCError<string, unknown>).code).toBe('BAD_REQUEST');
    }
  });

  it('DB_ERROR エラーは ORPCError INTERNAL_SERVER_ERROR を throw', () => {
    const result = err<string, PlaceImageError>({
      type: 'DB_ERROR',
      message: 'DB failed',
    });
    expect(() => unwrapOrThrow(result)).toThrow(ORPCError);
    try {
      unwrapOrThrow(result);
    } catch (e) {
      expect((e as ORPCError<string, unknown>).code).toBe(
        'INTERNAL_SERVER_ERROR',
      );
    }
  });

  it('S3_ERROR エラーは ORPCError INTERNAL_SERVER_ERROR を throw', () => {
    const result = err<string, PlaceImageError>({
      type: 'S3_ERROR',
      message: 'S3 failed',
    });
    expect(() => unwrapOrThrow(result)).toThrow(ORPCError);
    try {
      unwrapOrThrow(result);
    } catch (e) {
      expect((e as ORPCError<string, unknown>).code).toBe(
        'INTERNAL_SERVER_ERROR',
      );
    }
  });
});
