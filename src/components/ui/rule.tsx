import { cn } from "@/lib/utils";

interface RuleProps {
  /** Extends the red segment across the entire rule (used at the contact terminus) */
  full?: boolean;
  /** Hairline color for dark panels */
  dark?: boolean;
  className?: string;
}

/**
 * The red line: a hairline section rule with a red origin segment.
 * Recurs at every section boundary and runs full-width at the contact form.
 */
export function Rule({ full = false, dark = false, className }: RuleProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "rule",
        full && "rule--full",
        dark && "rule--dark",
        className,
      )}
    />
  );
}
