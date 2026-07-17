export interface SentryStackFrame {
  filename?: string;
  function?: string;
  lineno?: number;
  colno?: number;
  in_app?: boolean;
}

export interface SentryStacktrace {
  frames: SentryStackFrame[];
}

// V8 形式のスタックフレーム行:
//   "    at fnName (file:line:col)"
//   "    at file:line:col"
const FRAME_WITH_FUNCTION = /^\s*at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)\s*$/;
const FRAME_WITHOUT_FUNCTION = /^\s*at\s+(.+?):(\d+):(\d+)\s*$/;

/**
 * 例外の stack 文字列を Sentry の stacktrace 形式に変換する。
 * Cloudflare の tail 例外は stack を持たない場合があるため undefined を許容する。
 *
 * NOTE: このモジュールは元のネイティブ連携バンドルに含まれておらず、
 * V8 スタック形式を前提に再構成したもの。実際の例外イベントで要確認。
 */
export function parseStackTrace(
  stack: string | undefined,
): SentryStacktrace | undefined {
  if (!stack) {
    return undefined;
  }

  const frames: SentryStackFrame[] = [];
  for (const line of stack.split('\n')) {
    const withFn = FRAME_WITH_FUNCTION.exec(line);
    if (withFn) {
      frames.push({
        function: withFn[1],
        filename: withFn[2],
        lineno: Number(withFn[3]),
        colno: Number(withFn[4]),
        in_app: true,
      });
      continue;
    }
    const withoutFn = FRAME_WITHOUT_FUNCTION.exec(line);
    if (withoutFn) {
      frames.push({
        filename: withoutFn[1],
        lineno: Number(withoutFn[2]),
        colno: Number(withoutFn[3]),
        in_app: true,
      });
    }
  }

  // Sentry は古いフレームが先頭（直近の呼び出しが末尾）を期待する。
  frames.reverse();
  return { frames };
}
