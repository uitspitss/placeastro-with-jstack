import { describe, expect, it } from 'vitest';
import {
  DEFAULT_IGNORED_STATUS_CODES,
  getWithWildcard,
  isIgnoredStatusCode,
  shouldSampleStatusCode,
} from './status-code';

describe('getWithWildcard', () => {
  it('最も具体的なキーを優先して返す', () => {
    const map = { '404': 0, '4xx': 100, xxx: 50 };
    expect(getWithWildcard(404, map)).toBe(0);
    expect(getWithWildcard(403, map)).toBe(100);
    expect(getWithWildcard(200, map)).toBe(50);
  });

  it('マッチしなければ null', () => {
    expect(getWithWildcard(200, { '4xx': 100 })).toBeNull();
  });
});

describe('isIgnoredStatusCode', () => {
  it('既定では 404 を無視対象とする', () => {
    expect(isIgnoredStatusCode(404, DEFAULT_IGNORED_STATUS_CODES)).toBe(true);
    expect(isIgnoredStatusCode(403, DEFAULT_IGNORED_STATUS_CODES)).toBe(false);
    expect(isIgnoredStatusCode(500, DEFAULT_IGNORED_STATUS_CODES)).toBe(false);
  });
});

describe('shouldSampleStatusCode', () => {
  const alwaysReport = () => 0; // random()*100 <= rate を常に満たす

  it('404 はサンプリング率が 100 でも送信しない（根本原因の修正）', () => {
    expect(
      shouldSampleStatusCode(
        404,
        { '4xx': 100 },
        DEFAULT_IGNORED_STATUS_CODES,
        alwaysReport,
      ),
    ).toBe(false);
  });

  it('404 以外の 4xx はサンプリング率に従い送信する', () => {
    expect(
      shouldSampleStatusCode(
        403,
        { '4xx': 100 },
        DEFAULT_IGNORED_STATUS_CODES,
        alwaysReport,
      ),
    ).toBe(true);
  });

  it('5xx は送信する', () => {
    expect(
      shouldSampleStatusCode(
        500,
        { '5xx': 100 },
        DEFAULT_IGNORED_STATUS_CODES,
        alwaysReport,
      ),
    ).toBe(true);
  });

  it('サンプリング率が未設定/0 なら送信しない', () => {
    expect(
      shouldSampleStatusCode(
        200,
        {},
        DEFAULT_IGNORED_STATUS_CODES,
        alwaysReport,
      ),
    ).toBe(false);
    expect(
      shouldSampleStatusCode(
        400,
        { '4xx': 0 },
        DEFAULT_IGNORED_STATUS_CODES,
        alwaysReport,
      ),
    ).toBe(false);
  });

  it('無視リストは呼び出し側で差し替えられる', () => {
    // 404 を無視しない設定にすれば送信される
    expect(shouldSampleStatusCode(404, { '4xx': 100 }, [], alwaysReport)).toBe(
      true,
    );
    // 403 も追加で無視できる
    expect(
      shouldSampleStatusCode(403, { '4xx': 100 }, [403, 404], alwaysReport),
    ).toBe(false);
  });

  it('乱数がサンプリング率を超える場合は送信しない', () => {
    const neverReport = () => 1; // random()*100 = 100 > 50
    expect(
      shouldSampleStatusCode(
        500,
        { '5xx': 50 },
        DEFAULT_IGNORED_STATUS_CODES,
        neverReport,
      ),
    ).toBe(false);
  });
});
