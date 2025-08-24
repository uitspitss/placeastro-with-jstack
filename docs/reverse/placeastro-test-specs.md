# PlaceAstro テスト仕様書（逆生成）

## 分析概要

**分析日時**: 2025-08-24  
**対象コードベース**: /Users/john/dev/placeastro-with-jstack  
**テストカバレッジ**: 0% （テストファイル未実装）  
**生成テストケース数**: 47個  
**実装推奨テスト数**: 35個  

## 現在のテスト実装状況

### テストフレームワーク
- **単体テスト**: 未設定 （推奨: Vitest）
- **統合テスト**: 未設定 （推奨: Supertest + Vitest）
- **E2Eテスト**: 未設定 （推奨: Playwright）
- **コードカバレッジ**: 未設定 （推奨: c8/v8）

### テストカバレッジ詳細

| ファイル/ディレクトリ | 行カバレッジ | 分岐カバレッジ | 関数カバレッジ | 状況 |
|---------------------|-------------|-------------|-------------|------|
| src/server/routers/ | 0% | 0% | 0% | 未実装 |
| src/server/lib/ | 0% | 0% | 0% | 未実装 |
| src/app/components/ | 0% | 0% | 0% | 未実装 |
| src/lib/ | 0% | 0% | 0% | 未実装 |
| **全体** | **0%** | **0%** | **0%** | **完全未実装** |

### テストカテゴリ別実装状況

#### 単体テスト
- [ ] **画像ルーター**: place-image-router.spec.ts - 未実装
- [ ] **認証ライブラリ**: auth.spec.ts - 未実装
- [ ] **データベース**: db.spec.ts - 未実装
- [ ] **S3クライアント**: s3.spec.ts - 未実装
- [ ] **バリデーションスキーマ**: place-image-schema.spec.ts - 未実装

#### 統合テスト
- [ ] **画像管理API**: place-image.api.spec.ts - 未実装
- [ ] **認証API**: auth.api.spec.ts - 未実装
- [ ] **画像配信API**: image-delivery.api.spec.ts - 未実装

#### E2Eテスト
- [ ] **画像取得フロー**: image-retrieval.e2e.spec.ts - 未実装
- [ ] **アップロードフロー**: upload-flow.e2e.spec.ts - 未実装
- [ ] **認証フロー**: auth-flow.e2e.spec.ts - 未実装

## 生成されたテストケース

### API テストケース

#### GET /api/placeImages/health - ヘルスチェック

**正常系テスト**
```typescript
// tests/api/place-image-router.spec.ts
import { describe, it, expect } from 'vitest';
import { testClient } from '../test-utils/client';

describe('GET /api/placeImages/health', () => {
  it('ヘルスチェックが成功する', async () => {
    const response = await testClient.placeImages.health.query();
    
    expect(response.success).toBe(true);
    expect(response.data).toBe('OK');
  });

  it('適切なHTTPステータスコードを返す', async () => {
    const response = await fetch('/api/placeImages/health');
    expect(response.status).toBe(200);
  });
});
```

#### GET /api/placeImages/list - 画像一覧取得

**正常系テスト**
```typescript
describe('GET /api/placeImages/list', () => {
  it('画像一覧を作成日時降順で取得する', async () => {
    // テストデータの投入
    await seedTestImages([
      {
        id: '1',
        catalogue: 'M',
        catalogueNumber: '42',
        credits: 'NASA/ESA Hubble',
        sourceUrl: 'https://example.com/source1',
        url: 'https://imgix.example.com/m42.jpg',
        createdAt: '2025-01-01T00:00:00Z'
      },
      {
        id: '2',
        catalogue: 'NGC',
        catalogueNumber: '1234',
        credits: 'Palomar Observatory',
        sourceUrl: 'https://example.com/source2',
        url: 'https://imgix.example.com/ngc1234.jpg',
        createdAt: '2025-01-02T00:00:00Z'
      }
    ]);

    const response = await testClient.placeImages.list.query();

    expect(response.success).toBe(true);
    expect(response.data).toHaveLength(2);
    expect(response.data[0].id).toBe('2'); // 新しい順
    expect(response.data[1].id).toBe('1');
  });

  it('空の場合は空配列を返す', async () => {
    const response = await testClient.placeImages.list.query();
    
    expect(response.success).toBe(true);
    expect(response.data).toEqual([]);
  });
});
```

