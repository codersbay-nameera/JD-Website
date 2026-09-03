import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 border border-transparent",
  secondary:
    "bg-background text-foreground border border-border hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted border border-transparent",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
