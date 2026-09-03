import { aboutTeamMembers } from "@/config/about-mission-team";

function PersonPlaceholder({ name }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#eef3f8]">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-[#c5d8ea]"
      >
        <circle cx="20" cy="14" r="7" fill="currentColor" />
        <path
          d="M8 34C8 27.3726 13.3726 22 20 22C26.6274 22 32 27.3726 32 34"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">{name}</span>
    </div>
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
      className="text-[var(--header-navy)]"
    >
      <path
        d="M3 6H5.5V13H3V6ZM4.25 3.75C4.94 3.75 5.5 4.31 5.5 5C5.5 5.69 4.94 6.25 4.25 6.25C3.56 6.25 3 5.69 3 5C3 4.31 3.56 3.75 4.25 3.75ZM7 6H9.4V7.2H9.44C9.76 6.58 10.58 6 11.72 6C14.08 6 14.5 7.44 14.5 9.58V13H12V10.02C12 9.22 11.84 8.28 10.66 8.28C9.34 8.28 9 9.12 9 10V13H7V6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TeamCard({ member }) {
  return (
    <article className="relative flex min-h-[240px] flex-col overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-6 sm:p-8">
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
        <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-[#DCE2E7]">
          <PersonPlaceholder name={member.name} />
        </div>

        <h3 className="mt-5 text-[18px] font-semibold text-[var(--header-navy)]">
          {member.name}
        </h3>
        <p className="mt-1 text-[15px] leading-snug text-[var(--muted-foreground)]">
          {member.designation}
        </p>

        <a
          href="#"
          className="mt-auto flex justify-end pt-6"
          aria-label={`${member.name} on LinkedIn`}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DCE2E7] bg-white">
            <LinkedInIcon />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section aria-label="Meet the team">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-4 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Meet the Team Behind JustDeliveries
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {aboutTeamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
