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
  caveats?: string;
  links: ProjectLink[];
  thumbnail: {
    src: string;
    alt: string;
  };
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "claude-admin-agent",
    title: "Central de Tickets",
    shortDescription:
      "Ferramenta local para acompanhar tickets, sessões de desenvolvimento e evidências de entrega.",
    description:
      "Aplicação para organizar o trabalho de desenvolvimento desde a análise do ticket até a revisão e a entrega. Reúne aprovação de escopo, preparação de worktrees, integração com Azure DevOps, acompanhamento de Claude Code e Codex e registro de testes e evidências. O servidor e as ferramentas de automação são escritos em C# com ASP.NET Core; os dados continuam locais e legíveis pelos fluxos existentes.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "HTML",
      "CSS",
      "JavaScript",
      "PowerShell",
      "Git",
      "Azure DevOps REST API",
      "MCP",
      "Claude Code",
      "Codex CLI",
      "xUnit",
    ],
    tags: [
      "C#",
      ".NET",
      "Automação",
      "Developer Tools",
      "Segurança",
      "Full-stack",
    ],
    highlights: [
      "Painel de tickets com etapas claras, aprovação explícita e acompanhamento das sessões",
      "Worktrees e branches isoladas para reduzir colisões e preservar o checkout principal",
      "Hooks e políticas locais para limitar escopo, bloquear push acidental e controlar recursos compartilhados",
      "Matriz de variantes, evidências reproduzíveis e prints de testes manuais para apoiar a revisão",
      "Cadastro e importação de tickets do Azure DevOps, com prévia e anexos antes de iniciar o trabalho",
      "Uso de Claude Code e Codex, com políticas locais, integração MCP e dados preservados no computador",
    ],
    challenges:
      "Aumentar a confiabilidade de desenvolvimentos assistidos por IA sem transformar automação em autorização irrestrita ou perder o contexto do ticket.",
    solutions:
      "Organizei o processo em etapas auditáveis: a aprovação fica vinculada ao plano, cada ticket trabalha em sua própria worktree e os gates conferem escopo, testes e evidências antes da entrega. A integração com os agentes reduz tarefas manuais sem remover as decisões que precisam continuar sob controle do usuário.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/euj4ckson/Claude_admin_agent",
      },
    ],
    thumbnail: {
      src: "/projects/claude-admin-agent.svg",
      alt: "Painel da Central de Tickets com tickets, aprovações e evidências",
    },
  },
  {
    slug: "database-portal",
    title: "DatabasePortal",
    shortDescription:
      "Portal para controlar e auditar operações em bancos SQL Server.",
    description:
      "Aplicação full-stack para administrar conexões e permissões de acesso a bancos SQL Server. As operações passam por regras de autorização e ficam registradas com o usuário, ambiente, comando e resultado, incluindo o uso do console SQL.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "C# 14",
      ".NET 10",
      "Blazor",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
      "T-SQL ScriptDom",
      "Data Protection",
      "xUnit",
    ],
    tags: ["C#", ".NET", "Blazor", "SQL Server", "Full-stack"],
    highlights: [
      "Validação e auditoria das operações executadas pelo console SQL",
      "Permissões por usuário, perfil, ambiente, comando e objeto do banco",
      "Painel administrativo para gerenciar usuários, conexões protegidas e regras de acesso",
      "Histórico das solicitações com decisão, resultado e contexto da execução",
      "Migrações para SQL Server e testes automatizados das políticas e APIs",
    ],
    challenges:
      "Permitir operações SQL em diferentes bancos sem transformar o acesso técnico em um ponto cego de segurança, mantendo privilégio mínimo e responsabilização individual.",
    solutions:
      "Apliquei autorização no servidor e análise estrutural de T-SQL com ScriptDom antes da execução. As credenciais são protegidas e as decisões ficam registradas para consulta posterior.",
    caveats:
      "O README documenta que a configuração de demonstração ainda usa Encrypt=false e precisa trocar o login sa por uma conta de mínimo privilégio antes de qualquer exposição em produção.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/euj4ckson/DatabasePortal.git",
      },
    ],
    thumbnail: {
      src: "/projects/database-portal.svg",
      alt: "Painel do DatabasePortal com métricas de governança, console SQL protegido e trilha de auditoria",
    },
  },
  {
    slug: "bancada",
    title: "Bancada",
    shortDescription:
      "Uma comunidade para publicar, encontrar e compartilhar receitas.",
    description:
      "Plataforma full-stack em que pessoas podem publicar receitas, explorar opções por ingrediente ou tempo de preparo, montar uma coleção de favoritas e interagir por comentários e desafios culinários.",
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
      "Busca e filtros por texto, dificuldade, tempo de preparo e ingredientes",
      "Perfis, receitas favoritas e comentários com autenticação por cookie HTTP-only",
      "Desafios culinários e Caixa Misteriosa para dar novas ideias a quem cozinha",
      "Imagens armazenadas localmente ou no Cloudflare R2, com testes de domínio e integração",
    ],
    challenges:
      "Reunir conteúdo, interação social e regras de participação em uma experiência simples para quem cozinha em casa, sem abrir mão de segurança, consistência e capacidade de evolução.",
    solutions:
      "Separei a aplicação em camadas, usei ASP.NET Core Identity para autenticação e autorização e cobri as regras principais com testes automatizados.",
    links: [{ label: "Demo", url: "https://bancada-3h5.pages.dev/" }],
    thumbnail: {
      src: "/projects/bancada.svg",
      alt: "Prévia do Bancada com apresentação editorial, desafio culinário e cartões de receitas",
    },
  },
  {
    slug: "supportdesk-api",
    title: "SupportDesk API",
    shortDescription:
      "API para organizar chamados de suporte e acompanhar seu andamento.",
    description:
      "Backend para equipes de atendimento registrarem e acompanharem chamados, comentários, atribuições e mudanças de status. Os perfis controlam o acesso e as atualizações importantes podem ser acompanhadas em tempo real.",
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
      "Filtros, paginação, atribuição e comentários públicos ou internos",
      "Histórico de alterações, controle de concorrência e notificações com SignalR",
      "Testes de integração, migrações PostgreSQL e execução local com Docker Compose",
    ],
    challenges:
      "Garantir que clientes visualizem apenas os próprios chamados, enquanto a equipe mantém acesso operacional seguro e atualizações concorrentes não sobrescrevem dados silenciosamente.",
    solutions:
      "Concentrei as regras de autorização nos serviços, usei Identity com JWT e registrei as alterações para facilitar o acompanhamento. Os testes de integração usam SQLite em memória.",
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
      "API para consultar horários e gerenciar agendamentos de serviços.",
    description:
      "Backend em que clientes consultam horários e reservam serviços, enquanto profissionais administram o catálogo, a disponibilidade semanal e os atendimentos agendados.",
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
      "Verificação transacional de conflitos e controle de concorrência",
      "Auditoria e isolamento dos dados por perfil de acesso",
      "Testes de integração, migrações para SQL Server e execução com Docker Compose",
    ],
    challenges:
      "Evitar reservas sobrepostas mesmo quando vários clientes tentam ocupar o mesmo horário simultaneamente, sem comprometer a privacidade dos dados.",
    solutions:
      "A reserva e a verificação de disponibilidade são feitas em transação com isolamento Serializable. O projeto também usa controle de versão e regras de autorização para proteger os dados.",
    caveats:
      "A documentação descreve a proteção contra conflitos, mas o teste publicado faz reservas em sequência. Ainda falta um teste com solicitações simultâneas contra SQL Server para comprovar esse cenário.",
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
      "Portal para localizar abrigos e pontos de doação durante enchentes em Minas Gerais.",
    description:
      "Aplicação web para reunir informações de abrigos e pontos de coleta durante eventos de chuva e enchente em Minas Gerais. Um painel restrito permite que equipes autorizadas atualizem vagas e necessidades locais.",
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
      "Consulta de vagas, abrigos e pontos oficiais de coleta",
      "Painel autenticado para atualização das informações pelas equipes responsáveis",
      "Mapa com Leaflet e OpenStreetMap para visualizar locais de atendimento",
    ],
    challenges:
      "Manter as informações práticas e fáceis de consultar em situações que mudam rapidamente.",
    solutions:
      "Separei a consulta pública da área de atualização, usei autenticação no painel e organizei os dados com Prisma e PostgreSQL.",
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
    shortDescription:
      "Uma releitura 3D de Pac-Man que roda no navegador.",
    description:
      "Jogo de navegador com labirinto tridimensional, movimentação em tempo real e coleta de pontos durante a partida.",
    year: "2026",
    role: "Desenvolvedor",
    stack: ["TypeScript", "Three.js", "Vite", "HTML", "CSS"],
    tags: ["GameDev", "3D", "Web"],
    highlights: [
      "Labirinto 3D navegável diretamente no browser",
      "Partida com coleta de pontos e progressão",
      "Controles pensados para manter a movimentação simples",
    ],
    challenges:
      "Manter boa performance de renderizacao 3D em diferentes dispositivos.",
    solutions:
      "Organizei o loop de renderização e a lógica de colisão para manter a resposta do jogo fluida.",
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
    shortDescription:
      "Loja virtual de velas com catálogo, checkout e acompanhamento de pedidos.",
    description:
      "E-commerce de velas com catálogo, carrinho, checkout e área do cliente. O painel administrativo cuida de produtos e pedidos; pagamentos e atualizações de status são integrados ao Mercado Pago, com Redis para proteger operações concorrentes.",
    year: "2026",
    role: "Desenvolvedor",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "React Hook Form",
      "Zod",
      "Vercel Functions",
      "Upstash Redis",
      "Vercel Blob",
      "Mercado Pago",
      "Nodemailer",
    ],
    tags: ["React", "TypeScript", "E-commerce", "Web"],
    highlights: [
      "Catálogo, carrinho e checkout com Pix, cartão e opção de concluir pelo WhatsApp",
      "Área do cliente para consultar pedidos, endereços e retomar pagamentos pendentes",
      "Painel administrativo para produtos, cupons e acompanhamento de pedidos",
      "Confirmação de pagamento por webhook e e-mails transacionais de cada etapa",
    ],
    challenges:
      "Manter valores e status dos pedidos consistentes entre o navegador, o provedor de pagamento e o painel administrativo.",
    solutions:
      "O servidor recalcula itens, variantes e frete antes de gravar o pedido; o webhook do Mercado Pago atualiza o pagamento e as operações concorrentes usam lock no Redis.",
    links: [{ label: "GitHub", url: "https://github.com/euj4ckson/EncanShop" }],
    thumbnail: {
      src: "/projects/encanshop.svg",
      alt: "EncanShop preview",
    },
  },
  {
    slug: "fastbite",
    title: "FastBite",
    shortDescription:
      "Aplicação web simples para registrar e acompanhar pedidos.",
    description:
      "Projeto full-stack com backend em Python e uma interface em HTML, CSS e JavaScript para organizar o fluxo de pedidos.",
    year: "2024",
    role: "Desenvolvedor",
    stack: ["Python", "HTML", "CSS", "JavaScript"],
    tags: ["Python", "Web", "Full-stack"],
    highlights: [
      "Interface para consultar e acompanhar pedidos",
      "Backend em Python separado da apresentação",
      "Estrutura direta, adequada ao escopo do projeto",
    ],
    challenges: "Manter o fluxo de pedidos fácil de entender e rápido de usar.",
    solutions:
      "Separei a lógica do backend da interface e mantive as principais ações em fluxos curtos.",
    links: [{ label: "GitHub", url: "https://github.com/euj4ckson/FastBite" }],
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
      "Aplicativo multiplataforma para registrar receitas e despesas e acompanhar a organização financeira pessoal.",
    year: "2025",
    role: "Desenvolvedor",
    stack: [".NET MAUI", "C#"],
    tags: ["MAUI", "Mobile", ".NET"],
    highlights: [
      "Registro e consulta de movimentações financeiras",
      "Interface desenvolvida com .NET MAUI e C#",
      "Organização do código para evoluir as funcionalidades do aplicativo",
    ],
    challenges: "Manter os fluxos de cadastro e consulta claros em diferentes dispositivos.",
    solutions: "Organizei a interface em componentes e padronizei estilos e navegação.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/euj4ckson/AppControleFinanceiro",
      },
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
