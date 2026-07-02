import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-4xl", className)}>
      <h2 className="display text-4xl md:text-5xl lg:text-6xl text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-base md:text-lg text-grey leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