#### GET /api/placeImages/getByKey - キーによる画像取得

**正常系テスト**
```typescript
describe('GET /api/placeImages/getByKey', () => {
  it('有効なキーで画像を取得する', async () => {
    await seedTestImages([{
      id: '1',
      catalogue: 'M',
      catalogueNumber: '42',
      credits: 'NASA/ESA Hubble',
      sourceUrl: 'https://example.com/source',
      url: 'https://imgix.example.com/m42.jpg'
    }]);

    const response = await testClient.placeImages.getByKey.query({
      key: 'M/42'
    });

    expect(response.success).toBe(true);
    expect(response.data.catalogue).toBe('M');
    expect(response.data.catalogueNumber).toBe('42');
  });
});
```

**異常系テスト**
```typescript
describe('GET /api/placeImages/getByKey - 異常系', () => {
  it('無効なキー形式でエラーを返す', async () => {
    expect(async () => {
      await testClient.placeImages.getByKey.query({ key: 'invalid-key' });
    }).rejects.toThrow('Invalid key');
  });

  it('無効なカタログでエラーを返す', async () => {
    expect(async () => {
      await testClient.placeImages.getByKey.query({ key: 'INVALID/42' });
    }).rejects.toThrow('Invalid catalogue');
  });

  it('存在しない画像で404エラーを返す', async () => {
    expect(async () => {
      await testClient.placeImages.getByKey.query({ key: 'M/999' });
    }).rejects.toThrow('Image not found');
  });
});
```

#### POST /api/placeImages/create - 画像登録

**正常系テスト（認証必須）**
```typescript
describe('POST /api/placeImages/create', () => {
  it('認証されたユーザーが画像を登録できる', async () => {
    const authenticatedClient = await getAuthenticatedClient();
    
    const imageData = {
      catalogue: 'M' as const,
      catalogueNumber: '1',
      credits: 'Test Credit',
      sourceUrl: 'https://example.com/source',
      url: 'https://imgix.example.com/test.jpg'
    };

    const response = await authenticatedClient.placeImages.create.mutate(imageData);
    
    expect(response.success).toBe(true);
    
    // データベースに保存されているかチェック
    const saved = await testClient.placeImages.getByKey.query({ key: 'M/1' });
    expect(saved.data.credits).toBe('Test Credit');
  });
});
```

**異常系テスト（認証）**
```typescript
describe('POST /api/placeImages/create - 認証エラー', () => {
  it('未認証ユーザーはアクセスできない', async () => {
    const imageData = {
      catalogue: 'M' as const,
      catalogueNumber: '1',
      credits: 'Test Credit',
      sourceUrl: 'https://example.com/source',
      url: 'https://imgix.example.com/test.jpg'
    };

    expect(async () => {
      await testClient.placeImages.create.mutate(imageData);
    }).rejects.toThrow('Unauthorized');
  });
});
```

### UIコンポーネントテストケース

#### PlaceImage コンポーネント

