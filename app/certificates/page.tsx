import { CertificatesGrid } from "@/components/certificates-grid";
import { SectionHeading } from "@/components/section-heading";

export default function CertificatesPage() {
  return (
    <section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Certificados"
          title="Todos os certificados"
          description="Histórico de certificações com links diretos."
        />
        <CertificatesGrid />
      </div>
    </section>
  );
}
