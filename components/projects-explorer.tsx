"use client";

import * as React from "react";

import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/content/projects";
import { localizeProject } from "@/lib/i18n";

const projectPriority = [
  "service-scheduler-api",
  "supportdesk-api",
  "database-portal",
  "claude-admin-agent",
  "bancada",
];

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

export function ProjectsExplorer() {
  const { language, text } = useLanguage();
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);
  const localizedProjects = React.useMemo(
    () =>
      projects
        .map((project) => localizeProject(project, language))
        .sort((left, right) => {
          const leftIndex = projectPriority.indexOf(left.slug);
          const rightIndex = projectPriority.indexOf(right.slug);
          return (
            (leftIndex < 0 ? 99 : leftIndex) -
            (rightIndex < 0 ? 99 : rightIndex)
          );
        }),
    [language],
  );
  const localizedTags = React.useMemo(
    () =>
      Array.from(
        new Set(localizedProjects.flatMap((project) => project.tags)),
      ).sort(),
    [localizedProjects],
  );

  React.useEffect(() => {
    setActiveTag(null);
  }, [language]);

  const filteredProjects = React.useMemo(() => {
    return localizedProjects.filter((project) => {
      const matchesTag = activeTag === null || project.tags.includes(activeTag);
      const searchText =
        `${project.title} ${project.shortDescription} ${project.description} ${project.stack.join(" ")} ${project.tags.join(" ")}`.toLowerCase();
      const matchesQuery = normalizeSearchText(searchText).includes(
        normalizeSearchText(query.trim()),
      );
      return matchesTag && matchesQuery;
    });
  }, [activeTag, localizedProjects, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold">
            {text.projectsPage.searchTitle}
          </div>
          <p className="text-sm text-muted-foreground">
            {text.projectsPage.searchDescription}
          </p>
        </div>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={text.projectsPage.searchPlaceholder}
          aria-label={text.projectsPage.searchPlaceholder}
          className="md:max-w-sm"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {[text.projectsPage.all, ...localizedTags].map((tag, index) => {
          const tagValue = index === 0 ? null : tag;
          return (
            <Button
              key={tag}
              variant={tagValue === activeTag ? "default" : "outline"}
              size="sm"
              aria-pressed={tagValue === activeTag}
              onClick={() => setActiveTag(tagValue)}
            >
              {tag}
            </Button>
          );
        })}
      </div>
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
          {text.projectsPage.empty}
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
