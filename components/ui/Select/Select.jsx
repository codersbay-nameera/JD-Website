import { cn } from "@/lib/utils";

export function Select({
  label,
  options,
  hint,
  error,
  placeholder,
  className,
  id,
  ...props
}) {
  const selectId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          "h-11 w-full rounded-md border border-border bg-background px-3 text-sm",
          error && "border-red-500",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
        }
        defaultValue=""
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {hint ? (
        <p id={`${selectId}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${selectId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
