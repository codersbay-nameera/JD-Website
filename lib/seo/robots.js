import { getSiteUrl } from "@/lib/seo/sitemap";
import { absoluteUrl } from "@/lib/seo/canonical";

/**
 * Generates robots.txt configuration.
 */
export function buildRobotsConfig() {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
