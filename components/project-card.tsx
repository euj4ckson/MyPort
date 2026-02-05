import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={640}
            height={420}
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <CardTitle>{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.shortDescription}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="default" size="sm">
          <Link href={`/projects/${project.slug}`}>Ver detalhes</Link>
        </Button>
        {project.links[0] ? (
          <Button asChild variant="outline" size="sm">
            <Link href={project.links[0].url}>Abrir</Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
