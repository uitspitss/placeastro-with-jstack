export interface Env {
  /** Sentry DSN。秘密情報なので wrangler secret で設定する。 */
  SENTRY_DSN: string;
  /** Sentry event の logger タグに入れる名前。 */
  TAIL_WORKER_SCRIPT_NAME: string;
  /** Sentry に送らないリクエストヘッダー（小文字比較）。 */
  BLOCKED_HEADERS: string[];
  /** ステータスコード(ワイルドカード可)→サンプリング率(0-100)。 */
  STATUS_CODES_TO_SAMPLING_RATES: Record<string, number>;
  /** 例外イベントのサンプリング率(0-100)。 */
  EXCEPTION_SAMPLING_RATE: number;
  /** 期待される応答として Sentry に送らないステータスコード。未設定なら既定(404)。 */
  IGNORED_STATUS_CODES?: number[];
}
