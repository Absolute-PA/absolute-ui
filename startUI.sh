git checkout main
git fetch origin
git reset --hard origin/main
yarn 
cp .env.production .env
NEXT_PUBLIC_HTTPS=true NODE_OPTIONS='-r @newrelic/next' node server.js