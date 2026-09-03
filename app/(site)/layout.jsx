import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/ui/Container";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main id="main-content" className="!p-0">
        <Container className="page-layout-padding">{children}</Container>
      </main>
      <Footer />
    </>
  );
}
