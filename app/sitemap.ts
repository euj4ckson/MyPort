import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isPublicUrlConfigured) return [];
  const baseUrl = siteConfig.url;

  const staticRoutes = ["", "/projects", "/certificates"].map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
  }));

  return [...staticRoutes, ...projectRoutes];
}
