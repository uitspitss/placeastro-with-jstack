# セットアップ

コマンド一覧とディレクトリ構成は [README.md](./README.md)、開発ルールは
[AGENTS.md](./AGENTS.md) を見ること。ここには環境変数とデプロイだけを書く。

## 初回セットアップ

```bash
mise install          # node / pnpm / ni をインストール
ni                    # 依存関係
cp apps/api/.dev.vars.example apps/api/.dev.vars   # 値は下記「環境変数」を参照
nr types:generate     # wrangler types（Cloudflare.Env の型）
nr db:migrate         # ローカル D1 にマイグレーション（seed は含まない）
nr db:seed            # Messier カタログのシードを流す
nr dev                # API + Web を同時起動
```

`nr db:migrate` が呼ぶ `packages/database` の `migrate:local` は
`0000_init.sql` と `0001_auth.sql` だけで、seed は `nr db:seed` が別に流す。
（`apps/api` 側にも同名の `migrate:local` があり、そちらは seed まで流す。
`nr dev` は API の dev がこれを呼ぶので、`nr dev` 経由なら seed も入る）

ポートは portless が両方に動的に割り当てる（`portless run --name web vite` /
`portless run --name api`）。実際の URL は `portless get web` / `portless get api`
で引く。portless を使わない場合は vite の既定ポート、API は
`apps/api/wrangler.jsonc` の `dev` 設定に従う。

## 環境変数

### API (`apps/api/.dev.vars`)

`apps/api/.dev.vars.example` をコピーして値を埋める。gitignore 済み。
`BETTER_AUTH_SECRET` / `R2_*` / `IMGIX_SECURE_URL_TOKEN` のような秘密の値は
ここと Cloudflare の Secrets にだけ置き、`wrangler.jsonc` には書かない。

秘密でない設定は `apps/api/wrangler.jsonc` の `vars` に入っている
（既定 = ローカル、`env.production` = 本番）。

### サインアップの開閉 (`ALLOW_SIGN_UP`)

`"true"` のときだけ better-auth のサインアップが開く（`lib/auth.ts`）。
値が無ければ閉じる。本番は `"false"` 固定で、新規ユーザーは受け付けない。

`/sign-up` は画面としても `beforeLoad` で `/` に飛ばしているが、画面を塞ぐだけでは
`POST /api/auth/sign-up/email` を直接叩けてしまうので API 側で閉じている。

E2E は既定の vars のまま `wrangler dev` を起動するのでサインアップが通る
（`e2e/auth.setup.ts` がこの API を叩いてセッションを作る）。

### Web (`apps/web/.env.local`)

`VITE_API_URL`: 開発時は空（Vite プロキシ経由）。

### 本番ビルドの `VITE_API_URL`

`apps/web/.env.production` は gitignore なのでリポジトリには入っていない。
ローカルで `vite build` する場合は自分で置く（1行）:

```
VITE_API_URL=https://placeastro.u7s.dev
```

CI（`.github/workflows/ci.yml` の `deploy-web`）はこのファイルを持たないので、
GitHub の **Settings → Secrets and variables → Actions → Variables** に
`VITE_API_URL` を登録して渡している。秘密ではないので secrets ではなく variables。
turbo は envMode が strict なので `turbo.json` の build タスクにも
`"env": ["VITE_API_URL"]` の宣言が要る（無いと黙って空になる）。

## デプロイ

`main` への push で `.github/workflows/ci.yml` が lint / typecheck / test / E2E を
通してから API → Web の順にデプロイする。**手元から `wrangler deploy` しないこと。**
Cloudflare の API トークンは Actions の `CLOUDFLARE_API_TOKEN` secret にある。

## 関連ドキュメント

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Hono Framework](https://hono.dev/)
- [oRPC](https://orpc.dev/)
- [TanStack Router](https://tanstack.com/router/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Vite](https://vite.dev/)
