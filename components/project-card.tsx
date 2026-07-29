"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/content/projects";
import { localizeProject } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { language, text } = useLanguage();
  const localizedProject = localizeProject(project, language);

  return (
    <Card className="group flex h-full flex-col">
      <CardHeader className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl border border-border/60">
          <Image
            src={localizedProject.thumbnail.src}
            alt={localizedProject.thumbnail.alt}
            width={640}
            height={420}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur">
            {localizedProject.year}
          </span>
        </div>
        <div className="space-y-2">
          <CardTitle>{localizedProject.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {localizedProject.shortDescription}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {localizedProject.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {localizedProject.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="default" size="sm">
          <Link href={`/projects/${localizedProject.slug}`}>
            {text.projectCard.details}
          </Link>
        </Button>
        {project.links[0] ? (
          <Button asChild variant="outline" size="sm">
            <Link href={localizedProject.links[0].url}>
              {text.projectCard.open}
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
