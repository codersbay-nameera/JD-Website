import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/JD regular/home";

export const metadata = createPageMetadata({
  title: "JD Regular",
  path: "/jd-regular",
});

export default function JDRegularPage() {
  return <Home />;
}
