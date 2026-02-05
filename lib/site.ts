export const siteConfig = {
  name: "Jackson Eduardo",
  title: "Jackson Eduardo | Desenvolvedor .NET",
  description:
    "Portfólio com projetos, certificados e soluções em .NET, ASP.NET e MAUI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  ogImage: "/opengraph-image",
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
