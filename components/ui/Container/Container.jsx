import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Component = "div",
  narrow = false,
  ...props
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        narrow ? "max-w-3xl" : "max-w-[var(--container-max)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
