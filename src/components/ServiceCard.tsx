/* stylelint-disable */
import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  number?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export const ServiceCard = ({
  number,
  icon: Icon,
  title,
  description,
  link,
  className,
}: ServiceCardProps) => {
  const isNumbered = typeof number === "string" && number.length > 0;

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col gap-5 overflow-hidden border border-primary/20 bg-background/80 p-8 transition hover:-translate-y-1 hover:border-primary/60",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {isNumbered ? (
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
            {number}
          </span>
        ) : Icon ? (
          <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
            <Icon className="size-7" aria-hidden="true" />
          </div>
        ) : (
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
            —
          </span>
        )}
        <div className="size-12 rounded-full border border-primary/20 bg-primary/5" />
      </div>

      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      <a
        href={link}
        aria-label={`Learn more about ${title}`}
        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </Card>
  );
};
