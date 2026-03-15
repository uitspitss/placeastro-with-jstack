#!/bin/bash

# Dream Team v2.0 Installer

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_DIR="$HOME/.claude"

echo "🚀 Installing Dream Team v2.0..."

# Create directories
mkdir -p "$CLAUDE_DIR/agents"
mkdir -p "$CLAUDE_DIR/commands"
mkdir -p "$CLAUDE_DIR/skills"
mkdir -p "$CLAUDE_DIR/output-styles"

# Copy agents
echo "  → Copying agents..."
cp -r "$SCRIPT_DIR/agents/"* "$CLAUDE_DIR/agents/"

# Copy commands
echo "  → Copying commands..."
cp -r "$SCRIPT_DIR/commands/"* "$CLAUDE_DIR/commands/"

# Copy skills
echo "  → Copying skills..."
cp -r "$SCRIPT_DIR/skills/"* "$CLAUDE_DIR/skills/"

# Copy output styles
echo "  → Copying output styles..."
cp -r "$SCRIPT_DIR/output-styles/"* "$CLAUDE_DIR/output-styles/"

# Copy settings (backup existing)
if [ -f "$CLAUDE_DIR/settings.json" ]; then
    echo "  → Backing up existing settings.json..."
    cp "$CLAUDE_DIR/settings.json" "$CLAUDE_DIR/settings.json.backup"
fi
echo "  → Copying settings.json..."
cp "$SCRIPT_DIR/settings.json" "$CLAUDE_DIR/"

echo ""
echo "✅ Dream Team v2.0 installed!"
echo ""
echo "📋 Quick Reference:"
echo "   /team <task>     Full 5-agent workflow"
echo "   /team-c <task>   Fast 3-agent workflow"
echo "   /codex <task>    Delegate to Codex CLI"
echo "   /docs <topic>    Search offline docs"
echo ""
echo "🔧 8 Agents: analyst, architect, developer, qa, devops,"
echo "            code-reviewer, security-tester, tech-researcher"
echo ""
echo "💡 Run '/discover' in your project to generate context files."
