"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { FAQSection } from "@/components/FAQ";
import { CustomerStoriesSlider } from "@/pages/Home/CustomerStoriesSlider";
import { TrustedBrandsSection } from "@/pages/Home/TrustedBrandsSection";
import { SpeakToOurTeamModal } from "@/components/SpeakToOurTeamModal";
import { jdRegularFaqs } from "@/config/faq";
import jdRegularImage from "@/assets/images/jdregular.webp";
import OneContract from "@/pages/JD regular/one-contract";
import BuiltForBrands from "@/pages/JD regular/built-for-brands";
import ReliableDelivery from "@/pages/JD regular/reliable-delivery";
import QuotationCta from "@/pages/JD regular/quotation-cta";
import BottomCta from "@/pages/JD regular/bottom-cta";

const stats = [
  { value: "150+", label: "F&B brands trust us" },
  { value: "100s", label: "of vehicles on the road" },
  { value: "24/7", label: "control tower" },
  { value: "Pan-India", label: "presence" },
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

export default function Home() {
  const [isSpeakToTeamModalOpen, setIsSpeakToTeamModalOpen] = useState(false);

  const openSpeakToTeamModal = useCallback(() => {
    setIsSpeakToTeamModalOpen(true);
  }, []);

  const closeSpeakToTeamModal = useCallback(() => {
    setIsSpeakToTeamModalOpen(false);
  }, []);

  return (
    <div className="min-w-0 overflow-x-clip">
      <section
        className="w-full min-w-0 max-w-full overflow-x-hidden pt-5 sm:pt-6 lg:pt-8"
        aria-label="JD Regular hero"
      >
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="flex min-h-0 min-w-0 flex-col justify-center gap-5 lg:gap-6">
            <h1 className="text-balance text-[clamp(1.625rem,7vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] lg:text-[clamp(1.875rem,3.5vw,3rem)]">
              <span className="text-[var(--header-navy)]">India’s Trusted </span>
              <span className="text-[#178A49]">F&B</span>
              <br />
              <span className="text-[#178A49]">Logistics Partner</span>
            </h1>

            <p className="max-w-xl text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.55] text-[var(--header-navy)] lg:leading-relaxed">
              Dedicated drivers and vehicles on annual contracts — built for
              brands moving daily volume, at scale, across India.
            </p>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-5 sm:gap-y-5">
              {stats.map((stat) => (
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

            <div className="flex w-full flex-col gap-3 lg:flex-row lg:flex-wrap">
              <a
                href="https://quote.justdeliveries.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#178A49] bg-[#178A49] px-5 text-sm font-semibold text-white lg:w-auto"
              >
                Get an Instant Quote
                <ArrowRightIcon />
              </a>
              <button
                type="button"
                onClick={openSpeakToTeamModal}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-white px-5 text-sm font-semibold text-[var(--header-navy)] lg:w-auto"
              >
                Speak to Our Team
                <PhoneIcon />
              </button>
            </div>
          </div>

          <div className="flex h-full min-h-0 w-full items-center lg:items-stretch">
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl bg-white lg:aspect-[16/11] lg:rounded-3xl">
              <Image
                src={jdRegularImage}
                alt="Just Deliveries logistics truck for food and beverage brand distribution across India"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="jd-regular-trusted-brands">
        <TrustedBrandsSection />
      </div>
      <OneContract />
      <BuiltForBrands />
      <ReliableDelivery />
      <CustomerStoriesSlider heading="Trusted by India’s best F&B brands" />
      <QuotationCta />
      <FAQSection items={jdRegularFaqs} />
      <BottomCta onSpeakToTeamClick={openSpeakToTeamModal} />
      <SpeakToOurTeamModal
        isOpen={isSpeakToTeamModalOpen}
        onClose={closeSpeakToTeamModal}
      />
    </div>
  );
}
