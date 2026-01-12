# Deployment Guide - Next.js Blog on VPS with PM2

## Prerequisites

### On Your VPS (AlmaLinux)
- Node.js v22.21.1 installed
- PM2 installed globally: `npm install -g pm2`
- Nginx configured as reverse proxy
- Git installed
- SSH access enabled

### On GitHub
Repository secrets configured (Settings → Secrets and variables → Actions):
- `VPS_HOST`: Your VPS IP or domain (e.g., `nextblog.txogavideo.in` or IP)
- `VPS_USER`: SSH username (e.g., `root`)
- `VPS_SSH_KEY`: Private SSH key content (entire key including headers)

---

## Initial VPS Setup (One-Time)

### 1. Create Project Directory
```bash
mkdir -p /var/www/html/Next-JS-Blog-Website
cd /var/www/html/Next-JS-Blog-Website
```

### 2. Clone Repository
```bash
# Initialize git and add remote
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git fetch origin
git checkout main
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Create Environment File
```bash
cp .env.production.example .env.production
nano .env.production  # Edit with your actual values
```

### 5. Build Application
```bash
npm run build
```

### 6. Make Deploy Script Executable
```bash
chmod +x .scripts/deploy.sh
```

### 7. Start PM2
```bash
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup  # Follow the instructions to enable PM2 on system boot
```

### 8. Configure Nginx
Create/edit Nginx config at `/etc/nginx/conf.d/nextblog.conf`:

```nginx
server {
    listen 80;
    server_name nextblog.txogavideo.in;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Test and reload Nginx:
```bash
nginx -t
systemctl reload nginx
```

### 9. Configure Firewall
```bash
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --permanent --add-port=22/tcp
firewall-cmd --reload
```

---

## GitHub Actions Setup

### 1. Generate SSH Key (if not already done)
On your VPS:
```bash
ssh-keygen -t ed25519 -C "github-actions" -f /root/.ssh/nextblog_id_ed25519
```

### 2. Add Public Key to Authorized Keys
```bash
cat /root/.ssh/nextblog_id_ed25519.pub >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
```

### 3. Copy Private Key for GitHub Secret
```bash
cat /root/.ssh/nextblog_id_ed25519
```
Copy the **entire output** (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`) and add it to GitHub as `VPS_SSH_KEY` secret.

### 4. Test SSH Connection
From your local machine:
```bash
ssh -i path/to/private/key root@nextblog.txogavideo.in
```

---

## How Automatic Deployment Works

### Workflow Trigger
Every time you push to the `main` branch, GitHub Actions:

1. ✅ Checks out the code
2. ✅ Connects to VPS via SSH
3. ✅ Makes deploy script executable
4. ✅ Runs `.scripts/deploy.sh` which:
   - Fetches latest code from GitHub
   - Installs/updates dependencies
   - Builds the Next.js application
   - Reloads PM2 process (or starts if not running)
   - Saves PM2 configuration
   - Shows deployment status

### Manual Deployment
You can also trigger deployment manually:
- Go to: Actions → Deploy Next.js App to VPS → Run workflow

---

## Useful PM2 Commands

### Monitor Applications
```bash
pm2 list                    # List all processes
pm2 status                  # Show status
pm2 logs my-nextjs-app      # View logs
pm2 monit                   # Monitor in real-time
```

### Manage Application
```bash
pm2 restart my-nextjs-app   # Restart app
pm2 reload my-nextjs-app    # Reload (zero-downtime)
pm2 stop my-nextjs-app      # Stop app
pm2 delete my-nextjs-app    # Remove from PM2
```

### PM2 Configuration
```bash
pm2 save                    # Save current process list
pm2 resurrect               # Restore saved processes
pm2 startup                 # Generate startup script
```

---

## Troubleshooting

### Issue: Permission Denied on deploy.sh
**Solution**: SSH into VPS and run:
```bash
cd /var/www/html/Next-JS-Blog-Website
chmod +x .scripts/deploy.sh
```

### Issue: PM2 Process Not Found
**Solution**: Start the process manually:
```bash
cd /var/www/html/Next-JS-Blog-Website
pm2 start ecosystem.config.js --env production
pm2 save
```

### Issue: Build Fails
**Solution**: Check build logs and ensure all dependencies are installed:
```bash
npm install
npm run build
```

### Issue: SSH Timeout in GitHub Actions
**Causes**:
- Firewall blocking SSH (port 22)
- Wrong SSH credentials
- Network issues

**Solution**:
1. Verify SSH access locally
2. Check firewall: `firewall-cmd --list-all`
3. Ensure GitHub secrets are correct
4. Check SSH service: `systemctl status sshd`

### Issue: Site Not Accessible
**Checks**:
```bash
# Check if PM2 is running
pm2 list

# Check if app is on correct port
pm2 describe my-nextjs-app

# Check Nginx status
systemctl status nginx

# Check Nginx logs
tail -f /var/log/nginx/error.log

# Test local connection
curl http://localhost:4000
```

---

## Security Best Practices

### 1. Use Dedicated Deploy User (Recommended)
Instead of using `root`, create a dedicated user:

```bash
# Create deploy user
adduser deploy
usermod -aG wheel deploy  # Add to sudo group if needed

# Setup SSH for deploy user
mkdir -p /home/deploy/.ssh
cp /root/.ssh/authorized_keys /home/deploy/.ssh/
chown -R deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys

# Give ownership of project
chown -R deploy:deploy /var/www/html/Next-JS-Blog-Website

# Update ecosystem.config.js paths
# Update GitHub secret VPS_USER to 'deploy'
```

### 2. Use Environment Variables for Secrets
Never commit `.env.production` to Git. Always use `.env.production.example` as template.

### 3. Enable Fail2ban
Protect against brute-force SSH attacks:
```bash
dnf install fail2ban -y
systemctl enable fail2ban
systemctl start fail2ban
```

### 4. Keep System Updated
```bash
dnf update -y
```

### 5. Use HTTPS with Let's Encrypt
```bash
dnf install certbot python3-certbot-nginx -y
certbot --nginx -d nextblog.txogavideo.in
```

---

## File Permissions
Recommended permissions:
```bash
cd /var/www/html/Next-JS-Blog-Website
chmod 755 .scripts/deploy.sh
chmod 644 ecosystem.config.js
chmod 600 .env.production
chmod -R 755 .next
```

---

## Monitoring and Logs

### Application Logs
```bash
# PM2 logs
pm2 logs my-nextjs-app

# Specific log files
tail -f /root/.pm2/logs/nextjs-out.log
tail -f /root/.pm2/logs/nextjs-error.log
```

### Nginx Logs
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### System Logs
```bash
journalctl -u nginx -f
journalctl -xe
```

---

## Backup Strategy

### Database Backups (if applicable)
```bash
# Example for PostgreSQL
pg_dump -U user database > backup_$(date +%Y%m%d).sql
```

### Application Backups
```bash
# Backup entire application directory
tar -czf nextjs-backup-$(date +%Y%m%d).tar.gz /var/www/html/Next-JS-Blog-Website
```

---

## Support

For issues or questions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review PM2 logs: `pm2 logs my-nextjs-app`
3. Check GitHub Actions workflow logs
4. Review Nginx error logs

---

## Quick Reference

| Task | Command |
|------|---------|
| Deploy manually | `cd /var/www/html/Next-JS-Blog-Website && bash .scripts/deploy.sh` |
| View logs | `pm2 logs my-nextjs-app` |
| Restart app | `pm2 restart my-nextjs-app` |
| Check status | `pm2 status` |
| View site | http://nextblog.txogavideo.in |
| GitHub Actions | https://github.com/YOUR_USERNAME/YOUR_REPO/actions |
