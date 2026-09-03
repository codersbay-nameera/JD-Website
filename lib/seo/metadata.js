import { siteConfig } from "@/config/site";
import { absoluteUrl, canonicalUrl } from "@/lib/seo/canonical";

function resolveTitle(title) {
  if (!title) {
    return siteConfig.defaultTitle;
  }

  if (title === siteConfig.name || title.includes(siteConfig.name)) {
    return title;
  }

  return `${title} | ${siteConfig.name}`;
}

function resolveDescription(description) {
  return description ?? siteConfig.defaultDescription;
}

function resolveOgImage(ogImage) {
  const imagePath = ogImage ?? siteConfig.defaultOgImage;
  return absoluteUrl(imagePath);
}

/**
 * Creates Next.js Metadata for a page using centralized site configuration.
 */
export function createPageMetadata(input = {}) {
  const {
    title,
    description,
    path = "/",
    ogImage,
    noIndex = false,
    keywords,
  } = input;

  const resolvedTitle = resolveTitle(title);
  const resolvedDescription = resolveDescription(description);
  const resolvedCanonical = canonicalUrl(path);
  const resolvedOgImage = resolveOgImage(ogImage);

  return {
    metadataBase: new URL(siteConfig.url),
    title: resolvedTitle,
    description: resolvedDescription,
    keywords,
    alternates: {
      canonical: resolvedCanonical,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: resolvedCanonical,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: resolvedOgImage,
          alt: `${siteConfig.name} — Open Graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedOgImage],
      creator: siteConfig.creator.twitter,
      site: siteConfig.social.twitter,
    },
  };
}

/**
 * Default metadata used by the root layout.
 */
export const defaultMetadata = createPageMetadata();
