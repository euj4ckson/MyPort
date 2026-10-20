import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(siteConfig.isPublicUrlConfigured
        ? { allow: "/" }
        : { disallow: "/" }),
    },
    sitemap: siteConfig.isPublicUrlConfigured
      ? `${siteConfig.url}/sitemap.xml`
      : undefined,
  };
}
