#!/bin/bash
# portless 使用時の apps/api/.dev.vars を生成する
# worktrunk の post_create フックや手動で実行

# worktrunk フックでは mise shim が PATH に無い場合がある
eval "$(mise activate bash 2>/dev/null)" || true

if ! command -v portless &>/dev/null; then
  echo "portless not available, skipping .dev.vars generation"
  exit 0
fi

WEB_URL=$(portless get web 2>/dev/null)

if [ -z "$WEB_URL" ]; then
  echo "portless running but web service not registered, skipping .dev.vars generation"
  exit 0
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cat > "$PROJECT_ROOT/apps/api/.dev.vars" <<EOF
CORS_ORIGIN=${WEB_URL}
BETTER_AUTH_URL=${WEB_URL}
EOF

echo "Generated apps/api/.dev.vars: CORS_ORIGIN=${WEB_URL}"
