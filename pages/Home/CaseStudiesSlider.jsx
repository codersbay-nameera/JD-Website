"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import tssLogo from "@/assets/images/Tss.png";
import mcdLogo from "@/assets/images/MCD.png";
import croffleGuysLogo from "@/assets/images/croffleGuys.png";
import frankieLogo from "@/assets/images/frankie.png";

const defaultCaseStudies = [
  {
    id: "corporate-catering",
    visualTitle: "Ensuring Flawless Logistics For Corporate Catering",
    title: "Ensuring Flawless Logistics For Corporate Catering Companies",
    author: "Mansi Mahansaria",
    href: "/case-studies/corporate-catering-logistics",
    image: tssLogo,
    imageAlt:
      "The Sassy Spoon logo for corporate catering logistics case study",
  },
  {
    id: "qsr-chain",
    visualTitle: "Fueling Growth for a QSR Chain with Our Seamless Logistics",
    title: "Fueling Growth for a QSR Chain with Our Seamless Logistics",
    author: "Mansi Mahansaria",
    href: "/case-studies/qsr-chain-logistics",
    image: mcdLogo,
    imageAlt: "McDonald's logo for QSR chain logistics case study",
  },
  {
    id: "cafe-chains",
    visualTitle: "Ensuring Freshness of Food Items for Cafe Chains",
    title: "Ensuring Freshness of Food Items for Cafe Chains",
    author: "Mansi Mahansaria",
    href: "/case-studies/cafe-food-logistics",
    image: croffleGuysLogo,
    imageAlt: "The Croffle Guys logo for cafe chain logistics case study",
  },
  {
    id: "tibbs-frankie",
    visualTitle:
      "How JustDeliveries Supported Tibb’s Frankie’s Growth To 50+ Outlets",
    title:
      "How JustDeliveries Supported Tibb’s Frankie’s Growth To 50+ Outlets",
    author: "Mansi Mahansaria",
    href: "/case-studies/tibbs-frankie-logistics",
    image: frankieLogo,
    imageAlt: "Tibbs Frankie logo for multi-outlet growth case study",
  },
];

function getSlidesPerView(width) {
  if (width < 768) {
    return 1;
  }

  if (width < 1024) {
    return 2;
  }

  return 4;
}

function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaseStudyCard({ study }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="bg-[var(--header-navy)] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-white">
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

          <div
            className="mt-4 border-t border-[#e2e8f0]"
            aria-hidden="true"
          />

          <Link
            href={study.href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2daa5a]"
          >
            Read full story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function CaseStudiesSlider({ caseStudies = defaultCaseStudies }) {
  const [activePage, setActivePage] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(caseStudies.length / slidesPerView));
  const currentPage = Math.min(activePage, totalPages - 1);

  const goToPage = useCallback(
    (page) => {
      setActivePage(Math.max(0, Math.min(page, totalPages - 1)));
    },
    [totalPages],
  );

  const goToPrevious = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  return (
    <section
      className="w-full min-w-0 overflow-hidden py-10 sm:py-12 lg:py-14"
      aria-labelledby="case-studies-heading"
    >
      <h2
        id="case-studies-heading"
        className="text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
      >
        Real results. Real business impact.
      </h2>

      <div className="relative mt-8 sm:mt-10">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={`case-study-page-${pageIndex}`}
                className="grid w-full shrink-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5"
                aria-hidden={pageIndex !== currentPage || undefined}
              >
                {caseStudies
                  .slice(
                    pageIndex * slidesPerView,
                    pageIndex * slidesPerView + slidesPerView,
                  )
                  .map((study) => (
                    <CaseStudyCard key={study.id} study={study} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              disabled={currentPage === 0}
              className="absolute top-1/2 left-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e2e8f0] bg-white p-2 text-[var(--header-navy)] disabled:cursor-not-allowed disabled:opacity-40 sm:flex"
              aria-label="Previous case studies"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={goToNext}
              disabled={currentPage === totalPages - 1}
              className="absolute top-1/2 right-0 z-10 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e2e8f0] bg-white p-2 text-[var(--header-navy)] disabled:cursor-not-allowed disabled:opacity-40 sm:flex"
              aria-label="Next case studies"
            >
              <ChevronRightIcon />
            </button>
          </>
        ) : null}
      </div>

      {totalPages > 1 ? (
        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Case study pages"
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={`case-study-dot-${pageIndex}`}
              type="button"
              role="tab"
              aria-selected={pageIndex === currentPage}
              aria-label={`Go to case study page ${pageIndex + 1}`}
              onClick={() => goToPage(pageIndex)}
              className={`h-2.5 w-2.5 rounded-full ${
                pageIndex === currentPage
                  ? "bg-[var(--header-navy)]"
                  : "bg-[#c5d4e3]"
              }`}
            />
          ))}
        </div>
      ) : null}

      {totalPages > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={activePage === 0}
            className="inline-flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white p-2 text-[var(--header-navy)] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous case studies"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={goToNext}
            disabled={activePage === totalPages - 1}
            className="inline-flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white p-2 text-[var(--header-navy)] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next case studies"
          >
            <ChevronRightIcon />
          </button>
        </div>
      ) : null}
    </section>
  );
}
