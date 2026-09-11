---
version: 1
slug: "home"
primary_target: "home"
related_targets: []
---

# Surface: Home (whole page)

Mode: Persuade
Scope: Site-wide color token replacement + polish, applied across `src/app/globals.css` and every literal accent usage in `src/components/**` (header, profile, work-exp, project-card, project-filters, ContactForm, ui/button). Preserves current information architecture (profile → experience → works → contact), copy, and layout structure established in prior sessions.

Audience: Recruiters/hiring managers scanning frontend craft.
Job: Believe Huy makes precise, engineered design decisions; scan profile → experience → projects → contact; start contact.
Proof: The color system itself, presented as a deliberately chosen "swatch" rather than a decorative afterthought.
Constraints: Preserve factual copy, section order, and the existing "Hiring Desk Brief" positioning (quiet, evidence-led, not a mood board). No invented claims. Keep Lexend as the only typeface.

Direction: Pantone-style color-spec system (assigned index 5 of 7 grounded candidates, seed `0bd871f3`, dealt via `impeccable concept-seed --scope direction --mode persuade`).
Memorable moment: exactly one skill chip in Profile renders as the "selected swatch" (solid Ember fill, distinct settle-in entrance after its neighbors) — every other chip stays a neutral outline, visualizing "a color deliberately chosen from a deck."

## Direction contract

THESIS: Every color on this page is a specified, engineered decision — like a swatch pulled from a color-spec card — never a decorative afterthought. Refuses the "one scattered accent used identically everywhere" default the site shipped with, and refuses becoming a loud gradient-hero SaaS page.

OWN-WORLD: Neutral paper/ink ground unchanged (light/dark), Lexend stays the single voice. New committed accent: Ember Orange (`oklch(0.646 0.222 41.116)` / `#EA580C` light, `oklch(0.705 0.213 47.604)` / `#F97316` dark) replaces Signal Blue everywhere — primary CTA, active nav pill, category filters, focus rings, the Experience timeline dot+line, and exactly one "selected" skill chip per group. Raised by two donated disciplines from the direction round's challengers: (1) from a VU-meter-bridge challenger — full saturation is reserved for the one reading that actually crosses the threshold, so only the selected/active mark gets the bold fill while siblings stay calibrated neutral; (2) from an Alan Fletcher poster challenger — one confident authored signature moment (the swatch-chip settle) replaces scattered hover gimmicks.

STORY: Understand this person makes precise, engineered UI/UX decisions (believable because the page's own color system is presented as a spec, not a vibe) → scan employers → open a live demo → contact. Same "Hiring Desk Brief" scan path as before, now carried by a bolder, more distinctive accent.

FIRST VIEWPORT: Unchanged composition from the prior Profile redesign (display-scale name + role left, bleed portrait right) — only the accent recolors: CTA button, active nav pill, and the lead skill chip ("React") go solid Ember with a settle-in entrance timed after the dossier cascade; every other chip stays a neutral outline swatch.

FORM: Pantone-style color-spec system — direction round position 5 of 7 grounded candidates (Storybook design-token spec sheet ranked #1 as IMPECCABLE'S PICK but not assigned; legal-exhibit-tab and Swiss-identity-manual candidates ranked #2–3); seed `0bd871f3`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Notes

- Pre-existing drift found and fixed in this pass: `dark:` Tailwind utility classes across the codebase were inert because no `@custom-variant dark` was declared (Tailwind v4 defaults to `prefers-color-scheme`), while the app's own theme toggle only ever sets a `.dark` class on `<html>`. Added `@custom-variant dark (&:where(.dark, .dark *));` to `globals.css` so manual theme toggling actually drives every `dark:` utility, not just the CSS-variable tokens. This affected every literal dark-mode accent color site-wide (previously blue-400, now orange-500), not only the new tokens.
- `.impeccable/briefs/home-marker-zine.md` (an earlier "hand-drawn zine" direction) is stale relative to the actually-shipped system and was left untouched per the skill's drift-reporting rule; flagged here rather than deleted.
