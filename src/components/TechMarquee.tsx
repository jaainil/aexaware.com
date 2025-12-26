import React from "react";
import FastMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

// FIX: Handle CommonJS/ESM interop safely.
// If FastMarquee is an object with a 'default' property, use that. Otherwise use it directly.
const Marquee = (FastMarquee as any).default || FastMarquee;

interface TechMarqueeProps {
    items: string[];
    direction?: "left" | "right";
    className?: string;
    speed?: number;
}

export default function TechMarquee({ items, direction = "left", className, speed = 40 }: TechMarqueeProps) {
    return (
        <div className={cn("relative w-full select-none pointer-events-none", className)}>
            <Marquee
                direction={direction}
                speed={speed}
                autoFill={true}
                pauseOnHover={false}
                gradient={false}
                className="py-4 overflow-hidden"
            >
                {items.map((name, i) => (
                    <span
                        key={i}
                        className="mx-8 text-4xl md:text-6xl font-bold font-heading text-muted-foreground/20 whitespace-nowrap"
                    >
                        {name}
                    </span>
                ))}
            </Marquee>
        </div>
    );
}