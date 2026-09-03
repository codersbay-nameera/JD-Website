import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/JD storage/home";

export const metadata = createPageMetadata({
  title: "JD Storage",
  path: "/jd-storage",
});

export default function JDStoragePage() {
  return <Home />;
}
