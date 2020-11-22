export default class ProjectModel {
  private constructor(
    readonly htmlUrl: string,
    readonly name: string,
    readonly description: string | null,
    readonly language: string | null,
    readonly fork: boolean,
    readonly stargazersCount: number,
    readonly updatedAt: Date,
    readonly archived: boolean
  ) {}

  /* eslint-disable @typescript-eslint/no-explicit-any */
  static fromJson(json: any) {
    return new ProjectModel(
      json.HtmlUrl,
      json.Name,
      json.Description,
      json.Language,
      json.Fork,
      json.StargazersCount,
      new Date(json.UpdatedAt),
      json.Archived
    );
  }
}
