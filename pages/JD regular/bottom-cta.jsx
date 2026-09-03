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

export default function BottomCta() {
  return (
    <section aria-label="Ready to move your cold chain">
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-4 sm:px-8 lg:px-6">
        <div className="relative overflow-hidden rounded-[42px] bg-[#193663] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div
            className="pointer-events-none absolute top-0 right-0 h-44 w-44 opacity-20"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 176 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle
                cx="132"
                cy="44"
                r="88"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx="132"
                cy="44"
                r="64"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx="132"
                cy="44"
                r="40"
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

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.2] text-white">
                Ready to move your cold chain, every day?
              </h2>
              <p className="mt-3 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-white/85">
                Get an instant quote, or speak to a person on our team today.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold whitespace-nowrap text-white"
              >
                Get an instant quote
                <ArrowRightIcon />
              </a>
              <a
                href="#"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/40 bg-transparent px-5 text-sm font-semibold whitespace-nowrap text-white"
              >
                <PhoneIcon />
                Talk to our expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
