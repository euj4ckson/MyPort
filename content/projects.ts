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
      "Aplicação local para organizar tickets e acompanhar o desenvolvimento até a entrega.",
    description:
      "A Central reúne tickets, aprovações, sessões de desenvolvimento e evidências em um só lugar. Ela prepara worktrees isoladas, importa itens do Azure DevOps e acompanha trabalhos feitos com Claude Code ou Codex. O servidor e as rotinas de automação foram migrados para C# e ASP.NET Core, mantendo os dados e fluxos locais já usados pelos agentes.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "JavaScript",
      "HTML/CSS",
      "PowerShell",
      "Git",
      "Azure DevOps REST API",
      "MCP",
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
      "Manter o escopo, o código e os testes ligados ao ticket, mesmo com vários repositórios e sessões em andamento.",
    solutions:
      "Cada ticket tem etapas próprias, aprovação vinculada ao plano e uma worktree separada. A Central também registra testes e evidências e aplica regras locais aos agentes, sem esconder do desenvolvedor as decisões de escopo e entrega.",
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
      "Portal .NET para administrar acesso a bancos SQL Server com regras e auditoria.",
    description:
      "O DatabasePortal reúne conexões, permissões e um console SQL. Antes de executar um comando, o servidor verifica quem está solicitando, em qual ambiente e quais objetos serão afetados; a decisão e o resultado ficam no histórico.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "C# 14",
      ".NET 10",
      "Blazor Server",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
      "T-SQL ScriptDom",
      "ASP.NET Core Data Protection",
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
      "Uma comunidade de receitas para descobrir pratos, guardar favoritos e cozinhar junto.",
    description:
      "O Bancada reúne publicação e descoberta de receitas em um só lugar. Dá para filtrar por ingrediente, dificuldade e tempo, salvar favoritos, comentar e participar de desafios culinários.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "C# 14",
      ".NET 10",
      "Blazor WebAssembly",
      "ASP.NET Core Minimal API",
      "PostgreSQL",
      "Entity Framework Core",
      "ASP.NET Core Identity",
      "Cloudflare R2",
      "Docker",
      "xUnit",
    ],
    tags: ["C#", ".NET", "Blazor", "Full-stack", "API"],
    highlights: [
      "Busca por ingredientes, tempo de preparo e dificuldade",
      "Perfis, favoritos e comentários com autenticação por cookie HTTP-only",
      "Desafios e Caixa Misteriosa para sugerir novas combinações",
      "Upload de imagens local ou no Cloudflare R2 e testes de domínio e integração",
    ],
    challenges:
      "Juntar receitas e interação entre pessoas sem deixar a navegação pesada nem espalhar regras de acesso pela aplicação.",
    solutions:
      "Separei interface, API e regras de negócio, concentrei autenticação e autorização no ASP.NET Core Identity e cobri os fluxos principais com testes.",
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
      "API de suporte para registrar chamados, controlar acesso e acompanhar cada atualização.",
    description:
      "Uma API para o ciclo de atendimento: abertura, atribuição, comentários e mudança de status. Clientes, atendentes e administradores têm permissões diferentes; atualizações também podem ser acompanhadas em tempo real.",
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
      "API de agendamentos com consulta de disponibilidade e proteção contra reservas conflitantes.",
    description:
      "Clientes consultam horários e reservam serviços; profissionais mantêm o catálogo e a agenda semanal. A API também cobre remarcação, confirmação, conclusão e cancelamento.",
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
      "Informações de abrigos e pontos de doação em Minas Gerais durante períodos de chuva forte.",
    description:
      "O SOS MG reúne locais de acolhimento e pontos de coleta em um mapa. Equipes autorizadas atualizam vagas e necessidades pelo painel, enquanto a consulta pública ajuda a encontrar os pontos disponíveis.",
    year: "2026",
    role: "Desenvolvedor Full-stack",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL (Neon/Supabase)",
      "NextAuth.js",
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
      "Deixar vagas e necessidades locais fáceis de localizar quando a situação muda rápido.",
    solutions:
      "Separei o mapa público do painel de atualização e usei autenticação, Prisma e PostgreSQL para organizar os dados.",
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
      "Um labirinto 3D inspirado em Pac-Man, jogável direto no navegador.",
    description:
      "Uma experiência de arcade em 3D: percorra o labirinto, colete pontos e evite os fantasmas, sem instalar nada.",
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
      "Manter os controles responsivos e a renderização fluida em navegadores diferentes.",
    solutions:
      "Separei o loop de jogo, a movimentação e as colisões para deixar a partida previsível e fácil de ajustar.",
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
    shortDescription: "Loja de velas com catálogo, checkout e acompanhamento de pedidos.",
    description:
      "A EncanShop reúne vitrine, carrinho, pagamento e área do cliente. O painel administra produtos e pedidos; Mercado Pago cuida dos pagamentos e os webhooks atualizam o status da compra.",
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
      "Checkout com Pix, cartão ou finalização pelo WhatsApp",
      "Área do cliente com pedidos, endereços e pagamentos pendentes",
      "Painel para administrar produtos, cupons e pedidos",
      "Webhooks do Mercado Pago e e-mails transacionais",
    ],
    challenges:
      "Manter o valor do pedido e o status do pagamento consistentes entre a loja e o Mercado Pago.",
    solutions:
      "O servidor recalcula itens e frete antes de criar o pedido. Webhooks sincronizam o pagamento e o Redis ajuda a evitar processamento concorrente duplicado.",
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
      "Uma aplicação direta para registrar pedidos e acompanhar a fila de atendimento.",
    description:
      "Projeto full-stack pequeno, com backend em Python e interface em HTML, CSS e JavaScript para acompanhar os pedidos sem complicar o fluxo.",
    year: "2024",
    role: "Desenvolvedor",
    stack: ["Python", "HTML", "CSS", "JavaScript"],
    tags: ["Python", "Web", "Full-stack"],
    highlights: [
      "Interface para consultar e acompanhar pedidos",
      "Backend em Python separado da apresentação",
      "Estrutura direta, adequada ao escopo do projeto",
    ],
    challenges: "Deixar o andamento dos pedidos claro sem sobrecarregar a interface.",
    solutions:
      "Mantive a lógica de pedidos no backend e deixei as ações principais acessíveis em poucos passos.",
    links: [{ label: "GitHub", url: "https://github.com/euj4ckson/FastBite" }],
    thumbnail: {
      src: "/projects/fastbite.svg",
      alt: "Dashboard do FastBite com fila de pedidos e rota de entrega",
    },
  },
  {
    slug: "app-controle-financeiro",
    title: "App Controle Financeiro",
    shortDescription: "Aplicativo multiplataforma para registrar receitas e despesas pessoais.",
    description:
      "Um app pessoal feito com .NET MAUI para lançar entradas e saídas e consultar a movimentação financeira em diferentes dispositivos.",
    year: "2025",
    role: "Desenvolvedor",
    stack: [".NET MAUI", "C#"],
    tags: ["MAUI", "Mobile", ".NET"],
    highlights: [
      "Registro e consulta de movimentações financeiras",
      "Interface desenvolvida com .NET MAUI e C#",
      "Organização do código para evoluir as funcionalidades do aplicativo",
    ],
    challenges: "Manter o registro e a consulta das movimentações simples em telas diferentes.",
    solutions: "Usei componentes MAUI e navegação consistente para manter os mesmos fluxos entre plataformas.",
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
