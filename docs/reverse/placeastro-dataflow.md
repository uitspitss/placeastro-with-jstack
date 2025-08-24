# PlaceAstro データフロー図（逆生成）

## ユーザーインタラクションフロー

### 画像アップロードフロー
```mermaid
sequenceDiagram
    participant U as ユーザー
    participant F as Next.js Frontend
    participant A as API Router
    participant S3 as Cloudflare R2
    participant DB as D1 Database
    participant IX as imgix CDN
    
    U->>F: 画像ファイル選択
    F->>A: POST /api/placeImages/getUploadUrl
    A->>S3: 署名付きURL生成
    S3-->>A: 署名付きURL
    A-->>F: uploadUrl + imgixUrl
    F->>S3: PUT直接アップロード
    S3-->>F: アップロード完了
    F->>A: POST /api/placeImages/create
    A->>DB: INSERT画像メタデータ
    DB-->>A: 登録完了
    A-->>F: 登録結果
    F-->>U: アップロード完了通知
```

### 画像取得・表示フロー
```mermaid
sequenceDiagram
    participant U as ユーザー
    participant F as Next.js Frontend
    participant API as API Routes
    participant DB as D1 Database
    participant IX as imgix CDN
    
    U->>F: 画像リクエスト
    F->>API: GET /M/42?w=720&h=480
    API->>DB: SELECT WHERE catalogue='M' AND catalogueNumber='42'
    DB-->>API: 画像メタデータ
    API->>IX: imgix URL + パラメータ
    IX-->>API: 最適化された画像
    API-->>F: 画像レスポンス + Credit情報
    F-->>U: 画像表示
```

### 認証フロー
```mermaid
sequenceDiagram
    participant U as ユーザー
    participant F as Next.js Frontend
    participant M as Middleware
    participant A as Better Auth
    participant DB as D1 Database
    
    U->>F: ログイン情報入力
    F->>A: Better Auth Login
    A->>DB: ユーザー認証
    DB-->>A: ユーザー情報
    A->>DB: セッション作成
    DB-->>A: セッションID
    A-->>F: セッションCookie設定
    F->>M: 保護ルートアクセス
    M->>A: セッション検証
    A->>DB: セッション確認
    DB-->>A: セッション状態
    A-->>M: 認証結果
    M-->>F: アクセス許可/拒否
    F-->>U: ページ表示/リダイレクト
```

## データ取得フロー

### フロントエンド → API → データベース
```mermaid
flowchart TD
    A[React Component] --> B[Tanstack Query]
    B --> C[jstack Client]
    C --> D[fetch API]
    D --> E[Hono Router]
    E --> F{認証チェック}
    F -->|要認証| G[privateProcedure]
    F -->|公開| H[publicProcedure]
    G --> I[セッション検証]
    H --> J[Drizzle ORM]
    I --> J
    J --> K[Cloudflare D1]
    K --> L[SQLクエリ実行]
    L --> M[結果返却]
    M --> J
    J --> H
    J --> G
    H --> E
    G --> E
    E --> D
    D --> C
    C --> B
    B --> N[UI更新]
```

## 状態管理フロー

### Tanstack Query によるサーバー状態管理
```mermaid
flowchart LR
    A[Component] --> B[useQuery Hook]
    B --> C[Query Cache]
    C --> D{Cache Hit?}
    D -->|Yes| E[Cached Data]
    D -->|No| F[API Request]
    F --> G[Server Response]
    G --> C
    C --> E
    E --> A
    
    H[User Action] --> I[useMutation Hook]
    I --> J[API Request]
    J --> K[Server Response]
    K --> L[Cache Invalidation]
    L --> C
```

### クライアント状態管理（認証）
```mermaid
flowchart TD
    A[Better Auth Client] --> B[useSession Hook]
    B --> C{Session Status}
    C -->|Authenticated| D[User Data Available]
    C -->|Loading| E[Loading State]
    C -->|Unauthenticated| F[Login Required]
    
    G[Login Action] --> H[Better Auth]
    H --> I[Session Storage]
    I --> B
```

## エラーハンドリングフロー

