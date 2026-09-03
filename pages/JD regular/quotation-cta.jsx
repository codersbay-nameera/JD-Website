function QuoteIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
      <svg
        width="24"
        height="20"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-white"
      >
        <path
          d="M0 16V9.6C0 5.76 2.24 2.88 6.72 1.28L8 3.84C4.8 5.12 3.2 7.04 2.56 9.6H8V16H0ZM12 16V9.6C12 5.76 14.24 2.88 18.72 1.28L20 3.84C16.8 5.12 15.2 7.04 14.56 9.6H20V16H12Z"
          fill="currentColor"
        />
      </svg>
    </div>
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

export default function QuotationCta() {
  return (
    <section aria-label="Get your quote">
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-10 sm:px-8 lg:px-6">
        <div className="relative overflow-hidden rounded-[42px] bg-[#193663] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div
            className="pointer-events-none absolute top-0 right-0 h-40 w-40 opacity-20"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle
                cx="120"
                cy="40"
                r="80"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx="120"
                cy="40"
                r="56"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 h-32 w-full opacity-15"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 800 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 80C120 40 240 100 360 70C480 40 600 90 800 60V120H0V80Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M0 100C160 60 320 110 480 80C640 50 720 95 800 85V120H0V100Z"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <QuoteIcon />
              <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.2] text-white">
                Get your quote in minutes, not meetings.
              </h2>
              <p className="mt-4 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-white/85">
                Use our quotation calculator for an instant estimate, or talk to
                a person if your requirement is more particular — same day
                response, either way.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/20 bg-white/10 p-6 sm:p-8">
              <h3 className="text-[20px] font-bold text-white">
                Instant quotation calculator
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-white/85">
                Routes, volume, vehicle type — get an estimate in under 2
                minutes.
              </p>
              <a
                href="#"
                className="mt-6 flex w-full items-center justify-between gap-3 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 py-3 text-sm font-semibold text-white"
              >
                Open Quotation Calculator
                <ArrowRightIcon />
              </a>
              <p className="mt-5 text-center text-sm text-white/70">Or</p>
              <a
                href="tel:+919619440499"
                className="mt-4 flex items-center justify-center gap-2 text-[16px] font-medium text-white"
              >
                <PhoneIcon />
                +91 96194 40499
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
