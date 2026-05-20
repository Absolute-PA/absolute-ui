#!/bin/bash
git checkout main
git fetch origin
git reset --hard origin/main
yarn 
if ! test -f .env ; then 
    rm -rf .env
    cp .env.production .env
fi

NEXT_PUBLIC_HTTPS=true node server.js
