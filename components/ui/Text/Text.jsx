import { cn } from "@/lib/utils";

const variantClasses = {
  body: "text-base",
  lead: "text-lg sm:text-xl text-muted-foreground",
  small: "text-sm",
  muted: "text-sm text-muted-foreground",
};

export function Text({
  children,
  className,
  as: Component = "p",
  variant = "body",
  ...props
}) {
  return (
    <Component
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
