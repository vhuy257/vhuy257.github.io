---
name: Huy Nguyễn Portfolio
description: Evidence-led frontend portfolio optimized for recruiter scan — who, where, what, contact.
colors:
  primary: "oklch(0.646 0.222 41.116)"
  primary-foreground: "oklch(0.98 0.016 73.684)"
  background: "oklch(1 0 0)"
  foreground: "oklch(0.141 0.005 285.823)"
  muted: "oklch(0.967 0.001 286.375)"
  muted-foreground: "oklch(0.552 0.016 285.938)"
  card: "oklch(1 0 0)"
  border: "oklch(0.92 0.004 286.32)"
  destructive: "oklch(0.577 0.245 27.325)"
  ring: "oklch(0.646 0.222 41.116)"
  action-ember: "#EA580C"
typography:
  display:
    fontFamily: "Lexend, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Lexend, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Lexend, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Lexend, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Lexend, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  sm: "0.4rem"
  md: "0.525rem"
  lg: "0.65rem"
  xl: "0.9rem"
  full: "9999px"
spacing:
  section-y: "4rem"
  container: "72rem"
  gutter: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.action-ember}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.25rem"
  button-primary-hover:
    backgroundColor: "color-mix(in oklab, #EA580C 90%, transparent)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
  input-default:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: "2.25rem"
    padding: "0.25rem 0.75rem"
  badge-default:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "0.125rem 0.5rem"
  card-project:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.lg}"
    padding: "0"
---

# Design System: Huy Nguyễn Portfolio

## Overview

**Creative North Star: "The Hiring Desk Brief"**

This site is a recruiter-facing brief, not a mood board. Hierarchy is crisp and short: who you are, where you worked, what you shipped, how to reach you. Surfaces stay quiet so live demos and project evidence do the proving. Ornament is scarce; motion is purposeful (staggered dossier entrance, a swatch-select settle on the lead skill, soft card hover) rather than decorative noise.

The system is a light/dark shadcn-derived token set with Lexend as the single voice. Ember Orange marks actions, focus, and a small set of "selected" states — never large fields of color. Density is comfortable: max-width `6xl` (`72rem`) containers, generous section padding, and clear scan landmarks.

**Key Characteristics:**
- Single typeface (Lexend) across display through label
- Flat tonal layering with glass header; no structural shadow vocabulary
- Committed Ember accent on CTAs, focus rings, active nav, and one "selected" mark per group (e.g. the lead skill chip) — bold where it appears, still deliberately scarce in surface area
- Evidence-first project cards with soft hover lift only
- Restrained controls: soft radius (~10.4px base), quiet borders

## Colors

A cool near-neutral canvas with one committed, high-saturation accent for action, selection, and focus.

### Primary
- **Ember Orange** (`oklch(0.646 0.222 41.116)` / `#EA580C` / Tailwind `orange-600`, dark mode `oklch(0.705 0.213 47.604)` / `orange-500`): Token primary / ring; primary buttons, active nav, focus rings, category filters, the Experience timeline mark, and the one "selected" skill chip. Replaces the former Signal Blue token — same disciplined role, a bolder, more distinctive hue.

### Neutral
- **Paper White** (`oklch(1 0 0)`): Page and card background in light mode.
- **Ink Near-Black** (`oklch(0.141 0.005 285.823)`): Body text / foreground.
- **Mist Surface** (`oklch(0.967 0.001 286.375)`): Muted / secondary / accent washes.
- **Quiet Gray** (`oklch(0.552 0.016 285.938)`): Muted foreground / supporting copy.
- **Hairline Border** (`oklch(0.92 0.004 286.32)`): Borders and inputs.

### Destructive
- **Alert Coral** (`oklch(0.577 0.245 27.325)`): Errors and destructive actions only.

### Named Rules
**The Calibrated Signal Rule.** Ember is the site's one committed color, but it still spends itself deliberately: full-saturation fills are reserved for the primary CTA, the active nav pill, and exactly one "selected" mark per group (the lead skill chip, the active filter tab, the current timeline dot) — never as a large background wash. The boldness lives in how confidently it reads where it appears, not in how much surface it covers.

**The Dual-Theme Parity Rule.** Light and dark share the same roles; dark steps the accent one notch brighter (`orange-600` → `orange-500`) to hold contrast on near-black. Do not invent a third palette. Dark-mode utility variants are resolved via a class-based `@custom-variant dark` (bound to the `.dark` ancestor the theme toggle sets) rather than `prefers-color-scheme`, so the manual toggle — not the OS — is what `dark:` classes respond to.

## Typography

**Display Font:** Lexend (with system sans fallback)
**Body Font:** Lexend (same family; weight 400 loaded globally)
**Label/Mono Font:** Lexend (no separate mono commitment)

