const driverCards = [
  {
    number: "01",
    title: "Guaranteed Earning",
    body: "Fixed monthly earning, no matter what.",
  },
  {
    number: "02",
    title: "On-Time Payment",
    body: "Payment in your account, every single time.",
  },
  {
    number: "03",
    title: "Easy Hisaab-Kitaab",
    body: "See every trip and every payment on your phone.",
  },
];

export default function WhyDriversSection() {
  return (
    <section aria-label="Why drivers choose JustDeliveries">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Why drivers choose JustDeliveries
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {driverCards.map((card) => (
            <article
              key={card.number}
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
              <span
                className="relative text-[64px] font-extrabold leading-none text-[#DDE2E7]"
                aria-hidden="true"
              >
                {card.number}
              </span>
              <h3 className="relative mt-3 text-[20px] font-semibold text-[var(--header-navy)]">
                {card.title}
              </h3>
              <p className="relative mt-3 text-[18px] font-normal leading-[1.48] text-[var(--header-navy)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
