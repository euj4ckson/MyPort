const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://myport-jackson.vercel.app");
const siteUrl = new URL(configuredUrl ?? "http://localhost:3000");
const isPublicUrlConfigured =
  Boolean(configuredUrl) &&
  !["localhost", "127.0.0.1", "[::1]", "example.com"].includes(
    siteUrl.hostname,
  );

export const siteConfig = {
  name: "Jackson Eduardo",
  title: "Jackson Eduardo | Desenvolvedor Backend .NET Pleno",
  description:
    "Desenvolvedor Backend .NET Pleno com experiência em C#, SQL Server, ERP e integrações. Explore meus projetos de APIs, segurança e automação com IA.",
  url: siteUrl.origin,
  isPublicUrlConfigured,
  ogImage: "/opengraph-image",
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
