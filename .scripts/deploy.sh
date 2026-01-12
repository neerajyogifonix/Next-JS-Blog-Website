#!/bin/bash
set -e

APP_DIR="/var/www/html/Next-JS-Blog-Website"
APP_NAME="my-nextjs-app"
BRANCH="main"

echo "🚀 Starting deployment..."

cd $APP_DIR

echo "🔄 Fetching latest code..."
git fetch origin
git reset --hard origin/$BRANCH

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js app..."
npm run build

echo "♻️ Restarting PM2..."
pm2 start ecosystem.config.js --env production || pm2 restart $APP_NAME

echo "💾 Saving PM2 state..."
pm2 save

echo "✅ Deployment finished successfully!"
