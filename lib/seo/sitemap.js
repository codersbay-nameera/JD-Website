import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/canonical";

/**
 * Static routes to include in the sitemap.
 * Add new entries here as pages are created.
 */
export const staticSitemapRoutes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/jd-regular",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/jd-instant",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/jd-storage",
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

/**
 * Builds the sitemap from configured static routes.
 * Extend this helper when dynamic routes (e.g. blog posts) are added.
 */
export function buildSitemapEntries() {
  const lastModified = new Date();

  return staticSitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency ?? "monthly",
    priority: route.priority ?? 0.5,
  }));
}

/**
 * Convenience export for use in app/sitemap.js
 */
export function getSiteUrl() {
  return siteConfig.url;
}
