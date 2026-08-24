export type ProjectLink = {
  label: "Demo" | "GitHub" | "Case Study";
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  challenges: string;
  solutions: string;
  links: ProjectLink[];
  thumbnail: {
    src: string;
    alt: string;
  };
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "bancada",
    title: "Bancada",
    shortDescription:
      "Comunidade de receitas criada a partir da minha paixão pela culinária e por experiências digitais bem construídas.",
    description:
      "Plataforma full-stack para quem cozinha em casa publicar e descobrir receitas, criar perfis, salvar favoritos, comentar e participar de desafios culinários. O projeto nasceu da minha paixão pela cozinha e transforma esse interesse pessoal em uma experiência completa, segura e responsiva.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "C# 14",
      ".NET 10",
      "Blazor WebAssembly",
      "ASP.NET Core Minimal APIs",
      "PostgreSQL",
      "Entity Framework Core",
      "ASP.NET Core Identity",
      "Cloudflare R2",
      "Docker",
      "xUnit",
    ],
    tags: ["C#", ".NET", "Blazor", "Full-stack", "API"],
    highlights: [
      "Publicação, edição e descoberta de receitas com busca por texto, dificuldade, tempo e ingrediente",
      "Perfis públicos, favoritos, comentários e autenticação segura com cookie HTTP-only",
      "Desafios culinários e Caixa Misteriosa para estimular criatividade e participação da comunidade",
      "Arquitetura em camadas, PostgreSQL, upload de imagens local/R2 e testes de domínio e integração",
    ],
    challenges:
      "Reunir conteúdo, interação social e regras de participação em uma experiência simples para quem cozinha em casa, sem abrir mão de segurança, consistência e capacidade de evolução.",
    solutions:
      "Separei domínio, aplicação, infraestrutura, API e cliente Blazor, centralizei autenticação e autorização com ASP.NET Core Identity e protegi os principais fluxos com testes automatizados.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/Bancada.git" },
    ],
    thumbnail: {
      src: "/projects/bancada.svg",
      alt: "Prévia do Bancada com apresentação editorial, desafio culinário e cartões de receitas",
    },
  },
  {
    slug: "supportdesk-api",
    title: "SupportDesk API",
    shortDescription:
      "API de gestão de chamados de suporte com autenticação, auditoria e atualizações em tempo real.",
    description:
      "Backend para equipes de atendimento gerenciarem todo o ciclo de vida de chamados, com acesso por perfis, comentários públicos e internos, histórico de alterações e notificações em tempo real.",
    year: "2026",
    role: "Desenvolvedor Back-end",
    stack: [
      "C# 14",
      ".NET 10",
      "ASP.NET Core Minimal APIs",
      "PostgreSQL",
      "Entity Framework Core",
      "ASP.NET Core Identity",
      "JWT",
      "SignalR",
      "Docker",
      "xUnit",
    ],
    tags: ["C#", ".NET", "API", "Back-end"],
    highlights: [
      "Autenticação JWT e autorização por perfis de cliente, atendente e administrador",
      "Fluxo completo de chamados com filtros, paginação, atribuição, comentários e transições de status controladas",
      "Auditoria das alterações, concorrência otimista e notificações em tempo real com SignalR",
      "Testes de integração, migrações para PostgreSQL, Docker Compose e integração contínua",
    ],
    challenges:
      "Garantir que clientes visualizem apenas os próprios chamados, enquanto a equipe mantém acesso operacional seguro e atualizações concorrentes não sobrescrevem dados silenciosamente.",
    solutions:
      "Regras de autorização centralizadas nos serviços, ASP.NET Core Identity com JWT, controle de versão para concorrência otimista, histórico de auditoria e testes de integração com SQLite em memória.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/SupportDesk.git" },
    ],
    thumbnail: {
      src: "/projects/supportdesk.webp",
      alt: "Painel conceitual da API SupportDesk com fila de chamados, auditoria e fluxo seguro de atendimento",
    },
  },
  {
    slug: "service-scheduler-api",
    title: "ServiceScheduler API",
    shortDescription:
      "API de agendamento de serviços com disponibilidade, reservas seguras e prevenção de conflitos.",
    description:
      "Backend para clientes reservarem serviços e profissionais administrarem catálogo, disponibilidade semanal e todo o ciclo de vida dos atendimentos.",
    year: "2026",
    role: "Desenvolvedor Back-end",
    stack: [
      "C# 14",
      ".NET 10",
      "ASP.NET Core Minimal APIs",
      "SQL Server",
      "Entity Framework Core",
      "ASP.NET Core Identity",
      "JWT",
      "Docker",
      "xUnit",
    ],
    tags: ["C#", ".NET", "API", "Back-end"],
    highlights: [
      "Autenticação JWT e autorização por perfis de cliente, profissional e administrador",
      "Catálogo de serviços, disponibilidade semanal e cálculo de horários livres conforme a duração",
      "Criação, remarcação, confirmação, conclusão e cancelamento de agendamentos",
      "Detecção transacional de conflitos, concorrência otimista, auditoria e isolamento dos dados",
      "Testes de integração, migrações para SQL Server, Docker Compose e integração contínua",
    ],
    challenges:
      "Evitar reservas sobrepostas mesmo quando vários clientes tentam ocupar o mesmo horário simultaneamente, sem comprometer a privacidade dos dados.",
    solutions:
      "Transações com isolamento Serializable protegem a verificação e a reserva, enquanto controle de versão, índices por intervalo e regras de autorização garantem consistência e segurança.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/euj4ckson/ServiceScheduler.git",
      },
    ],
    thumbnail: {
      src: "/projects/service-scheduler.webp",
      alt: "Ilustração isométrica do ServiceScheduler com calendário, relógio e serviços conectados a horários disponíveis",
    },
  },
  {
    slug: "sos-mg",
    title: "SOS MG",
    shortDescription:
      "Portal publico para gestao de abrigos e pontos de doacao em crises de chuvas e enchentes.",
    description:
      "Aplicacao web para centralizar informacoes oficiais de abrigos e pontos de coleta durante eventos extremos em Minas Gerais, com painel restrito para equipes autorizadas atualizarem vagas e necessidades urgentes.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "Postgres (Neon/Supabase)",
      "NextAuth",
      "Leaflet",
      "OpenStreetMap",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Mapas", "Full-stack"],
    highlights: [
      "Portal publico com consulta de vagas, localizacao de abrigos e pontos oficiais de coleta",
      "Painel restrito com autenticacao por credenciais para atualizacao das informacoes por equipes autorizadas",
      "Mapa interativo com Leaflet + OpenStreetMap e clusters para leitura rapida em cenarios de crise",
    ],
    challenges:
      "Manter dados operacionais confiaveis e atualizados durante eventos de chuva forte com alta demanda.",
    solutions:
      "Fluxo autenticado com NextAuth, modelagem de dados com Prisma e Postgres serverless, e interface otimizada para destacar necessidades urgentes.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/SOS_MG.git" },
    ],
    thumbnail: {
      src: "/projects/sos-mg.svg",
      alt: "Mapa de resposta a enchentes com abrigos e pontos de doacao em Minas Gerais",
    },
  },
  {
    slug: "pacman-3d",
    title: "Pacman 3D",
    shortDescription: "Jogo 3D inspirado em Pac-Man para jogar direto no navegador.",
    description:
      "Projeto de game web em 3D com movimentacao em labirinto, coleta de pontos e foco em jogabilidade fluida.",
    year: "2026",
    role: "Desenvolvedor",
    stack: ["JavaScript", "Three.js", "HTML", "CSS"],
    tags: ["GameDev", "3D", "Web"],
    highlights: [
      "Mapa 3D interativo com movimentacao em tempo real",
      "Loop de jogo com coleta de pontos e progressao da partida",
      "Deploy web para execucao imediata no browser",
    ],
    challenges:
      "Manter boa performance de renderizacao 3D em diferentes dispositivos.",
    solutions:
      "Otimizacao do loop de renderizacao, ajustes de colisao e organizacao modular da logica do jogo.",
    links: [
      { label: "Demo", url: "https://pacman-kappa-liard.vercel.app/" },
      { label: "GitHub", url: "https://github.com/euj4ckson/PACMAN.git" },
    ],
    thumbnail: {
      src: "/projects/pacman-3d.svg",
      alt: "Preview do jogo Pacman 3D com labirinto e pontos",
    },
    gallery: [
      {
        src: "/projects/pacman-3d-chase.svg",
        alt: "Cena de perseguicao no Pacman 3D com fantasmas no labirinto neon",
      },
      {
        src: "/projects/pacman-3d-level.svg",
        alt: "Preview de fase do Pacman 3D com score e layout do mapa",
      },
    ],
  },
  {
    slug: "encanshop",
    title: "EncanShop",
    shortDescription: "Loja virtual de velas com foco em experiencia de compra simples.",
    description:
      "Projeto de e-commerce para venda de velas, com interface web moderna e base em TypeScript.",
    year: "2026",
    role: "Desenvolvedor",
    stack: ["TypeScript", "JavaScript", "CSS", "HTML"],
    tags: ["TypeScript", "E-commerce", "Web"],
    highlights: [
      "Catalogo de velas com apresentacao visual clara",
      "Fluxo de navegacao pensado para descoberta de produtos",
      "Base de frontend pronta para evolucao de funcionalidades",
    ],
    challenges:
      "Organizar apresentacao e navegacao dos produtos mantendo boa performance.",
    solutions:
      "Estrutura de componentes reutilizaveis, foco em UI objetiva e codigo tipado.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/EncanShop" },
    ],
    thumbnail: {
      src: "/projects/encanshop.svg",
      alt: "EncanShop preview",
    },
  },
  {
    slug: "fastbite",
    title: "FastBite",
    shortDescription: "Aplicação web para pedidos rápidos com backend em Python.",
    description:
      "Projeto full-stack com backend em Python e interface web em HTML, CSS e JavaScript.",
    year: "2024",
    role: "Desenvolvedor",
    stack: ["Python", "HTML", "CSS", "JavaScript"],
    tags: ["Python", "Web", "Full-stack"],
    highlights: [
      "Interface simples e objetiva para pedidos",
      "Estrutura organizada para crescer o projeto",
      "Separação clara entre lógica e apresentação",
    ],
    challenges:
      "Manter o backend simples e a interface leve para uso rápido.",
    solutions:
      "Implementação modular e foco em fluxos curtos para o usuário final.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/FastBite" },
    ],
    thumbnail: {
      src: "/projects/fastbite.svg",
      alt: "Dashboard do FastBite com fila de pedidos e rota de entrega",
    },
  },
  {
    slug: "app-controle-financeiro",
    title: "App Controle Financeiro",
    shortDescription: "Aplicativo MAUI para organização financeira pessoal.",
    description:
      "Aplicação multiplataforma em .NET MAUI focada em controle de despesas e receitas.",
    year: "2025",
    role: "Desenvolvedor",
    stack: [".NET MAUI", "C#"],
    tags: ["MAUI", "Mobile", ".NET"],
    highlights: [
      "Experiência consistente em múltiplas plataformas",
      "Fluxos claros para cadastro e acompanhamento",
      "Projeto pensado para evolução de features",
    ],
    challenges:
      "Garantir boa experiência em diferentes dispositivos.",
    solutions:
      "Componentização da UI e padronização de estilos e navegação.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/AppControleFinanceiro" },
    ],
    thumbnail: {
      src: "/projects/maui-finance.svg",
      alt: "Mockup do app financeiro em MAUI com resumo de entradas e saidas",
    },
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
