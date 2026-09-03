"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import jdRegularImage from "@/assets/images/jdregular.webp";
import jdInstantImage from "@/assets/images/jdinstant.webp";
import jdStorageImage from "@/assets/images/jdstorage.webp";

const AUTOPLAY_INTERVAL = 1500;
const SLIDE_TRANSITION_MS = 700;

export const defaultSlides = [
  {
    id: "regular",
    headingLevel: 1,
    headingParts: [
      { text: "India’s Trusted ", color: "navy" },
      { text: "F&B", color: "green" },
      { text: " Logistics Partner", color: "green" },
    ],
    description:
      "Dedicated drivers and vehicles on annual contracts — built for brands moving daily volume, at scale, across India.",
    stats: [
      { value: "150+", label: "F&B brands trust us" },
      { value: "100s", label: "of vehicles on the road" },
      { value: "24/7", label: "control tower" },
      { value: "Pan-India", label: "presence" },
    ],
    actions: [
      {
        type: "primary",
        label: "Get an Instant Quote",
        href: "#",
        icon: "arrow",
      },
      {
        type: "secondary",
        label: "Speak to Our Team",
        href: "#",
        icon: "phone",
      },
    ],
    image: jdRegularImage,
    imageAlt:
      "Just Deliveries logistics truck for food and beverage brand distribution across India",
  },
  {
    id: "instant",
    headingLevel: 2,
    headingParts: [
      { text: "Pay per use", color: "green" },
      {
        text: " chilled and frozen vehicles - book easily via App",
        color: "navy",
      },
    ],
    description:
      "On demand vehicles in mumbai with live tracking and temperature monitoring ! Book instantly ! Useful for quick commerce appointments, outlet replenishments, b2b orders or emergency deliveries",
    stats: [
      { value: "60 min", label: "vehicle placement" },
      { value: "100%", label: "dedicated, never shared" },
    ],
    appStoreButtons: [
      { label: "App Store", href: "#" },
      { label: "Google Play", href: "#" },
    ],
    image: jdInstantImage,
    imageAlt:
      "Just Deliveries Instant refrigerated vehicle for chilled and frozen on-demand logistics",
  },
  {
    id: "storage",
    headingLevel: 2,
    headingParts: [
      { text: "Your ", color: "navy" },
      { text: "Quick Commerce", color: "green" },
      { text: " fulfilment partner", color: "navy" },
    ],
    description:
      "We ensure correct temperature and on time deliveries ensuring zero rejections at quick com DCs. PODs uploaded instantly.",
    stats: [
      { value: "6 cities", label: "fulfillment network" },
      { value: "Weeks", label: "not months to launch" },
      { value: "₹0", label: "warehouse capex" },
      { value: "-18°C to +18°C", label: "temperature range" },
    ],
    actions: [
      {
        type: "primary",
        label: "Get a Customized Quotation",
        href: "#",
        icon: "arrow",
      },
      {
        type: "secondary",
        label: "Talk to JD Expert",
        href: "#",
        icon: "phone",
      },
    ],
    image: jdStorageImage,
    imageAlt:
      "Just Deliveries warehouse and vehicle fleet supporting quick commerce fulfilment operations",
  },
];

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

function SlideHeading({ slide }) {
  const Tag = slide.headingLevel === 1 ? "h1" : "h2";

  return (
    <Tag className="text-[clamp(1.875rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
      {slide.headingParts.map((part, index) => (
        <span
          key={`${slide.id}-heading-${index}`}
          className={
            part.color === "green" ? "text-[#2daa5a]" : "text-[var(--header-navy)]"
          }
        >
          {part.text}
        </span>
      ))}
    </Tag>
  );
}

function SlideActions({ slide }) {
  if (slide.appStoreButtons?.length) {
    return (
      <div className="flex flex-wrap gap-3">
        {slide.appStoreButtons.map((button) => (
          <a
            key={button.label}
            href={button.href}
            className="inline-flex min-h-11 min-w-[9.5rem] items-center justify-center rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white"
          >
            {button.label}
          </a>
        ))}
      </div>
    );
  }

  if (!slide.actions?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {slide.actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className={
            action.type === "primary"
              ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 text-sm font-semibold text-white"
              : "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-white px-5 text-sm font-semibold text-[var(--header-navy)]"
          }
        >
          {action.label}
          {action.icon === "arrow" ? <ArrowRightIcon /> : null}
          {action.icon === "phone" ? <PhoneIcon /> : null}
        </a>
      ))}
    </div>
  );
}

