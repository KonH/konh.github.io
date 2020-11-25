export default class SkillModel {
  private constructor(readonly title: string, readonly keys: string[]) {}

  static loadCoreSkills() {
    return [
      ["Game Engines", [new SkillModel("Unity", [])]],
      [
        "Tech",
        [
          new SkillModel("C#", []),
          new SkillModel("Kotlin", [
            'Develop simple Android <a href="https://github.com/KonH/MyContract">app</a> for self-motivation',
          ]),
          new SkillModel("Java", []),
        ],
      ],
      [
        "Infrastructure",
        [new SkillModel("TeamCity", []), new SkillModel("Docker", [])],
      ],
    ];
  }

  static loadOtherSkills() {
    return [
      new SkillModel("C++", []),
      new SkillModel("Machine learning", []),
      new SkillModel("Go", []),
      new SkillModel("Python", []),
      new SkillModel("Swift", []),
      new SkillModel("Erlang", []),
      new SkillModel("Ruby", []),
      new SkillModel("HTML", []),
      new SkillModel("SQL", []),
      new SkillModel("PHP", []),
    ];
  }
}
