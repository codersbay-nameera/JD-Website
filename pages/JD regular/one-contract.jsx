const contractCards = [
  {
    number: "01",
    title: "Intra-City Logistics",
    body: "Dedicated drivers and temperature-controlled vehicles for daily deliveries within a city — same driver, same van, every day.",
  },
  {
    number: "02",
    title: "Inter-City Logistics",
    body: "Reliable cold chain movement between cities, connecting your production facilities to outlets and dark stores pan-India.",
  },
  {
    number: "03",
    title: "Warehousing & 3PL",
    body: "Cold storage, inventory management and fulfillment — plug into our network instead of building your own.",
  },
];

export default function OneContract() {
  return (
    <section aria-label="One contract every mile covered">
      <div className="pb-10 pt-10 lg:pb-16 lg:pt-14">
        <h2 className="text-balance px-1 text-center text-[clamp(1.25rem,4.5vw,2rem)] font-bold leading-[1.25] text-[var(--header-navy)] lg:text-[clamp(1.5rem,3vw,2rem)] lg:leading-[1.2]">
          One contract. Every mile covered.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-[18px]">
          {contractCards.map((card) => (
            <article
              key={card.number}
              className="relative flex min-h-0 flex-col overflow-hidden rounded-[24px] border border-[#DCE2E7] bg-white p-6 lg:min-h-[300px] lg:rounded-[30px] lg:p-8"
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
              <span
                className="relative text-[clamp(3rem,12vw,4rem)] font-extrabold leading-none text-[#DDE2E7] lg:text-[64px]"
                aria-hidden="true"
              >
                {card.number}
              </span>
              <h3 className="relative mt-3 text-[18px] font-semibold text-[var(--header-navy)] lg:text-[20px]">
                {card.title}
              </h3>
              <p className="relative mt-3 text-[16px] font-normal leading-[1.48] text-[var(--header-navy)] lg:text-[18px]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
