const challengeCards = [
  {
    number: "01",
    title: "The Challenge",
    body: "Not every business needs a refrigerated vehicle every day. Many only need one a few times a week.",
  },
  {
    number: "02",
    title: "The Gap",
    body: "Growing brands shouldn't have to choose between expensive long-term contracts and unreliable last-minute arrangements.",
  },
  {
    number: "03",
    title: "The Solution",
    body: "Reliable chilled and frozen vehicles, available when you need them. Book when you need, pay only for what you use.",
  },
];

export default function Challenges() {
  return (
    <section
      className="relative left-1/2 w-screen max-w-none -translate-x-1/2 bg-[#EEF4F8]"
      aria-label="JD Instant challenge and solution"
    >
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.2] text-[#193663]">
          We built JD Instant to solve a real challenge
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {challengeCards.map((card) => (
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
              <h3 className="relative mt-3 text-[20px] font-semibold text-[#193663]">
                {card.title}
              </h3>
              <p className="relative mt-3 text-[18px] font-normal leading-[1.48] text-[#193663]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
