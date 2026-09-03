import DriverVideosSection from "@/pages/Attach Vehicle/DriverVideosSection";
import FleetDeliveryControlSection from "@/pages/Attach Vehicle/FleetDeliveryControlSection";
import HeroSection from "@/pages/Attach Vehicle/HeroSection";
import HowToJoinSection from "@/pages/Attach Vehicle/HowToJoinSection";
import JoinCtaSection from "@/pages/Attach Vehicle/JoinCtaSection";
import TrustedBrandsTestimonialsSection from "@/pages/Attach Vehicle/TrustedBrandsTestimonialsSection";
import WhyDriversSection from "@/pages/Attach Vehicle/WhyDriversSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyDriversSection />
      <FleetDeliveryControlSection />
      <HowToJoinSection />
      <DriverVideosSection />
      <TrustedBrandsTestimonialsSection />
      <JoinCtaSection />
    </>
  );
}
