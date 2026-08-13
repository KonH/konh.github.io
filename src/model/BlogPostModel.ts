export interface BlogPostJson {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  contentHtml: string;
  excerpt: string;
}

export default class BlogPostModel {
  private constructor(
    readonly slug: string,
    readonly title: string,
    readonly tags: string[],
    readonly date: Date,
    readonly contentHtml: string,
    readonly excerpt: string,
  ) {}

  static fromJson(json: BlogPostJson): BlogPostModel {
    return new BlogPostModel(
      json.slug,
      json.title,
      json.tags,
      new Date(json.date),
      json.contentHtml,
      json.excerpt,
    );
  }
}
