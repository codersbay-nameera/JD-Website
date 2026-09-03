import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/config/case-studies";
import CaseStudyCard from "@/components/CaseStudies/CaseStudyCard";

export default function CaseStudiesSection() {
  return (
    <section
      className="w-full min-w-0 py-10 sm:py-12 lg:py-14"
      aria-labelledby="case-studies-heading"
    >
      <h1
        id="case-studies-heading"
        className="text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
      >
        Real results. Real business impact.
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
        {caseStudies.map((study) => (
          <Link key={study.id} href={study.href} className="block h-full">
            <CaseStudyCard study={study} />
          </Link>
        ))}
      </div>
    </section>
  );
}
