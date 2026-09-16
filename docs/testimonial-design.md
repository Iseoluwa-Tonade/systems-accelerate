# Testimonials Section — Design Reference

> **Status:** Removed from live site. The section was removed because all testimonial quotes were fabricated. Re-add only when you have real customer quotes with explicit permission.

## Placement

Homepage (`src/routes/index.tsx`), between the **Methodology** section and the **Final CTA** section. Rendered as `<Testimonials />`.

## Visual Concept

Dark navy background (`sec-navy`) with gold (`#FFB800`) accents — matches the site header/footer palette. The section uses a **horizontal carousel** of quote cards with infinite loop scrolling.

### Layout

- **Eyebrow:** "Testimonials" (gold mono label)
- **Heading:** "Built for better decisions. **Trusted by operators.**" (gold highlight on second half)
- **Subtext:** "The systems matter because they change how revenue teams work, decide, and grow."
- Heading sits to the left (desktop) or top (mobile); the carousel occupies full width below.

### Carousel

- **Infinite loop:** The testimonial array is tripled (`[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]`) so the track appears unending.
- **Scroll physics:** Framer Motion spring animation (`stiffness: 120, damping: 22, mass: 0.8`). On complete, the index is wrapped back into the middle third.
- **Card width:** ~38% of viewport on desktop, ~82% on mobile (tracked via `ResizeObserver` on the viewport container).
- **Edge fade:** Left and right edge gradient overlays (`from-[#080D1C] to-transparent`, `w-16 sm:w-24`) for the "peek" effect.
- **Navigation arrows:** Gold-bordered circular buttons with left/right Lucide arrows, absolutely positioned over the edges. Hover swaps fill to gold.

### Card Design

Each card shows:
1. Opening quote mark — large gold serif `"` flanked by two horizontal gold lines
2. Quote text — white, center-aligned, `text-white/65`, `text-base sm:text-lg`, `leading-relaxed`
3. Author attribution — gold, `font-display font-semibold text-lg`

Active card: full opacity, scale 1. Inactive: 0.46 opacity, 0.94 scale. Transition: 500ms easeOut.

### Background / Border

- Section has `border-y border-white/10`
- Cards have no visible border; the gold quote mark + lines provide the only decoration

## Props / Data Shape

```ts
interface Testimonial {
  quote: string;    // The quote text
  author: string;   // Role + company type, e.g. "CRO, Series C SaaS"
}
```

## Sample Data

The original five entries (all fabricated — replace with real ones):

```ts
const TESTIMONIALS = [
  {
    quote: "The biggest shift was finally having one operating picture. Our leadership conversations moved from reconciling data to making decisions.",
    author: "CRO, Series C SaaS",
  },
  {
    quote: "SuperTelque gave our team the architecture and confidence to automate the work that was slowing every rep down.",
    author: "VP Revenue, Fintech",
  },
  {
    quote: "We stopped losing high-intent leads in shared inboxes. The new routing system made speed and ownership visible to everyone.",
    author: "Founder, AI startup",
  },
  {
    quote: "The work connected our CRM, outbound, and reporting into a system the team could actually maintain after the engagement.",
    author: "Head of Growth, B2B technology",
  },
  {
    quote: "Instead of adding another tool, we fixed the operating model underneath the tools we already had.",
    author: "COO, Professional services",
  },
];
```

## Dependencies

The section requires these imports (already present in `index.tsx` but currently unused after removal):

```ts
import { ArrowLeft, ArrowRight } from "lucide-react";
import { animate, motion, useMotionValue } from "framer-motion";
```

`Eyebrow` is imported from `@/components/site/Eyebrow`.

## Re-use Checklist

When you have real testimonials and want to add this back:

1. Get written permission from each person for their name + title + quote.
2. Do not include company names without permission — initials or role-only is fine.
3. Replace the `TESTIMONIALS` array with real quotes.
4. Drop the `<Testimonials />` call back into the homepage component tree (after Methodology, before FinalCTA).
5. Remove `AnimatePresence` from the framer-motion import if unused elsewhere.
