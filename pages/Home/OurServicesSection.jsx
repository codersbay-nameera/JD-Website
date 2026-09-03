import Image from "next/image";
import Link from "next/link";
import { headerCta } from "@/config/navigation";
import jdRegularDashboardImage from "@/assets/images/jd regular.webp";
import jdInstantAppImage from "@/assets/images/jd instant.webp";
import jdStorageDashboardImage from "@/assets/images/jd storage.webp";

const defaultServices = [
  {
    id: "regular",
    title: "JD Regular",
    description:
      "Dedicated drivers and vehicles on annual contracts — built for brands moving daily volume, at scale.",
    bullets: [
      "Same driver, same van, daily",
      "Dedicated account manager, 24/7 control tower",
      "ERP integration, contract billing",
    ],
    knowMoreHref: "/jd-regular",
    image: jdRegularDashboardImage,
    imageAlt:
      "JD Regular logistics dashboard showing fleet management and delivery operations",
    imagePosition: "right",
    primaryLabel: "Get an Quote",
    primaryHref: headerCta.href,
  },
  {
    id: "instant",
    title: "JD Instant",
    description:
      "Think of it as Porter, for reefers. Book a dedicated, temperature-controlled vehicle from the app — no contract needed.",
    bullets: [
      "Vehicle placement in as little as 60 minutes",
      "Instant or scheduled, pay per trip",
      "Live tracking, OTP handover, instant POD",
    ],
    knowMoreHref: "/jd-instant",
    image: jdInstantAppImage,
    imageAlt:
      "JD Instant mobile app for booking dedicated temperature-controlled vehicles on demand",
    imagePosition: "left",
    primaryLabel: "Download APP",
    primaryHref: "#",
    imageAspect: "square",
  },
  {
    id: "storage",
    title: "JD Storage",
    description:
      "Cold storage from -18°C to +18°C, inventory management and case-break ops — plug into our network, skip building your own.",
    bullets: [
      "Multi-city cold storage & warehousing",
      "WMS dashboard — inventory & temperature logs",
      "No capex, no in-house warehouse team",
    ],
    knowMoreHref: "/jd-storage",
    image: jdStorageDashboardImage,
    imageAlt:
      "JD Storage warehouse management dashboard with inventory and temperature monitoring",
    imagePosition: "right",
    primaryLabel: "Get an Quote",
    primaryHref: headerCta.href,
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 8H12.5M12.5 8L9 4.5M12.5 8L9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceActions({ primaryLabel, primaryHref, knowMoreHref }) {
  const primaryIsInternal = primaryHref.startsWith("/");

  return (
    <div className="flex flex-wrap gap-3">
      {primaryIsInternal ? (
        <Link
          href={primaryHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold text-white"
        >
          {primaryLabel}
          <ArrowRightIcon />
        </Link>
      ) : (
        <a
          href={primaryHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold text-white"
        >
          {primaryLabel}
          <ArrowRightIcon />
        </a>
      )}
      <Link
        href={knowMoreHref}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-white px-5 text-sm font-semibold text-[var(--header-navy)]"
      >
        Know More
        <ArrowRightIcon />
      </Link>
    </div>
  );
}

function ServiceContent({ service }) {
  return (
    <div className="min-w-0">
      <h3 className="text-[clamp(1.125rem,2vw,1.375rem)] font-bold text-[var(--header-navy)]">
        {service.title}
      </h3>
      <p className="mt-3 text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-[var(--header-navy)]">
        {service.description}
      </p>
      <ul className="mt-4 space-y-2 text-[clamp(0.875rem,1.25vw,0.9375rem)] leading-relaxed text-[var(--muted-foreground)]">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="shrink-0 text-[#2daa5a]" aria-hidden="true">
              ✓
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <ServiceActions
          primaryLabel={service.primaryLabel}
          primaryHref={service.primaryHref}
          knowMoreHref={service.knowMoreHref}
        />
      </div>
    </div>
  );
}

function ServiceImage({ service }) {
  const isSquare = service.imageAspect === "square";

  return (
    <div
      className={
        isSquare
          ? "relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm"
          : "relative mx-auto aspect-[16/10] w-full max-w-xl lg:max-w-2xl"
      }
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes={
          isSquare
            ? "(max-width: 640px) 288px, 384px"
            : "(max-width: 1024px) 100vw, 672px"
        }
        className="object-contain"
      />
    </div>
  );
}

export function OurServicesSection({ services = defaultServices }) {
  return (
    <section
      className="w-full min-w-0 overflow-hidden py-10 sm:py-12 lg:py-16"
      aria-labelledby="our-services-heading"
    >
      <h2
        id="our-services-heading"
        className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-[var(--header-navy)]"
      >
        Our Services
      </h2>

      <div className="mt-10 flex flex-col gap-14 sm:mt-12 sm:gap-16 lg:mt-14 lg:gap-20">
        {services.map((service) => {
          const imageFirst = service.imagePosition === "left";

          return (
            <article
              key={service.id}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16"
            >
              <div className={imageFirst ? "order-1" : "order-1 lg:order-1"}>
                {imageFirst ? (
                  <ServiceImage service={service} />
                ) : (
                  <ServiceContent service={service} />
                )}
              </div>
              <div className={imageFirst ? "order-2" : "order-2 lg:order-2"}>
                {imageFirst ? (
                  <ServiceContent service={service} />
                ) : (
                  <ServiceImage service={service} />
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