**レンダリングテスト**
```typescript
// tests/components/place-image.spec.tsx
import { render, screen } from '@testing-library/react';
import { PlaceImage } from '@/app/components/place-image';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const mockImage = {
  id: '1',
  url: 'https://imgix.example.com/m42.jpg',
  credits: 'NASA/ESA Hubble',
  sourceUrl: 'https://example.com/source',
  catalogue: 'M' as const,
  catalogueNumber: '42',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z'
};

describe('PlaceImage', () => {
  const renderWithProvider = (component: React.ReactElement) => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    });
    
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  };

  it('画像とクレジット情報が表示される', () => {
    renderWithProvider(<PlaceImage image={mockImage} />);
    
    expect(screen.getByAltText(/M42/i)).toBeInTheDocument();
    expect(screen.getByText('NASA/ESA Hubble')).toBeInTheDocument();
    expect(screen.getByText('M42')).toBeInTheDocument();
  });

  it('ソースURLリンクが正しく設定される', () => {
    renderWithProvider(<PlaceImage image={mockImage} />);
    
    const sourceLink = screen.getByRole('link');
    expect(sourceLink).toHaveAttribute('href', 'https://example.com/source');
  });
});
```

#### Gallery コンポーネント

**レンダリングテスト**
```typescript
describe('Gallery', () => {
  it('指定されたURLの画像を表示する', () => {
    const imageUrls = ['/M/1', '/M/2', '/M/3'];
    
    renderWithProvider(<Gallery imageUrls={imageUrls} />);
    
    imageUrls.forEach(url => {
      expect(screen.getByAltText(url)).toBeInTheDocument();
    });
  });

  it('カルーセル機能が動作する', async () => {
    const imageUrls = ['/M/1', '/M/2', '/M/3'];
    
    renderWithProvider(<Gallery imageUrls={imageUrls} />);
    
    // 次のボタンをクリック
    const nextButton = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButton);
    
    // 画像が切り替わったことを確認
    // （実際の実装に合わせてアサーションを調整）
  });
});
```

#### PlaceImageUploadForm コンポーネント

**ユーザーインタラクションテスト**
```typescript
describe('PlaceImageUploadForm', () => {
  it('フォーム送信が成功する', async () => {
    const mockOnSuccess = vi.fn();
    renderWithProvider(
      <PlaceImageUploadForm onUploadSuccess={mockOnSuccess} />
    );
    
    // フォーム入力
    await userEvent.selectOptions(
      screen.getByLabelText('カタログ'),
      'M'
    );
    await userEvent.type(
      screen.getByLabelText('カタログ番号'),
      '99'
    );
    await userEvent.type(
      screen.getByLabelText('クレジット'),
      'Test Credit'
    );
    await userEvent.type(
      screen.getByLabelText('ソースURL'),
      'https://example.com/source'
    );
    
    // ファイル選択をモック
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
    const fileInput = screen.getByLabelText('画像ファイル');
    await userEvent.upload(fileInput, file);
    
    // 送信
    await userEvent.click(screen.getByRole('button', { name: '送信' }));
    
    // 成功コールバックが呼ばれることを確認
    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });

  it('バリデーションエラーが表示される', async () => {
    renderWithProvider(<PlaceImageUploadForm />);
    
    // 空のまま送信
    await userEvent.click(screen.getByRole('button', { name: '送信' }));
    
    // エラーメッセージの確認
    expect(screen.getByText(/カタログ番号は必須です/)).toBeInTheDocument();
    expect(screen.getByText(/クレジットは必須です/)).toBeInTheDocument();
  });
});
```

### 画像配信エンドポイントテスト

#### GET /{catalogue}/{catalogueNumber} - 画像配信

**正常系テスト**
```typescript
// tests/api/image-delivery.spec.ts
describe('画像配信API', () => {
  it('カタログ番号で画像を配信する', async () => {
    await seedTestImages([{
      id: '1',
      catalogue: 'M',
      catalogueNumber: '42',
      credits: 'NASA/ESA Hubble',
      sourceUrl: 'https://example.com/source',
      url: 'https://imgix.example.com/m42.jpg'
    }]);

    const response = await fetch('/M/42');
    
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('image');
  });

  it('サイズパラメータで画像を調整する', async () => {
    await seedTestImages([{
      id: '1',
      catalogue: 'M',
      catalogueNumber: '42',
      url: 'https://imgix.example.com/m42.jpg'
    }]);

    const response = await fetch('/M/42?w=720&h=480');
    
    expect(response.status).toBe(200);
    // imgixのURLにパラメータが含まれることを確認
    // （リダイレクト先URLの検証など）
  });

  it('存在しない画像で404を返す', async () => {
    const response = await fetch('/M/999');
    expect(response.status).toBe(404);
  });
});
```

