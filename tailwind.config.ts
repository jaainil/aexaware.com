import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // FIX: Added / <alpha-value> to allow classes like bg-primary/50
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          hover: "hsl(var(--surface-hover) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          foreground: "hsl(var(--info-foreground) / <alpha-value>)",
        },
        // Overlay usually needs exact opacity control, but keeping consistency
        overlay: "hsl(var(--overlay) / 0.8)",
        rating: "hsl(var(--rating) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: ({ theme }: { theme: (path: string) => any }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.foreground"),
            "--tw-prose-headings": theme("colors.foreground"),
            "--tw-prose-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-bold": theme("colors.foreground"),
            "--tw-prose-code": theme("colors.foreground"),
            maxWidth: "65ch",
            fontFamily: theme("fontFamily.sans"),
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: theme("fontFamily.heading"),
              fontWeight: "700",
            },
            // Fix: Explicitly remove quotes safely
            "code::before": { content: '"\\""', display: "none" },
            "code::after": { content: '"\\""', display: "none" },
            code: {
              fontWeight: "600",
              backgroundColor: theme("colors.muted.DEFAULT"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              // Ensure no generated content breaks the layout
              content: "none",
            },
          },
        },
      }),
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;