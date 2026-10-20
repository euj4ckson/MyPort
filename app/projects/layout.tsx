import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos .NET, APIs e automação | Jackson Eduardo",
  description:
    "Explore projetos de Jackson Eduardo: APIs com C# e ASP.NET Core, governança de SQL, aplicações web e automação com IA.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projetos .NET, APIs e automação | Jackson Eduardo",
    description:
      "Problemas, decisões técnicas e código dos meus projetos pessoais.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
