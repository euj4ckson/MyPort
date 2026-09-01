"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { timeline } from "@/content/timeline";
import {
  localizeProfile,
  timelineEnglish,
} from "@/lib/i18n";

export function AboutSection() {
  const { language, text } = useLanguage();
  const localizedProfile = localizeProfile(language);
  const localizedTimeline = language === "en" ? timelineEnglish : timeline;

  return (
    <section id="about" className="py-20">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow={text.about.eyebrow}
          title={text.about.title}
          description={localizedProfile.summary}
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {text.about.stack}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {text.about.stackDescription}
                  </p>
                </div>
                <Button asChild size="sm" variant="outline">
                  <a
                    href={localizedProfile.resumeUrl}
                    download="Jackson-Eduardo-Curriculo.pdf"
                  >
                    {text.about.resume}
                  </a>
                </Button>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {localizedProfile.stack.map((item) => (
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
              <h3 className="font-display text-xl font-semibold">
                {text.about.experience}
              </h3>
              <div className="space-y-5">
                {localizedTimeline.map((item) => (
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
