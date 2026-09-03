import { aboutTimeline } from "@/config/about-timeline";

function TimelineCard({ item }) {
  return (
    <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DCE2E7 0.75px, transparent 0.75px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />
      <span
        className="relative text-[clamp(3rem,6vw,4rem)] font-extrabold leading-none text-[#DDE2E7]"
        aria-hidden="true"
      >
        {item.year}
      </span>
      <h3 className="relative mt-3 text-[20px] font-semibold text-[var(--header-navy)]">
        {item.title}
      </h3>
      <p className="relative mt-3 text-[18px] font-normal leading-[1.48] text-[var(--header-navy)]">
        {item.description}
      </p>
    </article>
  );
}

export default function TimelineSection() {
  return (
    <section aria-label="JustDeliveries timeline">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          From one route to a nationwide cold chain.
        </h2>

        <div className="mt-10 flex flex-col gap-[18px]">
          <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2">
            {aboutTimeline.rowOne.map((item) => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {aboutTimeline.rowTwo.map((item) => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
