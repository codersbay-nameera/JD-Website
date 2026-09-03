function TruckIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-white"
      >
        <path
          d="M1 17V6.5C1 5.67 1.67 5 2.5 5H15.5C16.33 5 17 5.67 17 6.5V17H19.5C19.78 17 20 16.78 20 16.5V12.5L24.5 8H26.5C27.33 8 28 8.67 28 9.5V16.5C28 17.33 27.33 18 26.5 18H25.5C25.22 20.21 23.43 22 21 22C18.57 22 16.78 20.21 16.5 18H10.5C10.22 20.21 8.43 22 6 22C3.57 22 1.78 20.21 1.5 18H1.5C1.22 18 1 17.78 1 17.5V17ZM6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20ZM21 20C22.1 20 23 19.1 23 18C23 16.9 22.1 16 21 16C19.9 16 19 16.9 19 18C19 19.1 19.9 20 21 20ZM17 16.5V8H3V16.5H17Z"
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

function CtaDecorations() {
  return (
    <>
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
          <circle cx="132" cy="44" r="88" stroke="white" strokeWidth="1.5" />
          <circle cx="132" cy="44" r="64" stroke="white" strokeWidth="1.5" />
          <circle cx="132" cy="44" r="40" stroke="white" strokeWidth="1.5" />
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
    </>
  );
}

export default function JoinCtaSection() {
  return (
    <section aria-label="Join JustDeliveries as a vehicle partner">
      <div className="mx-auto max-w-[1370px] px-6 pb-16 pt-4 sm:px-8 lg:px-6">
        <div className="relative mx-auto w-full max-w-[90%] overflow-hidden rounded-[32px] bg-[#193663] px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[470px] lg:px-0 lg:py-14">
          <CtaDecorations />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-12">
            <div className="min-w-0 lg:pl-[90px]">
              <TruckIcon />
              <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.2] text-white">
                Gaadi Lagao. Jyaada Kamao.
              </h2>
              <p className="mt-4 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-white/85">
                Join today and get started quickly. Our onboarding team will
                contact you within one business day to guide you through the
                next steps.
              </p>
            </div>

            <div className="w-full lg:max-w-[455px] lg:justify-self-end lg:pr-20">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8">
                <h3 className="text-[20px] font-bold text-white">
                  Ready to Drive with JustDeliveries?
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-white/85">
                  Start your journey with India&apos;s trusted cold-chain
                  network.
                </p>
                <a
                  href="#"
                  className="mt-6 flex w-full items-center justify-between gap-3 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 py-3 text-sm font-semibold text-white"
                >
                  Join Now
                  <ArrowRightIcon />
                </a>
                <p className="mt-5 text-center text-sm font-bold text-white">
                  Or
                </p>
                <a
                  href="tel:+919619440499"
                  className="mt-4 flex items-center justify-center gap-2 text-[16px] font-bold text-white"
                >
                  <PhoneIcon />
                  +91 96194 40499
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
