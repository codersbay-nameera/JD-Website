"use client";

import { useState } from "react";

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`shrink-0 text-[var(--header-navy)] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({ item, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <article
      className={`overflow-hidden rounded-2xl bg-white ${
        isOpen
          ? "border border-[#e2e8f0] border-l-4 border-l-[var(--header-navy)]"
          : "border border-[#e2e8f0]"
      }`}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] font-semibold leading-snug text-[var(--header-navy)]">
            {item.question}
          </span>
          <ChevronIcon open={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[clamp(0.875rem,1.25vw,0.9375rem)] leading-relaxed text-[var(--muted-foreground)] sm:px-6 sm:pb-6">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export function FAQSection({
  title = "Frequently asked questions",
  items = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  if (!items.length) {
    return null;
  }

  return (
    <section
      className="w-full min-w-0 overflow-hidden bg-[#eaf2f9] py-10 sm:py-12 lg:py-16"
      aria-labelledby="faq-section-heading"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16">
        <h2
          id="faq-section-heading"
          className="max-w-md text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--header-navy)]"
        >
          {title}
        </h2>

        <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
          {items.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
