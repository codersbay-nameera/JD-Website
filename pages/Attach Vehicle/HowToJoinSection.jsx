const steps = [
  {
    number: "1",
    title: "Fill the Form",
    description:
      "Complete the registration form in just 2 minutes with your basic details.",
  },
  {
    number: "2",
    title: "Get a Call",
    description:
      "Our onboarding team will contact you to verify your information and guide you through the next steps.",
  },
  {
    number: "3",
    title: "Vehicle Verification",
    description:
      "Your vehicle will be inspected, verified, and attached to the JustDeliveries platform.",
  },
  {
    number: "4",
    title: "Start Earning",
    description:
      "Accept delivery trips and receive timely payments for every completed order.",
  },
];

export default function HowToJoinSection() {
  return (
    <section aria-label="How to Join JustDeliveries">
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-4 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          How to Join JustDeliveries
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
