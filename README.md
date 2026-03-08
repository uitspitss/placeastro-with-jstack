# PlaceAstro Monorepo 🚀

Cloudflare Workers + Next.js を使用したモダンなフルスタックアプリケーション

## ✅ セットアップ完了

- **API**: <http://localhost:8080> で動作中 (Cloudflare Workers)
- **Web**: <http://localhost:3000> で動作中 (Next.js)
- **データベース**: D1 ローカル環境が動作中
- **Docker不要**: pnpmだけで完全な開発環境

## 🎆 技術スタック

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Cloudflare Workers, Hono, JStack
- **Database**: Cloudflare D1, Drizzle ORM
- **Storage**: Cloudflare R2
- **Authentication**: Better Auth
- **Monorepo**: pnpm workspaces

## 📦 プロジェクト構造

```text
├── apps/
│   ├── api/          # Cloudflare Workers API
│   └── web/          # Next.js フロントエンド
├── packages/
│   ├── database/     # Drizzle ORM + スキーマ
│   ├── shared/       # 共有型定義
│   └── ui/          # 共有UIコンポーネント
└── scripts/         # セットアップスクリプト
```

## 🚀 クイックスタート

### 自動セットアップ (推奨)

```bash
# セットアップスクリプトを実行
bash scripts/setup.sh

# または手動で
pnpm install
pnpm setup  # 型生成とDB初期化
```

### 開発サーバー起動

```bash
# 両方のサービスを同時起動 (推奨)
pnpm dev

# 個別起動
pnpm dev:api  # APIのみ (http://localhost:8080)
pnpm dev:web  # Webのみ (http://localhost:3000)
```

## 📋 利用可能なコマンド

```bash
# 🚀 開発 (Turbo統一)
pnpm dev              # 全サービス起動 (Turbo stream表示)
pnpm dev:api          # API のみ (Cloudflare Workers)
pnpm dev:web          # Web のみ (Next.js)

# 📦 ビルド & デプロイ
pnpm build            # 全体ビルド (Turboキャッシュ付き)
pnpm build:api        # API ビルド
pnpm build:web        # Web ビルド
pnpm deploy:api       # Cloudflare へデプロイ

# 🗺️ データベース
pnpm db:init:local    # ローカルDB初期化
pnpm db:generate      # マイグレーション生成
pnpm db:migrate       # マイグレーション実行
pnpm db:studio        # Drizzle Studio起動

# 🔧 ユーティリティ
pnpm typecheck        # TypeScript型チェック
pnpm check            # Biome (Lint & Format)
pnpm clean            # ビルド成果物削除
pnpm clean:all        # 完全クリーンアップ
pnpm setup            # 初期セットアップ
```
