#!/usr/bin/env bash
# Update the live site after you push changes to GitHub.
# Run on the VPS as the site user:  bash deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

echo "→ Pulling latest code"
git pull --ff-only

echo "→ Installing packages"
npm install --no-audit --no-fund

echo "→ Building"
npm run build

echo "→ Restarting"
pm2 reload webetask-site || pm2 start ecosystem.config.cjs
pm2 save

echo "✓ Done. Check https://webetask.app"
