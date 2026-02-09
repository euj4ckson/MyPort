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
  {
    slug: "ai-agent",
    title: "AI Agent",
    shortDescription: "Experimento com agente inteligente e interface web.",
    description:
      "Projeto com backend em Python e frontend em JavaScript, HTML e CSS para explorar automações com IA.",
    year: "2024",
    role: "Desenvolvedor",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
    tags: ["Python", "IA", "Web"],
    highlights: [
      "Base para automações inteligentes",
      "Interface simples para testes rápidos",
      "Organização do projeto para iterar funcionalidades",
    ],
    challenges:
      "Orquestrar ações do agente mantendo simplicidade de uso.",
    solutions:
      "Estrutura enxuta de endpoints e UI direta para executar fluxos.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/AI_agent" },
    ],
    thumbnail: {
      src: "/projects/ai-agent.svg",
      alt: "Painel do AI Agent com loop de decisao e output de automacao",
    },
  },
  {
    slug: "costs-project-manager",
    title: "Costs Project Manager",
    shortDescription: "Aplicação React para gestão de custos de projetos.",
    description:
      "Frontend em React para acompanhar orçamento, categorias e evolução de projetos.",
    year: "2023",
    role: "Desenvolvedor",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    tags: ["React", "Frontend", "Web"],
    highlights: [
      "UX simples para cadastro e atualização",
      "Organização por categorias e status",
      "Estrutura pronta para integrações futuras",
    ],
    challenges:
      "Manter o fluxo de edição rápido e sem atritos.",
    solutions:
      "Componentes reutilizáveis e navegação direta entre etapas.",
    links: [
      { label: "GitHub", url: "https://github.com/euj4ckson/Costs-ProjectManager" },
    ],
    thumbnail: {
      src: "/projects/costs.svg",
      alt: "Dashboard de custos com projetos ativos e evolucao mensal",
    },
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
