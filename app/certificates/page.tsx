"use client";

import { CertificatesGrid } from "@/components/certificates-grid";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";

export default function CertificatesPage() {
  const { text } = useLanguage();

  return (
    <section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow={text.certificatesPage.eyebrow}
          title={text.certificatesPage.title}
          description={text.certificatesPage.description}
        />
        <CertificatesGrid />
      </div>
    </section>
  );
}
