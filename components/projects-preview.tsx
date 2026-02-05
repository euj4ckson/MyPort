import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

export function ProjectsPreview() {
  return (
    <section id="projects" className="py-20">
      <div className="container space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projetos"
            title="Soluções em .NET, APIs e MAUI"
            description="Projetos focados em estabilidade, performance e boas práticas de arquitetura."
          />
          <Button asChild variant="outline">
            <Link href="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
