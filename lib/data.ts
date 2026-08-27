export type Project = {
  name: string
  slug: string
  url: string
  github?: string
  type: string
  desc: string
  longDesc: string
  tags: string[]
  year: string
  role: string
  featured: boolean
  status: "live" | "open-source" | "development"
  highlight?: string
}

export const projects: Project[] = [
  {
    name: "Glucocare AI",
    slug: "glucocare-ai",
    url: "https://glucocare-ai.vercel.app",
    type: "AI / Healthcare",
    desc: "An intelligent companion for understanding diabetes care through approachable, data-informed insights.",
    longDesc:
      "Built to make diabetes education less clinical and more human. Combines AI-assisted insights with clean data visualization to help users understand patterns without the jargon.",
    tags: ["Next.js", "AI", "TypeScript"],
    year: "2026",
    role: "Full-stack Engineer",
    featured: true,
    status: "live",
    highlight: "Vercel Live",
  },
  {
    name: "FinSight",
    slug: "finsight",
    url: "https://app.finsight.space",
    type: "Fintech Platform",
    desc: "A focused financial workspace that turns personal money data into clearer decisions.",
    longDesc:
      "Designed around clarity over complexity. Transactions, budgets, and forecasts in one calm workspace with bank-grade reliability.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    year: "2026",
    role: "Frontend & Backend",
    featured: false,
    status: "development",
    highlight: "Fintech",
  },
  {
    name: "Insync",
    slug: "insync",
    url: "https://insync-orpin.vercel.app",
    type: "Productivity",
    desc: "A shared space for keeping teams aligned, moving, and in sync.",
    longDesc:
      "Realtime collaboration without the noise. Tasks, updates, and shared context in a minimal, fast interface.",
    tags: ["Next.js", "NestJS", "MongoDB"],
    year: "2026",
    role: "Full-stack Engineer",
    featured: false,
    status: "live",
  },
  {
    name: "Inventaris API",
    slug: "inventaris-api",
    url: "https://github.com/ItzRyz/inventaris-api",
    github: "https://github.com/ItzRyz/inventaris-api",
    type: "Open Source",
    desc: "Inventory management API designed around clean, predictable backend workflows.",
    longDesc:
      "RESTful API with Fiber + PostgreSQL, built for predictability: validation, audit logs, and role-based access from day one.",
    tags: ["Laravel", "GraphQL", "MySQL"],
    year: "2024",
    role: "Backend Engineer",
    featured: false,
    status: "open-source",
  },
  {
    name: "Licensing API",
    slug: "licensing-api",
    url: "https://github.com/ItzRyz/licensing-api",
    github: "https://github.com/ItzRyz/licensing-api",
    type: "Open Source",
    desc: "A licensing service built to make software access easier to manage and scale.",
    longDesc:
      "Handles activation, entitlements, and plan enforcement with PostgreSQL ergonomics and GO - Fiber reliability.",
    tags: ["Go", "Fiber", "PostgreSQL"],
    year: "2023",
    role: "Backend Engineer",
    featured: false,
    status: "open-source",
  },
]

export type StackItem = {
  name: string
  level: number // 1-5
  years: string
  icon?: string
}

export const stack: Record<string, StackItem[]> = {
  Languages: [
    { name: "TypeScript", level: 5, years: "2+ yrs" },
    { name: "PHP", level: 5, years: "3+ yrs" },
    { name: "Go", level: 4, years: "1+ yrs" },
    { name: "Python", level: 4, years: "2+ yrs" },
    { name: "Java", level: 3, years: "1+ yr" },
  ],
  Frameworks: [
    { name: "Laravel", level: 4, years: "2+ yrs" },
    { name: "CodeIgniter", level: 5, years: "3+ yrs" },
    { name: "Next.js / React", level: 5, years: "2+ yrs" },
    { name: "NestJS", level: 4, years: "< 1 yrs" },
    { name: "Spring Boot", level: 3, years: "1+ yr" },
    { name: "FastAPI / Flask", level: 4, years: "< 1 yrs" },
    { name: "Go Fiber", level: 4, years: "2+ yrs" },
  ],
  Data: [
    { name: "PostgreSQL", level: 5, years: "3+ yrs" },
    { name: "MySQL", level: 5, years: "4+ yrs" },
    { name: "MongoDB", level: 4, years: "2+ yrs" },
    { name: "Redis", level: 4, years: "2+ yrs" },
    { name: "GraphQL", level: 4, years: "2+ yrs" },
  ],
  Tools: [
    { name: "Git & GitHub", level: 5, years: "4+ yrs" },
    { name: "Docker", level: 4, years: "2+ yrs" },
    { name: "Vercel / AWS", level: 4, years: "2+ yrs" },
    { name: "CI/CD", level: 4, years: "2+ yrs" },
  ],
}

export const experiences = [
  {
    role: "Intern Full-stack Engineer",
    org: "PT. Hyperdata Solusindo Mandiri",
    period: "2023 - 2024",
    location: "On-site · Tangerang, ID",
    type: "Internship",
    bullets: [
      "Ship full-stack features across CodeIgniter, Laravel, and Spring Boot services for internal and client products.",
      "Own architecture decisions, API design, and edge-case handling to keep products dependable.",
      "Collaborate async with design to translate complex flows into calm interfaces.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Lumitalyst",
    period: "2025 — Present",
    location: "Remote · Tangerang, ID",
    type: "Freelance / Product Team",
    bullets: [
      "Ship full-stack features across Laravel, Next.js, and Go services for internal and client products.",
      "Own architecture decisions, API design, and edge-case handling to keep products dependable.",
      "Collaborate async with design to translate complex flows into calm interfaces.",
    ],
  },
  {
    role: "Informatics Student",
    org: "Pamulang University",
    period: "2025 — Present",
    location: "Pamulang, Indonesia",
    type: "S1 Informatics Engineering",
    bullets: [
      "Focus on software engineering, databases, and AI fundamentals.",
      "3rd Place — 2025 LKS AI Award, Malang City (city-level).",
    ],
  },
]

export const socials = {
  github: "https://github.com/ItzRyz",
  linkedin: "https://www.linkedin.com/in/salmanafz",
  email: "farizsalman14@gmail.com",
  instagram: "https://www.instagram.com/slmvaax",
  location: "Pamulang · Indonesia · WIB (UTC+7)",
  availability: "Available for freelance & full-time (remote)",
}

export const siteConfig = {
  name: "Lumiva",
  fullName: "Muhammad Salman Al Farizi",
  title: "Software Engineer — Full-stack Systems",
  url: "https://lumivax.vercel.app",
  description:
    "Portfolio of Muhammad Salman Al Farizi (Lumiva) — software engineer crafting dependable products across the web. Next.js, Laravel, Go, and thoughtful systems.",
  keywords: [
    "Lumiva",
    "Muhammad Salman Al Farizi",
    "Software Engineer",
    "Full-stack",
    "Next.js",
    "Laravel",
    "Golang",
    "Portfolio",
    "Indonesia",
  ],
}
