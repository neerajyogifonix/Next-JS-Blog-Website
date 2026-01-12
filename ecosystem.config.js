module.exports = {
  apps: [
    {
      name: "my-nextjs-app",

      // Use npm start script (more reliable than direct binary)
      script: "npm",
      args: "start",

      // Run from project root
      cwd: "/var/www/html/Next-JS-Blog-Website",

      // Environment variables
      env: {
        NODE_ENV: "production",
        PORT: 4000
      },

      // Load environment variables from file (if exists)
      env_file: ".env.production",

      // PM2 runtime options
      instances: 1,          // Single instance for Next.js
      exec_mode: "fork",     // Use fork mode (not cluster for Next.js)
      autorestart: true,
      watch: false,          // Don't watch files in production
      max_memory_restart: "1G",
      
      // Kill timeout
      kill_timeout: 5000,
      
      // Wait for app to be ready
      wait_ready: false,
      
      // Logging
      out_file: "/root/.pm2/logs/nextjs-out.log",
      error_file: "/root/.pm2/logs/nextjs-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      
      // Environment-specific settings
      env_production: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};
