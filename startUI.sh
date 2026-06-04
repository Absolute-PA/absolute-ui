#!/bin/bash
git checkout main
git fetch origin
git reset --hard origin/main
yarn

# Always start from build defaults so version info and new flags are always current.
if [ ! -f ".env.production" ]; then
    echo "Error: .env.production does not exist."
    exit 1
fi

cp .env.production .env
echo "Copied .env.production to .env."

# Apply device-specific overrides from .env.device (if present).
# .env.device is created manually once per device for values that differ from
# build defaults (e.g. NEXT_PUBLIC_SERVER_PORT, PORT). It is never committed
# to git and is never modified by this script, so device values are always safe.
DEVICE_ENV=".env.device"
if [ -f "$DEVICE_ENV" ]; then
    echo "Applying device overrides from $DEVICE_ENV..."
    while IFS= read -r line || [ -n "$line" ]; do
        # Skip blank lines and comments
        [[ -z "$line" || "$line" == \#* ]] && continue
        var_name=$(echo "$line" | cut -d '=' -f 1)
        var_value=$(echo "$line" | cut -d '=' -f 2-)
        if grep -q "^$var_name=" .env; then
            sed -i "s|^$var_name=.*|$var_name=$var_value|" .env
            echo "  Overrode $var_name"
        else
            echo "$var_name=$var_value" >> .env
            echo "  Added $var_name"
        fi
    done < "$DEVICE_ENV"
    echo "Device overrides applied."
else
    echo "No $DEVICE_ENV found — using build defaults only."
fi

# Read device identity and channel from the API's .env.device for hub reporting.
API_DEVICE_ENV="../absolute-api/.env.device"
CHANNEL="stable"
PI_NAME=""
if [ -f "$API_DEVICE_ENV" ]; then
    _channel=$(grep "^CHANNEL=" "$API_DEVICE_ENV" | head -1 | cut -d'=' -f2-)
    _pi_name=$(grep "^PI_NAME=" "$API_DEVICE_ENV" | head -1 | cut -d'=' -f2-)
    [ -n "$_channel" ] && CHANNEL="$_channel"
    [ -n "$_pi_name" ] && PI_NAME="$_pi_name"
fi

# Resolve target version: hub manifest → local fallback file → "main".
HUB_URL="https://absolutepa-hub.vercel.app"
TARGET_VERSION=""

manifest_response=$(curl -sf --max-time 5 "$HUB_URL/api/manifest?channel=$CHANNEL" 2>/dev/null)
if [ -n "$manifest_response" ]; then
    TARGET_VERSION=$(echo "$manifest_response" | grep -o '"ui":"[^"]*"' | cut -d'"' -f4)
    [ -n "$TARGET_VERSION" ] && echo "Resolved ui version from hub: $TARGET_VERSION"
fi

if [ -z "$TARGET_VERSION" ]; then
    TARGET_VERSION_FILE=".target-version-ui"
    if [ -f "$TARGET_VERSION_FILE" ]; then
        TARGET_VERSION=$(tr -d '[:space:]' < "$TARGET_VERSION_FILE")
        echo "Resolved ui version from local file: $TARGET_VERSION"
    fi
fi

[ -z "$TARGET_VERSION" ] && TARGET_VERSION="main"

# Report startup to hub (non-fatal — hub may be unreachable on initial deploy).
if [ -n "$PI_NAME" ]; then
    curl -sf --max-time 5 -X POST \
        -H "Content-Type: application/json" \
        -d "{\"device_id\":\"$PI_NAME\",\"channel\":\"$CHANNEL\",\"component\":\"ui\",\"version\":\"$TARGET_VERSION\"}" \
        "$HUB_URL/api/checkin" \
    && echo "Hub checkin OK: $PI_NAME ui@$TARGET_VERSION ($CHANNEL)" \
    || echo "Hub checkin failed (hub unreachable — startup continues)"
else
    echo "Hub checkin skipped — PI_NAME not set in $API_DEVICE_ENV"
fi

node server.js
