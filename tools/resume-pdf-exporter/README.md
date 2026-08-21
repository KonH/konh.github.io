# resume-pdf-exporter

A tiny, project-agnostic helper that renders a self-contained HTML string to a
PDF file using Puppeteer. It knows nothing about resumes, JSON schemas, or
this repo's layout — that keeps it copyable into any other project as-is.

## What it does (and doesn't do)

- Takes an HTML string (with inline `<style>`, no external assets) and a
  destination path, and produces a PDF.
- Handles picking a Chrome/Chromium executable to launch: an explicit
  `executablePath` you pass in, then `PUPPETEER_EXECUTABLE_PATH`, then
  Puppeteer's own managed Chrome download, then a short list of common
  system-install paths (Windows/macOS/Linux) as a last resort.
- Does **not** know how to build the HTML from your data. That's the job of
  the project that uses this module — see "Usage" below.

## API

```ts
import { renderHtmlToPdf } from "./renderHtmlToPdf";

await renderHtmlToPdf({
  html: "<html>...</html>", // fully self-contained HTML string
  outputPath: "dist/resume.pdf", // parent dirs are created if missing
  pdf: { margin: { top: "12mm", right: "14mm", bottom: "12mm", left: "14mm" } }, // optional, merged over { format: "A4", printBackground: true }
  executablePath: undefined, // optional explicit browser override
  systemBrowserCandidates: undefined, // optional override of the fallback list
});
```

`RenderHtmlToPdfOptions` and `DEFAULT_SYSTEM_BROWSER_CANDIDATES` are also
exported from `index.ts` if you need to inspect or extend the fallback list.

## Usage in this repo

`src/scripts/generatePdf.ts` is the project-specific glue: it loads
`src/data/resume.json`, renders it to an HTML string with
`src/scripts/resumeTemplate.ts` (the resume's layout/CSS, which is
project-specific and deliberately lives outside this folder), and calls
`renderHtmlToPdf` from here to print it.

## Moving this to another project

1. Copy this folder (`renderHtmlToPdf.ts`, `index.ts`, this README) wherever
   you like in the target project — it has no imports outside itself and
   `puppeteer`.
2. Make sure `puppeteer` is a dependency there (`npm i puppeteer`).
3. Write your own "build an HTML string from my data" function and call
   `renderHtmlToPdf({ html, outputPath })` with its output. No other change
   is required.
