const whatYouGetItems = [
  "Same driver, same vehicle, daily — no re-booking",
  "Dedicated account manager & 24/7 control tower",
  "Temperature-controlled fleet, live GPS & temp logs",
  "ERP integration for seamless order flow",
  "Contract billing, no per-trip admin",
];

const builtForScaleItems = [
  "Pan-India network across major cities",
  "150+ F&B brands, hundreds of vehicles on the road",
  "Purpose-built for chilled and frozen food — nothing else",
  "Onboarding designed for multi-city, multi-outlet rollouts",
  "One partner instead of coordinating multiple vendors",
];

const checklistCards = [
  { title: "What you get", items: whatYouGetItems },
  { title: "Built for scale", items: builtForScaleItems },
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

export default function BuiltForBrands() {
  return (
    <section aria-label="Built for brands that cannot afford a bad delivery day">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Built for brands that can&apos;t afford a bad delivery day.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] lg:grid-cols-2">
          {checklistCards.map((card) => (
            <article
              key={card.title}
              className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-8"
            >
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #DCE2E7 0.75px, transparent 0.75px)",
                  backgroundSize: "10px 10px",
                }}
                aria-hidden="true"
              />
              <h3 className="relative text-[20px] font-semibold text-[var(--header-navy)]">
                {card.title}
              </h3>
              <ul className="relative mt-5 space-y-4">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[18px] font-normal leading-[1.48] text-[var(--header-navy)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
