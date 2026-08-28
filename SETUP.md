# Cloudflare Monorepo 開発環境セットアップガイド

## セットアップ完了状態

- **Cloudflare Workers API**: `http://localhost:8080`
- **Vite Web App**: `http://localhost:3000`
- **D1 Database**: ローカル環境で動作中

## 技術構成

```
placeastro/
├── apps/
│   ├── api/              # Cloudflare Workers (Hono + oRPC)
│   │   ├── src/
│   │   └── wrangler.jsonc # 設定 (default: ローカル, env.production: 本番)
│   └── web/              # Vite + React + TanStack Router (SPA)
│       └── src/
├── packages/
│   ├── database/         # Drizzle ORM + D1
│   ├── shared/           # 共有型定義 (Zod)
│   └── ui/              # 共有UIコンポーネント (shadcn/ui)
```

## 開発開始方法

### 1. 初回セットアップ

```bash
pnpm install
pnpm types:generate
pnpm db:migrate:local
```

### 2. 開発サーバー起動

```bash
# 推奨: 両サービス同時起動
pnpm dev

# 個別起動も可能
pnpm dev:api  # APIのみ (port 8080)
pnpm dev:web  # Webのみ (port 3000)
```

## 環境変数

### API設定 (`apps/api/.dev.vars`)
- 開発用デフォルト値設定済み
- 本番環境では必ず変更すること

### Web設定 (`apps/web/.env.local`)
- `VITE_API_URL`: 開発時は空 (Viteプロキシ経由)、本番は API の URL を指定

### 本番ビルドの `VITE_API_URL`
`apps/web/.env.production` は gitignore なのでリポジトリには入っていない。
ローカルで `vite build` する場合は自分で置く（1行）:

```
VITE_API_URL=https://placeastro.u7s.dev
```

CI (`.github/workflows/deploy.yml`) はこのファイルを持たないので、
GitHub の **Settings → Secrets and variables → Actions → Variables** に
`VITE_API_URL` を登録して渡している。秘密ではないので secrets ではなく variables。
turbo は envMode が strict なので `turbo.json` の build タスクにも
`"env": ["VITE_API_URL"]` の宣言が要る（無いと黙って空になる）。

## よく使うコマンド

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

## デプロイ

### Cloudflare Workers (API)
```bash
pnpm deploy:api
```

### Cloudflare Workers (Web)
```bash
pnpm --filter @placeastro/web deploy
```

## 関連ドキュメント

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Hono Framework](https://hono.dev/)
- [oRPC](https://orpc.dev/)
- [TanStack Router](https://tanstack.com/router/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Vite](https://vite.dev/)
