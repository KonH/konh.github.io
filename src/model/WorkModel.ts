class TimeModel {
  constructor(readonly from: string, readonly to: string) {}
}

class CompanyModel {
  constructor(readonly title: string, readonly url: string) {}
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

  static load() {
    const cookingCraze = new ProjectModel(
      "Cooking Craze",
      "https://www.bigfishgames.com/us/en/game/cooking-craze.html"
    );
    const megaFarm = new ProjectModel(
      "Mega Farm",
      "https://matryoshka.com/games-en.html#tribe-rush"
    );
    const cityRescue = new ProjectModel(
      "Rescue Dash",
      "https://matryoshka.com/games-en.html#city-rescue"
    );
    return [
      new WorkModel(
        "Chief Technical Officer",
        new TimeModel("January 2021", "Present"),
        new CompanyModel("Matryoshka Games", "http://www.matryoshka.com/"),
        [
          "Technical management",
          "Performance Review",
          "Code Review",
          "Improve shared codebase for different projects",
          "Development: .NET, TeamCity, BrainCloud",
        ],
        [cookingCraze, megaFarm, cityRescue]
      ),
      new WorkModel(
        "Senior Developer",
        new TimeModel("April 2018", "December 2020"),
        new CompanyModel("Matryoshka Games", "http://www.matryoshka.com/"),
        [
          "Admin tool development (ASP.NET Core, TypeScript)",
          "Improve shared codebase for different projects",
          "External services integration (BrainCloud)",
          "CI/CD pipeline (TeamCity)",
          "Code Review",
          "Performance analysis",
        ],
        [cookingCraze]
      ),
      new WorkModel(
        "Middle Developer",
        new TimeModel("April 2016", "April 2018"),
        new CompanyModel("Deus Craft", "http://www.deuscraft.com/"),
        [
          "Core/meta features development",
          "Integration 2D art content",
          "Content management extensions",
          "Advanced asset bundles management",
          "Custom incremental build pipeline",
          "Native plugins integration (ads, FB, Crashlytics)",
          "Optimization",
          "Integration new features on server-side (Java/Spring)",
        ],
        [cookingCraze]
      ),
      new WorkModel(
        "Team Lead",
        new TimeModel("July 2013", "April 2016"),
        new CompanyModel("AcademMedia", ""),
        [
          "Short-term games/application development",
          "Build pipeline/project template for projects",
          "Team management",
          "Developer training initiative",
        ],
        [
          new ProjectModel(
            "Cartoon Camera",
            "https://www.youtube.com/watch?v=87CJCjq2ln0"
          ),
          new ProjectModel(
            "Fario Watario",
            "https://www.youtube.com/watch?v=KX0uPRFfpEg"
          ),
          new ProjectModel(
            "Mini Boat Chase",
            "https://www.youtube.com/watch?v=NHWqS1lcSI8"
          ),
          new ProjectModel(
            "Army Truck 2",
            "https://www.youtube.com/watch?v=XK9LU4rk8_U"
          ),
        ]
      ),
    ];
  }
}
