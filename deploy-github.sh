#!/usr/bin/env sh

# abort on errors
set -e

echo "Clean up old artifacts"
rm -rf css
rm -rf img
rm -rf js

echo "Running build..."
npm run build

echo "Copy artifacts to root path"
cp -R dist/. .

echo "All done!"