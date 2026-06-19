import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-[family-name:var(--font-inter)] font-semibold whitespace-nowrap transition-all duration-300 outline-none cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-']):not([class*='w-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        accent:
          "bg-[var(--accent)] text-white shadow-sm hover:bg-[var(--accent-hover)] hover:shadow-md hover:shadow-[var(--accent)]/20",
        outline:
          "border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-surface-muted",
        secondary: "bg-surface-muted text-foreground hover:bg-surface-muted/70",
        ghost: "text-foreground hover:bg-foreground/5",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        link: "text-[var(--accent)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-10 px-5 text-sm",
        default: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-sm md:text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
