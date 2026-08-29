# PlaceAstro Monorepo

宇宙のプレースホルダー画像 API。Messier / NGC カタログの天体写真を、
サイズを指定できる画像として配信する。

**https://placeastro.u7s.dev**

```html
<img src="https://placeastro.u7s.dev/m/42?w=400" />
```

## エンドポイント

| | |
|---|---|
| `GET /m/42` | Messier 42（オリオン大星雲） |
| `GET /ngc/6543` | NGC カタログ（キャッツアイ星雲） |
| `GET /random` | インデックス済みの中からランダムに1枚 |
| `GET /m/42/info` | クレジットと出典を JSON で返す |

`w` / `h` でサイズを指定する（既定は 400x400）。例: `/m/42?w=720&h=480`。
画像には imgix でクレジットが焼き込まれる。

## Tech Stack

- **Frontend**: Vite, React 19, TanStack Router, TanStack Query, Tailwind CSS v4
- **Backend**: Cloudflare Workers, Hono, oRPC, Drizzle ORM
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2
- **Authentication**: Better Auth
- **Monorepo**: pnpm workspaces + Turborepo
- **Tooling**: Biome, lefthook, knip, Vitest

## Getting Started

```bash
# ランタイムのインストール
mise install

# 依存関係のインストール
ni

# ローカル DB のマイグレーション
nr db:migrate

# 開発サーバーの起動（API + Web 同時起動）
nr dev
```

## Available Scripts

| コマンド | 説明 |
|---|---|
| `nr dev` | 全アプリの開発サーバーを起動 |
| `nr build` | 全パッケージをビルド |
| `nr lint` | 全パッケージの Biome チェック |
| `nr typecheck` | 全パッケージの型チェック |
| `nr test` | 全パッケージのテスト実行 |
| `nr format` | Biome でフォーマット |
| `nr knip` | 未使用コード・依存関係の検出 |
| `nr db:generate` | マイグレーション生成 |
| `nr db:migrate` | ローカル DB にマイグレーション適用 |
| `nr db:studio` | Drizzle Studio を起動 |

## Project Structure

```
├── apps/
│   ├── api/                 # Hono API サーバー (Cloudflare Workers)
│   │   ├── src/
│   │   │   ├── lib/         # 共通ユーティリティ (auth, db, s3)
│   │   │   ├── routers/     # oRPC ルーター定義
│   │   │   ├── routes/      # HTTP ルート (画像プロキシ等)
│   │   │   ├── schema/      # Zod スキーマ
│   │   │   ├── services/    # ビジネスロジック
│   │   │   └── index.ts
│   │   ├── vitest.config.ts
│   │   └── wrangler.jsonc
│   └── web/                 # React フロントエンド (Vite)
│       ├── src/
│       │   ├── components/
│       │   ├── lib/
│       │   ├── routes/
│       │   └── main.tsx
│       ├── vite.config.ts
│       └── index.html
├── packages/
│   ├── database/            # Drizzle ORM スキーマ・マイグレーション
│   │   ├── src/
│   │   └── drizzle/
│   ├── shared/              # 共有型・ユーティリティ
│   │   └── src/
│   └── ui/                  # 共有 UI コンポーネント
│       └── src/
├── turbo.json
├── biome.json
├── lefthook.yml
├── knip.json
└── pnpm-workspace.yaml
```
