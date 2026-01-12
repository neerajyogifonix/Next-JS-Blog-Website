#!/bin/bash
# Quick VPS Setup Script
# Run this on your VPS to verify/fix deployment setup

set -e

echo "========================================="
echo "🔧 Next.js Blog - VPS Setup Verification"
echo "========================================="
echo ""

APP_DIR="/var/www/html/Next-JS-Blog-Website"
APP_NAME="my-nextjs-app"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "⚠️  Warning: Not running as root. Some commands may fail."
    echo ""
fi

# 1. Check if project directory exists
echo "1️⃣  Checking project directory..."
if [ -d "$APP_DIR" ]; then
    echo "✅ Project directory exists: $APP_DIR"
else
    echo "❌ Project directory not found: $APP_DIR"
    echo "   Please create it first: mkdir -p $APP_DIR"
    exit 1
fi
echo ""

# 2. Navigate to project directory
cd "$APP_DIR" || exit 1

# 3. Check Git status
echo "2️⃣  Checking Git repository..."
if [ -d .git ]; then
    echo "✅ Git repository initialized"
    CURRENT_BRANCH=$(git branch --show-current)
    echo "   Current branch: $CURRENT_BRANCH"
    
    if git remote -v | grep -q "origin"; then
        echo "✅ Git remote 'origin' configured"
        git remote -v | head -n 1
    else
        echo "⚠️  Git remote 'origin' not configured"
        echo "   Add it with: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    fi
else
    echo "❌ Not a git repository"
    echo "   Initialize with: git init && git remote add origin YOUR_REPO_URL"
fi
echo ""

# 4. Check Node.js and npm
echo "3️⃣  Checking Node.js and npm..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js installed: $NODE_VERSION"
else
    echo "❌ Node.js not found"
    exit 1
fi

if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm installed: $NPM_VERSION"
else
    echo "❌ npm not found"
    exit 1
fi
echo ""

# 5. Check PM2
echo "4️⃣  Checking PM2..."
if command -v pm2 &> /dev/null; then
    PM2_VERSION=$(pm2 --version)
    echo "✅ PM2 installed: $PM2_VERSION"
else
    echo "❌ PM2 not installed"
    echo "   Install with: npm install -g pm2"
    exit 1
fi
echo ""

# 6. Check deploy script
echo "5️⃣  Checking deploy script..."
if [ -f ".scripts/deploy.sh" ]; then
    echo "✅ Deploy script exists"
    
    if [ -x ".scripts/deploy.sh" ]; then
        echo "✅ Deploy script is executable"
    else
        echo "⚠️  Deploy script not executable, fixing..."
        chmod +x .scripts/deploy.sh
        echo "✅ Execute permission added"
    fi
else
    echo "❌ Deploy script not found: .scripts/deploy.sh"
fi
echo ""

# 7. Check ecosystem config
echo "6️⃣  Checking PM2 ecosystem config..."
if [ -f "ecosystem.config.js" ]; then
    echo "✅ ecosystem.config.js exists"
else
    echo "❌ ecosystem.config.js not found"
fi
echo ""

# 8. Check environment file
echo "7️⃣  Checking environment file..."
if [ -f ".env.production" ]; then
    echo "✅ .env.production exists"
else
    echo "⚠️  .env.production not found"
    if [ -f ".env.production.example" ]; then
        echo "   Template available: .env.production.example"
        echo "   Create it with: cp .env.production.example .env.production"
    else
        echo "   No template found either"
    fi
fi
echo ""

# 9. Check dependencies
echo "8️⃣  Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules exists"
else
    echo "⚠️  node_modules not found"
    echo "   Install with: npm install"
fi
echo ""

# 10. Check Next.js build
echo "9️⃣  Checking Next.js build..."
if [ -d ".next" ]; then
    echo "✅ .next build directory exists"
else
    echo "⚠️  .next build directory not found"
    echo "   Build with: npm run build"
fi
echo ""

# 11. Check PM2 process
echo "🔟 Checking PM2 process..."
if pm2 describe "$APP_NAME" &> /dev/null; then
    echo "✅ PM2 process '$APP_NAME' exists"
    pm2 describe "$APP_NAME" | grep -E "status|pid|uptime|restarts"
else
    echo "⚠️  PM2 process '$APP_NAME' not running"
    echo "   Start with: pm2 start ecosystem.config.js --env production"
fi
echo ""

# 12. Check Nginx
echo "1️⃣1️⃣ Checking Nginx..."
if command -v nginx &> /dev/null; then
    echo "✅ Nginx installed"
    
    if systemctl is-active --quiet nginx; then
        echo "✅ Nginx is running"
    else
        echo "⚠️  Nginx is not running"
        echo "   Start with: systemctl start nginx"
    fi
    
    if nginx -t &> /dev/null; then
        echo "✅ Nginx configuration is valid"
    else
        echo "❌ Nginx configuration has errors"
        echo "   Check with: nginx -t"
    fi
else
    echo "⚠️  Nginx not found"
fi
echo ""

# 13. Check firewall
echo "1️⃣2️⃣ Checking firewall..."
if command -v firewall-cmd &> /dev/null; then
    echo "✅ Firewalld is available"
    
    if firewall-cmd --state &> /dev/null; then
        echo "✅ Firewall is running"
        
        # Check SSH port
        if firewall-cmd --list-ports | grep -q "22"; then
            echo "✅ SSH port (22) is open"
        elif firewall-cmd --list-services | grep -q "ssh"; then
            echo "✅ SSH service is allowed"
        else
            echo "⚠️  SSH port may not be open"
        fi
        
        # Check HTTP
        if firewall-cmd --list-services | grep -q "http"; then
            echo "✅ HTTP service is allowed"
        else
            echo "⚠️  HTTP service not allowed"
            echo "   Enable with: firewall-cmd --permanent --add-service=http"
        fi
    fi
else
    echo "ℹ️  Firewalld not detected (may be using different firewall)"
fi
echo ""

# Summary
echo "========================================="
echo "📋 Setup Summary"
echo "========================================="
echo ""

ISSUES=0

# Check critical requirements
[ ! -d "$APP_DIR" ] && ((ISSUES++))
[ ! -f ".scripts/deploy.sh" ] && ((ISSUES++))
[ ! -f "ecosystem.config.js" ] && ((ISSUES++))
[ ! -x ".scripts/deploy.sh" ] && ((ISSUES++))

if [ $ISSUES -eq 0 ]; then
    echo "✅ All critical requirements met!"
    echo ""
    echo "Next steps:"
    echo "1. Ensure .env.production is configured"
    echo "2. Run: npm install"
    echo "3. Run: npm run build"
    echo "4. Test deployment: bash .scripts/deploy.sh"
    echo "5. Configure GitHub Actions secrets"
else
    echo "⚠️  Found $ISSUES critical issue(s)"
    echo ""
    echo "Please fix the issues above before deploying"
fi

echo ""
echo "========================================="
echo "For detailed setup instructions, see:"
echo ".github/DEPLOYMENT_GUIDE.md"
echo "========================================="
