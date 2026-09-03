import Image from "next/image";
import jdRegularDashboardImage from "@/assets/images/jd regular.webp";

const features = [
  {
    title: "SaaS Dashboard",
    description:
      "Live trip status, earnings, and settlement history — all in one place.",
  },
  {
    title: "GPS Tracking",
    description:
      "Track every vehicle in real time. Share live location with clients in one tap.",
  },
  {
    title: "FASTag & Toll",
    description:
      "Auto-managed FASTag recharges and toll settlements. No queue, no cash.",
  },
];

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#2daa5a] text-xs font-bold text-white"
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

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

export default function FleetDeliveryControlSection() {
  return (
    <section aria-label="Fleet and Delivery Control">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 sm:px-8 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
              Fleet & Delivery Control
            </h2>
            <p className="mt-4 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
              Download the JustDeliveries app — the same tools we use to power
              150+ vehicle partners. Track trips, monitor earnings, and manage
              tolls without leaving the driver seat.
            </p>
            <ul className="mt-6 space-y-5">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <h3 className="text-[16px] font-semibold leading-snug text-[var(--header-navy)]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[16px] leading-[1.48] text-[var(--header-navy)]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-white px-5 text-sm font-semibold text-[#2daa5a]"
            >
              See a live demo
              <ArrowRightIcon />
            </a>
          </div>

          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl lg:max-w-none">
            <Image
              src={jdRegularDashboardImage}
              alt="JustDeliveries fleet and delivery control dashboard with live trip tracking and earnings"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
