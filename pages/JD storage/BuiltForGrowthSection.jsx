"use client";

import { useState } from "react";

const tabs = [
  { id: "quick-commerce", label: "I supply to Quick Commerce" },
  { id: "qsr", label: "I run a QSR / Cafe chain" },
];

const bulletPoints = [
  "Expand across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune and Chennai using JustDeliveries' temperature-controlled fulfillment network. No warehouse setup. No operations hiring. No inventory headaches.",
  "We store your products, manage inventory, pick and pack orders, replenish quick commerce dark stores on time, and ensure temperature integrity throughout the journey.",
  "Whether you're launching on Blinkit, Zepto, Swiggy Instamart or expanding into new cities, our plug-and-play cold chain infrastructure lets you scale faster while we manage the operations.",
];

const whatWeManageItems = [
  "Temperature-controlled storage",
  "Inventory management with FEFO/FIFO rotation",
  "Order processing and pick & pack",
  "Appointment replenishment to quick commerce DCs",
  "Live shipment tracking with temperature assurance",
  "Returns and inventory reconciliation",
];

const whyBrandsChooseItems = [
  "Ready fulfillment network across 6 cities",
  "Launch in weeks instead of months",
  "No warehouse leases or infrastructure investment",
  "No warehouse staffing or operations management",
  "One logistics partner across multiple cities",
  "Purpose-built for chilled and frozen food brands",
];

function CheckIcon() {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#2daa5a] text-xs font-bold text-white"
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

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

function PackageIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-white"
      >
        <path
          d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4 7.5L12 12M12 12L20 7.5M12 12V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function DottedPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50"
      style={{
        backgroundImage:
          "radial-gradient(circle, #DCE2E7 0.75px, transparent 0.75px)",
        backgroundSize: "10px 10px",
      }}
      aria-hidden="true"
    />
  );
}

function CtaDecorations() {
  return (
    <>
      <div
        className="pointer-events-none absolute top-0 right-0 h-44 w-44 opacity-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 176 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <circle cx="132" cy="44" r="88" stroke="white" strokeWidth="1.5" />
          <circle cx="132" cy="44" r="64" stroke="white" strokeWidth="1.5" />
          <circle cx="132" cy="44" r="40" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full opacity-15"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C120 40 240 100 360 70C480 40 600 90 800 60V120H0V80Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M0 100C160 60 320 110 480 80C640 50 720 95 800 85V120H0V100Z"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  );
}

export default function BuiltForGrowthSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section aria-label="Built for the way your business grows">
      <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-14 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Built for the Way Your Business Grows
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={
                  isActive
                    ? "rounded-full border border-[#2daa5a] bg-[#2daa5a] px-5 py-2.5 text-sm font-semibold text-white"
                    : "rounded-full border border-[#DCE2E7] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--header-navy)]"
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <article className="relative mt-8 overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-6 sm:p-8 lg:p-10">
          <DottedPattern />

          <div className="relative">
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]">
              Launch on quick commerce. Without building a supply chain.
            </h3>

            <ul className="mt-6 space-y-4">
              {bulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[18px] leading-[1.48] text-[var(--header-navy)]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--header-navy)]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-[18px] lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-[24px] border border-[#DCE2E7] bg-white p-6 sm:p-8">
                <DottedPattern />
                <h4 className="relative text-[20px] font-semibold text-[var(--header-navy)]">
                  What we manage
                </h4>
                <ul className="relative mt-5 space-y-4">
                  {whatWeManageItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[16px] leading-[1.48] text-[var(--header-navy)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-[#DCE2E7] bg-white p-6 sm:p-8">
                <DottedPattern />
                <h4 className="relative text-[20px] font-semibold text-[var(--header-navy)]">
                  Why brands choose JustDeliveries
                </h4>
                <ul className="relative mt-5 space-y-4">
                  {whyBrandsChooseItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[16px] leading-[1.48] text-[var(--header-navy)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="mx-auto max-w-[1370px] px-6 pb-16 sm:px-8 lg:px-6">
        <div className="relative overflow-hidden rounded-[42px] bg-[#193663] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <CtaDecorations />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <PackageIcon />
              <h3 className="mt-6 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.2] text-white">
                Focus on Growing Your Brand
              </h3>
              <p className="mt-4 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-white/85">
                From warehousing to last-mile delivery, we manage your cold
                supply chain so you can focus on scaling your business with
                confidence.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/20 bg-white/10 p-6 sm:p-8">
              <h4 className="text-[20px] font-bold text-white">
                Ready to Simplify Your Cold Chain?
              </h4>
              <p className="mt-2 text-[16px] leading-relaxed text-white/85">
                Get a custom quote or speak with our team to find the right cold
                storage and logistics solution for your business.
              </p>
              <a
                href="#"
                className="mt-6 flex w-full items-center justify-between gap-3 rounded-lg border border-[#2daa5a] bg-[#2daa5a] px-5 py-3 text-sm font-semibold text-white"
              >
                Get your customized quotation
                <ArrowRightIcon />
              </a>
              <p className="mt-5 text-center text-sm text-white/70">Or</p>
              <a
                href="#"
                className="mt-4 flex items-center justify-center text-[16px] font-medium text-white"
              >
                Speak to our fulfillment experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
