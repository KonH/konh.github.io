# Building This Portfolio With Vue
# tags: vue, typescript, webdev
This site is a Vue 3 + TypeScript single-page app, built with Vue CLI and
deployed straight to GitHub Pages from the repo root.

## Content as code

There's no CMS. Skills, work history, education, contacts — all of it lives
as typed data in `src/model/*.ts`. Both the web pages and the generated CV
PDF read from the same models, so there's exactly one place to update when
something changes.

```ts
export default class SkillModel {
  private constructor(
    readonly title: string,
    readonly keys: string[],
  ) {}
}
```

## Deploying to a user page

GitHub Pages serves user pages (`<username>.github.io`) straight from the
repo root of `master`, which means the build output has to be committed
there directly. A small PowerShell/bash script handles copying `dist/*` into
place after every build.

Deep links are handled with the classic `404.html` trick: it's a copy of
`index.html`, and the router picks up a redirect stashed in
`sessionStorage` on load.
