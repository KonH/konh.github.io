export interface WorkEntry {
  company: string;
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
        url: "https://www.playrix.com/",
        title: "Senior C++ Programmer",
        location: "Novi Sad · Hybrid",
        period: "May 2024 — Present",
        current: true,
        bullets: [
          "Developed core gameplay systems in C++ for a large-scale mobile project",
          "Contributed to ECS engine migration, improving architecture and performance",
          "Built internal tools to streamline development workflows and reduce iteration time",
          "Worked on client-server systems, focusing on data flow and performance",
          "Introduced AI-assisted workflows (Cursor, Claude) for prototyping, code generation, and review",
          "Designed custom AI prompting rules, improving consistency and development speed",
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
        url: "https://www.matryoshka.com/",
        title: "Chief Technology Officer",
        location: "Novi Sad",
        period: "Jan 2021 — May 2024",
        current: false,
        bullets: [
          "Implementing new analytics service to cut Amplitude costs — 100 GB traffic/day, 8K peak RPS, 5 TB Postgres storage",
          "Planning & development of several custom SDKs — C#, Unity, ads & analytics",
          "Supporting infrastructure — Docker, AWS EC2, ECS, SQS, CloudWatch",
          "Technology leadership — code review, new solution analysis & prototyping, shared codebase management",
          "Management — performance reviews, tech leads management, tech interviews",
          "Working on Cooking Craze and 7 more projects (60M+ installs)",
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
        title: "Senior Developer",
        location: "Novosibirsk",
        period: "Apr 2018 — Dec 2020",
        current: false,
        bullets: [
          "Developing admin tool for f2p game operations — ASP.NET Core, TypeScript",
          "Improving shared codebase for different projects",
          "Integrating BaaS solutions like BrainCloud (saves, chat, leaderboards)",
          "Implementing complex CI/CD pipeline based on TeamCity",
          "Pushing forward code review initiative",
          "Cooking Craze project (50M+ installs)",
        ],
        tags: ["C#", "ASP.NET Core", "TypeScript", "TeamCity", "BrainCloud"],
      },
      {
        company: "Deus Craft",
        url: null,
        title: "Middle Developer",
        location: "Novosibirsk",
        period: "Apr 2016 — Apr 2018",
        current: false,
        bullets: [
          "Developing core/meta gameplay features",
          "Integrating 2D art content into the project",
          "Developing advanced asset bundles management and content management extensions",
          "Implementing custom incremental build pipeline",
          "Integrating native plugins — ads, FB, Crashlytics",
          "Integrating new features on server-side — Java/Spring",
          "Cooking Craze project (50M+ installs)",
        ],
        tags: ["C#", "Unity", "Java", "Spring"],
      },
      {
        company: "Academ Media",
        url: null,
        title: "Technical Team Lead",
        location: "Novosibirsk",
        period: "Jul 2013 — Apr 2016",
        current: false,
        bullets: [
          "Establishing short-term games/application development",
          "Implementing build pipeline and project template for projects",
          "Team management",
          "Pushing forward developer training initiative",
        ],
        tags: ["C#", "Unity", "Team Leadership"],
      },
    ];
  }
}
