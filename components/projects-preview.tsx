"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { localizeProject } from "@/lib/i18n";

const selected = ["supportdesk-api", "database-portal", "claude-admin-agent"];

export function ProjectsPreview() {
  const { language, text } = useLanguage();
  const en = language === "en";
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="section-label">
              01 /{" "}
              {en
                ? "Selected personal projects"
                : "Projetos pessoais selecionados"}
            </p>
            <h2 className="section-title">
              {en ? "Code with a purpose." : "Código com propósito."}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              {en
                ? "Real problems, explicit technical decisions and code you can explore. A selection of my work in .NET and full-stack development."
                : "Problemas reais, decisões técnicas explicadas e código para explorar. Uma seleção do meu trabalho em .NET e desenvolvimento full-stack."}
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              {text.projectsPreview.all}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        <p className="mb-5 text-xs text-muted-foreground">
          {en
            ? "Project interface images are illustrative. Follow the repository links for source code, setup and test instructions."
            : "As imagens das interfaces são ilustrativas. Acesse os repositórios para consultar o código, as instruções de execução e os testes."}
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {selected.map((slug, index) => {
            const source = projects.find((p) => p.slug === slug);
            if (!source) return null;
            const project = localizeProject(source, language);
            return (
              <article
                key={slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
              >
                <Link
                  href={`/projects/${slug}`}
                  className="relative block overflow-hidden border-b border-border"
                >
                  <Image
                    src={project.thumbnail.src}
                    alt={project.thumbnail.alt}
                    width={640}
                    height={420}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="aspect-[1.6] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded bg-slate-950/90 px-2 py-1 font-mono text-[10px] text-white">
                    0{index + 2} / {project.year}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-primary">
                    {project.role}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    <Link href={`/projects/${slug}`}>{project.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div className="my-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 flex items-start gap-2 border-t border-border pt-4 text-xs leading-6 text-muted-foreground">
                    <Check size={14} className="mt-1 shrink-0 text-primary" />
                    {project.highlights[0]}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-sm font-medium">
                    <Link
                      href={`/projects/${slug}`}
                      className="inline-flex items-center gap-2 hover:text-primary"
                    >
                      {en ? "Explore project" : "Explorar projeto"}
                      <ArrowUpRight size={16} />
                    </Link>
                    {project.links.find((item) => item.label === "GitHub") && (
                      <a
                        href={
                          project.links.find((item) => item.label === "GitHub")!
                            .url
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                      >
                        <Github size={15} />
                        GitHub
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
