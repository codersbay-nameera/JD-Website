import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import appStore from "@/assets/images/app-store.png";
import playStore from "@/assets/images/PlayStore.png";
const footerTagline =
  "India's most trusted logistics & 3PL partner for the F&B industry. JD assures timely and safe delivery of perishables at the right temperature.";

const footerColumns = [
  {
    title: "COMPANY",
    items: [
      { label: "About Us", href: "/about", external: false },
      { label: "Attach Vehicle", href: "#", external: false },
      { label: "Pricing", href: "/pricing", external: false },
      { label: "Contact", href: "/contact", external: false },
    ],
  },
  {
    title: "SERVICES",
    items: [
      { label: "JD Regular", href: "/jd-regular", external: false },
      { label: "JD Instant", href: "/jd-instant", external: false },
      { label: "JD Storage", href: "/jd-storage", external: false },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Blogs", href: "/blogs", external: false },
      { label: "Case Studies", href: "/case-studies", external: false },
      { label: "Media Mentions", href: "/media-mentions", external: false },
    ],
  },
  {
    title: "CONNECT",
    items: [
      {
        label: "Linkedin",
        href: siteConfig.social.linkedIn,
        external: true,
        placeholder: siteConfig.social.linkedIn.includes("["),
      },
      {
        label: "Facebook",
        href: siteConfig.social.facebook,
        external: true,
        placeholder: siteConfig.social.facebook.includes("["),
      },
      {
        label: "Instagram",
        href: siteConfig.social.instagram,
        external: true,
        placeholder: siteConfig.social.instagram.includes("["),
      },
    ],
  },
];

const appDownloads = [
  {
    label: "Download on the App Store",
    href: "#",
    src: appStore,
    width: 135,
    height: 40,
  },
  {
    label: "Get it on Google Play",
    href: "#",
    src:playStore,
    width: 135,
    height: 40,
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function FooterLink({ item }) {
  const href = item.placeholder ? "#" : item.href;
  const className =
    "text-sm leading-relaxed text-[var(--header-nav-text)]";

  if (item.external) {
    return (
      <a
        href={href}
        className={className}
        {...(item.placeholder
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {item.label}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {item.label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-[#EEF3F8]">
      <Container className="page-layout-padding pt-12 pb-6 sm:pt-14 sm:pb-8">
        <div className="max-w-xl">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/jd-logo.svg"
              alt={siteConfig.name}
              width={275}
              height={49}
              className="h-[49px] w-auto max-w-[200px] sm:max-w-none"
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--header-nav-text)]">
            {footerTagline}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-10">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="mb-4 text-sm font-semibold tracking-wide text-[var(--header-navy)]">
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 lg:mt-12">
          <p className="text-sm font-semibold text-[var(--header-navy)]">
            Stay Updated
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {appDownloads.map((app) => (
              <a
                key={app.label}
                href={app.href}
                className="inline-flex shrink-0"
                aria-label={app.label}
              >
                <Image
                  src={app.src}
                  alt={app.label}
                  width={app.width}
                  height={app.height}
                  className="h-10 w-auto max-w-full"
                />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 border-t border-[var(--header-border)] pt-6 sm:mt-12"
          aria-label="Footer legal"
        >
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-[var(--header-nav-text)] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p>
              © 2026 JustDeliveries. Questions? We&apos;re just a call away —{" "}
              <a href="tel:+919619440499" className="whitespace-nowrap">
                +91 96194 40499
              </a>
            </p>

            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="inline-flex items-center gap-2">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-[var(--header-border)]">
                      |
                    </span>
                  ) : null}
                  <Link href={link.href}>{link.label}</Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
