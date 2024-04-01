git checkout main
git fetch origin
git reset --hard origin/main
yarn 
cp .env.prod .env
NODE_ENV=production NODE_OPTIONS='-r @newrelic/next' HTTPS=true node server.js