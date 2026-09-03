import { createPageMetadata } from "@/lib/seo";
import Home from "@/pages/Attach Vehicle/home";

export const metadata = createPageMetadata({
  title: "Attach Vehicle",
  path: "/attach-vehicle",
});

export default function AttachVehiclePage() {
  return <Home />;
}
