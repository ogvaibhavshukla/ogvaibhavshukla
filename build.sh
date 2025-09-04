#!/bin/bash

# Simple build script for Netlify
# This script replaces environment variable placeholders in config files

echo "Building website..."

# Replace environment variable placeholders
if [ -n "$GITHUB_TOKEN" ]; then
    echo "Setting GitHub token in contribution-calendar-config.js..."
    sed -i "s/%%GITHUB_TOKEN%%/$GITHUB_TOKEN/g" contribution-calendar-config.js
else
    echo "No GitHub token found, using empty string in contribution-calendar-config.js"
    sed -i "s/%%GITHUB_TOKEN%%//g" contribution-calendar-config.js
fi

echo "Build complete!"
