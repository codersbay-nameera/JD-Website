import { CustomerStoriesSlider } from "@/pages/Home/CustomerStoriesSlider";

export default function TrustedBrandsTestimonialsSection() {
  return (
    <section aria-label="Trusted by India's best F&B brands">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Trusted by India&apos;s best F&amp;B brands
        </h2>
      </div>
      <div className="[&_p:empty]:hidden">
        <CustomerStoriesSlider heading="" />
      </div>
    </section>
  );
}
