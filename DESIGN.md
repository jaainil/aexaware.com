---
name: Aexaware
description: The Blueprint Atelier — a precise, energetic, engineered design system for an agency site that must itself prove delivery quality.
colors:
  electric-cobalt: "oklch(0.488 0.243 264.376)"
  electric-cobalt-deep: "oklch(0.424 0.199 265.638)"
  cobalt-tint: "oklch(0.97 0.014 254.604)"
  frost-paper: "oklch(0.978 0.008 230)"
  graphite-ink: "oklch(0.145 0 0)"
  navy-ink: "hsl(228 45% 8%)"
  mist: "oklch(0.967 0.001 286.375)"
  smoke: "oklch(0.556 0 0)"
  hairline: "oklch(0.922 0 0)"
  alarm-red: "oklch(0.58 0.22 27)"
  midnight: "oklch(0.145 0 0)"
  midnight-card: "oklch(0.205 0 0)"
typography:
  display:
    fontFamily: "Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "0.525rem"
  md: "0.7rem"
  lg: "0.875rem"
  xl: "1.225rem"
  card: "1.5rem"
  card-lg: "2rem"
  section: "2.5rem"
  pill: "9999px"
spacing:
  section: "4rem mobile → 6rem md → 8rem lg"
  container: "80rem max-width"
  container-wide: "1440px max-width"
  navbar: "96px mobile → 112px lg"
components:
  button-primary:
    backgroundColor: "{colors.electric-cobalt}"
    textColor: "{colors.cobalt-tint}"
    typography: "600 0.875rem Plus Jakarta Sans"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.5rem"
  button-primary-hover:
    backgroundColor: "oklch(0.488 0.243 264.376 / 0.9)"
    textColor: "{colors.cobalt-tint}"
    rounded: "{rounded.pill}"
  button-outline:
    backgroundColor: "{colors.frost-paper}"
    textColor: "{colors.graphite-ink}"
    typography: "500 0.875rem Plus Jakarta Sans"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.5rem"
  input:
    backgroundColor: "oklch(0.967 0.001 286.375 / 0.5)"
    textColor: "{colors.graphite-ink}"
    typography: "400 0.875rem Plus Jakarta Sans"
    rounded: "{rounded.xl}"
    padding: "0 1rem"
    height: "3rem"
---

# Design System: Aexaware

## Overview

**Creative North Star: "The Blueprint Atelier"**

Aexaware's site is a working drawing, not a brochure. Every major surface sits on a faint blueprint grid — the drafting table under the paint — while cobalt ink marks exactly what matters: the action, the keyword, the focus. The palette is paper-and-ink engineering: frost-white paper, navy ink, one electric cobalt. Precision is the aesthetic, and the site's own performance and finish are the portfolio's first exhibit ("the site is the demo").

The system is **precise · energetic · engineered**. Density is generous — sections breathe at 4–8rem vertical rhythm — but every element carries technical intent: hairline borders instead of heavy chrome, grids instead of gradients, one accent doing one job. Motion is small and springy (200ms, active scale 0.98), the confidence of machined parts, not fireworks.

**Key Characteristics:**

- Blueprint grid underlays on hero, section, and CTA surfaces (≤5% opacity, masked)
- One accent color — Electric Cobalt — used sparingly for action and emphasis
- Pill geometry for all interactive controls; soft-rounded (24–40px) content containers
- Flat surfaces at rest; shadows, glows, and scale appear only as intent feedback
- Space Grotesk headings with tightened tracking over Plus Jakarta Sans body
- Frosted-glass floating navbar as the persistent technical signature

## Colors

A paper-and-ink engineering palette: cool near-whites, two inks, one electric blue that behaves like a marker on a drawing.

### Primary
- **Electric Cobalt** (oklch(0.488 0.243 264.376)): THE accent. Primary buttons, CTA glows, focus rings, emphasized heading keywords, icon tiles, active states. Never a background for large content areas except the deliberate `variant="primary"` CTA. In dark mode it deepens to **Electric Cobalt Deep** (oklch(0.424 0.199 265.638)); text on cobalt is always **Cobalt Tint** (oklch(0.97 0.014 254.604)).

### Neutral
- **Frost Paper** (oklch(0.978 0.008 230)): Page and card background — a cool, faintly blue-tinted white. The drafting paper.
- **Navy Ink** (hsl(228 45% 8%)): The brand ink. Default color of headings and base typography; a blue-cast near-black that pairs with cobalt.
- **Graphite Ink** (oklch(0.145 0 0)): Utility-layer ink for text on light surfaces and full-bleed dark panels (the CTA panel uses it as background).
- **Smoke** (oklch(0.556 0 0)): Body copy and secondary text — gray, recessive, never competing with ink.
- **Mist** (oklch(0.967 0.001 286.375)): Secondary surfaces and input fills (used at 50% opacity in fields).
- **Hairline** (oklch(0.922 0 0)): Borders, dividers, input strokes. Often used at 40% opacity on cards.
- **Midnight** (oklch(0.145 0 0)) / **Midnight Card** (oklch(0.205 0 0)): The defined dark-mode background pair. A dark theme is tokenized in CSS but no toggle ships; treat dark as prepared, not active.

