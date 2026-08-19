import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { marked } from "marked";
import { BlogPostJson } from "../model/BlogPostModel";

// Reads markdown posts from SOURCE_DIR and compiles them into OUTPUT_PATH,
// a single JSON file the Vue app imports at build time (no runtime parsing).
// See src/content/blog/EXAMPLE.md for the expected post format.
const SOURCE_DIR = "src/content/blog";
const OUTPUT_PATH = "src/assets/blog.json";
const EXCERPT_LENGTH = 180;

interface ParsedPost {
  title: string;
  tags: string[];
  body: string;
}

function parsePost(raw: string): ParsedPost {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let i = 0;

  while (i < lines.length && lines[i].trim() === "") i++;
  const titleLine = lines[i] ?? "";
  const titleMatch = titleLine.match(/^#\s+(.+)$/);
  if (!titleMatch) {
    throw new Error(`Expected a "# Title" line, got: "${titleLine}"`);
  }
  const title = titleMatch[1].trim();
  i++;

  let tags: string[] = [];
  const tagsLine = lines[i] ?? "";
  const tagsMatch = tagsLine.match(/^#\s*tags:\s*(.+)$/i);
  if (tagsMatch) {
    tags = tagsMatch[1]
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    i++;
  }

  const body = lines.slice(i).join("\n").replace(/^\n+/, "");
  return { title, tags, body };
}

function slugify(fileName: string): string {
  return fileName.replace(/\.md$/, "");
}

function resolvePostDate(filePath: string): Date {
  try {
    const gitPath = filePath.split(path.sep).join("/");
    const gitDate = execSync(`git log -1 --format=%aI -- "${gitPath}"`, {
      encoding: "utf-8",
    }).trim();
    if (gitDate) {
      return new Date(gitDate);
    }
  } catch {
    // Not a git repo, or git unavailable — fall back to filesystem date.
  }
  return fs.statSync(filePath).birthtime;
}

function toExcerpt(markdownBody: string): string {
  const plain = markdownBody
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[.*?\]\(.*?\)/g, " ")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#>*_`~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= EXCERPT_LENGTH) return plain;
  return plain.slice(0, EXCERPT_LENGTH).replace(/\s+\S*$/, "") + "…";
}

function loadExistingDates(): Map<string, string> {
  const dates = new Map<string, string>();
  if (!fs.existsSync(OUTPUT_PATH)) return dates;
  try {
    const existing = JSON.parse(
      fs.readFileSync(OUTPUT_PATH, "utf-8"),
    ) as BlogPostJson[];
    for (const post of existing) dates.set(post.slug, post.date);
  } catch {
    // Malformed/missing existing file — treat as no prior state.
  }
  return dates;
}

function generate(): void {
  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((f) => f.endsWith(".md") && f.toUpperCase() !== "EXAMPLE.MD");

  // Once a post has a recorded date, keep it forever: re-deriving from git
  // log on every rebuild would bump the "published" date whenever the file
  // is touched again (e.g. a typo fix), which is exactly what we don't want
  // for already-published posts.
  const existingDates = loadExistingDates();

  const posts: BlogPostJson[] = files.map((fileName) => {
    const filePath = path.join(SOURCE_DIR, fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { title, tags, body } = parsePost(raw);
    const slug = slugify(fileName);
    const date =
      existingDates.get(slug) ?? resolvePostDate(filePath).toISOString();

    return {
      slug,
      title,
      tags,
      date,
      contentHtml: marked.parse(body, { async: false }) as string,
      excerpt: toExcerpt(body),
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2) + "\n");
  console.log(
    `Blog posts generated: ${posts.length} post(s) -> ${OUTPUT_PATH}`,
  );
}

generate();
