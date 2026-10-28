// PM2 keeps the website running and restarts it if it crashes.
// Start:   pm2 start ecosystem.config.cjs
// Reload:  pm2 reload webetask-site
// Logs:    pm2 logs webetask-site
module.exports = {
  apps: [
    {
      name: "webetask-site",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      env: { NODE_ENV: "production" },
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
    },
  ],
};
