"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MARQUEE_DURATION = "70s";

const defaultStories = [
  {
    id: "01",
    number: "01",
    quote:
      "Reliable cold chain logistics helped us scale frozen inventory across multiple outlets.",
    brand: "Biggies Burger",
    category: "QSR · Frozen Inventory",
  },
  {
    id: "02",
    number: "02",
    quote:
      "Temperature-controlled deliveries kept our ice cream frozen during peak summer demand.",
    brand: "Go Zero",
    category: "Ice Cream · Seasonal Demand",
  },
  {
    id: "03",
    number: "03",
    quote:
      "Early morning refrigerated deliveries keep our production running without delays.",
    brand: "Subko",
    category: "Café · Production Supply",
  },
  {
    id: "04",
    number: "04",
    quote:
      "Temperature-controlled transport keeps our cakes and desserts fresh for every delivery.",
    brand: "Theobroma",
    category: "Bakery · Fresh Desserts",
  },
  {
    id: "05",
    number: "05",
    quote:
      "Fresh ingredients reach every outlet on time with reliable refrigerated transport.",
    brand: "California Burrito",
    category: "QSR · Fresh Ingredients",
  },
  {
    id: "06",
    number: "06",
    quote:
      "Temperature-controlled logistics ensure fresh ingredient supply across all outlets.",
    brand: "GOPIZZA",
    category: "QSR · Multi-Outlet Supply",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 text-[#c5d8ea]"
    >
      <path
        d="M0 16V9.6C0 5.76 2.24 2.88 6.72 1.28L8 3.84C4.8 5.12 3.2 7.04 2.56 9.6H8V16H0ZM12 16V9.6C12 5.76 14.24 2.88 18.72 1.28L20 3.84C16.8 5.12 15.2 7.04 14.56 9.6H20V16H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StoryCard({ story, ariaHidden = false }) {
  return (
    <article
      className="relative flex h-[240px] w-[min(280px,calc(100vw-4rem))] shrink-0 flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 sm:h-[260px] sm:w-[min(360px,calc(100vw-4rem))] md:h-[275px] md:w-[min(520px,calc(100vw-4rem))] lg:h-[291px] lg:w-[696px]"
      aria-hidden={ariaHidden || undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className="text-[clamp(2rem,4vw,2.5rem)] font-bold leading-none text-[#e8edf2]"
            aria-hidden="true"
          >
            {story.number}
          </span>
          <QuoteIcon />
        </div>

        <p className="mt-4 flex-1 text-[clamp(0.8125rem,1.25vw,0.875rem)] leading-relaxed text-[var(--header-navy)]">
          {story.quote}
        </p>

        <div className="mt-5 flex items-center gap-3">
          {story.logo ? (
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src={story.logo}
                alt={`${story.brand} logo`}
                fill
                sizes="32px"
                className="object-contain object-left"
              />
            </div>
          ) : null}
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--header-navy)]">
              {story.brand}
            </p>
            <p className="mt-0.5 text-xs leading-snug text-[#2daa5a]">
              {story.category}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CustomerStoriesSlider({
  stories = defaultStories,
  heading = "Trusted by indeas largest brand ",
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  if (!stories.length) {
    return null;
  }

  return (
    <section
      className="w-full min-w-0 overflow-hidden py-10 sm:py-12 lg:py-14"
      aria-label="Customer stories"
    >
      <p className="text-sm text-[var(--muted-foreground)]">{heading}</p>

      <div className="relative mt-6 overflow-hidden sm:mt-8">
        <div
          className={`customer-stories-track flex w-max items-stretch gap-4 sm:gap-5 ${
            prefersReducedMotion ? "" : "customer-stories-animate"
          }`}
          role="list"
          aria-label="Customer case studies"
        >
          {stories.map((story) => (
            <div key={story.id} role="listitem" className="h-auto">
              <StoryCard story={story} />
            </div>
          ))}

          {stories.map((story) => (
            <div
              key={`${story.id}-duplicate`}
              role="listitem"
              className="h-auto"
              aria-hidden="true"
            >
              <StoryCard story={story} ariaHidden />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes customer-stories-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .customer-stories-animate {
          animation: customer-stories-marquee ${MARQUEE_DURATION} linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .customer-stories-animate {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
