import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formação e certificados | Jackson Eduardo",
  description:
    "Formação acadêmica e cursos de Jackson Eduardo em desenvolvimento de sistemas, .NET, Python e computação em nuvem.",
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Formação e certificados | Jackson Eduardo",
    description: "Formação acadêmica e desenvolvimento profissional contínuo.",
    url: "/certificates",
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
