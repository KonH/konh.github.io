Create a git commit for the staged changes.

## Pre-commit step: branch selection

Before committing, check the current branch:
1. `git branch --show-current`
2. If it is `master`: create and switch to a new branch via `git checkout -b feature/<short-kebab-description>`, where `<short-kebab-description>` is a meaningful slug derived from the change being committed (e.g. `feature/province-division-config`). Do this before staging/committing anything else.
3. If it is anything other than `master` (i.e. already on a feature branch or other non-master branch): leave the branch as-is — do not create or switch branches.

## Rules
- Subject line: short, imperative, no period
- Explain *why*, not *what* — the diff already shows what changed
- No bullet-point summaries of changed files
- Always add `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` trailer
