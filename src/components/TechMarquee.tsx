import MarqueeComponent from "react-fast-marquee";
import { cn } from "@/lib/utils";

// Handle CJS/ESM interop for react-fast-marquee
const Marquee = (MarqueeComponent as any).default || MarqueeComponent;

interface TechMarqueeProps {
    items: string[];
    direction?: "left" | "right";
    className?: string;
    speed?: number;
}

export default function TechMarquee({ items, direction = "left", className, speed = 40 }: TechMarqueeProps) {
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
                    <span
                        key={i}
                        className="mx-8 text-4xl md:text-6xl font-bold text-foreground/10 hover:text-foreground/30 transition-colors cursor-default"
                    >
                        {name}
                    </span>
                ))}
            </Marquee>
        </div>
    );
}
