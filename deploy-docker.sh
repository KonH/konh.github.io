#!/usr/bin/env sh

# abort on errors
set -e

echo "Clean up old artifacts"
rm -rf css
rm -rf img
rm -rf js

echo "Install dependencies..."
npm install

echo "Running build..."
npm run build

echo "Copy artifacts to root path"
cp -R dist/. .

echo "Stop running container"
docker stop konh.github.io && docker rm konh.github.io || true

echo "Building container..."
docker build -t konh.github.io .

echo "Start container"
docker run -dp 8081:8081 --name=konh.github.io konh.github.io

echo "All done!"
