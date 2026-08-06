/**
 * E2E 用の D1（miniflare のローカル state）を作り直す。
 *
 * **Playwright の外で走らせること。** setup project も globalSetup も
 * `webServer` の起動より後なので、テーブルが無いまま API worker が立ち上がり、
 * ヘルスチェックがタイムアウトするまで原因が分からない状態になる。
 * package.json の `test:e2e` が `playwright test` の前段でこれを呼ぶ。
 */
import { execFileSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { API_DIR, E2E_PERSIST_TO, E2E_SQL_FILES } from './env';

// 前回の状態は必ず捨てる。残すと「手で作ったデータ」に依存したテストが書けてしまうし、
// auth.setup.ts のサインアップが2回目以降 409 で落ちる。
rmSync(resolve(API_DIR, E2E_PERSIST_TO), { recursive: true, force: true });

for (const file of E2E_SQL_FILES) {
  console.log(`[e2e] applying ${file}`);
  execFileSync(
    'pnpm',
    [
      'exec',
      'wrangler',
      'd1',
      'execute',
      'DB',
      '--local',
      `--persist-to=${E2E_PERSIST_TO}`,
      `--file=${file}`,
    ],
    // wrangler.jsonc の解決も --persist-to も apps/api を起点にする
    { cwd: API_DIR, stdio: 'inherit' },
  );
}
