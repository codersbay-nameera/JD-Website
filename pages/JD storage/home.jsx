"use client";

import { useCallback, useState } from "react";
import { FAQSection } from "@/components/FAQ";
import { SpeakToOurTeamModal } from "@/components/SpeakToOurTeamModal";
import { jdStorageFaqs } from "@/config/faq";
import BuiltForGrowthSection from "@/pages/JD storage/BuiltForGrowthSection";
import HeroSection from "@/pages/JD storage/HeroSection";
import OnboardingReplenishmentSection from "@/pages/JD storage/OnboardingReplenishmentSection";
import ReadyCtaSection from "@/pages/JD storage/ReadyCtaSection";
import TrustedBrandsSection from "@/pages/JD storage/TrustedBrandsSection";
import WarehouseManagementSection from "@/pages/JD storage/WarehouseManagementSection";

export default function Home() {
  const [isSpeakToTeamModalOpen, setIsSpeakToTeamModalOpen] = useState(false);

  const openSpeakToTeamModal = useCallback(() => {
    setIsSpeakToTeamModalOpen(true);
  }, []);

  const closeSpeakToTeamModal = useCallback(() => {
    setIsSpeakToTeamModalOpen(false);
  }, []);

  return (
    <>
      <HeroSection onSpeakToTeamClick={openSpeakToTeamModal} />
      <TrustedBrandsSection />
      <BuiltForGrowthSection onSpeakToTeamClick={openSpeakToTeamModal} />
      <WarehouseManagementSection />
      <OnboardingReplenishmentSection />
      <FAQSection title="Frequently Asked Questions" items={jdStorageFaqs} />
      <ReadyCtaSection
        onSpeakToTeamClick={openSpeakToTeamModal}
        quoteHref="https://quote.justdeliveries.ai/"
      />
      <SpeakToOurTeamModal
        isOpen={isSpeakToTeamModalOpen}
        onClose={closeSpeakToTeamModal}
      />
    </>
  );
}