### Semantic (status only — never decorative accents)
- **Alarm Red** (oklch(0.58 0.22 27)): destructive actions and errors.
- Success / Warning / Info / Rating exist as status tokens in the HSL base layer; reserve them for meaning, not style.

### Named Rules
**The One Voice Rule.** Electric Cobalt speaks for ≤10% of any screen. Its rarity is the point — when cobalt appears, it means "act here" or "read this."

**The Blueprint Underlay Rule.** The grid is texture, never decoration louder than content: opacity ≤0.05 under content, always masked to fade before the section edge.

**The Monochrome Ramp Rule.** Charts and data visuals stay inside the cobalt family (a single-hue ramp, blue-300→800). A second accent hue never enters the system.

## Typography

**Display Font:** Space Grotesk Variable (fallback: ui-sans-serif, system-ui)
**Body Font:** Plus Jakarta Sans Variable (fallback: ui-sans-serif, system-ui)

**Character:** A technical grotesk doing the talking, a humanist sans doing the reading. Space Grotesk's engineered letterforms (set tight, -0.025em to -0.05em) give headlines a machined authority; Plus Jakarta Sans keeps paragraphs warm and effortless. No third family — the "serif" accent token maps to Space Grotesk, so the recurring *keyword-accent* move is a color change, not a font change.

### Hierarchy
- **Display** (700, up to ~6rem, line-height 0.9, tracking -0.05em): Hero headlines only. Multi-line, one line often carrying the cobalt keyword.
- **Headline** (700, 1.875–2.25rem, line-height 1.2): Section titles. Nearly always paired with a single cobalt-accented word.
- **Title** (600, 1.5–1.875rem, line-height 1.3): Card titles, feature titles.
- **Body** (400–500, 1rem, line-height 1.625, `text-pretty`): Plus Jakarta Sans in Smoke. Measure stays comfortably inside `max-w-2xl`/prose containers.
- **Label** (600, 0.875rem, tracking 0.05em, uppercase): Eyebrows, badges, nav links, metadata.

### Named Rules
**The Cobalt Keyword Rule.** One emphasized phrase per heading, set in Electric Cobalt — "Services Beyond *Expectation*.", "Let's Build Something *Extraordinary*." Never two accents in one heading; the accent is punctuation, not confetti.

## Layout

A centered single-column flow of full-width sections, each owning generous vertical rhythm: `section-padding` scales 4rem → 6rem (md) → 8rem (lg). Content rides one of two containers — `container-normal` (80rem max, 1–2rem gutters) for most surfaces, `container-wide` (1440px, 1.5–4rem gutters) for showcase grids. The fixed navbar reserves a documented height contract (`--navbar-height`: 96px, 112px at lg) mirrored in `scroll-padding-top`, so anchors never hide behind the pill.

Feature content favors **bento grids**: 3-column base (`gap-6`) with intentional col/row spans (2×2 hero card, 1×2 tall card, 2×1 wide card). Forms sit in 2-column grids that stack on mobile. Breakpoints: 640 / 768 / 1024 / 1280.

## Elevation & Depth

**Flat at rest, lifts on intent.** Surfaces declare themselves with hairline borders and tonal shifts, not shadows. Depth feedback is earned by interaction: cards gain `shadow-2xl` and a cobalt border on hover, buttons gain `shadow-md`, the hero CTA carries a persistent cobalt glow because it is the page's single loudest action. Depth also comes from light, not just shadow: a `blur-[120px]` cobalt bloom behind dark panels, `backdrop-blur` frost on the navbar and glass panels.

### Shadow Vocabulary
- **Intent shadow** (`shadow-md`): default button hover only.
- **Signature glow** (`shadow-xl shadow-primary/30`): the hero gradient button — cobalt light under the primary action.
- **Command shadow** (`shadow-2xl`): card hover state and the dark CTA panel's resting presence (the one sanctioned resting shadow, on the page's conversion moment).
- **Ambient bloom** (`bg-primary/20 blur-[120px]`): cobalt light source behind dark panels, always `pointer-events-none`.
- **Frost** (`backdrop-blur-xl` on `bg-background/95`): the navbar; `glass-panel` utility for translucent surfaces.
- **Focus ring** (2px `--color-primary`, offset 2): the accessibility lift, on every focusable element.

### Named Rules
**The Flat-At-Rest Rule.** Cards and content surfaces cast no shadow until hovered or focused. The two sanctioned exceptions: the dark CTA panel and the floating navbar, both conversion/persistent chrome.

## Shapes

