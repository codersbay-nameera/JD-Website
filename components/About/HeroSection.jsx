import Image from "next/image";
import jdStorageImage from "@/assets/images/jdstorage.webp";

const stats = [
  { value: "6+", label: "cities served" },
  { value: "500+", label: "outlets across india" },
  { value: "−18°C to +18°C", label: "temperature range" },
];

export default function HeroSection() {
  return (
    <section
      className="w-full min-w-0 max-w-full overflow-x-hidden pt-5 sm:pt-6 lg:pt-8"
      aria-label="About JustDeliveries"
    >
      <div className="mx-auto max-w-[1548px]">
        <div className="grid grid-cols-1 items-center gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-0 lg:pl-[90px]">
          <div className="flex min-h-0 min-w-0 flex-col justify-center gap-6">
            <h1 className="text-[clamp(1.875rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              <span className="text-[var(--header-navy)]">
                There&apos;s a reason we&apos;re
                <br />
              </span>
              <span className="text-[#2daa5a]">good</span>
              <span className="text-[var(--header-navy)]"> at what we do.</span>
            </h1>

            <p className="max-w-xl text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
              We&apos;re passionate about reducing food wastage and solving
              inefficiencies in mid-mile logistics one temperature-controlled
              delivery at a time.
            </p>

            <dl className="grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`}>
                  <dt className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold leading-tight text-[#178A49]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[clamp(0.75rem,1.1vw,0.9375rem)] leading-snug text-[var(--header-navy)]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex h-full min-h-0 w-full items-center lg:items-stretch">
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-3xl bg-white lg:aspect-[16/11]">
              <Image
                src={jdStorageImage}
                alt="Just Deliveries warehouse and cold-chain facility supporting temperature-controlled logistics"
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
