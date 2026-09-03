import Image from "next/image";
import appStore from "@/assets/images/app-store.png";
import playStore from "@/assets/images/PlayStore.png";
import jdInstantImage from "@/assets/images/jdinstant.webp";

const metrics = [
  { value: "60 min", label: "vehicle placement" },
  { value: "100%", label: "dedicated, never shared" },
];

export default function Home() {
  return (
    <section
      className="relative left-1/2 w-screen max-w-none -translate-x-1/2 border-t border-[#DCE4EE] bg-[#EEF4F8]"
      aria-label="JD Instant hero"
    >
      <div className="mx-auto min-h-[684px] max-w-[1548px]">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="px-6 pt-12 sm:px-8 lg:w-[48%] lg:max-w-[750px] lg:shrink-0 lg:px-0 lg:pl-[90px] lg:pt-[82px]">
            <h1 className="text-[clamp(1.875rem,3.6vw,3.125rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#193663]">
              <span className="text-[#168D4F]">Pay per use</span>
              {" chilled and"}
              <br />
              frozen vehicles - book
              <br />
              easily via App
            </h1>

            <p className="mt-6 max-w-[680px] text-[clamp(0.9375rem,1.8vw,1.125rem)] leading-[1.42] text-[#61758F]">
              On demand vehicles in mumbai with live tracking and temperature
              <br className="hidden lg:inline" />
              {" monitoring ! Book instantly ! Useful for quick commerce"}
              <br className="hidden lg:inline" />
              {" appointments, outlet replenishments, b2b orders or emergency"}
              <br className="hidden lg:inline" />
              {" deliveries"}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6 sm:gap-x-[220px]">
              {metrics.map((metric) => (
                <div key={metric.value}>
                  <dt className="text-[29px] font-bold leading-[1.1] text-[#168D4F]">
                    {metric.value}
                  </dt>
                  <dd className="mt-1 text-[18px] font-normal leading-snug text-[#193663]">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex shrink-0"
                aria-label="Download on the App Store"
              >
                <Image
                  src={appStore}
                  alt="Download on the App Store"
                  width={165}
                  height={50}
                  className="h-[50px] w-[165px]"
                  priority
                />
              </a>
              <a
                href="#"
                className="inline-flex shrink-0"
                aria-label="Get it on Google Play"
              >
                <Image
                  src={playStore}
                  alt="Get it on Google Play"
                  width={157}
                  height={50}
                  className="h-[50px] w-[157px]"
                  priority
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center px-6 pb-12 pt-8 lg:w-[52%] lg:justify-start lg:px-0 lg:pb-0 lg:pl-[68px] lg:pt-[70px]">
            <div className="relative h-[min(510px,60vw)] w-full max-w-[647px] overflow-hidden rounded-[40px] lg:h-[510px] lg:w-[647px] lg:shrink-0">
              <Image
                src={jdInstantImage}
                alt="Just Deliveries Instant refrigerated vehicle for chilled and frozen on-demand logistics"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 647px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
