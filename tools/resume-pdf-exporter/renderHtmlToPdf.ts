import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import type { PDFOptions } from "puppeteer";

/**
 * Common install locations for a system-wide Chrome/Chromium/Edge, used as a
 * fallback when puppeteer's own managed Chrome download is missing or
 * corrupted (e.g. a partial download left an executable-less folder behind).
 */
export const DEFAULT_SYSTEM_BROWSER_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
];

export interface RenderHtmlToPdfOptions {
  /** Fully self-contained HTML (inline CSS) to render and print. */
  html: string;
  /** Where to write the generated PDF. Parent directories are created if missing. */
  outputPath: string;
  /** Passed through to page.pdf(); { format: "A4", printBackground: true } is applied first. */
  pdf?: PDFOptions;
  /**
   * Explicit browser executable to launch. Falls back to
   * PUPPETEER_EXECUTABLE_PATH, then puppeteer's managed Chrome, then
   * systemBrowserCandidates, in that order.
   */
  executablePath?: string;
  /** Override the system-browser fallback list (see DEFAULT_SYSTEM_BROWSER_CANDIDATES). */
  systemBrowserCandidates?: string[];
}

function resolveExecutablePath(
  explicit: string | undefined,
  candidates: string[],
): string | undefined {
  if (explicit) {
    return explicit;
  }
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const managedPath = puppeteer.executablePath();
  if (managedPath && fs.existsSync(managedPath)) {
    return undefined; // let puppeteer use its own managed Chrome
  }

  const systemBrowser = candidates.find((p) => fs.existsSync(p));
  if (systemBrowser) {
    console.log(
      `Managed Chrome not found; using system browser: ${systemBrowser}`,
    );
    return systemBrowser;
  }

  console.warn(
    `Puppeteer's managed Chrome is missing at ${managedPath} and no system browser was found.\n` +
      "Run `npx puppeteer browsers install chrome` or set PUPPETEER_EXECUTABLE_PATH.",
  );
  return undefined;
}

/**
 * Renders a self-contained HTML string to a PDF file via a headless browser.
 * See README.md in this folder for the full contract and portability notes.
 */
export async function renderHtmlToPdf(
  options: RenderHtmlToPdfOptions,
): Promise<void> {
  const executablePath = resolveExecutablePath(
    options.executablePath,
    options.systemBrowserCandidates ?? DEFAULT_SYSTEM_BROWSER_CANDIDATES,
  );

  const browser = await puppeteer.launch({
    ...(executablePath ? { executablePath } : {}),
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  try {
    fs.mkdirSync(path.dirname(options.outputPath), { recursive: true });

    const page = await browser.newPage();
    await page.setContent(options.html, { waitUntil: "load" });
    await page.pdf({
      path: options.outputPath,
      format: "A4",
      printBackground: true,
      ...options.pdf,
    });
  } finally {
    await browser.close();
  }
}
