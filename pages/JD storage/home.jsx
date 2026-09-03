import { FAQSection } from "@/components/FAQ";
import { jdStorageFaqs } from "@/config/faq";
import BuiltForGrowthSection from "@/pages/JD storage/BuiltForGrowthSection";
import HeroSection from "@/pages/JD storage/HeroSection";
import OnboardingReplenishmentSection from "@/pages/JD storage/OnboardingReplenishmentSection";
import ReadyCtaSection from "@/pages/JD storage/ReadyCtaSection";
import TrustedBrandsSection from "@/pages/JD storage/TrustedBrandsSection";
import WarehouseManagementSection from "@/pages/JD storage/WarehouseManagementSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <BuiltForGrowthSection />
      <WarehouseManagementSection />
      <OnboardingReplenishmentSection />
      <FAQSection title="Frequently Asked Questions" items={jdStorageFaqs} />
      <ReadyCtaSection />
    </>
  );
}
