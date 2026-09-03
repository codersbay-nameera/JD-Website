import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/Contact/home";

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return <Home />;
}
