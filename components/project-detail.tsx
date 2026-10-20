"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/content/projects";
import { localizeProject } from "@/lib/i18n";

export function ProjectDetail({ project }: { project: Project }) {
  const { language, text } = useLanguage();
  const localizedProject = localizeProject(project, language);
  const linkLabels = {
    Demo: text.projectDetail.demo,
    GitHub: text.projectDetail.github,
    "Case Study": text.projectDetail.caseStudy,
  };

  return (
    <div className="space-y-10">
      <Link
        href="/projects"
        className="inline-flex text-sm text-muted-foreground hover:text-primary"
      >
        ← {text.projectsPreview.all}
      </Link>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-border/60 px-3 py-1">
            {localizedProject.year}
          </span>
          <span className="rounded-full border border-border/60 px-3 py-1">
            {localizedProject.role}
          </span>
        </div>
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {localizedProject.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {localizedProject.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {localizedProject.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {localizedProject.links.map((link) => (
            <Button asChild key={link.url} variant="outline" size="sm">
              <Link href={link.url} target="_blank" rel="noreferrer">
                {linkLabels[link.label]}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      {localizedProject.caveats ? (
        <aside className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm leading-6 text-muted-foreground">
          <span className="font-semibold text-foreground">
            {text.projectDetail.caveat}{" "}
          </span>
          {localizedProject.caveats}
        </aside>
      ) : null}
      <Card className="overflow-hidden">
        <Image
          src={localizedProject.thumbnail.src}
          alt={localizedProject.thumbnail.alt}
          width={1200}
          height={720}
          className="h-72 w-full object-cover md:h-96"
        />
      </Card>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">
              {text.projectDetail.deliveries}
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {localizedProject.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-border/60 p-4"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">
              {text.projectDetail.challengesSolutions}
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  {text.projectDetail.challenge}
                </span>{" "}
                {localizedProject.challenges}
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  {text.projectDetail.solution}
                </span>{" "}
                {localizedProject.solutions}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            {text.projectDetail.gallery}
          </h2>
          <div className="space-y-4">
            {(localizedProject.gallery ?? [localizedProject.thumbnail]).map(
              (item) => (
                <Card key={item.src} className="overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={520}
                    className="h-56 w-full object-cover"
                  />
                </Card>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-primary/25 bg-primary/5 p-6">
        <div>
          <h2 className="font-display text-xl font-semibold">
            {language === "en"
              ? "Could this experience help your team?"
              : "Essa experiência faz sentido para o seu time?"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {language === "en"
              ? "Let's talk about the role or the challenge you are working on."
              : "Vamos conversar sobre a vaga ou o desafio que você está construindo."}
          </p>
        </div>
        <Button asChild>
          <Link href="/#contact">{text.nav.talk}</Link>
        </Button>
      </div>
    </div>
  );
}
