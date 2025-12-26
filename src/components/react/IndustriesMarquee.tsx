import React from "react";
import MarqueeComponent from "react-fast-marquee";

// Handle CJS/ESM interop for react-fast-marquee
// The package may export as { default: Component } in some bundler contexts
const Marquee = (MarqueeComponent as any).default || MarqueeComponent;
import { cn } from "@/lib/utils";

interface IndustriesMarqueeProps {
    items: string[];
    direction?: "left" | "right";
    className?: string;
    speed?: number;
}

export default function IndustriesMarquee({ items, direction = "left", className, speed = 40 }: IndustriesMarqueeProps) {
    return (
        <div className={cn("relative w-full", className)}>
            {/* FIX: Masks are placed INSIDE the component. 
               This ensures they rotate along with the parent div in the Astro file.
            */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <Marquee
                direction={direction}
                speed={speed}
                autoFill={true}
                pauseOnHover={true}
                gradient={false} // We manage our own gradient above for better control
                className="py-4"
            >
                {items.map((name, i) => (
                    <div
                        key={i}
                        className="mx-3 px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap shadow-sm border border-border/50 bg-background/50 backdrop-blur-md text-foreground/80 hover:text-primary transition-all duration-300 hover:bg-secondary/80 hover:border-primary/20 cursor-default select-none"
                    >
                        {name}
                    </div>
                ))}
            </Marquee>
        </div>
    );
}