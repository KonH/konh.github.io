---
name: generate-resume
description: Refresh the CV/resume PDF from the ResumeBuilderData repo's built output so the root-level copy GitHub Pages serves is back in sync. Use when the resume PDF in the sibling ResumeBuilderData repo (../ResumeBuilderData/users/konhit@gmail.com/resumes/base/resume.pdf) changed and this repo's root-level Konstantin_Khitrykh_CV.pdf needs to reflect it.
---

# Generate Resume

The CV PDF is no longer rendered in this repo. The source of truth is
`../ResumeBuilderData/users/konhit@gmail.com/resumes/base/resume.pdf` (the
base position for the konhit@gmail.com user, in a sibling repo checked out
next to this one) — build it there first if it's stale.
`src/scripts/generatePdf.ts` in this repo just copies that built PDF into
this repo's build pipeline; it does no rendering of its own.

## Steps

1. Run the existing build command from the repo root:

   ```
   npm run build
   ```

   This runs `generateBlog.ts` → `generatePdf.ts` → `vue-cli-service build` →
   `postbuild.ts` in sequence (see `package.json`). `generatePdf.ts`:
   - Copies `../ResumeBuilderData/users/konhit@gmail.com/resumes/base/resume.pdf`
     to the repo-root `Konstantin_Khitrykh_CV.pdf`.
   - Writes the new content hash to `src/model/CvVersion.ts` (cache-busts the
     resume link so browsers don't serve a stale PDF after deploy).

2. If only the PDF is needed (skip the webpack build), run the script
   directly instead:

   ```
   npx ts-node ./src/scripts/generatePdf.ts
   ```

3. Confirm the PDF updated and `src/model/CvVersion.ts` changed:

   ```
   git status --short
   ```

   Both files are tracked and get committed — the PDF ships with the build
   (see `Deployment model` in `CLAUDE.md`).

## One copy of the PDF

The repo keeps the resume in exactly one place: `Konstantin_Khitrykh_CV.pdf`
at the **repo root**, which is what GitHub Pages serves at
`konh.github.io/Konstantin_Khitrykh_CV.pdf`. `generatePdf.ts` writes that
file directly, so there is nothing to copy afterwards — no `public/` or
`dist/` intermediate. `npm run serve` serves that root file through the
`devServer` hook in `vue.config.js`.

Note that the link on the page carries `?v=<CV_VERSION>`, and `CV_VERSION`
is compiled into the JS bundle. Refreshing the PDF alone leaves the deployed
bundle pointing at the old hash, so a full deploy (`deploy-github.ps1` /
`deploy-github.sh`) is what actually cache-busts it for visitors.

## If it fails with "CV source PDF not found"

`generatePdf.ts` expects `../ResumeBuilderData` checked out as a sibling
directory of this repo. Build the PDF for the konhit@gmail.com user's base
position there first (see that repo's own CLAUDE.md/README), then re-run
this repo's build.