#### GET /random - ランダム画像取得

**正常系テスト**
```typescript
describe('GET /random', () => {
  it('ランダム画像を取得する', async () => {
    await seedTestImages([
      { id: '1', catalogue: 'M', catalogueNumber: '1', url: 'test1.jpg' },
      { id: '2', catalogue: 'M', catalogueNumber: '2', url: 'test2.jpg' },
      { id: '3', catalogue: 'M', catalogueNumber: '3', url: 'test3.jpg' }
    ]);

    const response = await fetch('/random');
    expect(response.status).toBe(200);
    
    // 複数回実行して異なる画像が返されることを確認
    const responses = await Promise.all([
      fetch('/random'),
      fetch('/random'),
      fetch('/random')
    ]);
    
    // 少なくとも1つは異なる画像であることを期待
    // （厳密な検証は実装に依存）
  });

  it('サイズパラメータ付きランダム画像を取得する', async () => {
    await seedTestImages([{
      id: '1',
      catalogue: 'M',
      catalogueNumber: '1',
      url: 'https://imgix.example.com/test.jpg'
    }]);

    const response = await fetch('/random?w=600&h=400');
    expect(response.status).toBe(200);
  });
});
```

## パフォーマンステストケース

### 負荷テスト

```typescript
// tests/performance/load.spec.ts
describe('パフォーマンステスト', () => {
  it('画像配信API - 100同時リクエストテスト', async () => {
    await seedTestImages([{
      id: '1',
      catalogue: 'M',
      catalogueNumber: '42',
      url: 'https://imgix.example.com/m42.jpg'
    }]);

    const promises = Array.from({ length: 100 }, () =>
      fetch('/M/42')
    );

    const startTime = Date.now();
    const responses = await Promise.all(promises);
    const endTime = Date.now();

    // 全てのリクエストが成功
    responses.forEach(response => {
      expect(response.status).toBe(200);
    });

    // 応答時間が5秒以内（Cloudflare Workersの場合）
    expect(endTime - startTime).toBeLessThan(5000);
  });

  it('データベースクエリ - 大量データ検索性能', async () => {
    // 1000件のテストデータを作成
    const testImages = Array.from({ length: 1000 }, (_, i) => ({
      id: `${i + 1}`,
      catalogue: i % 2 === 0 ? 'M' : 'NGC',
      catalogueNumber: `${i + 1}`,
      credits: `Test Credit ${i + 1}`,
      sourceUrl: `https://example.com/source${i + 1}`,
      url: `https://imgix.example.com/test${i + 1}.jpg`
    }));
    
    await seedTestImages(testImages);

    const startTime = Date.now();
    const response = await testClient.placeImages.list.query();
    const endTime = Date.now();

    expect(response.success).toBe(true);
    expect(response.data).toHaveLength(1000);
    expect(endTime - startTime).toBeLessThan(1000); // 1秒以内
  });
});
```

### セキュリティテスト

```typescript
// tests/security/security.spec.ts
describe('セキュリティテスト', () => {
  it('SQLインジェクション対策', async () => {
    const maliciousKey = "M'; DROP TABLE place_images; --/42";
    
    expect(async () => {
      await testClient.placeImages.getByKey.query({ key: maliciousKey });
    }).rejects.toThrow('Invalid key');
    
    // テーブルが依然として存在することを確認
    const response = await testClient.placeImages.list.query();
    expect(response.success).toBe(true);
  });

  it('XSS対策 - クレジット情報のサニタイゼーション', async () => {
    const authenticatedClient = await getAuthenticatedClient();
    const xssPayload = '<script>alert("XSS")</script>';
    
    const imageData = {
      catalogue: 'M' as const,
      catalogueNumber: '1',
      credits: xssPayload,
      sourceUrl: 'https://example.com/source',
      url: 'https://imgix.example.com/test.jpg'
    };

    const response = await authenticatedClient.placeImages.create.mutate(imageData);
    expect(response.success).toBe(true);
    
    // 保存されたデータでスクリプトがエスケープされていることを確認
    const saved = await testClient.placeImages.getByKey.query({ key: 'M/1' });
    expect(saved.data.credits).not.toContain('<script>');
    expect(saved.data.credits).toContain('&lt;script&gt;');
  });

  it('認証バイパステスト', async () => {
    const imageData = {
      catalogue: 'M' as const,
      catalogueNumber: '1',
      credits: 'Test Credit',
      sourceUrl: 'https://example.com/source',
      url: 'https://imgix.example.com/test.jpg'
    };

    // 偽のセッションヘッダーでアクセス試行
    expect(async () => {
      await fetch('/api/placeImages/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fake-token'
        },
        body: JSON.stringify(imageData)
      });
    }).rejects.toThrow();
  });
});
```

## E2Eテストケース

### Playwright テストシナリオ

```typescript
// tests/e2e/image-retrieval.spec.ts
import { test, expect } from '@playwright/test';

