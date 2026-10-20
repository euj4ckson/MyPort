export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "Jun/2025 - atual",
    title: "Desenvolvedor Backend .NET Pleno",
    company: "Union Sistemas de Gestão",
    description:
      "Desenvolvimento e sustentação de ERP com C#, ASP.NET, VB.NET e SQL Server; integrações REST, processos fiscais, financeiros e logísticos, além de evolução de aplicativo Android integrado por WCF/SOAP e SQLite.",
  },
  {
    period: "Abr/2024 - Jun/2025",
    title: "Desenvolvedor Backend Júnior",
    company: "Union Sistemas de Gestão",
    description:
      "Implementação e manutenção de funcionalidades, integrações, consultas e procedures SQL em sistema ERP. Reprodução e investigação de incidentes e validação de melhorias.",
  },
  {
    period: "Ago/2023 - Jan/2024",
    title: "Analista de Sistemas (Estágio)",
    company: "Santa Casa de Juiz de Fora",
    description:
      "Análise de sistemas ERP e rotinas relacionadas a banco de dados SQL; investigação de incidentes e suporte à continuidade dos processos internos.",
  },
];
