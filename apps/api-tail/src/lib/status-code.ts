/**
 * 「エラーではない期待される応答」として Sentry に送らないステータスコード。
 * 404(Not Found) は存在しないパスへの正常応答（ボット探索・リンク切れ）であり
 * アプリのエラーではないので既定で除外する。
 */
export const DEFAULT_IGNORED_STATUS_CODES: readonly number[] = [404];

/**
 * ステータスコードをワイルドカード対応で map から引く。
 * 例) 404 は "404" → "40x" → "4xx" → "xxx" の順に最も具体的なキーを優先する。
 */
export function getWithWildcard<T>(
  statusCode: number,
  map: Record<string, T>,
): T | null {
  const statusCodeStr = statusCode.toString();
  for (let end = statusCodeStr.length; end >= 0; end--) {
    const numPlaceholders = statusCodeStr.length - end;
    const prefix = statusCodeStr.slice(0, end);
    const key = `${prefix}${'x'.repeat(numPlaceholders)}`;
    if (key in map) {
      return map[key];
    }
  }
  return null;
}

/** 無視対象（Sentry に送らない）ステータスコードかどうか。 */
export function isIgnoredStatusCode(
  statusCode: number,
  ignored: readonly number[],
): boolean {
  return ignored.includes(statusCode);
}

function randomBetween0and1(): number {
  const buffer = new Uint32Array(1);
  crypto.getRandomValues(buffer);
  return buffer[0] / 4294967295;
}

/**
 * このステータスコードの応答を Sentry に送る（サンプリングする）か判定する。
 * 無視リストに含まれるコードは率に関係なく常に false。
 */
export function shouldSampleStatusCode(
  statusCode: number,
  samplingRates: Record<string, number>,
  ignored: readonly number[] = DEFAULT_IGNORED_STATUS_CODES,
  random: () => number = randomBetween0and1,
): boolean {
  if (isIgnoredStatusCode(statusCode, ignored)) {
    return false;
  }
  const samplingRate = getWithWildcard(statusCode, samplingRates);
  if (!samplingRate) {
    return false;
  }
  return random() * 100 <= samplingRate;
}
