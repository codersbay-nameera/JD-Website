import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/Case Studies/home";

export const metadata = createPageMetadata({
  title: "Case Studies",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return <Home />;
}
