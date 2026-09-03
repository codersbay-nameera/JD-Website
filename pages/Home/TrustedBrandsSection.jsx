"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import amazonLogo from "@/assets/images/Amazone.png";
import mcdLogo from "@/assets/images/MCD.png";
import frankieLogo from "@/assets/images/frankie.png";
import tssLogo from "@/assets/images/Tss.png";
import croffleGuysLogo from "@/assets/images/croffleGuys.png";
import samAgriLogo from "@/assets/images/SamAgri.png";
import swiggyLogo from "@/assets/images/Swiggy.png";
import benneLogo from "@/assets/images/benne.png";
import naturalLogo from "@/assets/images/natural.png";
import zeptoLogo from "@/assets/images/zepto.png";

const defaultBrands = [
  { name: "Amazon", logo: amazonLogo },
  { name: "McDonald's", logo: mcdLogo },
  { name: "Tibbs Frankie", logo: frankieLogo },
  { name: "The Sassy Spoon", logo: tssLogo },
  { name: "Croffle Guys", logo: croffleGuysLogo },
  { name: "Sam Agri", logo: samAgriLogo },
  { name: "Swiggy", logo: swiggyLogo },
  { name: "Benne", logo: benneLogo },
  { name: "Natural", logo: naturalLogo },
  { name: "Zepto", logo: zeptoLogo },
];

const MARQUEE_DURATION = "40s";

export function TrustedBrandsSection({
  brands = defaultBrands,
  heading = "Trusted by 150+ F&B brands pan-India",
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

  if (!brands.length) {
    return null;
  }

  return (
    <section
      className="w-full min-w-0 overflow-hidden py-10 sm:py-12"
      aria-label="Trusted brands"
    >
      <h2 className="mb-8 text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)] sm:mb-10">
        {heading}
      </h2>

      <div className="relative overflow-hidden">
        <div
          className={`trusted-brands-track flex w-max items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 ${
            prefersReducedMotion ? "" : "trusted-brands-animate"
          }`}
          role="list"
          aria-label="Brand logos"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              role="listitem"
              className="flex h-10 w-24 shrink-0 items-center justify-center sm:h-12 sm:w-28 md:h-14 md:w-32 lg:h-16 lg:w-36"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={144}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
          ))}

          {brands.map((brand) => (
            <div
              key={`${brand.name}-duplicate`}
              aria-hidden="true"
              className="flex h-10 w-24 shrink-0 items-center justify-center sm:h-12 sm:w-28 md:h-14 md:w-32 lg:h-16 lg:w-36"
            >
              <Image
                src={brand.logo}
                alt=""
                width={144}
                height={64}
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trusted-brands-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .trusted-brands-animate {
          animation: trusted-brands-marquee ${MARQUEE_DURATION} linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-brands-animate {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
