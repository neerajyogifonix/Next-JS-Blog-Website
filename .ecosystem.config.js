module.exports = {
  apps: [
    {
      name: "my-nextjs-app",

      // Start Next.js in production mode
      script: "node_modules/.bin/next",
      args: "start -p 4000",

      // Run from project root
      cwd: "/var/www/html/Next-JS-Blog-Website",

      // Environment variables
      env: {
        NODE_ENV: "production",
        PORT: 4000
      },

      // Load environment variables from file
      env_file: ".env.production",

      instances: 1,          // keep 1 for Next.js (unless using cluster carefully)
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",

      // Better logging
      out_file: "/root/.pm2/logs/nextjs-out.log",
      error_file: "/root/.pm2/logs/nextjs-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};
