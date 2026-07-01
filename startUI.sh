#!/bin/bash

# Always run from the repo root regardless of how PM2 invokes this script.
cd "$(dirname "$(readlink -f "$0")")"

# Read device identity and version pin from local .env.device.
DEVICE_ENV=".env.device"
CHANNEL="stable"
PI_NAME=""
if [ -f "$DEVICE_ENV" ]; then
    _channel=$(grep "^CHANNEL=" "$DEVICE_ENV" | head -1 | cut -d'=' -f2-)
    _pi_name=$(grep "^PI_NAME=" "$DEVICE_ENV" | head -1 | cut -d'=' -f2-)
    [ -n "$_channel" ] && CHANNEL="$_channel"
    [ -n "$_pi_name" ] && PI_NAME="$_pi_name"
fi

# Resolve target version: local .env.device pin → hub manifest → "main".
HUB_URL="https://hub.absolutepa.com.au"
TARGET_VERSION=""

if [ -f "$DEVICE_ENV" ]; then
    _pinned=$(grep "^TARGET_VERSION_UI=" "$DEVICE_ENV" | head -1 | cut -d'=' -f2-)
    if [ -n "$_pinned" ]; then
        TARGET_VERSION="$_pinned"
        echo "Resolved ui version from .env.device pin: $TARGET_VERSION"
    fi
fi

if [ -z "$TARGET_VERSION" ]; then
    manifest_response=$(curl -skf --max-time 5 "$HUB_URL/api/manifest?channel=$CHANNEL" 2>/dev/null)
    if [ -n "$manifest_response" ]; then
        TARGET_VERSION=$(echo "$manifest_response" | grep -o '"ui":"[^"]*"' | cut -d'"' -f4)
        [ -n "$TARGET_VERSION" ] && echo "Resolved ui version from hub: $TARGET_VERSION"
    fi
fi

[ -z "$TARGET_VERSION" ] && TARGET_VERSION="main"

# Checkout the target version from origin.
git fetch origin --tags
if [ "$TARGET_VERSION" = "main" ]; then
    git reset --hard origin/main
else
    git reset --hard "$TARGET_VERSION"
fi

yarn

# Always start from build defaults.
if [ ! -f ".env.production" ]; then
    echo "Error: .env.production does not exist."
    exit 1
fi

cp .env.production .env
echo "Copied .env.production to .env."

# Apply device-specific overrides from .env.device (if present).
DEVICE_ENV=".env.device"
if [ -f "$DEVICE_ENV" ]; then
    echo "Applying device overrides from $DEVICE_ENV..."
    while IFS= read -r line || [ -n "$line" ]; do
        [[ -z "$line" || "$line" == \#* ]] && continue
        var_name=$(echo "$line" | cut -d '=' -f 1)
        var_value=$(echo "$line" | cut -d '=' -f 2-)
        if grep -q "^$var_name=" .env; then
            sed -i "s|^$var_name=.*|$var_name=$var_value|" .env
            echo "  Overrode $var_name"
        else
            [ -s .env ] && [ "$(tail -c1 .env)" != $'\n' ] && echo >> .env
            echo "$var_name=$var_value" >> .env
            echo "  Added $var_name"
        fi
    done < "$DEVICE_ENV"
    echo "Device overrides applied."
else
    echo "No $DEVICE_ENV found — using build defaults only."
fi

# Report startup to hub (non-fatal).
if [ -n "$PI_NAME" ]; then
    curl -skf --max-time 5 -X POST \
        -H "Content-Type: application/json" \
        -d "{\"device_id\":\"$PI_NAME\",\"channel\":\"$CHANNEL\",\"component\":\"ui\",\"version\":\"$TARGET_VERSION\"}" \
        "$HUB_URL/api/checkin" \
    && echo "Hub checkin OK: $PI_NAME ui@$TARGET_VERSION ($CHANNEL)" \
    || echo "Hub checkin failed (hub unreachable — startup continues)"
else
    echo "Hub checkin skipped — PI_NAME not set in $DEVICE_ENV"
fi

node server.js
