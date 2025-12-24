import MarqueeComponent from "react-fast-marquee";
import { cn } from "@/lib/utils";

// Handle CJS/ESM interop for react-fast-marquee
const Marquee = (MarqueeComponent as any).default || MarqueeComponent;

interface IndustriesMarqueeProps {
    items: string[];
    direction?: "left" | "right";
    className?: string;
    speed?: number;
}

export default function IndustriesMarquee({ items, direction = "left", className, speed = 40 }: IndustriesMarqueeProps) {
    return (
        <div className={cn("relative w-full", className)}>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <Marquee
                direction={direction}
                speed={speed}
                autoFill={true}
                pauseOnHover={true}
                gradient={false}
                className="py-6"
            >
                {items.map((name, i) => (
                    <div
                        key={i}
                        className="mx-3 px-8 py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap shadow-sm border border-white/5 bg-secondary/30 backdrop-blur-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:bg-secondary/60 hover:border-primary/20 cursor-default"
                    >
                        {name}
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
