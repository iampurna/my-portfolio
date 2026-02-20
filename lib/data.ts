export const PERSONAL = {
  name: "Purna Lungeli",
  title: ".NET Backend Engineer",
  tagline:
    "Building robust, scalable systems with clean architecture and quiet confidence.",
  about: [
    "I'm a backend engineer specializing in .NET ecosystems — crafting APIs, designing data layers, and architecting systems that scale gracefully under pressure.",
    "My approach blends engineering rigor with pragmatic simplicity. I believe the best systems are the ones you barely notice — reliable, fast, and elegantly structured beneath the surface.",
    "Beyond backend, I care deeply about developer experience, clean code, and shipping software that teams can maintain with confidence long after the first deploy.",
  ],
  email: "purna@example.com",
  github: "https://github.com/purna",
  linkedin: "https://linkedin.com/in/purna",
  cvUrl: "/resume.pdf",
};

export const PROJECTS = [
  {
    id: "inventory-api",
    title: "Inventory Management API",
    description:
      "RESTful microservice handling real-time stock tracking, order processing, and warehouse synchronization for an e-commerce platform.",
    stack: [".NET 8", "Entity Framework", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/purna",
    live: "#",
    color: "#d4af37",
  },
  {
    id: "auth-gateway",
    title: "Auth Gateway Service",
    description:
      "Centralized authentication and authorization service implementing OAuth 2.0 / OpenID Connect with role-based access control.",
    stack: [".NET", "IdentityServer", "JWT", "SQL Server", "Azure AD"],
    github: "https://github.com/purna",
    live: "#",
    color: "#37d4a0",
  },
  {
    id: "analytics-pipeline",
    title: "Real-Time Analytics Pipeline",
    description:
      "Event-driven data pipeline processing 50K+ events/min with message queuing and real-time dashboard aggregation.",
    stack: [".NET", "RabbitMQ", "SignalR", "MongoDB", "Grafana"],
    github: "https://github.com/purna",
    live: "#",
    color: "#d43737",
  },
  {
    id: "task-scheduler",
    title: "Task Scheduler Platform",
    description:
      "Distributed job scheduling system with retry policies, dead-letter queues, and monitoring dashboard for background processing.",
    stack: [".NET", "Hangfire", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/purna",
    live: "#",
    color: "#3776d4",
  },
];

export const EXPERIENCE = [
  {
    company: "Apex Technologies",
    role: "Senior Backend Engineer",
    duration: "2023 — Present",
    achievements: [
      "Architected microservices handling 2M+ daily requests",
      "Reduced API response times by 40% through caching strategies",
      "Mentored junior developers and established code review culture",
    ],
  },
  {
    company: "CloudBridge Solutions",
    role: "Backend Developer",
    duration: "2021 — 2023",
    achievements: [
      "Built RESTful APIs serving 15+ frontend applications",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Designed database schemas for complex business domains",
    ],
  },
  {
    company: "NovaSoft Inc.",
    role: "Junior Developer",
    duration: "2019 — 2021",
    achievements: [
      "Developed internal tools automating manual reporting workflows",
      "Contributed to legacy system modernization from .NET Framework to .NET Core",
      "Wrote comprehensive unit and integration test suites",
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
  "Redis",
  "Docker",
  "Kubernetes",
  "Azure",
  "RabbitMQ",
  "Git",
  "REST API",
  "SignalR",
  "MongoDB",
  "TypeScript",
  "gRPC",
  "xUnit",
  "CI/CD",
  "Microservices",
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;