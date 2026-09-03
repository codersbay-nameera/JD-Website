import Image from "next/image";
import jdStorageDashboardImage from "@/assets/images/jd storage.webp";

const checklistItems = [
  "Real-time inventory tracking, down to pallet level",
  "Live temperature monitoring & alerts across facilities",
  "Inbound, outbound & replenishment movement logs",
  "Case-break and pick/pack visibility",
  "Reverse logistics & returns tracking",
  "Daily, weekly and monthly dashboard reports",
];

function CheckIcon() {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#2daa5a] text-xs font-bold text-white"
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

export default function WarehouseManagementSection() {
  return (
    <section aria-label="Warehouse Management System">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 sm:px-8 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
              Warehouse Management System
            </h2>
            <p className="mt-4 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
              Every pallet, every temperature reading, every movement — visible
              to you in real time through our WMS. No chasing your 3PL for an
              update on where your stock is.
            </p>
            <ul className="mt-6 space-y-4">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[16px] leading-[1.48] text-[var(--header-navy)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold text-white"
            >
              See a live demo
              <ArrowRightIcon />
            </a>
          </div>

          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl lg:max-w-none">
            <Image
              src={jdStorageDashboardImage}
              alt="JD Storage warehouse management dashboard with inventory and temperature monitoring"
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
