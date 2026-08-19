export interface WorkEntry {
  company: string;
  companyInfo?: string;
  url: string | null;
  title: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export default class WorkModel {
  static loadAll(): WorkEntry[] {
    return [
      {
        company: "Playrix",
        companyInfo:
          "#3 mobile game company · 100M+ MAU · 2.3B installs, 12 titles",
        url: "https://www.playrix.com/",
        title: "Senior C++ Engineer",
        location: "Novi Sad",
        period: "May 2024 - Aug 2026",
        current: true,
        bullets: [
          "Worked on Homescapes - 600M+ installs and a historically top-10 grossing title in the US on App Store and Google Play",
          "Contributed to 11 gameplay and meta features across 4 feature teams, including 8 server-backed, social, or competitive features",
          "Developed core gameplay systems in C++ and Lua: cooperative and competitions events, end-of-content event, ECS systems for Merge3 event, player profile",
          "Implemented client-side server integration for clan quests, card transfers, player profile and competitions, including request/response flows, state synchronization and error handling",
          "Designed and improved Cursor/Claude skills and development rules for feature prototyping and code review; a reusable feature-porting template helped reduce prototype lead time from months to weeks",
          "Implemented ECS engine migration, improving frame rate by up to 21-40%, in 4 days",
          "Improved the Figma-to-engine UI pipeline, reducing production-ready layout integration from hours to minutes",
          "Integrated and adapted features from other Playrix projects into a large legacy C++ codebase and internal engine",
          "Built and extended internal development/debugging tools, including ECS Viewer, editor presets, FixSaves and gameplay cheats",
        ],
        tags: [
          "C++",
          "ECS",
          "Lua",
          "Tracy",
          "Mobile Game Development",
          "Anthropic Claude",
          "Cursor AI",
        ],
      },
      {
        company: "Matryoshka Games",
        companyInfo: "80M+ installs, 10 titles",
        url: "https://www.matryoshka.com/",
        title: "Chief Technology Officer",
        location: "Novi Sad",
        period: "Jan 2021 - May 2024",
        current: false,
        bullets: [
          "Worked on Cooking Craze and 7 more projects (60M+ installs overall)",
          "Implementing new analytics service to cut Amplitude costs - 100 GB traffic/day, 8K peak RPS, 5 TB Postgres storage",
          "Planning & development of several custom SDKs - C#, Unity, ads & analytics",
          "Supporting infrastructure - Docker, AWS EC2, ECS, SQS, CloudWatch",
          "Technology leadership - code review, new solution analysis & prototyping, shared codebase management",
          "Management - performance reviews, tech leads management, tech interviews",
        ],
        tags: [
          "C#",
          "ASP.NET Core",
          "EF Core",
          "Postgres",
          "Unity",
          "Docker",
          "AWS",
        ],
      },
      {
        company: "Matryoshka Games",
        url: "https://www.matryoshka.com/",
        title: "Senior Unity/C# Developer",
        location: "Novosibirsk",
        period: "Apr 2018 - Dec 2020",
        current: false,
        bullets: [
          "Worked on Cooking Craze project (50M+ installs)",
          "Developing admin tool for f2p game operations - ASP.NET Core, TypeScript",
          "Improving shared codebase for different projects",
          "Integrating BaaS solutions like BrainCloud (saves, chat, leaderboards)",
          "Implementing complex CI/CD pipeline based on TeamCity",
          "Pushing forward code review initiative",
        ],
        tags: ["C#", "ASP.NET Core", "TypeScript", "TeamCity", "BrainCloud"],
      },
      {
        company: "Deus Craft",
        url: null,
        title: "Middle Unity/C# Developer",
        location: "Novosibirsk",
        period: "Apr 2016 - Apr 2018",
        current: false,
        bullets: [
          "Worked on Cooking Craze project (50M+ installs)",
          "Developing core/meta gameplay features, integrating 2D art content into the project",
          "Integrating native plugins: ads, FB, Crashlytics; server-side support - Java/Spring",
          "Developing advanced asset bundles management and content management extensions, implementing custom incremental build pipeline",
        ],
        tags: ["C#", "Unity", "Java", "Spring"],
      },
      {
        company: "Academ Media",
        url: null,
        title: "Unity/C# Developer | Technical Team Lead",
        location: "Novosibirsk",
        period: "Jul 2013 - Apr 2016",
        current: false,
        bullets: [
          "Establishing short-term games/application development",
          "Implementing build pipeline and project template for projects",
          "Team management, pushing forward developer training initiative",
        ],
        tags: ["C#", "Unity", "Team Leadership"],
      },
    ];
  }
}
