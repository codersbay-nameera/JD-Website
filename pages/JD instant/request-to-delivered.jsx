const steps = [
  {
    number: 1,
    title: "Enter trip details",
    description:
      "Add pickup and drop locations, shipment details, and the temperature range your product needs.",
  },
  {
    number: 2,
    title: "Choose booking type",
    description:
      "Book instantly for urgent runs, or schedule a reefer vehicle in advance for planned deliveries.",
  },
  {
    number: 3,
    title: "Confirm booking",
    description:
      "Review the fare and trip details. Driver and vehicle information are shared before pickup.",
  },
  {
    number: 4,
    title: "Verify, track & deliver",
    description:
      "Verify vehicle temperature, start the trip with OTP, track it live, and close it out with receiver OTP and proof of delivery.",
  },
];

export default function RequestToDelivered() {
  return (
    <section
      className="relative left-1/2 w-screen max-w-none -translate-x-1/2 bg-[#EEF4F8]"
      aria-label="From request to delivered"
    >
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-10 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[#193663]">
          From request to delivered, verified at every step.
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
