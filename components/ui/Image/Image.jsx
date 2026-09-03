import NextImage from "next/image";
import { cn } from "@/lib/utils";

/**
 * Opinionated wrapper around next/image with layout-friendly defaults.
 */
export function AppImage({
  alt,
  className,
  wrapperClassName,
  ...props
}) {
  return (
    <span className={cn("block overflow-hidden", wrapperClassName)}>
      <NextImage
        alt={alt}
        className={cn("h-auto w-full object-cover", className)}
        {...props}
      />
    </span>
  );
}
