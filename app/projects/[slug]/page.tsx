import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/project-detail";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

type PageParams = { slug: string };
type PageProps = { params: Promise<PageParams> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: siteConfig.title };
  }
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
