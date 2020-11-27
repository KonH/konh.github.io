#!/usr/bin/env sh

# abort on errors
set -e

echo "Running build..."
npm run build

echo "Copy artifacts to root path"
cp -R dist/. .

echo "All done!"