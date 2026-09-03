import { siteConfig } from "@/config/site";

/**
 * Joins the configured site URL with a path segment.
 */
export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  return normalizedPath === "/" ? baseUrl : `${baseUrl}${normalizedPath}`;
}

/**
 * Builds a canonical URL for a given path.
 */
export function canonicalUrl(path = "/") {
  return absoluteUrl(path);
}
