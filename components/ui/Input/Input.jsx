import { cn } from "@/lib/utils";

export function Input({
  label,
  hint,
  error,
  className,
  id,
  ...props
}) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "h-11 w-full rounded-md border border-border bg-background px-3 text-sm",
          "placeholder:text-muted-foreground",
          error && "border-red-500",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
        }
        {...props}
      />
      {hint ? (
        <p id={`${inputId}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
