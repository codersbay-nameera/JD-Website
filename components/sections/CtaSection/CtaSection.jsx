import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/**
 * Reusable call-to-action section shell for future page development.
 */
export function CtaSection({
  title,
  description,
  children,
  className,
}) {
  return (
    <Section className={cn("bg-muted", className)} spacing="md">
      <Container className="flex flex-col items-start gap-4 text-left">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        ) : null}
        {children ? (
          <div className="flex flex-wrap items-center gap-3">{children}</div>
        ) : null}
      </Container>
    </Section>
  );
}
