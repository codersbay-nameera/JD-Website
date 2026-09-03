import ContactForm from "@/components/Contact/ContactForm";

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
      className="shrink-0 text-[var(--header-navy)]"
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

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 text-[var(--header-navy)]"
    >
      <path
        d="M2.5 4.5H13.5C14.05 4.5 14.5 4.95 14.5 5.5V10.5C14.5 11.05 14.05 11.5 13.5 11.5H2.5C1.95 11.5 1.5 11.05 1.5 10.5V5.5C1.5 4.95 1.95 4.5 2.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5.5L8 9L13.5 5.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 text-[var(--header-navy)]"
    >
      <path
        d="M3 6H5.5V13H3V6ZM4.25 3.75C4.94 3.75 5.5 4.31 5.5 5C5.5 5.69 4.94 6.25 4.25 6.25C3.56 6.25 3 5.69 3 5C3 4.31 3.56 3.75 4.25 3.75ZM7 6H9.4V7.2H9.44C9.76 6.58 10.58 6 11.72 6C14.08 6 14.5 7.44 14.5 9.58V13H12V10.02C12 9.22 11.84 8.28 10.66 8.28C9.34 8.28 9 9.12 9 10V13H7V6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactEnquirySection() {
  return (
    <section aria-label="Contact enquiry">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-10 sm:px-8 lg:px-6 lg:pt-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.875rem,3.5vw,2.5rem)] font-bold leading-[1.15] text-[var(--header-navy)]">
              Let&apos;s talk about your needs
            </h1>
            <p className="mt-4 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
              Whether you need cold chain transportation, warehousing, or a
              custom logistics solution, our team is here to help.
            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white"
            >
              Enquire Now
              <ArrowRightIcon />
            </a>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+919619440499"
                className="flex items-center gap-3 text-[16px] text-[var(--header-navy)]"
              >
                <PhoneIcon />
                <span>+91-9619440499</span>
              </a>
              <a
                href="mailto:sales@jdindia.co.in"
                className="flex items-center gap-3 text-[16px] text-[var(--header-navy)]"
              >
                <EmailIcon />
                <span>sales@jdindia.co.in</span>
              </a>
              <a
                href="https://linkedin.com/company/just-deliveries-india"
                className="flex items-center gap-3 text-[16px] text-[var(--header-navy)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                <span>just-deliveries-india</span>
              </a>
            </div>

            <div className="mt-10">
              <p className="text-[16px] font-semibold text-[var(--header-navy)]">
                For career related queries
              </p>
              <a
                href="mailto:careers@jdindia.co.in"
                className="mt-2 inline-flex items-center gap-3 text-[16px] text-[var(--header-navy)]"
              >
                <EmailIcon />
                <span>careers@jdindia.co.in</span>
              </a>
            </div>

            <div className="mt-10">
              <p className="text-[16px] font-semibold text-[var(--header-navy)]">
                For becoming our vendor partner
              </p>
              <p className="mt-2 text-[16px] text-[var(--header-navy)]">
                Please fill this form below
              </p>
              <a
                href="#contact-form"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-white px-5 text-sm font-semibold text-[var(--header-navy)]"
              >
                Be our partner
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
