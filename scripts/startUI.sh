git checkout main
git fetch origin
git reset --hard origin/main
yarn 

# Define the source and destination file paths
SOURCE_FILE=".env.production"
DEST_FILE=".env"

# Check if the source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: $SOURCE_FILE does not exist."
    exit 1
fi

# Loop through each line in the source file
while IFS= read -r line; do
    # Extract variable name and value
    var_name=$(echo "$line" | cut -d '=' -f 1)
    var_value=$(echo "$line" | cut -d '=' -f 2-)

    # Check if the variable already exists in the destination file
    if grep -q "^$var_name=" "$DEST_FILE"; then
        echo "Variable '$var_name' already exists in $DEST_FILE. Skipping..."
    else
        # Append the variable to the destination file
        echo "$var_name=$var_value" >> "$DEST_FILE"
        echo "Inserted variable '$var_name' into $DEST_FILE."
    fi
done < "$SOURCE_FILE"

echo "Copy completed."

NEXT_PUBLIC_HTTPS=true NODE_OPTIONS='-r @newrelic/next' node server.js