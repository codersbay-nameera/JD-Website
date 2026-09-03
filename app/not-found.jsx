import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { AppLink } from "@/components/ui/Link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main id="main-content">
      <Section spacing="lg">
        <Container narrow className="space-y-4 text-center sm:text-left">
          <Heading level={1}>Page not found</Heading>
          <Text variant="muted">
            The page you requested does not exist or may have been moved.
          </Text>
          <AppLink href="/" underline className="inline-block font-medium">
            Return to home
          </AppLink>
        </Container>
      </Section>
    </main>
  );
}
