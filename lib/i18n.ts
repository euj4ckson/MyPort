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
    language: { label: "Alterar idioma", portuguese: "Português", english: "Inglês" },
    theme: { toggle: "Alterar tema" },
    hero: {
      available: "Disponível para novas oportunidades",
      viewProjects: "Ver projetos",
      contact: "Entrar em contato",
      architecture: "Arquitetura .NET",
      restApis: "APIs REST",
      multiplatform: "MAUI multiplataforma",
      featured: "Projeto destaque",
      featuredFallback: "Projeto em destaque",
      featuredDescription: "Projeto selecionado para destaque na página inicial.",
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
      gallery: "Galeria",
      demo: "Demo",
      github: "GitHub",
      caseStudy: "Estudo de caso",
    },
    about: {
      eyebrow: "Sobre",
      title: "Arquitetura, boas práticas e entrega de valor",
      stack: "Stack principal",
      stackDescription:
        "Ferramentas focadas em organização, desempenho e escalabilidade.",
      resume: "Baixar currículo",
      experience: "Experiência",
    },
    certificatesPreview: {
      eyebrow: "Certificados",
      title: "Formação contínua em .NET e boas práticas",
      description:
        "Certificações e cursos focados em qualidade, escalabilidade e desenvolvimento moderno.",
      all: "Ver todos os certificados",
      credential: "Credencial:",
    },
    certificatesPage: {
      eyebrow: "Formação e certificados",
      title: "Certificações e formação acadêmica",
      description:
        "Filtre por categoria para visualizar certificados ou formação acadêmica.",
      all: "Todos",
      certifications: "Certificações",
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
      title: "Vamos construir algo sólido",
      description:
        "Compartilhe objetivos, prazo e contexto. Respondo com um plano claro e próximos passos.",
      direct: "Contato direto",
      directDescription:
        "Prefere uma resposta rápida? Fale comigo pelos canais abaixo.",
      available: "Disponível para projetos em .NET, ASP.NET Core e MAUI.",
    },
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "voce@empresa.com",
      message: "Mensagem",
      messagePlaceholder: "Conte um pouco sobre o projeto",
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
      description: "A página que você buscou não existe. Vamos voltar ao início.",
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
    language: { label: "Change language", portuguese: "Portuguese", english: "English" },
    theme: { toggle: "Toggle theme" },
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
      description: "Filter by category, search by keyword, and explore the details.",
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
      gallery: "Gallery",
      demo: "Demo",
      github: "GitHub",
      caseStudy: "Case study",
    },
    about: {
      eyebrow: "About",
      title: "Architecture, best practices, and valuable outcomes",
      stack: "Core stack",
      stackDescription:
        "Tools focused on organization, performance, and scalability.",
      resume: "Download résumé",
      experience: "Experience",
    },
    certificatesPreview: {
      eyebrow: "Certificates",
      title: "Continuous learning in .NET and best practices",
      description:
        "Certificates and courses focused on quality, scalability, and modern development.",
      all: "View all certificates",
      credential: "Credential:",
    },
    certificatesPage: {
      eyebrow: "Education and certificates",
      title: "Certificates and academic background",
      description:
        "Filter by category to view certificates or academic education.",
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
      title: "Let’s build something solid",
      description:
        "Share your goals, timeline, and context. I will respond with a clear plan and next steps.",
      direct: "Direct contact",
      directDescription: "Need a quick reply? Reach me through the channels below.",
      available: "Available for .NET, ASP.NET Core, and MAUI projects.",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder: "Tell me a little about your project",
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
      description: "The page you are looking for does not exist. Let’s go home.",
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
> & {
  thumbnailAlt: string;
  galleryAlts?: string[];
};

const projectTranslations: Record<string, ProjectTranslation> = {
  "database-portal": {
    title: "DatabasePortal",
    shortDescription:
      "A governance portal for securely validating, authorizing, and auditing SQL Server operations.",
    description:
      "A full-stack application that centralizes access to SQL Server databases and controls each operation by user, role, environment, statement, and object. The portal provides a protected SQL console, connection and permission management, and complete request traceability.",
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
    thumbnailAlt:
      "DatabasePortal dashboard with governance metrics, a protected SQL console, and an audit trail",
  },
  bancada: {
    title: "Bancada",
    shortDescription:
      "A recipe community born from my passion for cooking and thoughtfully crafted digital experiences.",
    description:
      "A full-stack platform where home cooks can publish and discover recipes, create profiles, save favorites, comment, and join culinary challenges. The project turns my personal passion for cooking into a complete, secure, and responsive experience.",
    role: "Full-stack Developer",
    tags: ["C#", ".NET", "Blazor", "Full-stack", "API"],
    highlights: [
      "Recipe publishing, editing, and discovery with filters for text, difficulty, time, and ingredients",
      "Public profiles, favorites, comments, and secure HTTP-only cookie authentication",
      "Culinary challenges and a Mystery Box designed to inspire creativity and community participation",
      "Layered architecture, PostgreSQL, local/R2 image uploads, and domain and integration tests",
    ],
    challenges:
      "Bring content, social interaction, and participation rules into a simple experience for home cooks without compromising security, consistency, or room to grow.",
    solutions:
      "Separated domain, application, infrastructure, API, and Blazor client responsibilities, centralized authentication and authorization with ASP.NET Core Identity, and protected key workflows with automated tests.",
    thumbnailAlt:
      "Bancada preview featuring an editorial introduction, culinary challenge, and recipe cards",
  },
  "supportdesk-api": {
    title: "SupportDesk API",
    shortDescription:
      "Support ticket management API with authentication, auditing, and real-time updates.",
    description:
      "Backend for support teams to manage the entire ticket lifecycle, with role-based access, public and internal comments, change history, and real-time notifications.",
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
      "Service scheduling API with availability, secure bookings, and conflict prevention.",
    description:
      "Backend for customers to book services and providers to manage their catalog, weekly availability, and the complete appointment lifecycle.",
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
    thumbnailAlt:
      "Isometric ServiceScheduler illustration with a calendar, clock, and services connected to available time slots",
  },
  "sos-mg": {
    title: "SOS MG",
    shortDescription:
      "Public portal for managing shelters and donation points during floods and severe rainfall.",
    description:
      "Web application that centralizes official shelter and collection-point information during extreme weather in Minas Gerais, with a restricted dashboard for authorized teams to update capacity and urgent needs.",
    role: "Full-stack Developer",
    tags: ["Next.js", "TypeScript", "Prisma", "Maps", "Full-stack"],
    highlights: [
      "Public portal with shelter capacity, locations, and official donation points",
      "Credential-protected dashboard for authorized teams to update operational information",
      "Interactive Leaflet and OpenStreetMap experience with clustering for quick crisis response",
    ],
    challenges:
      "Keep operational information reliable and current during periods of heavy rainfall and high demand.",
    solutions:
      "NextAuth authentication, Prisma data modeling, serverless PostgreSQL, and an interface designed to emphasize urgent needs.",
    thumbnailAlt:
      "Flood-response map with shelters and donation points across Minas Gerais",
  },
  "pacman-3d": {
    title: "Pacman 3D",
    shortDescription: "A browser-based 3D game inspired by Pac-Man.",
    description:
      "3D web game featuring maze movement, point collection, and smooth browser-based gameplay.",
    role: "Developer",
    tags: ["GameDev", "3D", "Web"],
    highlights: [
      "Interactive 3D map with real-time movement",
      "Game loop with point collection and match progression",
      "Web deployment for instant browser play",
    ],
    challenges: "Maintain smooth 3D rendering performance across different devices.",
    solutions:
      "Optimized the render loop, refined collision behavior, and modularized the game logic.",
    thumbnailAlt: "Pacman 3D game preview featuring a maze and collectible points",
    galleryAlts: [
      "Pacman 3D chase scene with ghosts in a neon maze",
      "Pacman 3D level preview with score and map layout",
    ],
  },
  encanshop: {
    title: "EncanShop",
    shortDescription: "Candle e-commerce with a simple shopping experience.",
    description:
      "E-commerce project for selling candles, featuring a modern web interface built with TypeScript.",
    role: "Developer",
    tags: ["TypeScript", "E-commerce", "Web"],
    highlights: [
      "Candle catalog with a clear visual presentation",
      "Navigation flow designed for product discovery",
      "Front-end foundation ready for new features",
    ],
    challenges:
      "Organize product presentation and navigation while maintaining strong performance.",
    solutions:
      "Reusable component structure, focused interface design, and strongly typed code.",
    thumbnailAlt: "EncanShop preview",
  },
  fastbite: {
    title: "FastBite",
    shortDescription: "Fast-ordering web application with a Python backend.",
    description:
      "Full-stack project with a Python backend and an interface built with HTML, CSS, and JavaScript.",
    role: "Developer",
    tags: ["Python", "Web", "Full-stack"],
    highlights: [
      "Simple, direct ordering interface",
      "Organized architecture ready to grow",
      "Clear separation between logic and presentation",
    ],
    challenges: "Keep the backend simple and the interface lightweight for quick use.",
    solutions:
      "Modular implementation focused on short, direct flows for the end user.",
    thumbnailAlt: "FastBite dashboard with an order queue and delivery route",
  },
  "app-controle-financeiro": {
    title: "Financial Control App",
    shortDescription: "A .NET MAUI app for managing personal finances.",
    description:
      "Cross-platform .NET MAUI application focused on tracking expenses and income.",
    role: "Developer",
    tags: ["MAUI", "Mobile", ".NET"],
    highlights: [
      "Consistent experience across multiple platforms",
      "Clear flows for entering and monitoring transactions",
      "Architecture designed for future features",
    ],
    challenges: "Deliver a strong experience across different devices.",
    solutions: "Componentized the interface and standardized styling and navigation.",
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
  headline: "Developer",
  location: "Brazil",
  bio: ".NET, ASP.NET, and MAUI developer passionate about building intelligent solutions that simplify real-world problems.",
  summary:
    "I am a .NET developer with technical and technology degrees in Systems Analysis and Development. I focus on architecture, design patterns, and best practices that deliver scalable, high-quality applications. I work with ASP.NET, .NET MAUI, and cross-platform development, always prioritizing organization, performance, and robust solutions that create real value for users and businesses.",
};

export function localizeProfile(language: Language) {
  return language === "en" ? profileEnglish : profile;
}

export const timelineEnglish: TimelineItem[] = [
  {
    period: "2024 - Present",
    title: ".NET Developer PL",
    company: "Actively working in the software development market",
    description: "Working with .NET, integrations, and cross-platform applications.",
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
  "/certificates/dotnet-maui-udemy.jpg": { title: ".NET MAUI", issuer: "Udemy" },
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
    title: "Cloud Computing",
    issuer: "Amazon Web Services (AWS)",
  },
};

export function localizeCertificate(
  certificate: Certificate,
  language: Language,
): Certificate {
  if (language === "pt") return certificate;
  if (certificate.category === "academic") {
    const academicTitles: Record<string, string> = {
      "ANALISE E DESENVOLVIMENTO DE SISTEMAS - FORMACAO TECNICA":
        "SYSTEMS ANALYSIS AND DEVELOPMENT — TECHNICAL DEGREE",
      "POS-GRADUACAO EM ENGENHARIA DE SOFTWARE - EM ANDAMENTO":
        "POSTGRADUATE DEGREE IN SOFTWARE ENGINEERING — IN PROGRESS",
      "TECNOLOGO EM ANALISE E DESENVOLVIMENTO DE SISTEMAS":
        "TECHNOLOGY DEGREE IN SYSTEMS ANALYSIS AND DEVELOPMENT",
    };
    return {
      ...certificate,
      title: academicTitles[certificate.title] ?? certificate.title,
      issuer:
        certificate.issuer === "Formacao Academica"
          ? "Academic Education"
          : certificate.issuer,
    };
  }
  return { ...certificate, ...certificateTranslations[certificate.image] };
}
