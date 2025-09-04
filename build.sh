#!/bin/bash

# Simple build script for Netlify
# This script replaces environment variable placeholders in HTML files

echo "Building website..."

# Replace environment variable placeholders
if [ -n "$GITHUB_TOKEN" ]; then
    echo "Setting GitHub token..."
    sed -i "s/%%GITHUB_TOKEN%%/$GITHUB_TOKEN/g" index.html
else
    echo "No GitHub token found, using empty string"
    sed -i "s/%%GITHUB_TOKEN%%//g" index.html
fi

echo "Build complete!"
