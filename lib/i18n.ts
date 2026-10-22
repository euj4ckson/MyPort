import type { Certificate } from "@/content/certificates";
import type { Project } from "@/content/projects";
import { profile } from "@/content/profile";
import type { TimelineItem } from "@/content/timeline";

export type Language = "pt" | "en";

export const copy = {
  pt: {
    nav: {
      home: "Início",
      projects: "Projetos",
      certificates: "Certificados",
      contact: "Contato",
      talk: "Fale comigo",
    },
    language: {
      label: "Alterar idioma",
      portuguese: "Português",
      english: "Inglês",
    },
    theme: {
      switchToLight: "Ativar tema claro",
      switchToDark: "Ativar tema escuro",
    },
    hero: {
      available: "Disponível para novas oportunidades",
      viewProjects: "Ver projetos",
      contact: "Entrar em contato",
      architecture: "Arquitetura .NET",
      restApis: "APIs REST",
      multiplatform: "MAUI multiplataforma",
      featured: "Projeto destaque",
      featuredFallback: "Projeto em destaque",
      featuredDescription:
        "Projeto selecionado para destaque na página inicial.",
      previewAlt: "Prévia do projeto",
      github: "Ver prévia",
      details: "Ver detalhes",
    },
    projectsPreview: {
      eyebrow: "Projetos",
      title: "Soluções multiplataforma desenvolvidas",
      description:
        "Projetos focados em estabilidade, desempenho e boas práticas de arquitetura.",
      all: "Ver todos os projetos",
    },
    projectsPage: {
      eyebrow: "Projetos",
      title: "Todos os projetos",
      description:
        "Filtre por categoria, busque por palavra-chave e veja os detalhes.",
      searchTitle: "Buscar e filtrar",
      searchDescription:
        "Encontre projetos por stack, categoria ou palavra-chave.",
      searchPlaceholder: "Buscar projetos",
      all: "Todos",
      empty: "Nenhum projeto encontrado. Tente outro termo ou filtro.",
    },
    projectCard: { details: "Ver detalhes", open: "Abrir" },
    projectDetail: {
      deliveries: "Principais entregas",
      challengesSolutions: "Desafios e soluções",
      challenge: "Desafio:",
      solution: "Solução:",
      caveat: "Limitação conhecida:",
      gallery: "Galeria",
      demo: "Demo",
      github: "GitHub",
      caseStudy: "Estudo de caso",
    },
    about: {
      eyebrow: "Sobre",
      title: "Além da interface, a engenharia.",
      stack: "Stack principal",
      stackDescription:
        "Ferramentas focadas em organização, desempenho e escalabilidade.",
      resume: "Baixar currículo",
      experience: "Experiência",
    },
    certificatesPreview: {
      eyebrow: "Certificados",
      title: "Formação e aprendizado contínuo.",
      description:
        "Formação acadêmica e cursos relevantes para desenvolvimento backend.",
      all: "Ver todos os certificados",
      credential: "Credencial:",
    },
    certificatesPage: {
      eyebrow: "Formação e certificados",
      title: "Certificados e formação acadêmica",
      description:
        "Veja cursos concluídos e formação acadêmica, incluindo estudos em andamento.",
      all: "Todos",
      certifications: "Certificados",
      academic: "Formação acadêmica",
      credential: "Credencial:",
      viewCredential: "Ver credencial",
      details: "Ver detalhes",
      open: "Abrir link",
      download: "Baixar imagem",
      previewAlt: "Prévia do certificado",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos trabalhar juntos?",
      description:
        "Está buscando alguém para seu time ou quer conversar sobre um projeto? Conte sobre a oportunidade.",
      direct: "Contato direto",
      directDescription:
        "Prefere uma resposta rápida? Fale comigo pelos canais abaixo.",
      available:
        "Aberto a conversar sobre oportunidades em desenvolvimento backend .NET.",
    },
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "voce@empresa.com",
      message: "Mensagem",
      messagePlaceholder: "Conte sobre a vaga, o time ou o projeto",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada. Obrigado!",
      error: "Algo deu errado. Tente novamente.",
      nameError: "Informe seu nome",
      emailError: "Digite um email válido",
      messageError: "Explique melhor sua necessidade",
    },
    notFound: {
      title: "Página não encontrada",
      description:
        "A página que você buscou não existe. Vamos voltar ao início.",
      back: "Voltar para o início",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      talk: "Contact me",
    },
    language: {
      label: "Change language",
      portuguese: "Portuguese",
      english: "English",
    },
    theme: {
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
    },
    hero: {
      available: "Available for new opportunities",
      viewProjects: "View projects",
      contact: "Get in touch",
      architecture: ".NET Architecture",
      restApis: "REST APIs",
      multiplatform: "Cross-platform MAUI",
      featured: "Featured project",
      featuredFallback: "Featured project",
      featuredDescription: "Project selected for the home page.",
      previewAlt: "Project preview",
      github: "View on GitHub",
      details: "View details",
    },
    projectsPreview: {
      eyebrow: "Projects",
      title: "Cross-platform solutions I have built",
      description:
        "Projects focused on stability, performance, and sound architectural practices.",
      all: "View all projects",
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "All projects",
      description:
        "Filter by category, search by keyword, and explore the details.",
      searchTitle: "Search and filter",
      searchDescription: "Find projects by stack, category, or keyword.",
      searchPlaceholder: "Search projects",
      all: "All",
      empty: "No projects found. Try another term or filter.",
    },
    projectCard: { details: "View details", open: "Open" },
    projectDetail: {
      deliveries: "Key deliverables",
      challengesSolutions: "Challenges and solutions",
      challenge: "Challenge:",
      solution: "Solution:",
      caveat: "Known limitation:",
      gallery: "Gallery",
      demo: "Demo",
      github: "GitHub",
      caseStudy: "Case study",
    },
    about: {
      eyebrow: "About",
      title: "Beyond the interface, the engineering.",
      stack: "Core stack",
      stackDescription:
        "Tools focused on organization, performance, and scalability.",
      resume: "Download résumé",
      experience: "Experience",
    },
    certificatesPreview: {
      eyebrow: "Certificates",
      title: "Education and continued learning.",
      description:
        "Academic background and selected courses relevant to backend development.",
      all: "View all certificates",
      credential: "Credential:",
    },
    certificatesPage: {
      eyebrow: "Education and certificates",
      title: "Certificates and academic background",
      description:
        "Browse completed courses and academic education, including studies in progress.",
      all: "All",
      certifications: "Certificates",
      academic: "Academic background",
      credential: "Credential:",
      viewCredential: "View credential",
      details: "View details",
      open: "Open link",
      download: "Download image",
      previewAlt: "Certificate preview",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s work together.",
      description:
        "Looking for someone to join your team or want to discuss a project? Tell me about the opportunity.",
      direct: "Direct contact",
      directDescription:
        "Need a quick reply? Reach me through the channels below.",
      available: "Open to discussing .NET backend opportunities.",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder: "Tell me about the role, team, or project",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent. Thank you!",
      error: "Something went wrong. Please try again.",
      nameError: "Please enter your name",
      emailError: "Enter a valid email address",
      messageError: "Please provide a little more detail",
    },
    notFound: {
      title: "Page not found",
      description:
        "The page you are looking for does not exist. Let’s go home.",
      back: "Back to home",
    },
  },
} as const;

