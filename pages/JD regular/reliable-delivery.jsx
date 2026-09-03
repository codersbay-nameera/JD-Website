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
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-10 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          From Request to Reliable Delivery
        </h2>

        <div className="mx-auto mt-10 w-full max-w-[1370px] overflow-hidden rounded-[42px] bg-[#193663] px-6 py-8 sm:w-[90%] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          {steps.map((step, index) => (
            <div key={step.number}>
              {index > 0 ? (
                <hr className="my-6 border-white/10 sm:my-8" />
              ) : null}
              <div className="flex items-start gap-5 sm:gap-6">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#159447] text-xl font-bold text-white"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="text-[20px] font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[19px] font-normal leading-[1.5] text-white/85">
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
