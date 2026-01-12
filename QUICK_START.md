# 🚀 Quick Start - Deploy in 5 Minutes

This is the fastest path to get your deployment working. For detailed information, see [.github/DEPLOYMENT_GUIDE.md](.github/DEPLOYMENT_GUIDE.md).

---

## Prerequisites ✅

- VPS with AlmaLinux, Node.js v22+, PM2, and Nginx
- GitHub repository with your code
- SSH access to your VPS
- Domain pointing to your VPS (nextblog.txogavideo.in)

---

## Step 1: Configure GitHub Secrets (2 mins)

Go to: **Your GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

Add these 3 secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `VPS_HOST` | Your domain or IP | `nextblog.txogavideo.in` |
| `VPS_USER` | SSH username | `root` |
| `VPS_SSH_KEY` | Full private SSH key | Copy entire key from VPS |

**To get your SSH key:**
```bash
# On your VPS
cat /root/.ssh/nextblog_id_ed25519
# Copy the entire output including headers
```

---

## Step 2: Prepare VPS (2 mins)

SSH into your VPS and run:

```bash
# Navigate to project directory
cd /var/www/html/Next-JS-Blog-Website

# Pull latest changes
git fetch origin
git checkout main
git reset --hard origin/main

# Make deploy script executable
chmod +x .scripts/deploy.sh

# Create environment file
cp .env.production.example .env.production
nano .env.production  # Edit with your actual values (if any)

# Install dependencies
npm install

# Build the app
npm run build

# Start PM2
pm2 start ecosystem.config.js --env production
pm2 save
pm2 list  # Verify it's running
```

**Optional: Run setup verification**
```bash
bash .scripts/vps-setup-check.sh
```

---

## Step 3: Test Manual Deployment (30 seconds)

```bash
# Still on VPS
cd /var/www/html/Next-JS-Blog-Website
bash .scripts/deploy.sh
```

**Expected output:**
```
🚀 Starting deployment for my-nextjs-app
✓ Code updated
✓ Dependencies installed
✓ Build completed
✓ Process reloaded
✅ Deployment finished successfully!
```

If you see this, manual deployment works! ✅

---

## Step 4: Test Automatic Deployment (30 seconds)

On your local machine:

```bash
# Make a small change (update README or any file)
echo "# Test deployment" >> README.md

# Commit and push
git add .
git commit -m "Test: Trigger automated deployment"
git push origin main
```

Then:
1. Go to **GitHub → Your Repo → Actions tab**
2. Watch "Deploy Next.js App to VPS" workflow
3. Wait for green checkmark ✅ (takes 2-5 minutes)
4. Visit http://nextblog.txogavideo.in to see changes

---

## Step 5: Verify Everything Works (30 seconds)

```bash
# Check PM2 status
ssh root@nextblog.txogavideo.in "pm2 list"

# Check logs
ssh root@nextblog.txogavideo.in "pm2 logs my-nextjs-app --lines 20"

# Visit your site
curl http://nextblog.txogavideo.in
# or visit in browser
```

---

## ✅ Success Checklist

- [ ] GitHub secrets configured (3 secrets)
- [ ] VPS has executable deploy script
- [ ] Manual deployment works (`bash .scripts/deploy.sh`)
- [ ] PM2 process running (`pm2 list`)
- [ ] Site loads at http://nextblog.txogavideo.in
- [ ] GitHub Actions workflow succeeds (green checkmark)
- [ ] Push triggers automatic deployment

---

## 🎉 Done!

Your CI/CD pipeline is now live! Every `git push origin main` will automatically:
1. Trigger GitHub Actions
2. SSH into your VPS
3. Pull latest code
4. Build your Next.js app
5. Reload PM2 process
6. Update your live site

---

## 🆘 Common Issues

### ❌ "Permission denied" on deploy.sh
```bash
ssh root@nextblog.txogavideo.in
cd /var/www/html/Next-JS-Blog-Website
chmod +x .scripts/deploy.sh
```

### ❌ "PM2 process not found"
```bash
ssh root@nextblog.txogavideo.in
cd /var/www/html/Next-JS-Blog-Website
pm2 start ecosystem.config.js --env production
pm2 save
```

### ❌ GitHub Actions "SSH timeout"
- Check firewall: `firewall-cmd --list-all` (port 22 should be open)
- Test SSH: `ssh root@nextblog.txogavideo.in`
- Verify GitHub secrets (no extra spaces/newlines)

### ❌ "Build failed"
```bash
ssh root@nextblog.txogavideo.in
cd /var/www/html/Next-JS-Blog-Website
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Need More Help?

- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Detailed verification checklist
- **[.github/DEPLOYMENT_GUIDE.md](.github/DEPLOYMENT_GUIDE.md)** - Complete setup guide
- **[DEPLOYMENT_FIX_SUMMARY.md](DEPLOYMENT_FIX_SUMMARY.md)** - What was fixed and why

---

## 🔧 Useful Commands

```bash
# Check PM2 status
pm2 list

# View logs
pm2 logs my-nextjs-app

# Restart app
pm2 restart my-nextjs-app

# Manual deploy
ssh root@nextblog.txogavideo.in "cd /var/www/html/Next-JS-Blog-Website && bash .scripts/deploy.sh"
```

---

**Time to deploy:** ~5 minutes  
**Future deploys:** Automatic on every push!  
**Your site:** http://nextblog.txogavideo.in

Happy deploying! 🚀
