import Image from "next/image";

export default function CaseStudyCard({ study }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="rounded-t-2xl bg-[var(--header-navy)] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="min-w-0 flex-1 whitespace-pre-line text-sm font-semibold leading-snug text-white">
            {study.visualTitle}
          </p>
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 border-[#2daa5a] bg-white sm:h-16 sm:w-16">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              sizes="64px"
              className="object-contain p-1.5"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-1 flex-col">
          <h3 className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] font-bold leading-snug text-[var(--header-navy)]">
            {study.title}
          </h3>

          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            <span className="text-[#2daa5a]">Case Study</span>
            <span aria-hidden="true"> · </span>
            <span>By {study.author}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
