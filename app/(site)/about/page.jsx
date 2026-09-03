import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/About/home";

export const metadata = createPageMetadata({
  title: "About Us",
  path: "/about",
});

export default function AboutPage() {
  return <Home />;
}
