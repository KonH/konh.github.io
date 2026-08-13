# Post Title Goes Here
# tags: tag1, tag2, tag3
Regular Markdown content starts here. This paragraph, and everything below it,
is rendered as the post body.

## Format rules

- File name (minus `.md`) becomes the post's URL slug, e.g. `my-post.md` -> `/blog/my-post`.
- Line 1 must be `# Title` — used as the post heading.
- Line 2 is optional: `# tags: tag1, tag2, tag3` — comma-separated tags. This
  exact line is stripped out and never shown in the rendered post; tags are
  instead rendered as clickable tag controls next to the title.
- Everything after that is standard Markdown (headings, lists, code blocks,
  links, etc.) and becomes the post body.
- Publication date is **not** set manually — it is derived automatically at
  build time from the file's last git commit date, falling back to the file's
  creation date if the file isn't committed yet.

## Adding a new post

1. Add a new `.md` file to `src/content/blog/` following this format.
2. Run `npm run build` (or `npm run generate_blog` during development).

That's it — the post shows up in the blog list and feed automatically. This
file itself (`EXAMPLE.md`) is ignored by the generator.
