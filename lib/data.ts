export const PERSONAL = {
  name: "Purna Lungeli",
  title: "Full Stack Engineer",
  tagline:
    "Building robust, scalable systems with clean architecture and quiet confidence.",
  about: [
    "Bsc.CSIT Graduate, Want to secure a responsible career opportunity to fully utilize my training and skills while making significant contributions to success.",
    " I am modest but hard working and I consistently set my goals formyself. Then, once I’ve defined the benchmarks, I take the necessary steps to achieve those milestones.",
    "I'm a backend engineer specializing in .NET ecosystems — crafting APIs, designing data layers, and architecting systems that scale gracefully under pressure.",
    "My approach blends engineering rigor with pragmatic simplicity. I believe the best systems are the ones you barely notice — reliable, fast, and elegantly structured beneath the surface.",
    "Beyond backend, I care deeply about developer experience, clean code, and shipping software that teams can maintain with confidence long after the first deploy.",
  ],
  email: "linkwithpurna@gmail.com",
  github: "https://github.com/iampurna",
  linkedin: "https://www.linkedin.com/in/iampurna/",
  cvUrl: "/resume.pdf",
};

export const PROJECTS = [
  {
    id: "Drving Licence Exam Preparation App",
    title: "Driving Licence Exam Preparation App",
    description:
      "RESTful microservice handling real-time stock tracking, order processing, and warehouse synchronization for an e-commerce platform.",
    stack: [".NET 8", "Entity Framework", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/iampurna/driving-license-exam-flutter",
    live: "https://play.google.com/store/apps/details?id=np.com.purnalungeli.drivinglicenseexam",
    color: "#d4af37",
  },
  {
    id: "BugTracking-WebApp",
    title: "Bug Tracking Web Application",
    description:
      "Repo, while practicing the Broadway class task. In this repo I implemented the template integration of Bootstrap and User Complaint registration, tracking of complaint status, and further is going on.",
    stack: [".NET", "IdentityServer", "JWT", "SQL Server", "Azure AD"],
    github: "https://github.com/iampurna/BugTracking-Web-App",
    live: "#",
    color: "#37d4a0",
  },
  {
    id: "Blog-Platform",
    title: "Multi-User Blogging Platform",
    description:
      "Scalable blogging platform with user-generated content, real-time notifications, and rich media support built on microservices architecture.",
    stack: [".NET core",".NET Web API","Entity Framework","Angular","TypeScript", "RabbitMQ", "SignalR", "MongoDB", "Grafana"],
    github: "https://github.com/iampurna/Blog-App",
    live: "#",
    color: "#d43737",
  },
  {
    id: "Url-Shortener",
    title: "URL Shortener Service",
    description:
      "Scalable URL shortening service with custom aliases, analytics tracking, and high availability using microservices architecture.",
    stack: [".NET web API", "Entity Framework", "Hangfire", "PostgreSQL", "Docker", "Angular"],
    github: "https://github.com/iampurna/Url-Shortening",
    live: "#",
    color: "#3776d4",
  },
];

export const EXPERIENCE = [
  {
    company: "Life Crayon Style",
    role: " Full Stack Engineer",
    duration: "2025 — Present",
    achievements: [
      "ontributed to developing an Application, enhanced the features and functionality for web application according to organizations’s and client’s requirement.",
      "Reduced API response times by 40% through caching strategies",
      "Implemented core enhancements using technologies such as .NET Core, React/typescript, Sharepoint, SQL queries, Microsoft Graph API, and .Net Blazor.",
    ],
  },
  {
    company: "Astacraft Software Services",
    role: "Junior .Net Developer",
    duration: "Apr 2025 — Jul 2025",
    achievements: [
      "As a DotNet Developer(Freelancer). I successfully:Contributed to developing an ERP from scratch, added and implemented features and functionality for an API under the guidance of Senior Developer.",
      "Implemented core enhancements using technologies such as .NET Core, MVC, Dapper, SQL queries, jQuery, and Bootstrap.",
      "Designed database schemas for complex business domains",
    ],
  },
  {
    company: "Nepali Community of Greater Richmond, VA",
    role: "Dotnet Intern",
    duration: "Sep 2024— Nov 2024",
    achievements: [
      "Developed internal websites automating manual reporting workflows",
      "Contributed to legacy system modernization from .NET Framework to .NET Core MVC",
      "Wrote comprehensive unit and integration test suites",
      "Added additional features to existing applications based on user feedback",
    ],
  },
];

export const TECH_STACK = [
  "C#",
  ".NET",
  "ASP.NET",
  "Entity Framework",
  "SQL Server",
  "PostgreSQL",
  "Docker",
  "Azure",
  "RabbitMQ",
  "Git",
  "REST API",
  "SignalR",
  "TypeScript",
  "CI/CD",
  "Microservices",
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;