import { AboutSection } from "@/components/about-section";
import { CertificatesPreview } from "@/components/certificates-preview";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectsPreview } from "@/components/projects-preview";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ProjectsPreview />
      <AboutSection />
      <CertificatesPreview />
      <ContactSection />
    </div>
  );
}
