import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/Media Mentions/home";

export const metadata = createPageMetadata({
  title: "Media Mentions",
  path: "/media-mentions",
});

export default function MediaMentionsPage() {
  return <Home />;
}
