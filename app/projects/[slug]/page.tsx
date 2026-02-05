import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/project-detail";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: siteConfig.title };
  }
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="container">
        <ProjectDetail project={project} />
      </div>
    </section>
  );
}
