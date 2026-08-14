---
name: generate-resume
description: Regenerate the CV/resume PDF from the current model data (WorkModel, SkillModel, CvData) using the project's build pipeline. Use when work history, skills, education, or other resume content changed in src/model and the shipped PDF at public/Konstantin_Khitrykh_CV.pdf needs to reflect it.
---

# Generate Resume

The CV PDF is not hand-edited — it's rendered from `src/model/*.ts` (WorkModel,
SkillModel, CvData) by `src/scripts/generatePdf.ts` via Puppeteer, as one step
of the existing build pipeline.

## Steps

1. Run the existing build command from the repo root:

   ```
   npm run build
   ```

   This runs `generateBlog.ts` → `generatePdf.ts` → `vue-cli-service build` →
   `postbuild.ts` in sequence (see `package.json`). `generatePdf.ts`:
   - Renders CV content from `WorkModel`, `SkillModel`, and `CvData` to HTML.
   - Prints it to `public/Konstantin_Khitrykh_CV.pdf` via Puppeteer.
   - Writes the new content hash to `src/model/CvVersion.ts` (cache-busts the
     resume link so browsers don't serve a stale PDF after deploy).

2. If only the PDF is needed (skip the webpack build), run the script
   directly instead:

   ```
   npx ts-node ./src/scripts/generatePdf.ts
   ```

3. Confirm the PDF regenerated and `src/model/CvVersion.ts` changed:

   ```
   git status --short
   ```

   Both files are tracked and get committed — the PDF ships with the build
   (see `Deployment model` in `CLAUDE.md`).

## Puppeteer/Chrome resolution

`generatePdf.ts` resolves a browser executable in this order:

1. `PUPPETEER_EXECUTABLE_PATH` env var, if set.
2. Puppeteer's own managed Chrome download (`puppeteer.executablePath()`),
   if present on disk.
3. A detected system Chrome/Edge install (checked in
   `SYSTEM_BROWSER_CANDIDATES` in `generatePdf.ts`).

If none resolve, it launches with no `executablePath` (puppeteer's default
behavior) and prints a warning suggesting `npx puppeteer browsers install
chrome` or setting `PUPPETEER_EXECUTABLE_PATH`.

### If generation fails with "Could not find Chrome"

This means puppeteer's managed download is missing *and* no system browser
was found in the hardcoded candidate list. Fix with one of:

- Install puppeteer's managed Chrome: `npx puppeteer browsers install
  chrome`. If this errors with "the executable is missing" even after
  install, a previous download is corrupted/partial — delete
  `<puppeteer cache dir>/chrome/win64-<version>` (Windows:
  `%LOCALAPPDATA%\puppeteer\... ` or `~/.cache/puppeteer/chrome/...`) and
  retry.
- Point `PUPPETEER_EXECUTABLE_PATH` at any installed Chrome/Edge/Chromium
  executable.
- Add the machine's browser path to `SYSTEM_BROWSER_CANDIDATES` in
  `generatePdf.ts` if it's a common location worth detecting automatically.
