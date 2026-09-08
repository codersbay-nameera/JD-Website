import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
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
    href: "https://apps.apple.com/in/app/justdeliveries/id6754659658",
    src: appStore,
    width: 135,
    height: 40,
  },
  {
    label: "Get it on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.just.delivery.just_delivery",
    src: playStore,
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

function FooterColumnHeading({ title }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--header-navy)] lg:mb-4">
      <span
        className="inline-block h-px w-5 shrink-0 bg-[var(--header-navy)] lg:hidden"
        aria-hidden="true"
      />
      {title}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto min-w-0 overflow-hidden bg-[#EEF3F8]">
      <div className="page-layout-padding w-full min-w-0 pt-12 pb-6 sm:pt-14 sm:pb-8">
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

        <div className="mt-8 grid min-w-0 grid-cols-2 gap-x-6 gap-y-8 lg:mt-12 lg:grid-cols-4 lg:gap-10">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="min-w-0">
              <FooterColumnHeading title={column.title} />
              <ul className="space-y-2.5 lg:space-y-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 min-w-0 lg:mt-12">
          <div className="flex flex-col gap-4 max-lg:flex-row max-lg:flex-wrap max-lg:items-center max-lg:justify-between lg:block">
            <p className="shrink-0 text-sm font-semibold text-[var(--header-navy)]">
              Stay Updated
            </p>
            <div className="flex min-w-0 flex-wrap gap-2.5 sm:gap-3 lg:mt-4">
              {appDownloads.map((app) => (
                <a
                  key={app.label}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0"
                  aria-label={app.label}
                >
                  <Image
                    src={app.src}
                    alt={app.label}
                    width={app.width}
                    height={app.height}
                    className="h-10 w-[min(135px,calc(50vw-2.5rem))] object-contain sm:w-[135px] lg:h-10 lg:w-[135px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 border-t border-[var(--header-border)] pt-6 lg:mt-12"
          aria-label="Footer legal"
        >
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-[var(--header-nav-text)] lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <p className="text-balance">
              © 2026 JustDeliveries. Questions? We&apos;re just a call away —{" "}
              <a href="tel:+919619440499">+91 96194 40499</a>
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
      </div>
    </footer>
  );
}
