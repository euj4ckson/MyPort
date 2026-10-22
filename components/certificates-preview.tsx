"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { certificates } from "@/content/certificates";
import { localizeCertificate } from "@/lib/i18n";

const featured = [
  "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  "Pós-graduação em Engenharia de Software",
  ".NET MAUI",
];

export function CertificatesPreview() {
  const { language, text } = useLanguage();
  const en = language === "en";
  const selected = featured.flatMap((title) => {
    const item = certificates.find(
      (certificate) => certificate.title === title,
    );
    return item ? [localizeCertificate(item, language)] : [];
  });

  return (
    <section
      id="certificates"
      className="border-y border-border bg-card/40 py-20 md:py-24"
    >
      <div className="container">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={en ? "Education & credentials" : "Formação e credenciais"}
            title={
              en
                ? "Learning backed by credentials."
                : "Formação com credenciais verificáveis."
            }
            description={
              en
                ? "Academic background and selected credentials relevant to backend development."
                : "Formação acadêmica e credenciais selecionadas, relevantes para desenvolvimento backend."
            }
          />
          <Button asChild variant="outline">
            <Link href="/certificates">
              {text.certificatesPreview.all}
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {selected.map((certificate) => {
            const isAcademic = certificate.category === "academic";
            const Icon = isAcademic ? GraduationCap : ShieldCheck;
            return (
              <article
                key={certificate.title}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <Icon size={16} />
                  {isAcademic
                    ? text.certificatesPage.academic
                    : text.certificatesPage.certifications}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                  {certificate.title}
                </h3>
                {certificate.issuer ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {certificate.issuer}
                  </p>
                ) : null}
                {certificate.period && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {certificate.period}
                  </p>
                )}
                <div className="mt-5 border-t border-border pt-4">
                  {certificate.url !== "#" ? (
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                    >
                      {text.certificatesPage.viewCredential}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {en
                        ? "Listed on résumé"
                        : "Informação conforme currículo"}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
