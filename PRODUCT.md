# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed equal priority:

1. **Client buyers** — founders, product leads, and SMB/enterprise decision-makers evaluating an agency to design and build their software (web, mobile, AI/ML, cloud). They arrive via search (heavy SEO/answer-engine content), referrals, or directories (Clutch, GoodFirms) and must be able to judge credibility, see proof of past work, and start a project quickly.
2. **Developers and AI agents** — technical evaluators and agents who discover Aexaware via its CLI (`packages/cli`), MCP server (`functions/api/mcp.js`), OpenAPI spec, `llms.txt`, and sandbox API keys. The user confirmed this audience is real and equal, but the agent-facing angle is an experiment to keep working — not a headline claim.

## Product Purpose

The marketing site for **Aexaware Infotech**, a full-service digital agency based in Vadodara, Gujarat, India. It exists to convert visitors into client projects: surface the 19 services, prove capability with real case studies, demonstrate engineering depth through the blog, and route buyers to contact (form, email, phone, cal.com booking). Success = qualified project inquiries ("do the best we need clients" — the user's stated goal).

## Positioning

An India-based agency selling engineering substance rather than agency fluff: modern-stack delivery (Astro/React/Next, Node, AI/ML, cloud-native), transparent case studies, and an unusually machine-readable site. The agent-discoverability (MCP/CLI/sandbox) is a differentiator no neighboring agency can copy quickly, but the user has deliberately deprioritized it — keep the endpoints functioning, don't lead with it.

## Operating Context

- Solo/studio operation (author of record: Jainil Prajapati); office in Sevasi, Vadodara.
- Sales loop: blog/service pages → contact form, `info@aexaware.com`, `+91 81407 34392`, `cal.com/aexaware-infotech`.
- Delivered work skews to agriculture-sector WooCommerce builds (AdFerti, Bharat Krushi, JK Fertilizers) plus modern React sites (Qreius, Shravonix) — see `src/content/portfolio/`.
- Engagement models include extended team and white-label for other agencies/resellers.

## Capabilities and Constraints

- Static Astro site (SSG), React islands, Tailwind CSS 4, MDX content collections (blog, portfolio, authors), RSS, sitemap, Umami analytics.
- Contact/lead capture via contact form and booking link; MCP server runs on Cloudflare Pages Functions.
- Deploys via Vercel (`vercel.json`) and a static Docker image (`Dockerfile.static`); dev server `npm run dev` on port 4321.
- Keep all machine-readable endpoints (`/openapi.json`, `llms.txt`, MCP server card, sandbox key provisioning) working; they are not to be removed or hidden.
- Explicitly undecided: no confirmed preferred engagement-tier pricing, no confirmed brand voice guide, no dark-mode commitment (roadmap item, not a decision).

## Brand Commitments

- Name: **Aexaware** / Aexaware Infotech; domain aexaware.com.
- Logo and proof assets live in `src/assets/` (logo variants, Clutch/GoodFirms badges, `public/og-image.png`).
- MIT-licensed public repo.

## Evidence on Hand

- 5 portfolio case studies with real clients, tech stacks, timelines, and live URLs (`src/content/portfolio/`).
- 24 published MDX blog posts on engineering topics (`src/content/blog/`); author record `src/content/authors/jainil-prajapati.md`.
- Directory badges: Clutch, GoodFirms (SVG in `src/assets/`).
- Verified contact details in `functions/api/mcp.js` (email, phone, address, booking link).
- **Absences future work must not fabricate:** no client testimonials in content collections, no revenue/traffic metrics, no client-count claims, no award claims. Only the case studies, badges, and blog exist as proof.

## Product Principles

1. **Win clients first.** Every surface exists to move a buyer from doubt to inquiry; proof and next steps always within reach.
2. **Substance over agency clichés.** The engineering blog and real case studies are the proof engine — show the work, not stock adjectives.
3. **Real proof only.** Never invent testimonials, metrics, logos, or claims; the existing evidence base is the ceiling.
4. **Serve humans and machines.** Keep the site legible to developers and agents (structured data, machine-readable endpoints) without turning it into a headline claim.
5. **The site is the demo.** Performance, polish, and craft on aexaware.com are themselves evidence of delivery quality.
