import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-background p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
