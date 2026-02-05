import { ProjectsExplorer } from "@/components/projects-explorer";
import { SectionHeading } from "@/components/section-heading";

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Projetos"
          title="Todos os projetos"
          description="Filtre por categoria, busque por palavra-chave e veja os detalhes."
        />
        <ProjectsExplorer />
      </div>
    </section>
  );
}
