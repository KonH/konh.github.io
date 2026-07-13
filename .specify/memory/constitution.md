# konh.github.io Constitution

Personal portfolio/CV site for Konstantin Khitrykh, deployed as a GitHub Pages user page.
This constitution governs all feature work, refactoring, and content changes in this repository.

## Core Principles

### I. Content Is Typed Code (Single Source of Truth)

All CV and site content — skills, work history, education, languages, contacts — MUST live
as typed static data in `src/model/*.ts`. There is no CMS, no backend, and no runtime content
API. The web pages and the generated PDF CV MUST both derive from the same models: a content
change is made once, in the model, and propagates to both outputs. Hardcoding content inside
components, or editing generated outputs (the PDF, prefetched JSON) by hand, is forbidden.

### II. Generated Artifacts Are Never Hand-Edited

Root-level `index.html`, `404.html`, `css/`, `js/`, `img/`, and `Konstantin_Khitrykh_CV.pdf`
are build outputs committed only because GitHub Pages serves the user page from the `master`
root. They MUST only be produced by the deploy scripts (`deploy-github.ps1` / `deploy-github.sh`),
never edited directly. Any change to them goes through `src/` or `public/` followed by a rebuild.
The full build pipeline (PDF generation → webpack build → 404 copy) MUST stay intact; the
`404.html` SPA-redirect trick is required for deep links to work on Pages.

### III. Static and Dependency-Light

The site MUST remain a fully static SPA: no server-side code, no runtime API calls (GitHub
data is prefetched into `src/assets/*.json` by the refresh scripts), no global state store,
and no analytics/tracking beyond what already exists. New npm dependencies require clear
justification — prefer the platform, Vue 3 built-ins, and existing code. Standalone content
under `custom/` MUST stay self-contained (relative paths, no build step, opens directly in
a browser).

### IV. Quality Gate: Lint Clean, Strict Types

`npm run lint` MUST pass (and is allowed to auto-fix) before any commit. TypeScript strict
mode is non-negotiable; do not weaken `tsconfig.json` or disable ESLint rules to make code
pass — the only sanctioned rule exceptions are the existing ones in `package.json`
(`vue/no-v-html`, `vue/multi-word-component-names`). There is no test suite; verification is
done by running `npm run serve` and exercising the affected pages, and by a full
`npm run build` when the pipeline or PDF is touched.

### V. Simplicity Over Machinery

This is a small personal site. Solutions MUST be proportional: no state management libraries,
no component frameworks, no abstraction layers introduced "for the future". Follow the existing
structure — one route per top-level component in `src/components/`, list/item component pairs,
design tokens and global styles in `src/App.vue`. Remove code that stops being used (as was
done with the store) rather than keeping it dormant.

## Workflow

- Never commit directly to `master`. Create `feature/<short-kebab-description>` branches;
  the `/commit` command encodes this workflow (`.claude/commands/commit.md`).
- Commit messages: short imperative subject, body explains *why*, no file-list bullets.
- Deployment is manual and deliberate: run the deploy script, review the regenerated
  artifacts in the diff, and commit them together with the source change that produced them.
- Data refreshes (`npm run refresh_all_projects`, `npm run refresh_pull_requests`) are
  separate, content-only changes — do not mix them into feature commits.

## Governance

This constitution supersedes ad-hoc practices. Amendments are made by editing this file in a
feature branch with a commit message explaining the rationale, and bumping the version below
(MAJOR for principle removals/reversals, MINOR for new principles or sections, PATCH for
clarifications). `CLAUDE.md` provides operational guidance and MUST stay consistent with
these principles; on conflict, the constitution wins.

**Version**: 1.0.0 | **Ratified**: 2026-07-13 | **Last Amended**: 2026-07-13
