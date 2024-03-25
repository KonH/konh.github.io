# Abort on errors
$ErrorActionPreference = "Stop"

Write-Host "Clean up old artifacts"
Remove-Item -Recurse -Force css, img, js -ErrorAction SilentlyContinue

Write-Host "Running build..."
npm run build

Write-Host "Copy artifacts to root path"
Copy-Item -Recurse -Force dist/* .

Write-Host "All done!"