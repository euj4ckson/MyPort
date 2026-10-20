import { AboutSection } from "@/components/about-section";
import { CertificatesPreview } from "@/components/certificates-preview";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectsPreview } from "@/components/projects-preview";
import { profile } from "@/content/profile";
import { siteConfig } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            ...(siteConfig.isPublicUrlConfigured
              ? { url: siteConfig.url }
              : {}),
            mainEntity: {
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.headline,
              description: profile.bio,
              knowsAbout: profile.stack,
              sameAs: [profile.social.github, profile.social.linkedin].filter(
                Boolean,
              ),
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ProjectsPreview />
      <AboutSection />
      <CertificatesPreview />
      <ContactSection />
    </div>
  );
}
