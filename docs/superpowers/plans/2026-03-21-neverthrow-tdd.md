# neverthrow パターン導入 + TDD 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** API サービス層に neverthrow Result パターンを導入し、try-catch/null チェックを排除。web, api ともに TDD で実装する。

**Architecture:** サービス層が `Result<T, PlaceImageError>` を返し、ルーター層 (oRPC) は `unwrapOrThrow()` で ORPCError に変換、HTTP ルート (Hono) は `.isErr()` ガードで直接レスポンスに変換する。エラー型は Zod スキーマで `packages/shared` に定義し、web 側からも参照可能にする。

**Tech Stack:** neverthrow v8.2.0, Zod, oRPC, Hono, Drizzle ORM, Vitest

---

## ファイル構成

### 新規作成
| ファイル | 責務 |
|---|---|
| `packages/shared/src/errors.ts` | PlaceImageError の Zod スキーマと型定義 |
| `apps/api/src/lib/result.ts` | `unwrapOrThrow` 変換ユーティリティ |
| `apps/api/src/lib/result.test.ts` | result ユーティリティのテスト |
| `apps/api/src/services/place-image-service.test.ts` | サービス層の単体テスト |

### 変更
| ファイル | 変更内容 |
|---|---|
| `packages/shared/src/index.ts` | errors.ts の re-export 追加 |
| `apps/api/src/services/place-image-service.ts` | Result 型返却 + create/getUploadUrl 移動 |
| `apps/api/src/routers/place-image-router.ts` | unwrapOrThrow 使用、create/getUploadUrl はサービス呼び出し |
| `apps/api/src/routes/image-routes.ts` | Result の .isErr() ガードに変更 |

### 削除
| ファイル | 理由 |
|---|---|
| `apps/api/src/schema/place-image-schema.ts` | `@placeastro/shared` と重複、未使用 |

---

## Task 1: エラー型の Zod スキーマ定義

**Files:**
- Create: `packages/shared/src/errors.ts`
- Modify: `packages/shared/src/index.ts`

- [ ] **Step 1: エラー型の Zod スキーマを作成**

```typescript
// packages/shared/src/errors.ts
import { z } from 'zod';

export const placeImageErrorSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('NOT_FOUND'), message: z.string() }),
  z.object({ type: z.literal('INVALID_KEY'), message: z.string() }),
  z.object({ type: z.literal('DB_ERROR'), message: z.string() }),
  z.object({ type: z.literal('S3_ERROR'), message: z.string() }),
]);

export type PlaceImageError = z.infer<typeof placeImageErrorSchema>;
```

- [ ] **Step 2: shared の index.ts に re-export を追加**

```typescript
// packages/shared/src/index.ts
export * from './place-image-schema';
export * from './errors';
```

- [ ] **Step 3: 型チェック**

Run: `nr typecheck`
Expected: PASS

- [ ] **Step 4: コミット**

```bash
git add packages/shared/src/errors.ts packages/shared/src/index.ts
git commit -m "feat: add PlaceImageError Zod schema to shared package"
```

---

## Task 2: unwrapOrThrow 変換ユーティリティ (TDD)

**Files:**
- Create: `apps/api/src/lib/result.test.ts`
- Create: `apps/api/src/lib/result.ts`

- [ ] **Step 1: テストを書く**

```typescript
// apps/api/src/lib/result.test.ts
import { ORPCError } from '@orpc/server';
import { err, ok } from 'neverthrow';
import { describe, expect, it } from 'vitest';
import type { PlaceImageError } from '@placeastro/shared';
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
      expect((e as ORPCError).code).toBe('NOT_FOUND');
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
      expect((e as ORPCError).code).toBe('BAD_REQUEST');
    }
  });

  it('DB_ERROR エラーは ORPCError INTERNAL_SERVER_ERROR を throw', () => {
    const result = err<string, PlaceImageError>({
      type: 'DB_ERROR',
      message: 'DB failed',
    });
    try {
      unwrapOrThrow(result);
    } catch (e) {
      expect((e as ORPCError).code).toBe('INTERNAL_SERVER_ERROR');
    }
  });

  it('S3_ERROR エラーは ORPCError INTERNAL_SERVER_ERROR を throw', () => {
    const result = err<string, PlaceImageError>({
      type: 'S3_ERROR',
      message: 'S3 failed',
    });
    try {
      unwrapOrThrow(result);
    } catch (e) {
      expect((e as ORPCError).code).toBe('INTERNAL_SERVER_ERROR');
    }
  });
});
```

