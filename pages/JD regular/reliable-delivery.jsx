const steps = [
  {
    number: "1",
    title: "Share your route & volume",
    description:
      "Tell us your pickup points, drop points and daily/weekly volume.",
  },
  {
    number: "2",
    title: "Get a custom quote",
    description:
      "We size a dedicated fleet and driver plan around your routes.",
  },
  {
    number: "3",
    title: "Onboard & go live",
    description:
      "Dedicated driver and vehicle assigned, account manager introduced.",
  },
  {
    number: "4",
    title: "Track via dashboard",
    description:
      "Live GPS, temperature logs and daily reports through the control tower.",
  },
];

export default function ReliableDelivery() {
  return (
    <section aria-label="From request to reliable delivery">
      <div className="pb-10 pt-8 lg:pb-16 lg:pt-10">
        <h2 className="text-balance px-1 text-center text-[clamp(1.25rem,4.5vw,2rem)] font-bold leading-[1.25] text-[var(--header-navy)] lg:text-[clamp(1.5rem,3vw,2rem)] lg:leading-[1.2]">
          From Request to Reliable Delivery
        </h2>

        <div className="mx-auto mt-8 w-full max-w-[1370px] overflow-hidden rounded-[32px] bg-[#193663] px-5 py-7 sm:mt-10 sm:w-[90%] sm:rounded-[42px] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          {steps.map((step, index) => (
            <div key={step.number}>
              {index > 0 ? (
                <hr className="my-6 border-white/10 sm:my-8" />
              ) : null}
              <div className="flex items-start gap-5 sm:gap-6">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#178A49] text-xl font-bold text-white"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="text-[18px] font-bold text-white lg:text-[20px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] font-normal leading-[1.5] text-white/85 lg:text-[19px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
