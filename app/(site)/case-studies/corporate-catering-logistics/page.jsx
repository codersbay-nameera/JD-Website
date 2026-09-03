import { createPageMetadata } from "@/lib/seo";
import { corporateCateringCaseStudyDetail } from "@/config/case-study-details/corporate-catering-logistics";
import CaseStudyDetail from "@/components/CaseStudies/CaseStudyDetail";

export const metadata = createPageMetadata({
  title: "Corporate Catering Logistics Case Study",
  description:
    "How Just Deliveries ensures flawless logistics for corporate catering companies.",
  path: "/case-studies/corporate-catering-logistics",
});

export default function CorporateCateringCaseStudyPage() {
  return <CaseStudyDetail detail={corporateCateringCaseStudyDetail} />;
}
