git checkout main
git fetch origin
git reset --hard origin/main
yarn 
if ! test -f .env ; then 
    cp .env.production .env
fi

NEXT_PUBLIC_HTTPS=true NODE_OPTIONS='-r @newrelic/next' node server.js