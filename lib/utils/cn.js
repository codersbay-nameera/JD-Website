/**
 * Lightweight class name combiner without external dependencies.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
