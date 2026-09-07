import { SiteHeader } from "@/components/Header/SiteHeader";
import { Footer } from "@/components/Footer/Footer";
import { SiteMain } from "./SiteMain";

export default function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <SiteMain>{children}</SiteMain>
      <Footer />
    </>
  );
}
