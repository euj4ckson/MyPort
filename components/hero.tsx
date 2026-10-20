"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/content/projects";
import { localizeProfile, localizeProject } from "@/lib/i18n";

export function Hero() {
  const { language, text } = useLanguage();
  const en = language === "en";
  const profile = localizeProfile(language);
  const source = getProjectBySlug("service-scheduler-api");
  const project = source ? localizeProject(source, language) : undefined;

  return (
    <section className="hero-surface relative overflow-hidden border-b border-border">
      <div className="container relative pb-10 pt-16 md:pt-24">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {text.hero.available}
          </span>
          <span className="text-muted-foreground">
            {profile.location} · PT / EN
          </span>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              {profile.headline}
            </p>
            <h1 className="font-display text-[clamp(3.5rem,7.6vw,6.8rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
              Jackson
              <span className="block">
                Eduardo<span className="text-primary">.</span>
              </span>
            </h1>
            <h2 className="mt-7 max-w-lg font-display text-2xl leading-snug tracking-tight md:text-3xl">
              {en
                ? "From complex problems to software that works."
                : "De problemas complexos a software que funciona."}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#projects">
                  {text.hero.viewProjects}
                  <ArrowDown size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={profile.resumeUrl}
                  download="Jackson-Eduardo-Curriculo.pdf"
                >
                  <Download size={16} />
                  {text.about.resume}
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={13} />
              </a>
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
              )}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                {text.nav.talk}
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
          {project && (
            <div className="featured-project overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {en ? "Illustrative preview" : "Prévia ilustrativa"}
                </span>
                <span>01 / {project.year}</span>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden"
              >
                <Image
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt}
                  width={640}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="aspect-[1.65] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </Link>
              <div className="p-6">
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-primary">
                  {text.hero.featured} · ASP.NET Core & SQL Server
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="my-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-sm font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    {en ? "Read the technical case" : "Ler o estudo técnico"}
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
            </div>
          )}
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7 md:mt-20">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {en ? "Core technologies" : "Minha base técnica"}
          </span>
          {["C#", ".NET", "ASP.NET", "SQL Server", "APIs REST", "Git"].map(
            (item) => (
              <span
                key={item}
                className="font-display text-sm font-medium text-foreground/75"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
