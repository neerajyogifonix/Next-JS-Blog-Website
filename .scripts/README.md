# Deployment Scripts

This directory contains scripts for deploying the Next.js application.

## deploy.sh

Automated deployment script that:
- Fetches latest code from GitHub
- Installs dependencies
- Builds the Next.js application
- Manages PM2 process (start/reload)
- Saves PM2 configuration

### Usage

**On VPS (manual deployment):**
```bash
cd /var/www/html/Next-JS-Blog-Website
bash .scripts/deploy.sh
```

**Via GitHub Actions:**
Automatically triggered on push to `main` branch.

### Requirements
- Bash shell
- Git installed
- Node.js and npm
- PM2 installed globally
- Proper file permissions (`chmod +x deploy.sh`)

### Configuration
The script uses these variables (edit at the top of the file if needed):
- `APP_DIR`: Project directory path
- `APP_NAME`: PM2 process name (must match ecosystem.config.js)
- `BRANCH`: Git branch to deploy from

### Troubleshooting

**Permission denied:**
```bash
chmod +x .scripts/deploy.sh
```

**PM2 errors:**
Check that ecosystem.config.js exists and PM2 is installed:
```bash
pm2 --version
ls -la ecosystem.config.js
```

**Build fails:**
Check Node.js version and dependencies:
```bash
node --version
npm --version
rm -rf node_modules package-lock.json
npm install
```

## Adding More Scripts

To add new deployment scripts:
1. Create script in this directory
2. Make it executable: `chmod +x script-name.sh`
3. Add shebang at top: `#!/bin/bash`
4. Use `set -e` for automatic error handling
5. Update this README with usage instructions
