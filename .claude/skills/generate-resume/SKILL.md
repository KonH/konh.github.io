---
name: generate-resume
description: Refresh the CV/resume PDF from the ResumeBuilderData repo's built output and get the deployed root-level copy GitHub Pages serves back in sync. Use when the resume PDF in the sibling ResumeBuilderData repo (../ResumeBuilderData/users/konhit@gmail.com/resumes/base/resume.pdf) changed and this repo's public/Konstantin_Khitrykh_CV.pdf or root-level Konstantin_Khitrykh_CV.pdf needs to reflect it.
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
     to `public/Konstantin_Khitrykh_CV.pdf`.
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

## Two copies of the PDF — don't stop at `public/`

The repo also carries a copy of the resume PDF at the **repo root**
(`Konstantin_Khitrykh_CV.pdf`). GitHub Pages serves this user page from the
repo root of `master`, not from `public/`, so that root copy — not
`public/Konstantin_Khitrykh_CV.pdf` — is what's actually live at
`konh.github.io/Konstantin_Khitrykh_CV.pdf`. Regenerating the PDF only
writes `public/`; after that, copy it over the root copy too:

```
cp public/Konstantin_Khitrykh_CV.pdf Konstantin_Khitrykh_CV.pdf
```

(A full deploy via `deploy-github.ps1`/`deploy-github.sh` also refreshes
this file, along with `index.html`/`css/`/`js/`, but for just the resume
the plain copy above is all that's needed.)

## If it fails with "CV source PDF not found"

`generatePdf.ts` expects `../ResumeBuilderData` checked out as a sibling
directory of this repo. Build the PDF for the konhit@gmail.com user's base
position there first (see that repo's own CLAUDE.md/README), then re-run
this repo's build.
