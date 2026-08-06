# 開発ルール

## コード変更後の検証

コードを変更したら、以下を実行してエラーがないことを確認する:

- `nr lint` (turbo 経由で全パッケージの biome check)
- `nr typecheck` (turbo 経由で全パッケージの tsc --noEmit)

## 開発サーバー

- `nr dev` で全アプリを同時起動
- Claude Code から実行する場合は `nlx turbo run dev --ui=stream` を使う

## モノレポ構成

- `apps/web` - Vite + React フロントエンド
- `apps/api` - Hono + oRPC + Drizzle API サーバー (Cloudflare Workers)
- `packages/database` - Drizzle ORM + D1 スキーマ・マイグレーション
- `packages/shared` - 共有型・ユーティリティ (Zod スキーマ)
- `packages/ui` - 共有 UI コンポーネント (shadcn/ui パターン)

## ファイル命名規則

- kebab-case を使用する (例: `my-component.tsx`, `use-auth.ts`)
- PascalCase は使わない

## API アーキテクチャ

- oRPC を使用した型安全な RPC
- `routers/` → oRPC ルーター定義
- `routes/` → HTTP ルート（画像プロキシ等）
- `services/` → ビジネスロジック・DB クエリ
- `schema/` → Zod スキーマ（入出力バリデーション）
- `lib/` → 共通ユーティリティ（auth, db, s3）
- DI は関数引数で行う（DI コンテナは使わない）

## テスト

- TDD（テスト駆動開発）で実装する
- テストを先に書き、実装はテストが通るように行う
- services のテストでは repository をモックして単体テストする

## Storybook

- `apps/web/.storybook` に1つだけ置き、`packages/ui` のストーリーもここから拾う
- ストーリーは対象と同じ場所に置く（`foo.tsx` の隣に `foo.stories.tsx`）
- `nr storybook` で dev サーバー、`nr build-storybook` で静的ビルド
- `nr test` は unit と storybook の2プロジェクトを回す
  （`nr test:unit` / `nr test:storybook` で個別実行）
- `play` は「描画結果だけでは分からないこと」にだけ書く。
  インタラクション・aria 属性・CSS 由来の状態・非同期表示
- AI が書いたストーリーには `tags: ['ai-generated']` を付ける
- **`@/lib/client` に手続きを足したら `apps/web/src/lib/__mocks__/client.js`
  にも足す。** ストーリーは実 API を叩かないよう `.storybook/main.ts` の
  `mockModules` プラグインでこのモックへ差し替えている
- ストーリーからしか使わない依存を足したら `.storybook/main.ts` の
  `optimizeDepsInclude` に加える。入れないとテスト中のリロードでテストが落ちる

## パッケージ間の依存関係

- `@placeastro/shared` は `apps/web` と `apps/api` の両方から参照可能
- `@placeastro/database` は `apps/api` と `apps/web` から参照可能
- `@placeastro/ui` は `apps/web` から参照可能
- `@placeastro/api` の型は `apps/web` から `import type` でのみ参照する
