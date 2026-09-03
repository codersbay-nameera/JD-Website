import { missionVisionCards } from "@/config/about-mission-team";

function MissionCard({ card }) {
  const isNavy = card.variant === "navy";

  return (
    <article
      className={
        isNavy
          ? "flex min-h-[220px] flex-col rounded-[30px] bg-[#193663] p-8"
          : "flex min-h-[220px] flex-col rounded-[30px] border border-[#DCE2E7] bg-white p-8"
      }
    >
      <span
        className={
          isNavy
            ? "inline-flex w-fit rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
            : "inline-flex w-fit rounded-full bg-[#e8f5ee] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#178A49]"
        }
      >
        ● {card.badge}
      </span>
      <p
        className={
          isNavy
            ? "mt-6 text-[18px] font-normal leading-[1.55] text-white"
            : "mt-6 text-[18px] font-normal leading-[1.55] text-[var(--header-navy)]"
        }
      >
        {card.text}
      </p>
    </article>
  );
}

export default function MissionVisionSection() {
  return (
    <section aria-label="Mission, vision and focus">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Driven by a vision. Powered by a mission.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {missionVisionCards.map((card) => (
            <MissionCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
