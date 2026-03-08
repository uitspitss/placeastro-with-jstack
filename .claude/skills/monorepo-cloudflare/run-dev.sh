#!/bin/bash
# Claude Code用の開発サーバー起動スクリプト
# stream UIを使って安定した実行を保証

cd "$(dirname "$0")/../../.."
turbo dev --ui=stream