import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/Blog/home";

export const metadata = createPageMetadata({
  title: "Blog",
  path: "/blogs",
});

export default function BlogPage() {
  return <Home />;
}
