import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/canonical";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,
    url: siteConfig.organization.url,
    logo: absoluteUrl(siteConfig.organization.logo),
    email: siteConfig.organization.email,
    telephone: siteConfig.organization.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.organization.address.streetAddress,
      addressLocality: siteConfig.organization.address.addressLocality,
      addressRegion: siteConfig.organization.address.addressRegion,
      postalCode: siteConfig.organization.address.postalCode,
      addressCountry: siteConfig.organization.address.addressCountry,
    },
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    inLanguage: siteConfig.language,
  };
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function createArticleSchema(input) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    ...(input.authorName
      ? {
          author: {
            "@type": "Person",
            name: input.authorName,
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.organization.logo),
      },
    },
  };
}

export function createServiceSchema(input) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    provider: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
    },
  };
}
