import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/content/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-border/60 px-3 py-1">
            {project.year}
          </span>
          <span className="rounded-full border border-border/60 px-3 py-1">
            {project.role}
          </span>
        </div>
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Button asChild key={link.url} variant="outline" size="sm">
              <Link href={link.url}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>
      <Card className="overflow-hidden">
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          width={1200}
          height={720}
          className="h-72 w-full object-cover md:h-96"
        />
      </Card>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Principais entregas</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl border border-border/60 p-4">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Desafios e soluções</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Desafio:</span>{" "}
                {project.challenges}
              </p>
              <p>
                <span className="font-semibold text-foreground">Solução:</span>{" "}
                {project.solutions}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Galeria</h2>
          <div className="space-y-4">
            {(project.gallery ?? [project.thumbnail]).map((item) => (
              <Card key={item.src} className="overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={520}
                  className="h-56 w-full object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
