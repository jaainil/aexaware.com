/* stylelint-disable */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  number,
  eyebrow,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col gap-3 overflow-hidden border-primary/15 bg-card/70 p-7 backdrop-blur",
        className
      )}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/60">
        {number}
      </div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
        {eyebrow}
      </div>
      <h3 className="text-[26px] font-semibold leading-snug text-foreground">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground/90">
        {description}
      </p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </Card>
  );
};
