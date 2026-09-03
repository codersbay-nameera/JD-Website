import { cn } from "@/lib/utils";

const levelClasses = {
  1: "text-3xl sm:text-4xl font-bold tracking-tight",
  2: "text-2xl sm:text-3xl font-semibold tracking-tight",
  3: "text-xl sm:text-2xl font-semibold",
  4: "text-lg font-semibold",
  5: "text-base font-semibold",
  6: "text-sm font-semibold uppercase tracking-wide",
};

const headingTags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export function Heading({
  children,
  className,
  level = 2,
  ...props
}) {
  const Tag = headingTags[level];

  return (
    <Tag className={cn(levelClasses[level], className)} {...props}>
      {children}
    </Tag>
  );
}
