import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/content/certificates";

export function CertificatesPreview() {
  return (
    <section id="certificates" className="py-20">
      <div className="container space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Certificados"
            title="Formação contínua em .NET e boas práticas"
            description="Certificações e cursos focados em qualidade, escalabilidade e desenvolvimento moderno."
          />
          <Button asChild variant="outline">
            <Link href="/certificates">Ver todos os certificados</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.slice(0, 2).map((certificate) => (
            <Card key={certificate.title} className="overflow-hidden">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {certificate.date}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Credencial: {certificate.credentialId}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
