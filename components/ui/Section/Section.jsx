import { cn } from "@/lib/utils";

const spacingClasses = {
  sm: "py-8 sm:py-10",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
};

export function Section({
  children,
  className,
  spacing = "md",
  ...props
}) {
  return (
    <section
      className={cn(spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}
