import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { timeline } from "@/content/timeline";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Sobre"
          title="Arquitetura, boas práticas e entrega de valor"
          description={profile.summary}
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">Stack principal</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ferramentas focadas em organização, performance e escalabilidade.
                  </p>
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href={profile.resumeUrl} download>
                    Baixar currículo
                  </Link>
                </Button>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {profile.stack.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/60 bg-background px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl font-semibold">Experiência</h3>
              <div className="space-y-5">
                {timeline.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.period}
                    </p>
                    <div className="text-base font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.company}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
