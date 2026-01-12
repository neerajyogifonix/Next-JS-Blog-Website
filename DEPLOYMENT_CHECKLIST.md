# Pre-Deployment Checklist

Use this checklist before deploying to ensure everything is configured correctly.

## ✅ VPS Setup

### System Requirements
- [ ] AlmaLinux server accessible via SSH
- [ ] Node.js v22.21.1+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] PM2 installed globally (`pm2 --version`)
- [ ] Git installed (`git --version`)
- [ ] Nginx installed and running (`systemctl status nginx`)

### Project Setup
- [ ] Project directory exists: `/var/www/html/Next-JS-Blog-Website`
- [ ] Repository cloned and on `main` branch
- [ ] `.env.production` file created with actual values
- [ ] Deploy script is executable (`ls -la .scripts/deploy.sh` should show `x` permissions)
- [ ] Dependencies installed (`node_modules/` exists)
- [ ] Application builds successfully (`npm run build` completes without errors)

### PM2 Configuration
- [ ] PM2 ecosystem file exists: `ecosystem.config.js`
- [ ] PM2 logs directory exists: `/root/.pm2/logs/`
- [ ] PM2 process can start: `pm2 start ecosystem.config.js --env production`
- [ ] PM2 process shows as running: `pm2 list`
- [ ] PM2 startup configured: `pm2 startup` (follow instructions)
- [ ] PM2 state saved: `pm2 save`

### Nginx Configuration
- [ ] Nginx config file exists (e.g., `/etc/nginx/conf.d/nextblog.conf`)
- [ ] Proxy pass configured to `http://localhost:4000`
- [ ] Server name matches domain: `nextblog.txogavideo.in`
- [ ] Nginx config test passes: `nginx -t`
- [ ] Nginx reloaded: `systemctl reload nginx`

### Firewall & Network
- [ ] Port 22 (SSH) open: `firewall-cmd --list-ports`
- [ ] Port 80 (HTTP) open
- [ ] Port 443 (HTTPS) open (if using SSL)
- [ ] Domain DNS points to VPS IP
- [ ] Application accessible at http://nextblog.txogavideo.in

---

## ✅ GitHub Setup

### Repository
- [ ] Code pushed to GitHub repository
- [ ] Repository has `main` branch
- [ ] `.github/workflows/deploy.yml` exists
- [ ] `.scripts/deploy.sh` exists in repository
- [ ] `ecosystem.config.js` exists in repository
- [ ] `.env.production` is in `.gitignore` (should NOT be in repo)
- [ ] `.env.production.example` exists (should be in repo)

### GitHub Secrets
Go to: Repository → Settings → Secrets and variables → Actions

- [ ] `VPS_HOST` secret configured (IP address or domain)
  - Example value: `nextblog.txogavideo.in` or `192.168.1.100`
  
- [ ] `VPS_USER` secret configured (SSH username)
  - Example value: `root` or `deploy`
  
- [ ] `VPS_SSH_KEY` secret configured (private SSH key)
  - Must include full key including headers:
    ```
    -----BEGIN OPENSSH PRIVATE KEY-----
    ... key content ...
    -----END OPENSSH PRIVATE KEY-----
    ```
  - No extra spaces or newlines at start/end

### SSH Access
- [ ] SSH key pair generated on VPS
- [ ] Public key added to `~/.ssh/authorized_keys` on VPS
- [ ] SSH connection works from external machine
- [ ] Test: `ssh -i /path/to/key username@host` succeeds

---

## ✅ Local Repository

### Files Modified/Created
- [ ] [.scripts/deploy.sh](.scripts/deploy.sh) - Updated with better error handling
- [ ] [.github/workflows/deploy.yml](.github/workflows/deploy.yml) - Fixed permissions and timeout
- [ ] [ecosystem.config.js](ecosystem.config.js) - Updated to use npm script
- [ ] [.env.production.example](.env.production.example) - Created as template
- [ ] [.github/DEPLOYMENT_GUIDE.md](.github/DEPLOYMENT_GUIDE.md) - Complete guide
- [ ] [.scripts/README.md](.scripts/README.md) - Scripts documentation

