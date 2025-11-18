import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  number: string;
  title: string;
  description: string;
  subtext: string;
  className?: string;
}

export const IndustryCard = ({
  number,
  title,
  description,
  subtext,
  className,
}: IndustryCardProps) => {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col gap-4 border-primary/20 bg-background/60 p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/50",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
          {number}
        </span>
        <div className="size-10 rounded-full border border-primary/30 bg-primary/10" />
      </div>
      <h3 className="text-2xl font-semibold leading-tight text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-auto text-sm font-semibold text-primary/80">
        {subtext}
      </div>
    </Card>
  );
};
