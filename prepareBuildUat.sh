set -Eeuo pipefail

git checkout main
git pull origin main

BUILD_ID_FILE=".next/BUILD_ID"
CURRENT_COMMIT_HASH=$(git rev-parse HEAD)

if [ -e "$BUILD_ID_FILE" ]; then
    # Read the stored commit hash from the BUILD_ID file
    STORED_COMMIT_HASH=$(cat "$BUILD_ID_FILE")

    # Compare the current commit hash with the stored commit hash
    if [ "$CURRENT_COMMIT_HASH" == "$STORED_COMMIT_HASH" ]; then
        echo "Current commit hash matches the stored commit hash. Exiting..."
    else
        echo "Current commit hash does not match the stored commit hash. Running 'yarn build'..."
        yarn build
    fi
else
    echo "BUILD_ID file not found. Running 'yarn build'..."
    yarn build
fi

echo "$CURRENT_COMMIT_HASH" > "$BUILD_ID_FILE"
echo "Build process completed."


BUILD_FOLDER_PATH=../absolute-ui

if [ ! -d "$BUILD_FOLDER_PATH" ]; then 
    git clone https://github.com/Absolute-PA/absolute-ui.git $BUILD_FOLDER_PATH
fi

rsync -av --progress ./.next $BUILD_FOLDER_PATH --exclude cache
cp -r ./certificates $BUILD_FOLDER_PATH/
cp -r ./public $BUILD_FOLDER_PATH/
cp ./package.json $BUILD_FOLDER_PATH/
cp ./.env.production $BUILD_FOLDER_PATH/
cp ./server.js $BUILD_FOLDER_PATH/
cp ./yarn.lock $BUILD_FOLDER_PATH/
cp -r ./scripts/ $BUILD_FOLDER_PATH/
cp ./newrelic.js $BUILD_FOLDER_PATH/
cp ./next.config.js $BUILD_FOLDER_PATH/

cd $BUILD_FOLDER_PATH

echo "\nNEXT_PUBLIC_APP_VERSION=$CURRENT_COMMIT_HASH" >> .env.production
git fetch
git checkout uat
git pull origin uat
git add .
git commit -m "Version: $CURRENT_COMMIT_HASH"
git push