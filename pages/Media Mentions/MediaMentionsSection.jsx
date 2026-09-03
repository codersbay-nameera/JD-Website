"use client";

import { useState } from "react";
import { mediaMentions } from "@/config/media-mentions";

const TOTAL_PAGES = 4;

function MediaMentionCard({ mention }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="flex min-h-[120px] items-center justify-center px-5 py-6 sm:min-h-[140px] sm:px-6">
        <p className="text-center text-sm font-bold leading-snug text-[var(--header-navy)] sm:text-base">
          {mention.publication}
        </p>
      </div>

      <div className="relative flex flex-1 flex-col border-t border-[#e2e8f0] px-4 py-4 sm:px-5 sm:py-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
          aria-hidden="true"
        />

        <h3 className="relative text-[clamp(0.9375rem,1.5vw,1.0625rem)] font-bold leading-snug text-[var(--header-navy)]">
          {mention.title}
        </h3>
      </div>
    </article>
  );
}

export default function MediaMentionsSection() {
  const [activePage, setActivePage] = useState(1);

  return (
    <section
      className="w-full min-w-0 py-10 sm:py-12 lg:py-14"
      aria-labelledby="media-mentions-heading"
    >
      <h1
        id="media-mentions-heading"
        className="text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
      >
        Latest media highlights
      </h1>

      <div className="mt-8 sm:mt-10">
        {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => {
          const pageNumber = pageIndex + 1;
          const isActive = activePage === pageNumber;

          return (
            <div
              key={`media-mentions-page-${pageNumber}`}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
              hidden={!isActive}
              aria-hidden={!isActive || undefined}
            >
              {mediaMentions.map((mention) => (
                <MediaMentionCard
                  key={`${mention.id}-page-${pageNumber}`}
                  mention={mention}
                />
              ))}
            </div>
          );
        })}
      </div>

      <nav
        className="mt-8 flex items-center justify-center gap-2 sm:mt-10"
        aria-label="Media mentions pagination"
      >
        {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => {
          const pageNumber = pageIndex + 1;
          const isActive = activePage === pageNumber;

          return (
            <button
              key={`media-mentions-pagination-${pageNumber}`}
              type="button"
              onClick={() => setActivePage(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[var(--header-navy)] text-white"
                  : "border border-[#e2e8f0] bg-white text-[var(--header-navy)]"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </nav>
    </section>
  );
}
