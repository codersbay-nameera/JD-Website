import { cn } from "@/lib/utils";

export function Textarea({
  label,
  hint,
  error,
  className,
  id,
  ...props
}) {
  const textareaId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={textareaId}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-28 w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
          "placeholder:text-muted-foreground",
          error && "border-red-500",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
        }
        {...props}
      />
      {hint ? (
        <p id={`${textareaId}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${textareaId}-error`}
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