function SlideContent({ slide }) {
  return (
    <div className="flex min-h-0 min-w-0 flex-col justify-center gap-6">
      <SlideHeading slide={slide} />

      <p className="max-w-xl text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-[var(--header-navy)]">
        {slide.description}
      </p>

      {slide.stats?.length ? (
        <dl className="grid grid-cols-2 gap-4 sm:gap-5">
          {slide.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`}>
              <dt className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold leading-tight text-[#178A49]">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[clamp(0.8125rem,1.25vw,0.9375rem)] leading-snug text-[var(--muted-foreground)]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <SlideActions slide={slide} />
    </div>
  );
}

function SlideImage({ slide }) {
  return (
    <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-3xl bg-white lg:aspect-[16/11]">
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        priority={slide.headingLevel === 1}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

function SlidePanel({ slide, isActive }) {
  return (
    <div
      className="grid h-full min-h-full min-w-full shrink-0 basis-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10"
      aria-hidden={!isActive || undefined}
    >
      <SlideContent slide={slide} />
      <div className="flex h-full min-h-0 w-full items-center lg:items-stretch">
        <SlideImage slide={slide} />
      </div>
    </div>
  );
}

export function SliderSection({ slides = defaultSlides }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef(null);
  const resetTransitionRef = useRef(null);

  const slideCount = slides.length;
  const trackSlides =
    slideCount > 1 ? [...slides, slides[0]] : slides;
  const activeIndex =
    slideCount === 0
      ? 0
      : trackIndex >= slideCount
        ? 0
        : Math.min(trackIndex, slideCount - 1);
  const activeSlide = slides[activeIndex];
  const referenceSlide = slides[1] ?? slides[0];
  const safeTrackIndex = slideCount <= 1 ? 0 : trackIndex;

  const goToSlide = useCallback(
    (index) => {
      if (index === activeIndex && trackIndex < slideCount) {
        return;
      }

      if (prefersReducedMotion) {
        setEnableTransition(false);
        setTrackIndex(index);
        return;
      }

      setEnableTransition(true);
      setTrackIndex(index);
    },
    [activeIndex, prefersReducedMotion, slideCount, trackIndex],
  );

  const goToNextSlide = useCallback(() => {
    if (slideCount <= 1) {
      return;
    }

    if (prefersReducedMotion) {
      setEnableTransition(false);
      setTrackIndex((current) => (current + 1) % slideCount);
      return;
    }

    setEnableTransition(true);
    setTrackIndex((current) => {
      if (current >= slideCount) {
        return 0;
      }

      if (current >= slideCount - 1) {
        return slideCount;
      }

      return current + 1;
    });
  }, [prefersReducedMotion, slideCount]);

  const goToNextSlideRef = useRef(goToNextSlide);

  useEffect(() => {
    goToNextSlideRef.current = goToNextSlide;
  }, [goToNextSlide]);

  const handleTrackTransitionEnd = useCallback(
    (event) => {
      if (event.propertyName !== "transform") {
        return;
      }

      if (trackIndex !== slideCount) {
        return;
      }

      setEnableTransition(false);
      setTrackIndex(0);

      if (resetTransitionRef.current) {
        cancelAnimationFrame(resetTransitionRef.current);
      }

      resetTransitionRef.current = requestAnimationFrame(() => {
        resetTransitionRef.current = requestAnimationFrame(() => {
          setEnableTransition(true);
          resetTransitionRef.current = null;
        });
      });
    },
    [slideCount, trackIndex],
  );

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
    if (slideCount <= 1) {
      return undefined;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isPaused) {
      return undefined;
    }

    intervalRef.current = setInterval(() => {
      goToNextSlideRef.current();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, slideCount]);

  useEffect(() => {
    return () => {
      if (resetTransitionRef.current) {
        cancelAnimationFrame(resetTransitionRef.current);
      }
    };
  }, []);

  const trackTransitionClass =
    enableTransition && !prefersReducedMotion
      ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
      : "";

  if (!slideCount || !activeSlide || !referenceSlide) {
    return null;
  }

  return (
    <section
      className="w-full min-w-0 max-w-full overflow-x-hidden pt-5 sm:pt-6 lg:pt-8"
      aria-label="Homepage highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        role="tabpanel"
        id="home-slider-panel"
        aria-labelledby={`slide-tab-${activeSlide.id}`}
        aria-live="polite"
      >
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none invisible" aria-hidden="true">
            <SlidePanel slide={referenceSlide} isActive />
          </div>

          <div className="absolute inset-0 h-full overflow-hidden">
            <div
              className={`flex h-full will-change-transform ${trackTransitionClass}`}
              style={{
                transform: `translateX(-${safeTrackIndex * 100}%)`,
                transitionDuration:
                  enableTransition && !prefersReducedMotion
                    ? `${SLIDE_TRANSITION_MS}ms`
                    : "0ms",
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {trackSlides.map((slide, index) => (
                <SlidePanel
                  key={`${slide.id}-${index}`}
                  slide={slide}
                  isActive={index === safeTrackIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-8 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Homepage slider"
      >
        {slides.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.id}
              id={`slide-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="home-slider-panel"
              aria-label={`Show slide ${index + 1}`}
              tabIndex={isActive ? 0 : -1}
              className={
                isActive
                  ? "h-2.5 w-2.5 rounded-full border-0 bg-[var(--header-navy)] p-0"
                  : "h-2.5 w-2.5 rounded-full border-0 bg-[#c5d0dc] p-0"
              }
              onClick={() => goToSlide(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
