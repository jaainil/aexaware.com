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
            <Marquee
                direction={direction}
                speed={speed}
                autoFill={true}
                pauseOnHover={true}
                gradient={false}
                className="py-4"
            >
                {items.map((name, i) => (
                    <div
                        key={i}
                        className="mx-2 md:mx-3 px-8 py-4 rounded-full text-lg md:text-xl font-medium whitespace-nowrap shadow-sm border border-border bg-card text-card-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-default"
                    >
                        {name}
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
