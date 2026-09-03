import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { AppLink } from "@/components/ui/Link";
import { Navbar } from "@/components/Navbar/Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--header-border)] bg-[var(--header-background)]">
      <Container className="page-layout-padding flex h-[var(--header-height)] items-center justify-between gap-6 lg:gap-10">
        <AppLink
          href="/"
          className="inline-flex shrink-0 items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/jd-logo.svg"
            alt={siteConfig.name}
            width={275}
            height={49}
            priority
            className="h-[49px] w-auto max-w-[200px] sm:max-w-none"
          />
        </AppLink>
        <Navbar />
      </Container>
    </header>
  );
}
