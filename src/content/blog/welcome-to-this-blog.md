# Welcome to This Blog
# tags: meta, site
I've added a small blog section to this site. Nothing fancy — just a place to
write short notes about things I'm building, tools I'm using, or problems I
ran into recently.

## Why

I already keep the CV and project list here as structured data, so a blog
made sense as one more content type instead of standing up a separate site.

## How it works

Every post is a plain Markdown file living in the repo. At build time a small
script reads all of them, converts the Markdown to HTML, pulls the
publication date from git history, and bakes the result into a JSON file the
site loads — no backend, no database, no runtime API calls.

That's it for the first post. More to come.