### Git Status
- [ ] Changes committed to git
- [ ] Committed to `main` branch (or your default branch)
- [ ] Pushed to GitHub: `git push origin main`

---

## ✅ Testing Deployment

### Manual Test (on VPS)
SSH into your VPS and run:
```bash
cd /var/www/html/Next-JS-Blog-Website
bash .scripts/deploy.sh
```

Expected result:
- ✅ Script runs without errors
- ✅ Dependencies installed
- ✅ Build succeeds
- ✅ PM2 process running
- ✅ Site accessible at http://nextblog.txogavideo.in

### Automatic Test (via GitHub Actions)
1. Make a small change to your code (e.g., update README)
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
3. Go to GitHub → Actions tab
4. Watch the workflow run

Expected result:
- ✅ Workflow starts automatically
- ✅ All steps complete successfully (green checkmarks)
- ✅ Site updates with your changes
- ✅ No errors in workflow logs

---

## ✅ Post-Deployment Verification

### Application Status
- [ ] Visit http://nextblog.txogavideo.in - site loads correctly
- [ ] Check PM2 status: `pm2 list` shows process running
- [ ] Check PM2 logs: `pm2 logs my-nextjs-app` - no errors
- [ ] Check process memory: Should be under 1GB (max_memory_restart)

### Logs Review
- [ ] PM2 logs clean: `pm2 logs my-nextjs-app --lines 50`
- [ ] Nginx access log shows requests: `tail -f /var/log/nginx/access.log`
- [ ] No errors in Nginx: `tail -f /var/log/nginx/error.log`

### GitHub Actions
- [ ] Latest workflow run shows success (green checkmark)
- [ ] Workflow completed in reasonable time (< 10 minutes)
- [ ] No timeout errors
- [ ] No permission errors

---

## 🔧 Common Issues & Quick Fixes

### Deploy script permission denied
```bash
ssh user@vps
cd /var/www/html/Next-JS-Blog-Website
chmod +x .scripts/deploy.sh
```

### PM2 process not found
```bash
ssh user@vps
cd /var/www/html/Next-JS-Blog-Website
pm2 delete my-nextjs-app  # Remove old process
pm2 start ecosystem.config.js --env production
pm2 save
```

### Build fails
```bash
ssh user@vps
cd /var/www/html/Next-JS-Blog-Website
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### GitHub Actions SSH timeout
1. Verify firewall allows SSH: `firewall-cmd --list-all`
2. Test SSH locally: `ssh user@vps`
3. Check GitHub secrets are correct
4. Verify SSH service running: `systemctl status sshd`

### Site not accessible
```bash
# Check if app is running
pm2 list

# Check if port is correct
pm2 describe my-nextjs-app | grep PORT

# Test local connection
curl http://localhost:4000

# Check Nginx
nginx -t
systemctl status nginx
systemctl restart nginx
```

---

## 📝 Notes

- Run manual deployment first before relying on GitHub Actions
- Always check logs if something fails: `pm2 logs my-nextjs-app`
- Keep GitHub secrets secure - never commit them to repository
- Test in dev environment before pushing to production
- Monitor resource usage: `pm2 monit`

---

## Next Steps After Checklist

Once all items are checked:

1. ✅ Commit and push changes to GitHub
2. ✅ Monitor first automatic deployment
3. ✅ Set up monitoring (optional): PM2 Plus, UptimeRobot, etc.
4. ✅ Configure SSL certificate (Let's Encrypt)
5. ✅ Set up automated backups
6. ✅ Create a rollback plan

---

**Last Updated:** January 12, 2026
**Project:** Next.js Blog
**VPS:** nextblog.txogavideo.in
