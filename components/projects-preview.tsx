"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

const previewProjects = [
  "database-portal",
  "bancada",
  "supportdesk-api",
].flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

export function ProjectsPreview() {
  const { text } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={text.projectsPreview.eyebrow}
            title={text.projectsPreview.title}
            description={text.projectsPreview.description}
          />
          <Button asChild variant="outline">
            <Link href="/projects">{text.projectsPreview.all}</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
