import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/Pricing/home";

export const metadata = createPageMetadata({
  title: "Pricing",
  path: "/pricing",
});

export default function PricingPage() {
  return <Home />;
}