- [ ] **Step 2: テスト失敗を確認**

Run: `cd apps/api && npx vitest run src/lib/result.test.ts`
Expected: FAIL — `unwrapOrThrow` が存在しない

- [ ] **Step 3: 実装**

`ORPCError` のコンストラクタ第一引数は `ORPCErrorCode` 型のリテラル。`orpcCodeMap` の value 型もリテラル型で定義する。

```typescript
// apps/api/src/lib/result.ts
import { ORPCError, type ORPCErrorCode } from '@orpc/server';
import type { Result } from 'neverthrow';
import type { PlaceImageError } from '@placeastro/shared';

const orpcCodeMap: Record<PlaceImageError['type'], ORPCErrorCode> = {
  NOT_FOUND: 'NOT_FOUND',
  INVALID_KEY: 'BAD_REQUEST',
  DB_ERROR: 'INTERNAL_SERVER_ERROR',
  S3_ERROR: 'INTERNAL_SERVER_ERROR',
};

export function unwrapOrThrow<T>(result: Result<T, PlaceImageError>): T {
  if (result.isOk()) return result.value;
  const code = orpcCodeMap[result.error.type];
  throw new ORPCError(code, { message: result.error.message });
}
```

> **注意:** `ORPCErrorCode` 型が `@orpc/server` からエクスポートされていない場合は、`'NOT_FOUND' | 'BAD_REQUEST' | 'INTERNAL_SERVER_ERROR'` のリテラルユニオン型を直接使うこと。

- [ ] **Step 4: テスト通過を確認**

Run: `cd apps/api && npx vitest run src/lib/result.test.ts`
Expected: PASS — 全 5 テスト通過

- [ ] **Step 5: コミット**

```bash
git add apps/api/src/lib/result.ts apps/api/src/lib/result.test.ts
git commit -m "feat: add unwrapOrThrow utility with tests"
```

---

## Task 3: サービス層の Result 化 (TDD)

**Files:**
- Create: `apps/api/src/services/place-image-service.test.ts`
- Modify: `apps/api/src/services/place-image-service.ts`

> **重要:** テストファイルは段階的追記ではなく、最終形を一度に作成する。`vi.mock` はファイル先頭に配置（Vitest がホイストするため）。

- [ ] **Step 1: テストファイルを作成（全テストケース含む最終形）**

```typescript
// apps/api/src/services/place-image-service.test.ts
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
      expect(result.value.imgixUrl).toBe(
        'https://img.example.com/M/test-uuid',
      );
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
```

- [ ] **Step 2: テスト失敗を確認**

Run: `cd apps/api && npx vitest run src/services/place-image-service.test.ts`
Expected: FAIL — `getPlaceImageByKey` が `Result` ではなく `Promise<T | null>` を返す、`createPlaceImage` / `getUploadUrl` が存在しない

- [ ] **Step 3: サービスファイルを完全に書き換え（全関数の最終形）**

```typescript
// apps/api/src/services/place-image-service.ts
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
```

- [ ] **Step 4: テスト全体通過を確認**

Run: `cd apps/api && npx vitest run src/services/place-image-service.test.ts`
Expected: PASS — 全 10 テスト通過

- [ ] **Step 5: コミット**

```bash
git add apps/api/src/services/place-image-service.ts apps/api/src/services/place-image-service.test.ts
git commit -m "feat: refactor service layer to neverthrow Result pattern with TDD"
```

---

## Task 4: ルーター層を unwrapOrThrow に変更

