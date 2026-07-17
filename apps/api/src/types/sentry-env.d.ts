// SENTRY_DSN は wrangler secret のため、生成される worker-configuration.d.ts には載らない。
// Cloudflare.Env に宣言マージで型を追加する（types 再生成で消えない）。
declare namespace Cloudflare {
  interface Env {
    /** Sentry DSN（secret）。未設定なら SDK は無効。 */
    SENTRY_DSN: string;
  }
}
