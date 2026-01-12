#!/bin/bash
set -e

APP_DIR="/var/www/html/Next-JS-Blog-Website"
APP_NAME="my-nextjs-app"
BRANCH="main"
ECOSYSTEM_FILE="$APP_DIR/ecosystem.config.js"

echo "========================================"
echo "🚀 Starting deployment for $APP_NAME"
echo "========================================"
echo "Time: $(date)"
echo "Directory: $APP_DIR"
echo "Branch: $BRANCH"
echo ""

# Navigate to app directory
cd $APP_DIR || { echo "❌ Failed to navigate to $APP_DIR"; exit 1; }

# Fetch latest code
echo "🔄 Fetching latest code from GitHub..."
git fetch origin || { echo "❌ Git fetch failed"; exit 1; }
git reset --hard origin/$BRANCH || { echo "❌ Git reset failed"; exit 1; }
echo "✓ Code updated to latest commit: $(git rev-parse --short HEAD)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit || npm install || { echo "❌ Dependency installation failed"; exit 1; }
echo "✓ Dependencies installed"
echo ""

# Build Next.js app
echo "🏗️ Building Next.js application..."
NODE_ENV=production npm run build || { echo "❌ Build failed"; exit 1; }
echo "✓ Build completed successfully"
echo ""

# PM2 process management
echo "♻️ Managing PM2 process..."

# Check if PM2 process exists
if pm2 describe $APP_NAME > /dev/null 2>&1; then
    echo "Process $APP_NAME exists, reloading..."
    pm2 reload $APP_NAME --update-env || { echo "❌ PM2 reload failed"; exit 1; }
    echo "✓ Process reloaded"
else
    echo "Process $APP_NAME not found, starting new instance..."
    pm2 start $ECOSYSTEM_FILE --env production || { echo "❌ PM2 start failed"; exit 1; }
    echo "✓ Process started"
fi
echo ""

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save --force || { echo "⚠️ PM2 save failed (non-critical)"; }
echo "✓ PM2 state saved"
echo ""

# Show PM2 status
echo "📊 Current PM2 status:"
pm2 list | grep -E "$APP_NAME|Process"
echo ""

echo "========================================"
echo "✅ Deployment finished successfully!"
echo "========================================"
echo "Time: $(date)"
echo "Application: http://nextblog.txogavideo.in"
echo ""
