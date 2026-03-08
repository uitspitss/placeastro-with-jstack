# Cloudflare Monorepo 開発環境セットアップガイド

## 🎯 セットアップ完了状態

✅ **Cloudflare Workers API**: `http://localhost:8080`
✅ **Next.js Web App**: `http://localhost:3000`  
✅ **D1 Database**: ローカル環境で動作中
✅ **Wrangler v4**: 最新版インストール済み

## 📦 技術構成

```
placeastro-with-jstack/
├── apps/
│   ├── api/              # Cloudflare Workers (Hono + JStack)
│   │   ├── src/
│   │   ├── wrangler.toml  # ローカル開発設定
│   │   └── wrangler.jsonc # 本番デプロイ設定
│   └── web/              # Next.js 15 App Router
│       └── src/app/      # App Router ディレクトリ
├── packages/
│   ├── database/         # Drizzle ORM + D1
│   ├── shared/           # 共有型定義
│   └── ui/              # 共有UIコンポーネント
└── scripts/
    └── setup.sh          # 自動セットアップスクリプト
```

## 🚀 開発開始方法

### 1. 初回セットアップ（実行済み）

```bash
# 自動セットアップ
bash scripts/setup.sh

# または手動
pnpm install
pnpm types:generate
pnpm db:init:local
```

### 2. 開発サーバー起動

```bash
# 推奨: 両サービス同時起動（色分け表示）
pnpm dev

# 個別起動も可能
pnpm dev:api  # APIのみ
pnpm dev:web  # Webのみ
```

## ⚙️ 環境変数

### API設定 (`apps/api/.dev.vars`)
- 自動生成済み（開発用デフォルト値設定済み）
- 本番環境では必ず変更すること

### Web設定 (`apps/web/.env.local`)
- 自動生成済み（開発用デフォルト値設定済み）
- APIエンドポイント: `http://localhost:8080`

## 🔧 よく使うコマンド

```bash
# データベース操作
pnpm db:studio        # Drizzle Studio起動（GUI）
pnpm db:generate      # マイグレーション生成
pnpm db:migrate       # マイグレーション実行

# コード品質
pnpm typecheck        # 型チェック
pnpm check           # Lint & Format (Biome)

# クリーンアップ
pnpm clean           # ビルド成果物削除
pnpm clean:all       # 完全クリーンアップ（node_modules含む）
```

## 🐛 トラブルシューティング

### ポート競合エラー
```bash
# ポート8080/3000が使用中の場合
lsof -i :8080  # 使用中のプロセスを確認
kill -9 [PID]   # プロセスを終了
```

### キャッシュエラー
```bash
rm -rf apps/web/.next
rm -rf apps/api/.wrangler
pnpm dev
```

### D1データベースエラー
```bash
# データベース再初期化
cd apps/api
rm -rf .wrangler/state
pnpm db:init:local
```

## 📚 関連ドキュメント

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Hono Framework](https://hono.dev/)
- [JStack](https://jstack.app/)

## 🚢 デプロイ

### Cloudflare Workers (API)
```bash
pnpm deploy:api  # 本番環境へデプロイ
```

### Vercel/Cloudflare Pages (Web)
```bash
# Vercel
vercel

# Cloudflare Pages
wrangler pages deploy apps/web/.next
```

## 📌 注意事項

- Docker Composeは不要です（ローカル開発はpnpmで完結）
- Wrangler v4がローカルでMiniflareを自動管理

## ✨ セットアップ完了！

開発環境が正常に動作しています。`pnpm dev`で開発を開始できます。