import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/config/case-studies";
import CaseStudyCard from "@/components/CaseStudies/CaseStudyCard";
import CaseStudyCommentForm from "@/components/CaseStudies/CaseStudyCommentForm";

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

function DottedPattern({ className = "inset-0" }) {
  return (
    <div
      className={`pointer-events-none absolute ${className} opacity-35`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
      aria-hidden="true"
    />
  );
}

export default function CaseStudyDetail({ detail }) {
  const relatedStudies = caseStudies.filter((study) =>
    detail.relatedIds.includes(study.id),
  );

  return (
    <div className="w-full min-w-0 pb-10 sm:pb-12 lg:pb-14">
      <section className="pt-6 sm:pt-8 lg:pt-10" aria-label="Case study hero">
        <div className="overflow-hidden rounded-[30px] bg-[var(--header-navy)] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <h1 className="whitespace-pre-line text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] text-white">
              {detail.heroVisualTitle}
            </h1>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-[#2daa5a] lg:aspect-[16/11]">
              <Image
                src={detail.heroImage}
                alt={detail.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative mt-8 overflow-hidden rounded-[30px] border border-[#e2e8f0] bg-white px-6 py-8 sm:mt-10 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
        aria-label="Case study article"
      >
        <DottedPattern />

        <div className="relative">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]">
            {detail.title}
          </h2>

          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            <span>Leave a Comment</span>
            <span aria-hidden="true"> · </span>
            <span className="text-[#2daa5a]">Case Study</span>
            <span aria-hidden="true"> · </span>
            <span>By {detail.author}</span>
          </p>

          <div className="mt-8 space-y-8">
            {detail.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-base font-bold text-[var(--header-navy)] sm:text-lg">
                  {section.heading}
                </h3>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-[var(--header-nav-text)] sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative mt-8 overflow-hidden rounded-[30px] border border-[#e2e8f0] bg-white p-6 sm:mt-10 sm:p-8"
        aria-label="About the author"
      >
        <DottedPattern className="inset-x-0 bottom-0 top-0 opacity-50" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#DCE2E7]">
            <PersonPlaceholder name={detail.author} />
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[var(--header-navy)]">
              {detail.author}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              {detail.authorDesignation}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--header-nav-text)] sm:text-[15px]">
              {detail.authorBio}
            </p>
          </div>
        </div>
      </section>

      <section
        className="mt-12 sm:mt-16 lg:mt-20"
        aria-labelledby="related-case-studies-heading"
      >
        <h2
          id="related-case-studies-heading"
          className="text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
        >
          Related Case Studies
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          Explore more success stories from businesses transforming their cold
          chain operations with JustDeliveries.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {relatedStudies.map((study) => (
            <Link key={study.id} href={study.href} className="block h-full">
              <CaseStudyCard study={study} />
            </Link>
          ))}
        </div>
      </section>

      <section
        className="mt-12 sm:mt-16 lg:mt-20"
        aria-labelledby="leave-a-comment-heading"
      >
        <h2
          id="leave-a-comment-heading"
          className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
        >
          Leave a Comment
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="mt-6">
          <CaseStudyCommentForm />
        </div>
      </section>
    </div>
  );
}
