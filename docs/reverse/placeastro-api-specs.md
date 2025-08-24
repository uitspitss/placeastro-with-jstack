# PlaceAstro API仕様書（逆生成）

## ベースURL
`https://placeastro.u7s.dev/api`

## 認証方式
- **セッション認証**: Better Authによるセッションベース認証
- **Cookie**: セッションCookieを使用
- **認証が必要なエンドポイント**: `privateProcedure`でマークされたエンドポイント

## エンドポイント一覧

### 画像管理API

#### GET /api/placeImages/health
**説明**: APIヘルスチェック

**認証**: 不要

**レスポンス**:
```typescript
{
  success: true;
  data: "OK";
}
```

#### GET /api/placeImages/list
**説明**: 画像一覧取得（作成日時降順）

**認証**: 不要

**レスポンス**:
```typescript
{
  success: true;
  data: Array<{
    id: string;
    url: string;
    credits: string;
    sourceUrl: string;
    catalogue: 'M' | 'NGC';
    catalogueNumber: string;
    createdAt: string;
    updatedAt: string;
  }>;
}
```

#### GET /api/placeImages/getByKey
**説明**: カタログキーによる画像取得

**認証**: 不要

**クエリパラメータ**:
```typescript
{
  key: string; // format: "M/42", "NGC/1234"
}
```

**レスポンス**:
```typescript
{
  success: true;
  data: {
    id: string;
    url: string;
    credits: string;
    sourceUrl: string;
    catalogue: 'M' | 'NGC';
    catalogueNumber: string;
    createdAt: string;
    updatedAt: string;
  };
}
```

**エラーレスポンス**:
```typescript
{
  success: false;
  error: {
    message: "Invalid key" | "Invalid catalogue" | "Image not found";
  }
}
```

#### POST /api/placeImages/create
**説明**: 新しい画像の登録

**認証**: 必須 (privateProcedure)

**リクエスト**:
```typescript
{
  catalogue: 'M' | 'NGC';
  catalogueNumber: string;
  credits: string;        // 最小1文字
  sourceUrl: string;      // URL形式
  url: string;           // 画像URL
}
```

**レスポンス**:
```typescript
{
  success: true;
  data: {
    // Drizzle insert result
  };
}
```

#### POST /api/placeImages/getUploadUrl
**説明**: ファイルアップロード用の署名付きURL取得

**認証**: 必須 (privateProcedure)

**リクエスト**:
```typescript
{
  key: string; // アップロード先のファイルキー
}
```

**レスポンス**:
```typescript
{
  success: true;
  data: {
    uploadUrl: string;  // Cloudflare R2署名付きURL (有効期限1分)
    imgixUrl: string;   // imgix配信用URL
  };
}
```

### 画像配信エンドポイント

#### GET /{catalogue}/{catalogueNumber}
**説明**: カタログ番号による画像取得・配信

**認証**: 不要

**パスパラメータ**:
- `catalogue`: "M" または "NGC"
- `catalogueNumber`: カタログ番号

**クエリパラメータ**:
- `w`: 画像幅 (オプション)
- `h`: 画像高さ (オプション)

**例**:
- `GET /M/42` - M42画像 (オリジナルサイズ)
- `GET /M/42?w=720` - M42画像 (幅720px)
- `GET /M/42?w=720&h=480` - M42画像 (720x480px)

**レスポンス**: 
- **成功**: imgix処理済み画像 (バイナリ) + クレジット情報
- **エラー**: 400 Bad Request または 404 Not Found

#### GET /{catalogue}/{catalogueNumber}/info
**説明**: 画像情報の取得

**認証**: 不要

**レスポンス**:
```typescript
{
  id: string;
  url: string;
  credits: string;
  sourceUrl: string;
  catalogue: 'M' | 'NGC';
  catalogueNumber: string;
  createdAt: string;
  updatedAt: string;
}
```

#### GET /random
**説明**: ランダム画像取得

**認証**: 不要

**クエリパラメータ**:
- `w`: 画像幅 (オプション)
- `h`: 画像高さ (オプション)

**レスポンス**: ランダムな画像 (imgix処理済み)

## エラーレスポンス形式

### HTTPException による統一エラー形式
```typescript
{
  success: false;
  error: {
    message: string;
    status?: number;
  }
}
```

### 一般的なHTTPステータスコード
- **200**: 成功
- **400**: リクエスト不正 (バリデーションエラー、不正なカタログ等)
- **401**: 認証が必要
- **404**: リソースが見つからない
- **500**: サーバー内部エラー

## バリデーションスキーマ

### CreatePlaceImageSchema
```typescript
{
  catalogue: z.enum(['M', 'NGC']),
  catalogueNumber: z.string().min(1),
  credits: z.string().min(1),
  sourceUrl: z.string().url(),
}
```

### GetUploadUrlSchema
```typescript
{
  key: z.string().min(1),
}
```

## レスポンス共通形式

### 成功レスポンス (SuperJSON)
```typescript
{
  success: true;
  data: T; // 型はエンドポイントによって変動
}
```

### エラーレスポンス
```typescript
{
  success: false;
  error: {
    message: string;
    details?: any;
  }
}
```

## 認証・認可

### セッション認証
- **Better Auth**によるセッション管理
- セッションCookieの自動設定・検証
- **privateProcedure**で保護されたエンドポイントはセッション必須

### 保護されたエンドポイント
- `POST /api/placeImages/create`
- `POST /api/placeImages/getUploadUrl`

### 公開エンドポイント
- `GET /api/placeImages/health`
- `GET /api/placeImages/list`
- `GET /api/placeImages/getByKey`
- すべての画像配信エンドポイント (`/{catalogue}/{catalogueNumber}` 等)

## データ取得パターン

### 画像一覧取得
```javascript
// 最新の画像から順に取得
GET /api/placeImages/list
// ORDER BY createdAt DESC
```

### カタログ検索
```javascript
// 特定のカタログ画像取得
GET /api/placeImages/getByKey?key=M/42
// WHERE catalogue='M' AND catalogueNumber='42'
```

### ランダム取得
```javascript
// ランダム画像取得
GET /random
// ORDER BY RANDOM() LIMIT 1
```

## ファイルアップロードフロー

### 1. アップロードURL取得
```javascript
POST /api/placeImages/getUploadUrl
{
  "key": "images/m42-hubble.jpg"
}
```

### 2. 直接R2アップロード
```javascript
PUT <uploadUrl>
Content-Type: image/jpeg
<binary image data>
```

### 3. メタデータ登録
```javascript
POST /api/placeImages/create
{
  "catalogue": "M",
  "catalogueNumber": "42",
  "credits": "NASA/ESA Hubble Space Telescope",
  "sourceUrl": "https://example.com/source",
  "url": "<imgixUrl>"
}
```

## imgix 画像処理パラメータ

### サポートされているパラメータ
- `w`: 幅指定 (pixels)
- `h`: 高さ指定 (pixels)
- 自動形式変換 (WebP, AVIF対応)
- 自動品質最適化

### 使用例
```
/M/42?w=720          # 幅720px
/M/42?h=480          # 高さ480px  
/M/42?w=720&h=480    # 720x480px
```

## CORS設定

### 許可されたオリジン
- 本番環境: `https://placeastro.u7s.dev`
- 開発環境: `http://localhost:3000`

### 許可されたメソッド
- GET, POST, PUT, DELETE, OPTIONS

### 許可されたヘッダー
- Content-Type, Authorization