**Files:**
- Modify: `apps/api/src/routers/place-image-router.ts`

- [ ] **Step 1: ルーターを書き換え**

S3/presigner の直接 import を削除し、サービス関数に委譲する。`unwrapOrThrow` で Result を ORPCError に変換。

```typescript
// apps/api/src/routers/place-image-router.ts
import { createPlaceImageSchema, getUploadUrlSchema } from '@placeastro/shared';
import { z } from 'zod';
import { unwrapOrThrow } from '../lib/result';
import { getS3Client } from '../lib/s3';
import { privateProcedure, publicProcedure } from '../orpc';
import {
  createPlaceImage,
  getPlaceImageByKey,
  getUploadUrl,
  listPlaceImages,
} from '../services/place-image-service';

export const placeImageRouter = {
  health: publicProcedure.handler(async () => 'OK' as const),

  list: publicProcedure.handler(async ({ context }) => {
    return listPlaceImages(context.db);
  }),

  getByKey: publicProcedure
    .input(z.object({ key: z.string() }))
    .handler(async ({ context, input }) => {
      return unwrapOrThrow(await getPlaceImageByKey(context.db, input.key));
    }),

  create: privateProcedure
    .input(createPlaceImageSchema.merge(z.object({ url: z.string().url() })))
    .handler(async ({ context, input }) => {
      return unwrapOrThrow(await createPlaceImage(context.db, input));
    }),

  getUploadUrl: privateProcedure
    .input(getUploadUrlSchema)
    .handler(async ({ context, input }) => {
      const { IMGIX_HOSTNAME, R2_BUCKET } = context.env;
      const s3 = getS3Client();
      return unwrapOrThrow(
        await getUploadUrl(s3, R2_BUCKET, IMGIX_HOSTNAME, input),
      );
    }),
};
```

- [ ] **Step 2: 型チェック**

Run: `nr typecheck`
Expected: PASS

- [ ] **Step 3: テスト**

Run: `nr test`
Expected: PASS

- [ ] **Step 4: コミット**

```bash
git add apps/api/src/routers/place-image-router.ts
git commit -m "refactor: router layer uses unwrapOrThrow for Result conversion"
```

---

## Task 5: HTTP ルート層を Result パターンに変更

**Files:**
- Modify: `apps/api/src/routes/image-routes.ts`

- [ ] **Step 1: image-routes.ts を書き換え**

`getPlaceImageByKey` の呼び出し箇所を `.isErr()` ガードに変更。ルート内の catalogue バリデーション (`if (upper !== 'M' && upper !== 'NGC')`) は `getPlaceImageByKey` の `INVALID_KEY` エラーに委ねて削除する。