type ProjectTranslation = Pick<
  Project,
  | "title"
  | "shortDescription"
  | "description"
  | "role"
  | "tags"
  | "highlights"
  | "challenges"
  | "solutions"
  | "caveats"
> & {
  thumbnailAlt: string;
  galleryAlts?: string[];
};

const projectTranslations: Record<string, ProjectTranslation> = {
  "claude-admin-agent": {
    title: "Ticket Control Center",
    shortDescription:
      "A desktop-first tool for organizing ticket work, from scope review to tested delivery.",
    description:
      "A local application for following development tickets through analysis, approval, implementation, testing, review, and delivery. The C# and ASP.NET Core server coordinates isolated Git worktrees, Azure DevOps tickets, Claude Code and Codex sessions, and delivery evidence. Ticket data and workflow files remain on the developer's machine.",
    role: "Full-stack Developer",
    tags: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Automation",
      "Developer Tools",
      "Security",
      "Full-stack",
    ],
    highlights: [
      "Ticket board with clear stages and scope approval tied to the planned changes",
      "Separate Git worktrees for concurrent ticket work without disturbing the main checkout",
      "Local policies for scope checks, shared build resources, and avoiding accidental pushes",
      "Test matrices and attached evidence to make reviews easier to verify",
      "Azure DevOps import and support for both Claude Code and Codex",
    ],
    challenges:
      "Keep ticket context, code changes, and test results connected while several repositories and development sessions are in progress.",
    solutions:
      "The application separates tickets into worktrees, records approvals and test evidence, and coordinates agent sessions through local policies. It automates routine tracking while leaving scope decisions and final delivery visible to the developer.",
    thumbnailAlt:
      "Ticket Control Center dashboard with development stages, approvals, and test evidence",
  },
  "database-portal": {
    title: "DatabasePortal",
    shortDescription:
      "A .NET portal for managing SQL Server access, permissions, and audit history.",
    description:
      "DatabasePortal brings database connections, access rules, and a SQL console into one place. Before a command runs, the server checks the user, environment, statement, and affected objects; the decision and result are recorded in the history.",
    role: "Full-stack Developer",
    tags: ["C#", ".NET", "Blazor", "SQL Server", "Full-stack"],
    highlights: [
      "SQL console with policy validation, authorization, and auditing before every execution",
      "Granular permissions by user, role, environment, statement type, and database object",
      "Administration panel for users, protected connections, and access rules",
      "History containing the hash, decision, result, and context of every SQL request",
      "SQL Server migrations, a dedicated migration tool, and automated policy and API tests",
    ],
    challenges:
      "Enable SQL operations across different databases without turning technical access into a security blind spot, while preserving least privilege and individual accountability.",
    solutions:
      "Implemented default-deny behavior, structural T-SQL analysis with ScriptDom, server-side authorization rules, credential protection, and persistent auditing for every decision.",
    caveats:
      "The README states that the demo setup still uses Encrypt=false and needs a least-privilege account instead of sa before any production exposure.",
    thumbnailAlt:
      "DatabasePortal dashboard with governance metrics, a protected SQL console, and an audit trail",
  },
  bancada: {
    title: "Bancada",
    shortDescription:
      "A recipe community to discover dishes, save favorites, and cook together.",
    description:
      "Bancada brings recipe publishing and discovery together. Cooks can filter by ingredients, difficulty, or prep time, save favorites, comment, and take part in culinary challenges.",
    role: "Full-stack Developer",
    tags: ["C#", ".NET", "Blazor", "Full-stack", "API"],
    highlights: [
      "Recipe search by ingredients, preparation time, and difficulty",
      "Profiles, favorites, and comments protected by HTTP-only cookie authentication",
      "Challenges and a Mystery Box for suggesting new combinations",
      "Local or Cloudflare R2 image uploads, with domain and integration tests",
    ],
    challenges:
      "Bring recipes and community features together without making the experience cumbersome or scattering access rules throughout the application.",
    solutions:
      "Separated the interface, API, and business rules, centralized authentication and authorization with ASP.NET Core Identity, and covered the main flows with tests.",
    thumbnailAlt:
      "Bancada preview featuring an editorial introduction, culinary challenge, and recipe cards",
  },
  "supportdesk-api": {
    title: "SupportDesk API",
    shortDescription:
      "Support API for handling tickets, access rules, and status updates.",
    description:
      "An API for the support workflow: ticket creation, assignment, comments, and status changes. Customers, agents, and administrators have different permissions, and updates can be followed in real time.",
    role: "Back-end Developer",
    tags: ["C#", ".NET", "API", "Back-end"],
    highlights: [
      "JWT authentication and authorization for customer, agent, and administrator roles",
      "Complete ticket workflow with filters, pagination, assignment, comments, and controlled status transitions",
      "Change auditing, optimistic concurrency, and real-time notifications with SignalR",
      "Integration tests, PostgreSQL migrations, Docker Compose, and continuous integration",
    ],
    challenges:
      "Ensure customers can only view their own tickets while the support team retains secure operational access and concurrent updates never overwrite data silently.",
    solutions:
      "Centralized authorization rules, ASP.NET Core Identity with JWT, optimistic concurrency versioning, audit history, and integration tests with in-memory SQLite.",
    thumbnailAlt:
      "Conceptual SupportDesk API dashboard with ticket queue, auditing, and a secure support workflow",
  },
  "service-scheduler-api": {
    title: "ServiceScheduler API",
    shortDescription:
      "Scheduling API with availability lookup and protection against conflicting bookings.",
    description:
      "Customers check availability and book services; providers manage their catalog and weekly schedule. The API also handles rescheduling, confirmation, completion, and cancellation.",
    role: "Back-end Developer",
    tags: ["C#", ".NET", "API", "Back-end"],
    highlights: [
      "JWT authentication and authorization for customer, provider, and administrator roles",
      "Service catalog, weekly availability, and free-slot calculation based on service duration",
      "Appointment creation, rescheduling, confirmation, completion, and cancellation",
      "Transactional conflict detection, optimistic concurrency, auditing, and data isolation",
      "Integration tests, SQL Server migrations, Docker Compose, and continuous integration",
    ],
    challenges:
      "Prevent overlapping bookings when multiple customers try to reserve the same time slot simultaneously without compromising data privacy.",
    solutions:
      "Serializable transactions protect availability checks and reservations, while version control, interval indexes, and authorization rules ensure consistency and security.",
    caveats:
      "The documentation describes conflict prevention, but the published test makes bookings sequentially. A simultaneous-request test against SQL Server is still needed to prove that scenario.",
    thumbnailAlt:
      "Isometric ServiceScheduler illustration with a calendar, clock, and services connected to available time slots",
  },
  "sos-mg": {
    title: "SOS MG",
    shortDescription:
      "Shelter and donation-point information for periods of heavy rain in Minas Gerais.",
    description:
      "SOS MG brings shelters and donation points together on a map. Authorized teams update capacity and local needs through a dashboard, while the public can find available locations.",
    role: "Full-stack Developer",
    tags: ["Next.js", "TypeScript", "Prisma", "Maps", "Full-stack"],
    highlights: [
      "Public portal with shelter capacity, locations, and official donation points",
      "Credential-protected dashboard for authorized teams to update operational information",
      "Interactive Leaflet and OpenStreetMap experience with clustering for quick crisis response",
    ],
    challenges:
      "Make local capacity and urgent needs easy to find as conditions change.",
    solutions:
      "Separated the public map from the update dashboard, with authentication, Prisma, and PostgreSQL for managing the information.",
    thumbnailAlt:
      "Flood-response map with shelters and donation points across Minas Gerais",
  },
  "pacman-3d": {
    title: "Pacman 3D",
    shortDescription:
      "A 3D maze inspired by Pac-Man, playable right in the browser.",
    description:
      "A short arcade-style experience in 3D: explore the maze, collect points, and avoid the ghosts without installing anything.",
    role: "Developer",
    tags: ["GameDev", "3D", "Web"],
    highlights: [
      "Interactive 3D map with real-time movement",
      "Game loop with point collection and match progression",
      "Web deployment for instant browser play",
    ],
    challenges:
      "Keep the controls responsive and rendering smooth across browsers.",
    solutions:
      "Separated the game loop, movement, and collision handling to make gameplay predictable and easier to tune.",
    thumbnailAlt:
      "Pacman 3D game preview featuring a maze and collectible points",
    galleryAlts: [
      "Pacman 3D chase scene with ghosts in a neon maze",
      "Pacman 3D level preview with score and map layout",
    ],
  },
  encanshop: {
    title: "EncanShop",
    shortDescription:
      "A candle shop with a catalog, checkout, and order tracking.",
    description:
      "EncanShop brings the storefront, cart, checkout, and customer area together. The admin panel manages products and orders; Mercado Pago handles payments, and webhooks keep order status up to date.",
    role: "Developer",
    tags: ["React", "TypeScript", "E-commerce", "Web"],
    highlights: [
      "Checkout with Pix, card, or completion through WhatsApp",
      "Customer area for orders, addresses, and pending payments",
      "Admin panel for products, coupons, and orders",
      "Mercado Pago webhooks and transactional emails",
    ],
    challenges:
      "Keep order totals and payment status consistent between the store and Mercado Pago.",
    solutions:
      "The server recalculates products and shipping before creating an order. Webhooks sync payment status, and Redis helps prevent duplicate concurrent processing.",
    thumbnailAlt: "EncanShop preview",
  },
  fastbite: {
    title: "FastBite",
    shortDescription:
      "A straightforward app for registering orders and following the service queue.",
    description:
      "A small full-stack project with a Python backend and an HTML, CSS, and JavaScript interface for following orders without adding friction to the workflow.",
    role: "Developer",
    tags: ["Python", "Web", "Full-stack"],
    highlights: [
      "Simple, direct ordering interface",
      "Organized architecture ready to grow",
      "Clear separation between logic and presentation",
    ],
    challenges: "Make order progress clear without overloading the interface.",
    solutions:
      "Kept order logic in the backend and made the main actions available in a few steps.",
    thumbnailAlt: "FastBite dashboard with an order queue and delivery route",
  },
  "app-controle-financeiro": {
    title: "Financial Control App",
    shortDescription:
      "A cross-platform app for recording personal income and expenses.",
    description:
      "A personal finance app built with .NET MAUI for recording income and expenses and checking transactions across devices.",
    role: "Developer",
    tags: ["MAUI", "Mobile", ".NET"],
    highlights: [
      "Consistent experience across multiple platforms",
      "Clear flows for entering and monitoring transactions",
      "Architecture designed for future features",
    ],
    challenges:
      "Keep transaction entry and review simple across different screen sizes.",
    solutions:
      "Used MAUI components and consistent navigation to keep the same workflows across platforms.",
    thumbnailAlt:
      "MAUI finance app mockup showing a summary of income and expenses",
  },
};

