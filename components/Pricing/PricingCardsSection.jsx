import { pricingPlans } from "@/config/pricing-plans";

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

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 8H12.5M12.5 8L9 4.5M12.5 8L9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4.5 2.5H6.2L7.1 5.4L5.6 6.3C6.4 8.1 7.9 9.6 9.7 10.4L10.6 8.9L13.5 9.8V11.5C13.5 11.8 13.3 12 13 12.1C11.2 12.7 7.8 11.8 5.4 9.4C3 7 2.1 3.6 2.7 1.8C2.8 1.5 3 1.3 3.3 1.3H4.5V2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ plan }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DCE2E7 0.75px, transparent 0.75px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <h3 className="text-[20px] font-semibold leading-snug text-[var(--header-navy)]">
          {plan.title}
        </h3>

        <p className="mt-5">
          <span className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-none text-[#178A49]">
            {plan.price}
          </span>{" "}
          <span className="text-[16px] text-[var(--header-navy)]">onwards</span>
        </p>

        <ul className="mt-6 flex-1 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-[16px] leading-[1.48] text-[var(--header-navy)]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white"
        >
          Choose Plan
          <ArrowRightIcon />
        </a>
      </div>
    </article>
  );
}

export default function PricingCardsSection() {
  return (
    <section aria-label="Pricing plans">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-10 sm:px-8 lg:px-6 lg:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold leading-[1.15] text-[var(--header-navy)]">
            Straight forward pricing for
            <br />
            all your{" "}
            <span className="text-[#2daa5a]">deliveries</span>
          </h1>
          <p className="mt-4 text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
            Know your trip cost upfront with clear, transparent pricing and no
            hidden charges.
          </p>

          <a
            href="tel:+919619440499"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold text-white"
          >
            <PhoneIcon />
            Talk to our expert
          </a>

          <p className="mt-5 text-[16px] leading-relaxed text-[var(--muted-foreground)]">
            No time for a form?{" "}
            <a
              href="tel:+919619440499"
              className="font-medium text-[#178A49]"
            >
              Call +91 96194 40499
            </a>{" "}
            — we&apos;re just a call away.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
