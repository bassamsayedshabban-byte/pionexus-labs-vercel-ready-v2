export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  tech: string[];
  cta: string;
};

export type Project = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  results: string[];
};

export const services: Service[] = [
  {
    slug: "development",
    title: "Software Development",
    short: "Custom web, mobile, and backend systems built with modern engineering practices.",
    bullets: [
      "Tailored solutions aligned with business goals",
      "High performance & secure code",
      "Modern technology stack and clean architecture"
    ],
    tech: ["Next.js", "React", "Node.js", ".NET", "Python", "PostgreSQL", "AWS/Azure"],
    cta: "Request Development Consultation"
  },
  {
    slug: "testing",
    title: "Testing & QA Engineering",
    short: "Manual + automated testing to reduce production bugs and accelerate releases.",
    bullets: [
      "Reduced bugs and production issues",
      "Faster release cycles with automation",
      "Performance & load testing for reliability"
    ],
    tech: ["Cypress", "Playwright", "Selenium", "Postman", "k6/JMeter"],
    cta: "Request QA Consultation"
  },
  {
    slug: "documentation",
    title: "Technical Documentation",
    short: "Clear, structured documentation for APIs, systems, workflows, and onboarding.",
    bullets: [
      "Improved onboarding and maintainability",
      "Clear technical communication",
      "Compliance-ready, consistent docs"
    ],
    tech: ["OpenAPI/Swagger", "Markdown", "Confluence", "Docusaurus"],
    cta: "Request Documentation Support"
  },
  {
    slug: "architecture",
    title: "Software Architecture",
    short: "Scalable, secure system architecture designed for long‑term growth.",
    bullets: [
      "Future-proof system design",
      "Optimized performance and resiliency",
      "Cost-efficient scalability and observability"
    ],
    tech: ["Microservices", "Event-driven", "Kubernetes", "CI/CD", "Terraform"],
    cta: "Request Architecture Consultation"
  }
];

export const projects: Project[] = [
  {
    slug: "finpay-platform",
    title: "FinPay Payment Platform",
    industry: "FinTech",
    summary: "A secure payment platform built for speed, compliance, and scale.",
    problem: "Legacy processing caused slow transactions and limited scalability.",
    solution: "Designed a service-based architecture with secure APIs and async processing to increase throughput and reliability.",
    stack: [".NET", "Azure", "SQL Server", "Redis", "Observability"],
    results: ["40% faster processing", "Improved security posture", "Zero-downtime releases"]
  },
  {
    slug: "careops-suite",
    title: "CareOps Management Suite",
    industry: "Healthcare",
    summary: "A modern system for scheduling, workflows, and compliance reporting.",
    problem: "Outdated system with poor performance and limited reporting.",
    solution: "Rebuilt UI + APIs, introduced testing automation, and restructured core modules for maintainable growth.",
    stack: ["React", "Node.js", "AWS", "PostgreSQL", "Cypress"],
    results: ["60% faster UI", "Better compliance readiness", "Higher deployment confidence"]
  },
  {
    slug: "marketpulse",
    title: "MarketPulse Marketplace",
    industry: "E‑Commerce",
    summary: "A marketplace platform engineered to handle high traffic and rapid growth.",
    problem: "Traffic spikes caused timeouts and checkout failures.",
    solution: "Implemented caching, queue-based workflows, and scalable infrastructure to stabilize peak traffic.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "CDN", "CI/CD"],
    results: ["5× traffic support", "Reduced cart failures", "Better performance scores"]
  }
];
