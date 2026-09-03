import { SliderSection } from "@/pages/Home/SliderSection";
import { TrustedBrandsSection } from "@/pages/Home/TrustedBrandsSection";
import { OurServicesSection } from "@/pages/Home/OurServicesSection";
import { CustomerStoriesSlider } from "@/pages/Home/CustomerStoriesSlider";
import { IndustryCategories } from "@/pages/Home/IndustryCategories";
import { CaseStudiesSlider } from "@/pages/Home/CaseStudiesSlider";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SliderSection />
      <TrustedBrandsSection />
      <OurServicesSection />
      <CustomerStoriesSlider />
      <IndustryCategories />
      <CaseStudiesSlider />
    </>
  );
}