```mermaid
flowchart TD
    A[API Request] --> B{Request Type}
    B -->|Success| C[Success Response]
    B -->|Error| D[Error Detection]
    
    D --> E{Error Type}
    E -->|401 Unauthorized| F[Redirect to Login]
    E -->|400 Validation| G[Show Validation Errors]
    E -->|404 Not Found| H[Show Not Found Message]
    E -->|500 Server Error| I[Show Generic Error]
    E -->|Network Error| J[Show Network Error + Retry]
    
    F --> K[Login Page]
    G --> L[Form Error Display]
    H --> M[404 Page]
    I --> N[Error Toast]
    J --> O[Retry Button]
```

## 画像処理パイプライン

```mermaid
flowchart TD
    A[Original Image Upload] --> B[Cloudflare R2 Storage]
    B --> C[imgix Processing]
    C --> D{Request Parameters}
    
    D --> E[Width Specified?]
    E -->|Yes| F[Resize Width]
    E -->|No| F
    
    D --> G[Height Specified?]
    G -->|Yes| H[Resize Height]
    G -->|No| H
    
    F --> I[Format Optimization]
    H --> I
    I --> J[Quality Optimization]
    J --> K[WebP/AVIF Conversion]
    K --> L[CDN Cache]
    L --> M[Edge Delivery]
    M --> N[Browser Display]
```

## ランダム画像取得フロー

```mermaid
flowchart TD
    A[GET /random] --> B[Drizzle Query]
    B --> C[ORDER BY RANDOM()]
    C --> D[LIMIT 1]
    D --> E[Image Metadata]
    E --> F[imgix URL Construction]
    F --> G[Query Parameters]
    G --> H{Parameters Present?}
    H -->|Yes| I[Add w/h parameters]
    H -->|No| J[Original Image]
    I --> K[Redirect Response]
    J --> K
    K --> L[imgix Processing]
    L --> M[Image Delivery]
```

## カタログ検索フロー

```mermaid
flowchart TD
    A[GET /M/42] --> B[URL Parse]
    B --> C[catalogue = 'M']
    B --> D[catalogueNumber = '42']
    C --> E[Validate Catalogue]
    D --> E
    E --> F{Valid?}
    F -->|No| G[400 Bad Request]
    F -->|Yes| H[Database Query]
    H --> I[WHERE catalogue='M' AND catalogueNumber='42']
    I --> J{Found?}
    J -->|No| K[404 Not Found]
    J -->|Yes| L[Image Metadata]
    L --> M[imgix URL + Query Params]
    M --> N[Image Response]
```

## リアルタイムデータ同期

### アップロード後の一覧更新
```mermaid
sequenceDiagram
    participant U as User
    participant UF as Upload Form
    participant AL as Album List
    participant TQ as Tanstack Query
    
    U->>UF: Submit Upload
    UF->>TQ: useMutation.mutate()
    TQ->>API: POST /api/placeImages/create
    API-->>TQ: Success Response
    TQ->>TQ: invalidateQueries(['placeImages'])
    TQ->>AL: Refetch Image List
    AL-->>U: Updated List Display
```

## パフォーマンス最適化フロー

### 画像の段階的読み込み
```mermaid
flowchart TD
    A[Page Load] --> B[Render Skeleton]
    B --> C[IntersectionObserver]
    C --> D{Image in Viewport?}
    D -->|No| E[Continue Observing]
    D -->|Yes| F[Load Image]
    F --> G[Show Loading Placeholder]
    G --> H[Image Load Complete]
    H --> I[Replace with Actual Image]
    E --> D
```

### キャッシュ戦略
```mermaid
flowchart LR
    A[Image Request] --> B[Browser Cache]
    B --> C{Cache Hit?}
    C -->|Yes| D[Serve from Browser]
    C -->|No| E[Cloudflare Edge Cache]
    E --> F{Edge Cache Hit?}
    F -->|Yes| G[Serve from Edge]
    F -->|No| H[imgix Origin]
    H --> I[R2 Storage]
    I --> H
    H --> G
    G --> J[Cache at Edge]
    D --> K[Display Image]
    G --> K
    J --> K
```