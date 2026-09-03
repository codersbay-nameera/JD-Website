/**
 * Central site configuration.
 * Replace placeholder values with real information during page development.
 */
export const siteConfig = {
  name: "Just Deliveries",
  shortName: "[Short Name]",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  defaultTitle: "Just Deliveries",
  defaultDescription:
    "[Default meta description placeholder. Replace with a concise summary of the website.]",
  defaultOgImage: "/images/og-default.png",
  locale: "en_US",
  language: "en",
  organization: {
    name: "[Organization Name]",
    legalName: "[Legal Entity Name]",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    logo: "/images/logo.png",
    email: "[contact@example.com]",
    telephone: "[+00 000 000 0000]",
    address: {
      streetAddress: "[Street Address]",
      addressLocality: "[City]",
      addressRegion: "[Region/State]",
      postalCode: "[Postal Code]",
      addressCountry: "[Country Code]",
    },
  },
  social: {
    twitter: "[@twitter-handle]",
    twitterUrl: "https://twitter.com/[handle]",
    linkedIn: "https://linkedin.com/company/[company]",
    facebook: "https://facebook.com/[page]",
    instagram: "https://instagram.com/[handle]",
  },
  creator: {
    twitter: "[@twitter-handle]",
  },
};
