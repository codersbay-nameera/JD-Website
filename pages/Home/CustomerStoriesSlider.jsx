"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import biggiesLogo from "@/assets/images/Biggies.png";
import goZeroLogo from "@/assets/images/GoZero.png";
import subkoLogo from "@/assets/images/Sabko.png";
import theobromaLogo from "@/assets/images/Theoborma.png";
import californiaBurritoLogo from "@/assets/images/Burrito.png";
import gopizzaLogo from "@/assets/images/Gopizza.png";

const MARQUEE_DURATION = "70s";
const MARQUEE_DURATION_MS = 70000;

const defaultStories = [
  {
    id: "01",
    number: "01",
    quote:
      "Reliable cold chain logistics helped us scale frozen inventory across multiple outlets.",
    brand: "Biggies Burger",
    category: "QSR · Frozen Inventory",
    logo: biggiesLogo,
  },
  {
    id: "02",
    number: "02",
    quote:
      "Temperature-controlled deliveries kept our ice cream frozen during peak summer demand.",
    brand: "Go Zero",
    category: "Ice Cream · Seasonal Demand",
    logo: goZeroLogo,
  },
  {
    id: "03",
    number: "03",
    quote:
      "Early morning refrigerated deliveries keep our production running without delays.",
    brand: "Subko",
    category: "Café · Production Supply",
    logo: subkoLogo,
  },
  {
    id: "04",
    number: "04",
    quote:
      "Temperature-controlled transport keeps our cakes and desserts fresh for every delivery.",
    brand: "Theobroma",
    category: "Bakery · Fresh Desserts",
    logo: theobromaLogo,
  },
  {
    id: "05",
    number: "05",
    quote:
      "Fresh ingredients reach every outlet on time with reliable refrigerated transport.",
    brand: "California Burrito",
    category: "QSR · Fresh Ingredients",
    logo: californiaBurritoLogo,
  },
  {
    id: "06",
    number: "06",
    quote:
      "Temperature-controlled logistics ensure fresh ingredient supply across all outlets.",
    brand: "GOPIZZA",
    category: "QSR · Multi-Outlet Supply",
    logo: gopizzaLogo,
  },
];

function StoryCard({ story, ariaHidden = false, homeMobileLayout = false }) {
  return (
    <article
      className={
        homeMobileLayout
          ? "relative flex h-[260px] w-full max-w-none shrink-0 flex-col rounded-[24px] border border-[#dce4ee] bg-white p-6 md:h-[275px] md:w-[min(480px,calc(100vw-4rem))] lg:h-[291px] lg:w-[640px] md:p-7 lg:p-8"
          : "relative flex h-[240px] w-[min(260px,calc(100vw-4rem))] shrink-0 flex-col rounded-[24px] border border-[#dce4ee] bg-white p-6 sm:h-[260px] sm:w-[min(330px,calc(100vw-4rem))] md:h-[275px] md:w-[min(480px,calc(100vw-4rem))] lg:h-[291px] lg:w-[640px] sm:p-7 lg:p-8"
      }
      aria-hidden={ariaHidden || undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none text-[#e8edf2]"
            aria-hidden="true"
          >
            {story.number}
          </span>
          <FaQuoteRight className="shrink-0 text-[20px] text-black" aria-hidden="true" />
        </div>

        <p className="mt-5 flex-1 text-[clamp(0.875rem,1.35vw,1rem)] leading-[1.65] text-[var(--header-navy)]">
          {story.quote}
        </p>

        <div className="mt-6 flex items-center gap-3">
          {story.logo ? (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dce4ee] bg-white p-1.5">
              <div className="relative h-full w-full">
                <Image
                  src={story.logo}
                  alt={`${story.brand} logo`}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
            </div>
          ) : null}
          <div className="min-w-0">
            <p
              className={`truncate text-sm font-semibold text-[var(--header-navy)] sm:text-[15px] ${
                homeMobileLayout ? "max-md:whitespace-normal" : ""
              }`}
            >
              {story.brand}
            </p>
            <p className="mt-0.5 text-xs leading-snug text-[#178A49] sm:text-[13px]">
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
  heading = "Trusted by India’s best F&B brands",
  homeMobileLayout = false,
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

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

  useEffect(() => {
    if (prefersReducedMotion || stories.length <= 1) {
      return undefined;
    }

    const dotInterval = MARQUEE_DURATION_MS / stories.length;
    const intervalId = setInterval(() => {
      setActiveDot((current) => (current + 1) % stories.length);
    }, dotInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [prefersReducedMotion, stories.length]);

  if (!stories.length) {
    return null;
  }

  return (
    <section
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#EEF4F8] py-10 sm:py-12 lg:py-16 ${
        homeMobileLayout ? "max-w-[100vw]" : "max-w-none"
      }`}
      aria-labelledby="customer-stories-heading"
    >
      <div className="page-layout-padding">
        <h2
          id="customer-stories-heading"
          className={`text-balance text-center font-bold leading-snug ${
            homeMobileLayout
              ? "text-[clamp(1.25rem,5vw,2rem)] text-[#19305A] md:text-[clamp(1.5rem,3vw,2rem)] md:text-[var(--header-navy)]"
              : "text-[clamp(1.5rem,3vw,2rem)] text-[var(--header-navy)]"
          }`}
        >
          {heading}
        </h2>
      </div>

      <div
        className={`relative w-full overflow-hidden ${
          homeMobileLayout ? "mt-6 page-layout-padding sm:mt-10 md:px-0" : "mt-8 sm:mt-10"
        }`}
      >
        <div
          className={`customer-stories-track flex w-max items-stretch ${
            homeMobileLayout ? "gap-0 md:gap-5" : "gap-4 sm:gap-5"
          } ${prefersReducedMotion ? "" : "customer-stories-animate"}`}
          role="list"
          aria-label="Customer testimonials"
        >
          {stories.map((story) => (
            <div
              key={story.id}
              role="listitem"
              className={
                homeMobileLayout
                  ? "h-auto shrink-0 max-md:w-[calc(100vw-3rem)] md:w-auto"
                  : "h-auto"
              }
            >
              <StoryCard story={story} homeMobileLayout={homeMobileLayout} />
            </div>
          ))}

          {stories.map((story) => (
            <div
              key={`${story.id}-duplicate`}
              role="listitem"
              className={
                homeMobileLayout
                  ? "h-auto shrink-0 max-md:w-[calc(100vw-3rem)] md:w-auto"
                  : "h-auto"
              }
              aria-hidden="true"
            >
              <StoryCard story={story} ariaHidden homeMobileLayout={homeMobileLayout} />
            </div>
          ))}
        </div>
      </div>

      {stories.length > 1 ? (
        <div
          className="mt-8 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Customer story slides"
        >
          {stories.map((story, index) => {
            const isActive = index === activeDot;

            return (
              <button
                key={story.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Testimonial ${story.number}`}
                tabIndex={isActive ? 0 : -1}
                className={
                  isActive
                    ? "h-2.5 w-2.5 rounded-full border-0 bg-[#178A49] p-0"
                    : "h-2.5 w-2.5 rounded-full border-0 bg-[#c5d0dc] p-0"
                }
                onClick={() => setActiveDot(index)}
              />
            );
          })}
        </div>
      ) : null}

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
