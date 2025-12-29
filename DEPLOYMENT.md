# Deployment Guide for Hostinger

## Prerequisites
- Node.js 20.x or higher
- Git installed on Hostinger server

## Deployment Steps

### 1. Clone Repository on Hostinger
```bash
git clone <your-github-repo-url>
cd next-blog
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Application
```bash
npm run build
```

### 4. Start the Application
```bash
npm start
```

## Running with PM2 (Recommended)

PM2 keeps your application running in the background:

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "next-blog" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on server reboot
pm2 startup
```

## Environment Variables

If you need environment variables:
1. Create a `.env.local` file in the project root
2. Add your environment variables (refer to `.env.example`)
3. Rebuild the application: `npm run build`

## Port Configuration

By default, Next.js runs on port 3000. To change the port:

```bash
# Using PORT environment variable
PORT=8080 npm start

# Or with PM2
PORT=8080 pm2 start npm --name "next-blog" -- start
```

## Troubleshooting

### Build fails
- Ensure Node.js version is 20.x or higher
- Clear cache: `rm -rf .next node_modules && npm install`

### Application won't start
- Check if port is already in use
- Verify all dependencies are installed
- Check server logs for errors

## Updating the Application

```bash
# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart (if using PM2)
pm2 restart next-blog
```
