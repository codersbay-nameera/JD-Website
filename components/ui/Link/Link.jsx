import NextLink from "next/link";
import { cn } from "@/lib/utils";

export function AppLink({
  children,
  className,
  external = false,
  underline = false,
  href,
  ...props
}) {
  const classes = cn(
    "text-foreground transition-colors hover:text-muted-foreground",
    underline && "underline underline-offset-4",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