**Character:** Geometric, calm, and highly legible — a briefing typeface rather than an editorial display face. Hierarchy comes from size and weight, not family contrast.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 6vw, 4.25rem)`, tight leading): Profile name only.
- **Headline** (500, `text-3xl` → `md:text-4xl`, tracking-tight): Section titles (e.g. contact "Let's connect").
- **Title** (400, `text-xl` / 1.25rem): Role line.
- **Body** (400, `text-sm` / `text-base`): Paragraphs, form fields, card copy. Aim ~65ch where prose runs.
- **Label** (500, `text-xs` / `11px`): Badges, category chips, tooltips.

### Named Rules
**The One Voice Rule.** Lexend is the only loaded face. Do not introduce a second display or serif pairing without an explicit redesign.

## Layout

Single-column home flow inside a centered `container` capped at `max-w-6xl` (`72rem`) with `px-4` gutters. Sections stack with `scroll-mt-24` for sticky-header clearance. Profile is an open (no card shell) two-column split — display-scale name/role/skills/CTA left, a large bleed portrait cutout right, bottom-aligned — that stacks portrait-first on small screens. Experience is a vertical rail (dot + connecting line per role) rather than a card grid. Contact uses a two-column grid from `lg` up. Rhythm is section-scale (`py-16`–`py-24` / `mt-10`), not micro-grid busywork.

## Elevation & Depth

Flat by default. Depth comes from tonal washes (`bg-muted/30`), translucent header blur (`bg-background/80 backdrop-blur-md`), and occasional soft atmospheric blurs behind the contact panel — not a shadow scale.

### Shadow Vocabulary
- **Card motion** (no resting shadow; `hover:-translate-y-1`): Project cards lift slightly on hover; depth is motion, not shade.
- **Tooltip** (`shadow-lg`): Ephemeral overlay only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat. Do not add card drop shadows as a default treatment. The profile portrait is an authored transparent cutout, not a shadowed card — it sits directly on the page ground.

## Shapes

Base radius token `--radius: 0.65rem` (~10.4px) with derived `sm` / `md` / `lg` / `xl`. Controls and badges use `rounded-md`; project cards and contact panel use `rounded-lg` / `rounded-2xl`. Contact form fields intentionally break the radius language with underline-only (`rounded-none`, bottom border).

## Components

### Buttons
Refined and restrained — soft radius, medium weight, short height.
- **Shape:** Gently curved (`rounded-md`, ~8–10px)
- **Primary:** Ember fill (`bg-orange-600`, dark `orange-500` via the accent step), white text, `h-9`–`h-11`; hover at 90% opacity
- **Outline / Ghost:** Transparent with accent hover wash; dark outline may use white border
- **Focus:** `ring-ring/50` with 3px ring, ring color follows the accent token

### Badges / Chips
- **Style:** Compact `rounded-md`, `text-xs`, optional border; category chips on project media use backdrop blur
- **Primary badge:** Token primary fill; outline for quiet tags
- **Selected swatch chip:** The signature Profile motif — of the skill chips, exactly one (the lead skill) renders as a solid Ember fill with a distinct "settle into place" entrance timed after the others; every other chip stays a neutral outline. Reads as a swatch deliberately chosen from a deck, not decoration. Never mark more than one chip per group this way.

### Cards / Containers
- **Corner Style:** `rounded-lg` project cards; contact shell `rounded-2xl`
- **Background:** `bg-card` / muted wash panels
- **Border:** `border-border/60` hairlines
- **Shadow Strategy:** Flat rest; hover translate on project cards
- **Internal Padding:** Media flush; footer actions padded

### Inputs / Fields
- **Default Input:** Transparent fill, `rounded-md`, gray border, `h-9`, focus ring on `--ring`
- **Contact Underlines:** Borderless except bottom hairline; focus turns border to the accent color — the signature form treatment
- **Error:** Destructive border / ring via `aria-invalid`

### Navigation
Sticky blurred header with hairline bottom border. Icon socials left; section links and theme toggle right. Active section renders as a solid Ember pill; hover tips icons toward the accent.

### Experience Rail (signature)
Vertical timeline: an Ember dot + connecting line per role, most-distinctive bullet always visible, remaining bullets behind a native `<details>` disclosure. Sequence and hierarchy over a repeated card grid.

### Project Card (signature)
Evidence tile: 16/10 media, category chip overlay, gradient scrim, title/actions below. Hover scales media slightly and lifts the card — proof of craft, not chrome.

## Do's and Don'ts

### Do:
- **Do** keep the recruiter scan path short: profile → experience → projects → contact.
- **Do** spend full-saturation Ember on the primary CTA and exactly one "selected" mark per group — bold where it lands, still scarce in coverage.
- **Do** use Lexend exclusively and size for hierarchy.
- **Do** prefer tonal layering and blur over shadow stacks.
- **Do** let project demos, thumbnails, and the profile portrait carry visual weight as real authored assets.

### Don't:
- **Don't** flood sections with primary Ember backgrounds.
- **Don't** mark more than one chip/tab/dot per group as "selected" — the swatch motif only works if it stays singular.
- **Don't** introduce a second display font or decorative serif without redesign intent.
- **Don't** default cards to heavy drop shadows.
- **Don't** invent testimonials, metrics, or employers not already on the site.
- **Don't** turn the first viewport into a dashboard of stats — keep the brief clean.
