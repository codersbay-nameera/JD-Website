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

function formatPhoneHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export default function LocationCard({ location }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-[#DCE2E7] bg-white p-6 sm:p-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DCE2E7 0.75px, transparent 0.75px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <p className="text-[16px] font-semibold text-[var(--header-navy)]">
          Location : {location.name}
        </p>

        {location.address ? (
          <p className="mt-4 whitespace-pre-line text-[16px] leading-[1.6] text-[var(--header-navy)]">
            {location.address}
          </p>
        ) : null}

        <div className="mt-6 space-y-4">
          <a
            href={formatPhoneHref(location.phone)}
            className="flex items-center gap-3 text-[16px] text-[var(--header-navy)]"
          >
            <PhoneIcon />
            <span>{location.phone}</span>
          </a>
          <a
            href={`mailto:${location.email}`}
            className="flex items-center gap-3 text-[16px] text-[var(--header-navy)]"
          >
            <EmailIcon />
            <span>{location.email}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
