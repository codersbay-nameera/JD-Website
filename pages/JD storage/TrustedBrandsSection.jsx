import { CustomerStoriesSlider } from "@/pages/Home/CustomerStoriesSlider";
import { TrustedBrandsSection as TrustedBrandsMarquee } from "@/pages/Home/TrustedBrandsSection";

export default function TrustedBrandsSection() {
  return (
    <>
      <TrustedBrandsMarquee heading="Trusted by F&B & quick commerce brands pan-India" />
      <CustomerStoriesSlider />
    </>
  );
}