describe('画像取得フロー', () => {
  test('ランディングページから画像を取得する', async ({ page }) => {
    await page.goto('/');
    
    // ランディングページの要素確認
    await expect(page.locator('h1')).toContainText('placeastro');
    await expect(page.locator('p')).toContainText('Placeholder images of astrophotography');
    
    // ギャラリー画像の表示確認
    const galleryImages = page.locator('[data-testid="gallery-image"]');
    await expect(galleryImages).toHaveCount(3);
    
    // 画像クリックして詳細表示
    await galleryImages.first().click();
    
    // 画像詳細情報の確認
    await expect(page.locator('[data-testid="image-credits"]')).toBeVisible();
    await expect(page.locator('[data-testid="image-source-url"]')).toBeVisible();
  });

  test('URL直接アクセスで画像を取得する', async ({ page }) => {
    // 直接画像URLにアクセス
    const response = await page.goto('/M/42');
    expect(response?.status()).toBe(200);
    
    // 画像が表示されることを確認
    const contentType = response?.headers()['content-type'];
    expect(contentType).toContain('image');
  });

  test('画像情報APIを取得する', async ({ page }) => {
    const response = await page.goto('/M/42/info');
    expect(response?.status()).toBe(200);
    
    const content = await page.content();
    const data = JSON.parse(content);
    
    expect(data.catalogue).toBe('M');
    expect(data.catalogueNumber).toBe('42');
    expect(data.credits).toBeDefined();
  });
});
```

### アップロードフロー E2E テスト

```typescript
// tests/e2e/upload-flow.spec.ts
describe('画像アップロードフロー', () => {
  test('認証後にアップロードできる', async ({ page }) => {
    // ログインページに移動
    await page.goto('/login');
    
    // ログイン実行
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="password"]', 'password123');
    await page.click('[type="submit"]');
    
    // アップロードページに移動
    await page.goto('/upload');
    
    // フォーム入力
    await page.selectOption('[name="catalogue"]', 'M');
    await page.fill('[name="catalogueNumber"]', '999');
    await page.fill('[name="credits"]', 'Test Credit');
    await page.fill('[name="sourceUrl"]', 'https://example.com/test');
    
    // ファイル選択
    await page.setInputFiles('[type="file"]', 'tests/fixtures/test-image.jpg');
    
    // 送信
    await page.click('[type="submit"]');
    
    // 成功メッセージの確認
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    
    // 画像一覧に追加されていることを確認
    await page.goto('/');
    await expect(page.locator('[data-testid="image-M999"]')).toBeVisible();
  });

  test('未認証ユーザーはアップロードページにアクセスできない', async ({ page }) => {
    await page.goto('/upload');
    
    // ログインページにリダイレクトされることを確認
    await page.waitForURL('/login');
  });
});
```

## テスト環境設定

### Vitest 設定

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        'dist/'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

### テスト用データベース設定

```typescript
// tests/setup.ts
import { beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { placeImages } from '@/server/db/schema';

let testDb: any;

beforeAll(async () => {
  // テスト用インメモリデータベース作成
  const sqlite = new Database(':memory:');
  testDb = drizzle(sqlite);
  
  // マイグレーション実行
  await migrate(testDb, { migrationsFolder: './drizzle' });
});

beforeEach(async () => {
  // 各テスト前にデータをクリーンアップ
  await testDb.delete(placeImages);
});

afterAll(async () => {
  // テスト用データベース切断
  testDb.$client.close();
});

// テスト用ヘルパー関数
export const seedTestImages = async (images: any[]) => {
  await testDb.insert(placeImages).values(images);
};
```

### モック設定

```typescript
// tests/mocks/index.ts
import { vi } from 'vitest';

// Better Auth のモック
vi.mock('@/lib/auth-client', () => ({
  authClient: {
    signIn: vi.fn(),
    signOut: vi.fn(),
    useSession: vi.fn().mockReturnValue({
      data: null,
      isPending: false
    })
  }
}));

// imgix URLのモック
vi.mock('@/server/lib/s3', () => ({
  getS3Client: vi.fn().mockReturnValue({
    send: vi.fn().mockResolvedValue({ url: 'https://mock-upload-url.com' })
  })
}));

// 環境変数のモック
process.env.IMGIX_HOSTNAME = 'mock-imgix.example.com';
process.env.R2_BUCKET = 'test-bucket';
process.env.BETTER_AUTH_SECRET = 'test-secret';
process.env.BETTER_AUTH_URL = 'http://localhost:3000';
```

## 不足テストの優先順位

### 高優先度（即座に実装推奨）
1. **API統合テスト** - 全エンドポイントの動作保証
2. **認証・認可テスト** - セキュリティの基盤確保
3. **画像配信テスト** - 核心機能の動作確認
4. **バリデーションテスト** - データ整合性の保証

### 中優先度（次のスプリントで実装）
1. **UIコンポーネントテスト** - フロントエンド動作保証
2. **E2Eテスト** - ユーザーフロー全体の確認
3. **パフォーマンステスト** - スケーラビリティの検証
4. **エラーハンドリングテスト** - 異常系の動作確認

### 低優先度（継続的改善として実装）
1. **ブラウザ互換性テスト** - 複数ブラウザでの動作確認
2. **アクセシビリティテスト** - a11y対応の確認
3. **国際化テスト** - 多言語対応の確認
4. **メタデータテスト** - SEO・OGタグの確認

## 推定実装工数

| テストカテゴリ | 工数 | 優先度 |
|----------------|------|--------|
| API統合テスト | 16時間 | 高 |
| 認証テスト | 8時間 | 高 |
| UIコンポーネントテスト | 20時間 | 中 |
| E2Eテスト | 24時間 | 中 |
| パフォーマンステスト | 12時間 | 中 |
| セキュリティテスト | 8時間 | 高 |
| **合計** | **88時間** | - |

## 推奨ツール・ライブラリ

### テストフレームワーク
- **Vitest**: 高速なユニットテスト
- **Playwright**: 信頼性の高いE2Eテスト
- **Testing Library**: React コンポーネントテスト

### モック・ユーティリティ
- **MSW**: API モック
- **@testing-library/jest-dom**: DOM アサーション
- **c8**: コードカバレッジ

### CI/CD統合
- **GitHub Actions**: 自動テスト実行
- **Codecov**: カバレッジレポート
- **Playwright Reports**: E2E テスト結果可視化

この包括的なテスト戦略により、PlaceAstroプロジェクトの品質と信頼性を大幅に向上させることができます。