export default class PullRequestModel {
  private constructor(
    readonly htmlUrl: string,
    readonly title: string,
    readonly createdAt: Date,
    readonly merged: boolean
  ) {}

  ownerName() {
    return this.htmlUrl.split("/")[3];
  }

  repositoryName() {
    return this.htmlUrl.split("/")[4];
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  static fromJson(json: any) {
    return new PullRequestModel(
      json.HtmlUrl,
      json.Title,
      new Date(json.CreatedAt),
      json.PullRequest.Merged
    );
  }
}
