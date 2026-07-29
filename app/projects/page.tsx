"use client";

import { useLanguage } from "@/components/language-provider";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { SectionHeading } from "@/components/section-heading";

export default function ProjectsPage() {
  const { text } = useLanguage();

  return (
    <section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow={text.projectsPage.eyebrow}
          title={text.projectsPage.title}
          description={text.projectsPage.description}
        />
        <ProjectsExplorer />
      </div>
    </section>
  );
}
