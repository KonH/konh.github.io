class TimeModel {
  constructor(readonly from: string, readonly to: string) {}
}

class CompanyModel {
  constructor(
    readonly title: string,
    readonly icon: string,
    readonly url: string
  ) {}
}

class ProjectModel {
  constructor(readonly title: string, readonly url: string) {}
}

export default class WorkModel {
  private constructor(
    readonly position: string,
    readonly time: TimeModel,
    readonly company: CompanyModel,
    readonly experience: string[],
    readonly projects: ProjectModel[]
  ) {}

  /* eslint-disable @typescript-eslint/no-explicit-any */
  static fromJson(json: any) {
    return new WorkModel(
      json.position,
      new TimeModel(json.time.from, json.time.to),
      new CompanyModel(json.company.title, json.company.icon, json.company.url),
      json.experience,
      /* eslint-disable @typescript-eslint/no-explicit-any */
      json.projects.map(
        (j: { title: string; url: string }) => new ProjectModel(j.title, j.url)
      )
    );
  }
}
