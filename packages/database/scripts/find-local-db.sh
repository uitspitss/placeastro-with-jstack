#!/bin/bash
# D1 ローカル SQLite ファイルを探す
# wrangler が起動してから DB ファイルが作られるまでラグがあるため、リトライする

DB_DIR="../../apps/api/.wrangler/state/v3/d1/miniflare-D1DatabaseObject"
MAX_RETRIES=${1:-10}
INTERVAL=3

for i in $(seq 1 "$MAX_RETRIES"); do
  DB_PATH=$(find "$DB_DIR" -type f -name '*.sqlite' -print -quit 2>/dev/null)
  if [ -n "$DB_PATH" ]; then
    echo "$DB_PATH"
    exit 0
  fi
  if [ "$i" -lt "$MAX_RETRIES" ]; then
    echo "Waiting for D1 local database... (${i}/${MAX_RETRIES})" >&2
    sleep "$INTERVAL"
  fi
done

echo "D1 local database not found after ${MAX_RETRIES} retries" >&2
exit 1
