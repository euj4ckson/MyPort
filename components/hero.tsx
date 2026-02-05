import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Disponível para novas oportunidades
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {profile.location}
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                {profile.headline}
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                {profile.bio}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">Ver projetos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contact">Entrar em contato</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border/60 px-3 py-1">
                Arquitetura .NET
              </span>
              <span className="rounded-full border border-border/60 px-3 py-1">
                APIs REST
              </span>
              <span className="rounded-full border border-border/60 px-3 py-1">
                MAUI multiplataforma
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -left-10 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-soft">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">Foco atual</div>
                <h3 className="font-display text-2xl font-semibold">
                  APIs robustas e apps multiplataforma com MAUI
                </h3>
                <p className="text-sm text-muted-foreground">
                  Entregando serviços confiáveis, com boas práticas e performance consistente.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {profile.stack.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-2xl border border-border/60 bg-background px-3 py-2 text-xs"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <Image
                  src="/projects/maui-finance.svg"
                  alt="Preview de projeto MAUI"
                  width={640}
                  height={420}
                  className="rounded-2xl border border-border/60"
                  priority
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
