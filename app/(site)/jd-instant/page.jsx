import { FAQSection } from "@/components/FAQ";
import { CustomerStoriesSlider } from "@/pages/Home/CustomerStoriesSlider";
import { TrustedBrandsSection } from "@/pages/Home/TrustedBrandsSection";
import { jdInstantFaqs } from "@/config/faq";
import { createPageMetadata } from "@/lib/seo";
import Challenges from "@/pages/JD instant/challenges";
import Home from "@/pages/JD instant/home";
import RequestToDelivered from "@/pages/JD instant/request-to-delivered";

export const metadata = createPageMetadata({
  title: "JD Instant",
  path: "/jd-instant",
});

export default function JDInstantPage() {
  return (
    <>
      <Home />
      <Challenges />
      <TrustedBrandsSection heading="Trusted by leading F&B brands in Mumbai" />
      <RequestToDelivered />
      <CustomerStoriesSlider />
      <FAQSection items={jdInstantFaqs} />
    </>
  );
}
