# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio/CV site for Konstantin Khitrykh (KonH), served as a GitHub Pages **user page** at konh.github.io. Vue 3 + TypeScript SPA built with Vue CLI 5 (webpack).

## Commands

```bash
npm install            # setup
npm run serve          # dev server with hot reload
npm run lint           # ESLint + Prettier (auto-fixes files)
npm run build          # full production build (see pipeline below)
.\deploy-github.ps1    # Windows: clean old artifacts, build, copy dist/* to repo root
./deploy-github.sh     # macOS/Linux equivalent
```

There are no unit tests in this repo.

`npm run refresh_all_projects` / `npm run refresh_pull_requests` regenerate the JSON files in `src/assets/` from the GitHub API. They require the `GithubExplorer.CommandLine` dotnet tool and a `GH_ACCESS_TOKEN` env var — normally not something to run during code changes.

## Build pipeline

`npm run build` runs three steps in order (see `package.json`):

1. `src/scripts/generatePdf.ts` — renders the CV as HTML and prints it via Puppeteer to `public/Konstantin_Khitrykh_CV.pdf` (a gitignored build intermediate — the deploy scripts copy the built `dist/Konstantin_Khitrykh_CV.pdf` to the repo root, which is the single committed copy actually served), so the PDF ships with the build. Honors `PUPPETEER_EXECUTABLE_PATH`; otherwise falls back from puppeteer's managed Chrome to a detected system Chrome/Edge install if the managed download is missing or corrupted.
2. `vue-cli-service build` — webpack build into `dist/`.
3. `src/scripts/postbuild.ts` — copies `dist/index.html` to `dist/404.html`.

## Deployment model (important)

GitHub Pages serves this user page **from the repo root of `master`**. `dist/` is gitignored; the deploy scripts copy the build output (`css/`, `js/`, `img/`, `index.html`, `404.html`, the CV PDF) into the repo root, where it is committed. Consequences:

- `index.html`, `404.html`, `css/`, `js/` at the root are **generated artifacts** — never hand-edit them; change `src/`/`public/` and rebuild.
- SPA deep links work via the 404 trick: `404.html` is a copy of `index.html`, plus a `sessionStorage.redirect` handoff read by `src/router/index.ts`.

`Dockerfile`/`nginx.conf`/`deploy-docker.sh` are a legacy alternative deployment via nginx; GitHub Pages is the primary target.

## Architecture

- **Content is typed code.** All CV/site content (skills, work history, education, languages, contacts, PDF-only data) lives as static data in `src/model/*.ts` classes/exports — there is no CMS or backend. The web pages and the generated PDF both read the same models, so editing a model updates both.
- Routes in `src/router/index.ts` map one-to-one to top-level components in `src/components/` (PersonalInfo, SkillList, WorkHistory, ProjectList, PullRequestList, ContactList); list components render item components (Skill, Project, PullRequest, Contact).
- Project/PR pages render pre-fetched JSON from `src/assets/repositories_*.json` and `pull_requests.json` (see refresh scripts above) — no runtime API calls.
- No global state: `src/store/index.ts` is an intentional empty stub.
- Skill descriptions in `SkillModel` contain raw HTML strings (rendered with `v-html`); `vue/no-v-html` is disabled deliberately.
- Global styles and design tokens (dark GitHub-like theme, CSS custom properties) live in `src/App.vue`.
- `custom/` holds standalone static content served as-is by Pages (design prototypes, GPT experiments) — it is not part of the Vue build; its HTML files are self-contained and opened directly in a browser.

## Conventions

- Never commit directly to `master`: create `feature/<short-kebab-description>` first (see `.claude/commands/commit.md`; use `/commit` for the full workflow).
- TypeScript strict mode; `@/*` aliases `src/*`.
- ESLint config is embedded in `package.json` (`vue3-recommended` + TS + Prettier); `vue/multi-word-component-names` and `vue/no-v-html` are off.
