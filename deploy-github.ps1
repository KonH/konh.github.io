# Abort on errors
$ErrorActionPreference = "Stop"

Write-Host "Clean up old artifacts"
Remove-Item -Recurse -Force css, img, js -ErrorAction SilentlyContinue

Write-Host "Running build..."
# npm run build shells out to native tools (vue-cli-service's progress
# spinner writes status lines to stderr by convention). Under
# $ErrorActionPreference = "Stop", PowerShell turns any stderr write from a
# native process into a terminating NativeCommandError immediately -
# regardless of the real exit code - so a harmless progress line would abort
# the script right there. Temporarily relax to "Continue" for this call and
# check $LASTEXITCODE ourselves instead, so only an actual build failure
# aborts the script.
$previousErrorActionPreference = $ErrorActionPreference
$ErrorActionPreference = "Continue"
npm run build
$ErrorActionPreference = $previousErrorActionPreference
if ($LASTEXITCODE -ne 0) {
    throw "npm run build failed with exit code $LASTEXITCODE"
}

Write-Host "Copy artifacts to root path"
Copy-Item -Recurse -Force dist/* .

Write-Host "All done!"