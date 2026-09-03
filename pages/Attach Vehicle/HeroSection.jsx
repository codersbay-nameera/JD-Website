import Image from "next/image";
import attachVehicleImage from "@/assets/images/attachvehicle.webp";

const stats = [
  { value: "150+", label: "Vehicle partners" },
  { value: "100%", label: "On-time payment" },
  { value: "0", label: "Hidden deductions" },
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

export default function HeroSection() {
  return (
    <section
      className="w-full min-w-0 max-w-full overflow-x-hidden pt-5 sm:pt-6 lg:pt-8"
      aria-label="Attach Vehicle hero"
    >
      <div className="mx-auto max-w-[1548px]">
        <div className="grid grid-cols-1 items-center gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-0 lg:pl-[90px]">
          <div className="flex min-h-0 min-w-0 flex-col justify-center gap-6">
            <h1 className="text-[clamp(1.875rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              <span className="text-[var(--header-navy)]">Add your vehicle.</span>
              <br />
              <span className="text-[#2daa5a]">Earn</span>
              <span className="text-[var(--header-navy)]"> more.</span>
            </h1>

            <p className="max-w-xl text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
              Guaranteed monthly earning. Payment always on time. Join 150+
              vehicle owners.
            </p>

            <dl className="grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`}>
                  <dt className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold leading-tight text-[#178A49]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[clamp(0.75rem,1.1vw,0.9375rem)] leading-snug text-[var(--header-navy)]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold text-white"
              >
                Join Now
                <ArrowRightIcon />
              </a>
              <a
                href="#"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-white px-5 text-sm font-semibold text-[var(--header-navy)]"
              >
                <span aria-hidden="true">☎</span>
                Talk to JD Expert Team
              </a>
            </div>
          </div>

          <div className="flex h-full min-h-0 w-full items-center lg:items-stretch">
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-3xl bg-white lg:aspect-[16/11]">
              <Image
                src={attachVehicleImage}
                alt="Just Deliveries temperature-controlled vehicle fleet for partner drivers and vehicle owners"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
