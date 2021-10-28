export default class SkillModel {
  private constructor(readonly title: string, readonly keys: string[]) {}

  static loadCoreSkills() {
    return [
      [
        "Game Engines",
        [
          new SkillModel("Unity", [
            "Platforms: Android, iOS, WebGL, tvOS, macOS",
            "Stores (in-apps, social): Google Play, AppStore, Amazon",
            "Plugins: Crashlytics, Facebook, Google Analytics, Vuforia etc",
            "Services: BrainCloud",
            "Game templates development",
            "CPU/memory usage, content optimization",
            "UI: Unity UI, NGUI",
            "Asset bundle content/build/usage pipeline",
            "Editor extensions (custom editors, scene post-processors, tools)",
            "Batch-mode build extensions",
            "Unit-tests usage",
            'Udemy <a href="https://www.udemy.com/certificate/UC-e7b98c69-9c9a-411d-85fb-05e5a296c3f6/" target="_blank">Unity 2019 Learn to write better code making a City Builder</a>',
          ]),
        ],
      ],
      [
        "Tech",
        [
          new SkillModel(".NET/C#", [
            "Platforms: .NET Framework, .NET Core, Mono",
            "Frameworks: ASP.NET Core (WebAPI/MVC), ASP.NET (MVC), WinForms, WPF",
            "Targets: console, standalone, web applications",
            "CPU/memory usage optimizations",
            "Database usage: MS SQL, MySQL, MongoDB, CouchDB",
            "Unt-tests: Nunit, Xunit",
            'Udemy <a href="https://www.udemy.com/certificate/UC-b92fa8b9-237d-4109-813b-d6e39d25e4f3/" target="_blank">Master .NET and C# Unit Testing with NUnit and Moq</a>',
            'Udemy <a href="https://www.udemy.com/certificate/UC-2de59618-e48d-4f15-9b8c-e95ebfa7759c/" target="_blank">Learn Parallel Programming with C# and .NET</a>',
            'Udemy <a href="https://www.udemy.com/certificate/UC-8312afa8-e0ec-49f5-b39b-bd9baef9e595/" target="_blank">Лучшие практики проектирования и реализации API на C#</a>',
            'Udemy <a href="https://www.udemy.com/certificate/UC-5cdf7732-98f9-4f19-b81d-c1ce9f239a98/" target="_blank">Архитектура ПО: внедрение зависимостей на C#</a>',
            'Udemy <a href="https://www.udemy.com/certificate/UC-56b07c78-0436-49f0-8fba-f6b0e2ae4898/" target="_blank">Mastering Reactive Extensions with C# and .NET</a>',
            'Udemy <a href="https://www.udemy.com/certificate/UC-8bd7c2c4-b51b-44d6-b509-a9e073fdd12a/" target="_blank">Advanced Topics in C#</a>',
            'Udemy <a href="https://www.udemy.com/certificate/UC-609b535d-ad50-42f6-bf0e-8c337e760dd0/" target="_blank">C# Performance Tricks: How To Radically Speed Up Your Code</a>',
          ]),
          new SkillModel("Tech Leadership", [
            'Podlodka <a href="https://s3.eu-north-1.amazonaws.com/podlodka.crew.cert/techlead1/cert_techlead_1_konh%40yandex.ru.png">TechLead Crew #1</a>',
            "Podlodka TechLead Crew #2",
          ]),
          new SkillModel("Java", [
            "Developing new features for high-load game server based on Spring and MySQL/MongoDB",
            "University project: mobile app for counting expected lifetime based on bad habits and activity",
            "Working with Unity exported project and native plugin integration",
          ]),
          new SkillModel("Kotlin", [
            "TeamCity DSL usage: 10 projects, 100 build configurations based on shared codebase",
            'Develop Android <a href="https://github.com/KonH/MyContract" target="_blank">app</a> for self-motivation',
          ]),
        ],
      ],
      [
        "Web",
        [
          new SkillModel("TypeScript", [
            "Vue.js: single file components",
            "Unit-tests: jest",
            "Management: vue-cli, webpack",
          ]),
          new SkillModel("JavaScript", [
            "DOM, ajax interactions",
            "jQuery",
            "Google Analytics",
          ]),
        ],
      ],
      [
        "Infrastructure",
        [
          new SkillModel("TeamCity", [
            "CI/CD for up to 10 projects and 100 build configurations",
            "Agent maintenance, problem solving, plugins usage",
          ]),
          new SkillModel("Docker", [
            "Containers for Erlang and .NET Core projects",
            "Local and remote (DigitalOcean, Azure) deployment",
          ]),
        ],
      ],
    ];
  }

  static loadOtherSkills() {
    return [
      new SkillModel("C++", [
        "University project: student test system (QT, file encryption)",
        'Coursera course: <a href="https://www.coursera.org/account/accomplishments/certificate/GWL2W8YZJARQ" target="_blank">Основы разработки на C++: белый пояс</a>',
      ]),
      new SkillModel("Machine learning", [
        "Algorithms knowledge: decision trees, logistic regression, gradient boosting, neural networks",
        "Python ML-related tools used: Pandas, Numpy, Scipy, Pandas Scikit, Jupyter Lab",
        'Coursera course: <a href="https://www.coursera.org/account/accomplishments/certificate/N25HU5LMT7B7" target="_blank">Введение в машинное обучение</a>',
      ]),
      new SkillModel("Go", [
        'Analytics <a href="https://github.com/KonH/analyticsServer" target="_blank">server</a> with MongoDB storage',
        'Coursera course <a href="https://www.coursera.org/learn/golang-webservices-1" target="_blank">Разработка веб-сервисов на Go - основы языка</a>',
      ]),
      new SkillModel("Python", [
        'Books from external service to CSV <a href="https://github.com/KonH/LivelibExport" target="_blank">exporter</a>',
        'Uncompleted Google Play <a href="https://github.com/KonH/GParser" target="_blank">crawler</a>',
        "MySQL usage",
        "Web page parsing and link processing",
      ]),
      new SkillModel("Erlang", ["Client/server application development"]),
      new SkillModel("HTML", [
        "CSS static and dynamic fatures usage",
        "Markup-generation using PHP, C#, Python",
        "Bootstrap usage",
      ]),
      new SkillModel("SQL", [
        "Small databases for pet-projects (sites and standalone)",
        "Create structure and data fill scripts",
        "Setup on hostings and standalone environment",
      ]),
      new SkillModel("PHP", [
        "Project for identify/searching stolen musical instruments (incomplete)",
        "Social network with user-generated content (closed)",
        "Register, authorization and other core features",
        "MySQL usage",
        "Frameworks: Twig",
      ]),
    ];
  }
}
