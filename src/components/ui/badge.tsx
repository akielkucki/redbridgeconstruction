import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-[family-name:var(--font-inter)] text-xs font-medium whitespace-nowrap transition-colors [&>svg]:size-3 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background",
        soft: "bg-[var(--color-accent-soft)] text-[var(--accent)]",
        outline: "border border-border bg-surface text-muted-foreground",
        secondary: "bg-surface-muted text-foreground",
        ghost: "text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
