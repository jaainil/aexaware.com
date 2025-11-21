import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

export const designTokens = {
  colors: {
    "hero-bg": "bg-black",
    "main-bg": "bg-background",
    primary: "bg-primary",
    "primary-fg": "text-primary-foreground",
    secondary: "bg-secondary",
    "secondary-fg": "text-secondary-foreground",
    foreground: "text-foreground",
    "muted-fg": "text-muted-foreground",
    success: "bg-success",
    warning: "bg-warning",
    destructive: "bg-destructive",
    border: "border-border",
    ring: "ring-ring",
  } as Record<string, ClassValue>,
  gradients: {
    hero: "bg-gradient-to-br from-[#050814] via-[#020617] to-[#111827]",
    cosmic: "bg-gradient-to-r from-background via-slate-950/50 to-background",
  } as Record<string, ClassValue>,
  typography: {
    h1: "font-bold text-5xl md:text-[52px] lg:text-[56px] tracking-[-0.025em] leading-[1.1]",
    h2: "font-semibold text-4xl md:text-[40px] tracking-[-0.02em] leading-[1.2]",
    h3: "font-medium text-3xl md:text-[32px]",
    h4: "font-semibold text-2xl",
    body: "text-lg leading-[1.6] md:text-xl",
    "body-sm": "text-base leading-relaxed",
  } as Record<string, ClassValue>,
  spacing: {
    xs: "p-2 m-2 space-x-2 space-y-2",
    sm: "p-4 m-4 space-x-4 space-y-4",
    base: "p-6 m-6 space-x-6 space-y-6",
    lg: "p-8 m-8 space-x-8 space-y-8",
    xl: "p-12 m-12 space-x-12 space-y-12",
    "2xl": "p-16 m-16 space-x-16 space-y-16",
  } as Record<string, ClassValue>,
  effects: {
    "glow-primary": "glow-primary",
    "glow-secondary": "glow-secondary",
    "transition-smooth": "transition-smooth",
    "transition-fast": "transition-fast",
    float: "animate-float",
    "glow-pulse": "animate-glow-pulse",
  } as Record<string, ClassValue>,
} as const;

// Utility to apply tokens
export function dt(
  category: keyof typeof designTokens,
  token: keyof (typeof designTokens)[typeof category],
  ...inputs: ClassValue[]
) {
  return cn((designTokens[category] as Record<string, ClassValue>)[token], ...inputs);
}
