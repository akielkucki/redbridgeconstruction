import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] whitespace-nowrap select-none transition-colors duration-300 outline-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-red disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-red",
        accent: "bg-red text-white hover:bg-ink",
        outline: "border border-line text-ink hover:border-ink",
        ghost: "text-ink hover:text-red",
        light: "bg-paper text-ink hover:bg-red hover:text-white",
        "outline-dark": "border border-white/25 text-paper hover:border-white",
        "ghost-dark": "text-paper/80 hover:text-white",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8",
        icon: "size-11",
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
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
