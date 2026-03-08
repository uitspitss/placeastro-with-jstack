#!/bin/bash

echo "🚀 PlaceAstro Monorepo Setup"
echo "============================"
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install it first:"
    echo "   npm install -g pnpm"
    exit 1
fi

# Check if wrangler is installed globally
if ! command -v wrangler &> /dev/null; then
    echo "⚠️  Wrangler is not installed globally. Installing locally..."
fi

echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "📝 Setting up environment files..."

# Setup API environment
if [ ! -f "apps/api/.dev.vars" ]; then
    cp apps/api/.dev.vars.example apps/api/.dev.vars
    echo "✅ Created apps/api/.dev.vars (please update with your values)"
else
    echo "ℹ️  apps/api/.dev.vars already exists"
fi

# Setup Web environment
if [ ! -f "apps/web/.env.local" ]; then
    cp apps/web/.env.local.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local (please update with your values)"
else
    echo "ℹ️  apps/web/.env.local already exists"
fi

# Setup root environment
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created .env (please update with your values)"
else
    echo "ℹ️  .env already exists"
fi

echo ""
echo "🔧 Generating types..."
pnpm types:generate || echo "⚠️  Type generation failed - you may need to run this manually"

echo ""
echo "🗄️  Initializing local D1 database..."
# 初期化SQLとauth SQLを順番に実行
cd apps/api
echo "  📝 Creating initial tables..."
npx wrangler d1 execute DB --local --file=../../packages/database/drizzle/0000_init.sql || echo "⚠️  Initial table creation failed"
echo "  🔐 Creating auth tables..."
npx wrangler d1 execute DB --local --file=../../packages/database/drizzle/0001_auth.sql || echo "⚠️  Auth table creation failed"
cd ../..

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update environment variables in:"
echo "   - apps/api/.dev.vars"
echo "   - apps/web/.env.local"
echo "   - .env (if needed)"
echo ""
echo "2. Start development servers:"
echo "   pnpm dev"
echo ""
echo "3. Individual commands:"
echo "   pnpm dev:api    # Start API only"
echo "   pnpm dev:web    # Start Web only"
echo "   pnpm db:studio  # Open Drizzle Studio"
echo ""