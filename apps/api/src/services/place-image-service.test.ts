import type { S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { describe, expect, it, vi } from 'vitest';
import {
  createPlaceImage,
  getPlaceImageByKey,
  getUploadUrl,
} from './place-image-service';

vi.mock('@aws-sdk/s3-request-presigner', () => ({
  getSignedUrl: vi.fn(),
}));

const mockedGetSignedUrl = vi.mocked(getSignedUrl);

function makeMockDb(rows: unknown[] = []) {
  return {
    select: vi.fn().mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockResolvedValue(rows),
        orderBy: vi.fn().mockResolvedValue(rows),
      }),
    }),
    insert: vi.fn().mockReturnValue({
      values: vi.fn().mockResolvedValue(undefined),
    }),
  } as unknown as DrizzleD1Database;
}

describe('getPlaceImageByKey', () => {
  it('スラッシュなしのキーは INVALID_KEY を返す', async () => {
    const result = await getPlaceImageByKey(makeMockDb(), 'M42');
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.type).toBe('INVALID_KEY');
    }
  });

  it('空の catalogue は INVALID_KEY を返す', async () => {
    const result = await getPlaceImageByKey(makeMockDb(), '/42');
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.type).toBe('INVALID_KEY');
    }
  });

  it('未知のカタログ (IC) は INVALID_KEY を返す', async () => {
    const result = await getPlaceImageByKey(makeMockDb(), 'IC/434');
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.type).toBe('INVALID_KEY');
    }
  });

  it('DB に存在しない場合は NOT_FOUND を返す', async () => {
    const result = await getPlaceImageByKey(makeMockDb([]), 'M/42');
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.type).toBe('NOT_FOUND');
    }
  });

  it('正常なキーでデータがある場合は Ok を返す', async () => {
    const row = {
      id: '1',
      catalogue: 'M',
      catalogueNumber: '42',
      url: 'https://example.com/img.jpg',
      credits: 'NASA',
      sourceUrl: 'https://nasa.gov',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
      deletedAt: null,
    };
    const result = await getPlaceImageByKey(makeMockDb([row]), 'M/42');
    expect(result.isOk()).toBe(true);
    if (result.isOk()) {
      expect(result.value).toEqual(row);
    }
  });

  it('NGC カタログも正常動作する', async () => {
    const row = {
      id: '2',
      catalogue: 'NGC',
      catalogueNumber: '1234',
      url: 'https://example.com/img2.jpg',
      credits: 'ESA',
      sourceUrl: 'https://esa.int',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
      deletedAt: null,
    };
    const result = await getPlaceImageByKey(makeMockDb([row]), 'NGC/1234');
    expect(result.isOk()).toBe(true);
  });
});

describe('createPlaceImage', () => {
  it('正常な入力で Ok を返す', async () => {
    const db = makeMockDb();
    const result = await createPlaceImage(db, {
      catalogue: 'M',
      catalogueNumber: '42',
      credits: 'NASA',
      sourceUrl: 'https://nasa.gov',
      url: 'https://example.com/img.jpg',
    });
    expect(result.isOk()).toBe(true);
  });

  it('DB エラー時は DB_ERROR を返す', async () => {
    const db = {
      insert: vi.fn().mockReturnValue({
        values: vi.fn().mockRejectedValue(new Error('constraint violation')),
      }),
    } as unknown as DrizzleD1Database;
    const result = await createPlaceImage(db, {
      catalogue: 'M',
      catalogueNumber: '42',
      credits: 'NASA',
      sourceUrl: 'https://nasa.gov',
      url: 'https://example.com/img.jpg',
    });
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.type).toBe('DB_ERROR');
    }
  });
});

describe('getUploadUrl', () => {
  const mockS3 = {} as S3Client;
  const bucket = 'test-bucket';
  const imgixHostname = 'img.example.com';

  it('正常時は uploadUrl と imgixUrl を返す', async () => {
    mockedGetSignedUrl.mockResolvedValue('https://signed-url.example.com');
    const result = await getUploadUrl(mockS3, bucket, imgixHostname, {
      key: 'M/test-uuid',
    });
    expect(result.isOk()).toBe(true);
    if (result.isOk()) {
      expect(result.value.uploadUrl).toBe('https://signed-url.example.com');
      expect(result.value.imgixUrl).toBe('https://img.example.com/M/test-uuid');
    }
  });

  it('S3 エラー時は S3_ERROR を返す', async () => {
    mockedGetSignedUrl.mockRejectedValue(new Error('S3 failure'));
    const result = await getUploadUrl(mockS3, bucket, imgixHostname, {
      key: 'M/test-uuid',
    });
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.type).toBe('S3_ERROR');
    }
  });
});