export function localizeProject(project: Project, language: Language): Project {
  if (language === "pt") return project;
  const translation = projectTranslations[project.slug];
  if (!translation) return project;

  return {
    ...project,
    ...translation,
    thumbnail: { ...project.thumbnail, alt: translation.thumbnailAlt },
    gallery: project.gallery?.map((item, index) => ({
      ...item,
      alt: translation.galleryAlts?.[index] ?? item.alt,
    })),
  };
}

export const profileEnglish = {
  ...profile,
  headline: "Backend Developer",
  location: "Juiz de Fora, Brazil",
  bio: "I work with C#, .NET and SQL Server to evolve business systems and integrations. In my personal projects, I explore APIs, security, testing and AI-assisted automation.",
  summary:
    "I develop and maintain ERP systems that support tax, financial, logistics and administrative processes. I investigate issues across code, databases and integrations, translate user needs into features and help validate deliveries. I hold a technology degree in Systems Analysis and Development and a technical qualification in Systems Development, and I am pursuing postgraduate studies in Software Engineering.",
};

export function localizeProfile(language: Language) {
  return language === "en" ? profileEnglish : profile;
}

export const timelineEnglish: TimelineItem[] = [
  {
    period: "Jun 2025 - Present",
    title: "Backend Developer",
    company: "Union Sistemas de Gestão",
    description:
      "ERP development and maintenance with C#, ASP.NET, VB.NET and SQL Server; REST integrations, tax, financial and logistics processes, and an Android sales app integrated through WCF/SOAP and SQLite.",
  },
  {
    period: "Apr 2024 - Jun 2025",
    title: "Junior Backend Developer",
    company: "Union Sistemas de Gestão",
    description:
      "Implementation and maintenance of ERP features, integrations, SQL queries and stored procedures. Incident reproduction, investigation and improvement validation.",
  },
  {
    period: "Aug 2023 - Jan 2024",
    title: "Systems Analyst Intern",
    company: "Santa Casa de Juiz de Fora",
    description:
      "ERP systems and SQL database routines analysis, incident investigation and support for internal operations.",
  },
];

