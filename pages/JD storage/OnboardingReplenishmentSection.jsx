const steps = [
  {
    number: "1",
    title: "Share your storage & volume needs",
    description:
      "Product type, temperature range, target cities and expected volume.",
  },
  {
    number: "2",
    title: "Onboard to a JD facility",
    description:
      "Get matched to cold storage & warehousing capacity in your target city.",
  },
  {
    number: "3",
    title: "We manage inbound & outbound",
    description:
      "Inbound via ASN, outbound via PO — our pickers, supervisors and drivers handle the rest.",
  },
  {
    number: "4",
    title: "Track everything via dashboard",
    description:
      "Real-time inventory, temperature logs and replenishment reports, always on.",
  },
];

export default function OnboardingReplenishmentSection() {
  return (
    <section aria-label="From onboarding to your first replenishment">
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-4 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          From onboarding to your first replenishment.
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
