import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-muted text-foreground",
  outline: "border border-border bg-background text-foreground",
};

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
