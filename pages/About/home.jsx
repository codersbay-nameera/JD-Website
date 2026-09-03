import HeroSection from "@/components/About/HeroSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import TeamSection from "@/components/About/TeamSection";
import TimelineSection from "@/components/About/TimelineSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <MissionVisionSection />
      <TeamSection />
    </>
  );
}
