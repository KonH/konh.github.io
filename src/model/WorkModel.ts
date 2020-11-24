class TimeModel {
  constructor(readonly from: string, readonly to: string) {}
}

class CompanyModel {
  constructor(
    readonly title: string,
    readonly url: string,
    readonly icon: string
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

  static load() {
    const cookingCraze = new ProjectModel(
      "Cooking Craze",
      "https://www.bigfishgames.com/us/en/game/cooking-craze.html"
    );
    return [
      new WorkModel(
        "Senior Developer",
        new TimeModel("April 2018", "Present"),
        new CompanyModel(
          "Matryoshka Games",
          "http://www.matryoshka.com/",
          "mg.png"
        ),
        ["TODO"],
        [cookingCraze]
      ),
      new WorkModel(
        "Middle Developer",
        new TimeModel("April 2016", "April 2018"),
        new CompanyModel(
          "Deus Craft",
          "http://www.deuscraft.com/",
          "deuscraft.png"
        ),
        ["TODO"],
        [cookingCraze]
      ),
      new WorkModel(
        "Team Lead",
        new TimeModel("July 2013", "April 2016"),
        new CompanyModel("AcademMedia", "", "am.svg"),
        ["TODO"],
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
