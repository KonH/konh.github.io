---
name: deploy
description: Build and deploy this site to GitHub Pages by running deploy-github.ps1 (Windows) / deploy-github.sh (macOS/Linux), which builds and copies dist/* over the repo root, then committing and pushing to master. Use when the user asks to deploy, publish, or ship the site to production/GitHub Pages.
---

# Deploy

GitHub Pages serves this user page from the **repo root of `master`**
(see `Deployment model` in `CLAUDE.md`). Deploying means: build, copy the
build output over the repo root, commit, and push `master`.

## Steps

1. Make sure the working tree is otherwise clean and on (or merging into)
   `master` — deploying from a feature branch would land build artifacts in
   that branch's diff instead of on `master`. If not already on `master`,
   confirm with the user whether to merge/switch first.

2. Run the platform deploy script from the repo root:

   - Windows: `.\deploy-github.ps1`
   - macOS/Linux: `./deploy-github.sh`

   Each script:
   - Removes the existing root-level `css/`, `img/`, `js/` (stale generated
     artifacts from the last deploy).
   - Runs `npm run build` (`generateBlog.ts` → `generatePdf.ts` →
     `vue-cli-service build` → `postbuild.ts`).
   - Copies `dist/*` over the repo root — `index.html`, `404.html`, `css/`,
     `js/`, `img/`, and the CV PDF.

3. Review what changed:

   ```
   git status --short
   ```

   Expect `index.html`, `404.html`, `Konstantin_Khitrykh_CV.pdf`, and the
   `css/`/`js/`/`img/` directories to be modified/added — these are the
   generated artifacts described in `CLAUDE.md`, never hand-edited.

4. Commit and push to `master`:

   ```
   git add -A
   git commit -m "Deploy"
   git push origin master
   ```

   `master` is the deploy target itself, so this is one of the few cases
   where committing straight to `master` is correct — it does not need a
   feature branch (contrast with the branch-first rule in
   `.claude/commands/commit.md`, which is about source changes).

## Notes

- Never hand-edit `index.html`, `404.html`, `css/`, or `js/` at the repo
  root — change `src/`/`public/` and redeploy instead.
- If only the resume PDF needs refreshing (no site/content change), use the
  lighter-weight `generate-resume` skill instead of a full deploy.
- `Dockerfile`/`nginx.conf`/`deploy-docker.sh` are a legacy alternative
  deployment path; GitHub Pages via these scripts is the primary target.
