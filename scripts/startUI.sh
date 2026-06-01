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

node server.js