Two form languages, deliberately separated. **Controls are pills** — every button, badge, and the navbar itself use full radius (9999px). **Content containers are soft-rounded** — cards at 24–32px (`rounded-card`/`rounded-card-lg`), feature panels and full sections up to 40px (`rounded-section`), inputs and icon tiles in the ~20–25px band (`rounded-xl`/`rounded-2xl`). Borders are hairlines (1px, `Hairline` token, frequently at 40% opacity); corners clip media and grids cleanly, never with cut corners or hard industrial edges. The system's silhouette is rounded, pressurized, machined.

### Named Rules
**The Pill Rule.** Anything clickable is a pill; anything containing content is a soft-rounded rectangle. The two never swap.

## Components

### Buttons
- **Shape:** full pill (9999px)
- **Primary:** Electric Cobalt fill, Cobalt Tint text, `h-10 px-4` (sm `h-9`, lg `h-12 px-8`); hover darkens to 90% opacity + `shadow-md`; active compresses to 0.98; 200ms ease transitions throughout.
- **Hero (gradient):** cobalt → cobalt/80 gradient, Cobalt Tint text, `shadow-xl shadow-primary/30`, hover brightens. Reserved for the single loudest action of a page.
- **Outline:** transparent/frost fill, hairline border, ink text; hover fills cobalt with tint text. The secondary action.
- **Ghost / Link:** cobalt text on hover-fill or underline-offset-4 — tertiary actions only.
- **On dark panels:** inverted (Frost Paper fill, Graphite Ink text) with a companion ghost pill (`border-white/20`, backdrop blur).

### Chips / Badges
- **Style:** pill, `border-primary/20` on `bg-primary/5`, cobalt label with Sparkles icon; uppercase tracking-wide at text-sm. Used as section eyebrows, never as filters.

### Cards (Bento)
- **Corner Style:** `rounded-card-lg` (32px)
- **Background:** Frost Paper at 50% opacity + `backdrop-blur`, over the section's grid underlay
- **Border:** 1px Hairline at 40% opacity → cobalt/50 on hover
- **Shadow Strategy:** none at rest; `shadow-2xl` + `bg-primary/5` wash on hover (Flat-At-Rest Rule)
- **Internal Padding:** `p-8` (2rem)
- **Behavior:** icon tile scales 1.1 and a cobalt-free ink circle with ArrowUpRight rises in on hover — arrival and exit in one gesture

### Icon Tiles
- **Style:** 56px square, `rounded-2xl`, Electric Cobalt fill, Cobalt Tint Lucide icon at 1.5 stroke width, `shadow-xs`. The recurring "component chip" of the system — scales on card hover.

### Inputs / Fields
- **Style:** `h-12`, `rounded-xl` (20px), 1px Hairline border, Mist at 50% fill
- **Focus:** border shifts to cobalt/50 + 2px cobalt/20 ring; no glow, no shadow
- **Labels:** text-sm, 500 weight, Graphite Ink at 80%
- **Disabled:** cursor-not-allowed, 50% opacity

### Navigation
- **Style:** floating pill navbar — `max-w-7xl`, glass (`bg-background/95` + `backdrop-blur-xl`), 1px border, `shadow-lg shadow-black/5`, logo left, links center, CTA right
- **States:** active link in cobalt; hover wash; Services opens a 5-category mega-menu of icon+label items; header hides on scroll-down
- **Mobile:** full-screen drawer with accordion services list and stacked CTAs

### BackgroundGrid (Signature)
The system's fingerprint. A 1px CSS grid over `background-image`, three densities (14×24 hero, 24×24 content, 32×40 CTA), foreground-colored at 1–10% opacity (default 5%), with radial masks (edges/top/bottom/center) so the grid dissolves before the section boundary. Present on hero, services, CTA, and page headers; skips dense content areas.

## Do's and Don'ts

### Do:
- **Do** set every heading in Space Grotesk with tightened tracking (-0.025em standard, -0.05em display) and mark exactly one keyword in cobalt.
- **Do** lay the blueprint grid under major marketing surfaces: density lg for CTA/hero moments, md for content, opacity ≤0.05, masked.
- **Do** make all interactive elements pills with 200ms transitions and active:scale-[0.98].
- **Do** reserve cobalt for action and emphasis — buttons, focus rings, one keyword per heading, icon tiles.
- **Do** use Navy Ink as the typographic ink and Frost Paper as the canvas; keep body copy in Smoke inside a measured container.

### Don't:
- **Don't** set text on gradients, or apply gradient text — ink is ink.
- **Don't** put shadows on resting cards or panels (only the dark CTA panel and navbar may rest elevated).
- **Don't** introduce a second accent hue; success/warning/info are status colors, never decoration.
- **Don't** square the corners of buttons, inputs, or badges — the Pill Rule is absolute.
- **Don't** let a grid, glow, or bloom out-shout the content above it; ambience stays under 10% opacity and pointer-events-none.
