"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/content/certificates";
import { localizeCertificate } from "@/lib/i18n";

export function CertificatesPreview() {
  const { language, text } = useLanguage();
  const localizedCertificates = certificates.map((certificate) =>
    localizeCertificate(certificate, language),
  );

  return (
    <section id="certificates" className="py-20">
      <div className="container space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={text.certificatesPreview.eyebrow}
            title={text.certificatesPreview.title}
            description={text.certificatesPreview.description}
          />
          <Button asChild variant="outline">
            <Link href="/certificates">{text.certificatesPreview.all}</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {localizedCertificates.slice(0, 2).map((certificate) => (
            <Card key={certificate.title} className="overflow-hidden">
              <CardContent className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer}
                  </p>
                </div>
                {certificate.credentialId ? (
                  <p className="text-xs text-muted-foreground">
                    {text.certificatesPreview.credential}{" "}
                    {certificate.credentialId}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
