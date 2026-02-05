"use client";

import * as React from "react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projectTags, projects } from "@/content/projects";

const ALL_TAG = "Todos";

export function ProjectsExplorer() {
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string>(ALL_TAG);

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const matchesTag = activeTag === ALL_TAG || project.tags.includes(activeTag);
      const searchText = `${project.title} ${project.shortDescription} ${project.description}`.toLowerCase();
      const matchesQuery = searchText.includes(query.trim().toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold">Buscar e filtrar</div>
          <p className="text-sm text-muted-foreground">
            Encontre projetos por stack, categoria ou palavra-chave.
          </p>
        </div>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar projetos"
          aria-label="Buscar projetos"
          className="md:max-w-sm"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {[ALL_TAG, ...projectTags].map((tag) => (
          <Button
            key={tag}
            variant={tag === activeTag ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
          Nenhum projeto encontrado. Tente outro termo ou filtro.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