const certificateTranslations: Record<
  string,
  Pick<Certificate, "title" | "issuer">
> = {
  "/certificates/programacao-de-algoritmos-escalaveis.jpg": {
    title: "SCALABLE ALGORITHM PROGRAMMING",
    issuer: "Estácio",
  },
  "/certificates/dotnet-maui-udemy.jpg": {
    title: ".NET MAUI",
    issuer: "Udemy",
  },
  "/certificates/desenvolvimento-rapido-python-cloud-iot-bigdata.jpg": {
    title: "RAPID PYTHON APPLICATION DEVELOPMENT FOR CLOUD, IOT, AND BIG DATA",
    issuer: "Estácio",
  },
  "/certificates/fundamentos-python-dsa-2024.jpg": {
    title:
      "Python Language Fundamentals for Data Analysis and Data Science — Introductory Level",
    issuer: "Data Science Academy",
  },
  "/certificates/programacao-para-internet.jpg": {
    title: "WEB PROGRAMMING",
    issuer: "Estácio",
  },
  "/certificates/programacao-dispositivos-moveis.jpg": {
    title: "MOBILE DEVICE PROGRAMMING",
    issuer: "Estácio",
  },
  "/certificates/computacao-em-nuvem-aws.png": {
    title: "Cloud Computing | AWS Discovery Day",
    issuer: "Estácio · Ka Solution",
  },
};

export function localizeCertificate(
  certificate: Certificate,
  language: Language,
): Certificate {
  if (language === "pt") return certificate;
  if (certificate.category === "academic") {
    const academicTitles: Record<string, string> = {
      "Técnico em Desenvolvimento de Sistemas":
        "Technical Qualification in Systems Development",
      "Pós-graduação em Engenharia de Software":
        "POSTGRADUATE DEGREE IN SOFTWARE ENGINEERING — IN PROGRESS",
      "Tecnólogo em Análise e Desenvolvimento de Sistemas":
        "TECHNOLOGY DEGREE IN SYSTEMS ANALYSIS AND DEVELOPMENT",
    };
    return {
      ...certificate,
      title: academicTitles[certificate.title] ?? certificate.title,
      issuer: certificate.issuer,
      period:
        certificate.period === "Mar/2023 - Ago/2025"
          ? "Mar 2023 - Aug 2025"
          : certificate.period === "2021 - 2023"
            ? certificate.period
            : "Apr 2026 - Apr 2027 · In progress",
    };
  }
  return {
    ...certificate,
    ...(certificate.image ? certificateTranslations[certificate.image] : {}),
  };
}