```typescript
// apps/api/src/routes/image-routes.ts
import { drizzle } from 'drizzle-orm/d1';
import type { Context } from 'hono';
import { Hono } from 'hono';
import { trackPageview } from '../lib/umami';
import type { HonoEnv } from '../orpc';
import {
  getPlaceImageByKey,
  listPlaceImages,
} from '../services/place-image-service';

function buildImgixParams(
  w: string,
  h: string,
  credits: string,
): URLSearchParams {
  const p = new URLSearchParams();
  p.append('txt64', btoa(`credit: ${credits}`));
  p.append('txt-color', 'FFFFFF');
  p.append('txt-shad', '5');
  p.append('txt-fit', 'max');
  p.append('fit', 'fillmax');
  p.append('fill', 'blur');
  p.append('w', w);
  p.append('h', h);
  return p;
}

export const imageRoutes = new Hono<HonoEnv>();

// biome-ignore lint/suspicious/noExplicitAny: Hono Context generic variance
function sendTracking(c: Context<HonoEnv, any>, url: string) {
  c.executionCtx.waitUntil(
    trackPageview({
      host: c.env.UMAMI_HOST,
      websiteId: c.env.UMAMI_WEBSITE_ID,
      url,
      hostname: new URL(c.req.raw.url).hostname,
      userAgent: c.req.raw.headers.get('User-Agent') ?? undefined,
      language:
        c.req.raw.headers.get('Accept-Language')?.split(',')[0] ?? undefined,
    }),
  );
}

// GET /random
imageRoutes.get('/random', async (c) => {
  sendTracking(c, '/random');
  const w = c.req.query('w') ?? '400';
  const h = c.req.query('h') ?? '400';

  const db = drizzle(c.env.DB);
  const images = await listPlaceImages(db);
  if (!images.length) {
    return c.text('Not found images', 404);
  }

  const placeImage = images[Math.floor(Math.random() * images.length)];
  if (!placeImage) {
    return c.text('Not found image', 404);
  }

  const imgixParams = buildImgixParams(w, h, placeImage.credits);
  const resImage = await fetch(`${placeImage.url}?${imgixParams.toString()}`);
  const contentType = resImage.headers.get('Content-Type');
  if (!contentType) {
    return c.text('Not found content type', 404);
  }

  return new Response(await resImage.arrayBuffer(), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });
});

// GET /:catalogue/:catalogueNumber/info
imageRoutes.get('/:catalogue/:catalogueNumber/info', async (c) => {
  const { catalogue, catalogueNumber } = c.req.param();
  sendTracking(c, `/${catalogue}/${catalogueNumber}/info`);
  const upper = catalogue.toUpperCase();

  const db = drizzle(c.env.DB);
  const result = await getPlaceImageByKey(db, `${upper}/${catalogueNumber}`);
  if (result.isErr()) {
    const status = result.error.type === 'INVALID_KEY' ? 400 : 404;
    return c.text(result.error.message, status);
  }
  const placeImage = result.value;

  return c.json(
    {
      credit: placeImage.credits,
      sourceUrl: placeImage.sourceUrl,
      name: `${placeImage.catalogue}${placeImage.catalogueNumber}`,
    },
    200,
    { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30' },
  );
});

// GET /:catalogue/:catalogueNumber — proxy image from imgix
imageRoutes.get('/:catalogue/:catalogueNumber', async (c) => {
  const { catalogue, catalogueNumber } = c.req.param();
  sendTracking(c, `/${catalogue}/${catalogueNumber}`);
  const w = c.req.query('w') ?? '400';
  const h = c.req.query('h') ?? '400';

  const upper = catalogue.toUpperCase();

  const db = drizzle(c.env.DB);
  const result = await getPlaceImageByKey(db, `${upper}/${catalogueNumber}`);
  if (result.isErr()) {
    const status = result.error.type === 'INVALID_KEY' ? 400 : 404;
    return c.text(result.error.message, status);
  }
  const placeImage = result.value;

  const imgixParams = buildImgixParams(w, h, placeImage.credits);
  const resImage = await fetch(`${placeImage.url}?${imgixParams.toString()}`);
  const contentType = resImage.headers.get('Content-Type');
  if (!contentType) {
    return c.text('Not found content type', 404);
  }

  return new Response(await resImage.arrayBuffer(), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=30',
    },
  });
});
```

- [ ] **Step 2: 型チェック**

Run: `nr typecheck`
Expected: PASS

- [ ] **Step 3: コミット**

```bash
git add apps/api/src/routes/image-routes.ts
git commit -m "refactor: HTTP routes use Result.isErr() guard pattern"
```

---

## Task 6: クリーンアップ

**Files:**
- Delete: `apps/api/src/schema/place-image-schema.ts`

- [ ] **Step 1: 未使用スキーマファイルを削除**

```bash
rm apps/api/src/schema/place-image-schema.ts
rmdir apps/api/src/schema 2>/dev/null || true
```

- [ ] **Step 2: lint + 型チェック**

Run: `nr lint && nr typecheck`
Expected: PASS

- [ ] **Step 3: テスト全体**

Run: `nr test`
Expected: PASS

- [ ] **Step 4: コミット**

```bash
git add -A
git commit -m "chore: delete unused local schema (duplicated in @placeastro/shared)"
```
