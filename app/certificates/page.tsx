import { CertificatesGrid } from "@/components/certificates-grid";
import { SectionHeading } from "@/components/section-heading";

export default function CertificatesPage() {
  return (
    <section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Formacao e Certificados"
          title="Certificacoes e formacao academica"
          description="Filtre por categoria para visualizar certificados ou formacao academica."
        />
        <CertificatesGrid />
      </div>
    </section>
  );
}
