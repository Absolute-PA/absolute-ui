set -Eeuo pipefail

git checkout main
git pull origin main

BUILD_ID_FILE=".next/BUILD_ID"
CURRENT_COMMIT_HASH=$(git rev-parse HEAD)

npm version  --allow-same-version patch -m "Update version to %s"
APP_VERSION=$(node -p -e "require('./package.json').version")
echo App version is $APP_VERSION
git push

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
cp ./scripts/startUI.sh $BUILD_FOLDER_PATH/scripts/
cp ./newrelic.js $BUILD_FOLDER_PATH/
cp ./next.config.js $BUILD_FOLDER_PATH/

APP_VERSION=$(node -p -e "require('./package.json').version")

cd $BUILD_FOLDER_PATH

echo "\nNEXT_PUBLIC_APP_VERSION=$APP_VERSION" >> .env.production
git checkout main
git pull origin main
git add .
git commit -m "Version: $APP_VERSION"
git push