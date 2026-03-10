# Partners Page — UX Research

**Date:** 2026-03-09
**Status:** UX Research complete · Variant D chosen · Pending design doc + implementation plan
**Drafts:** `drafts/partners/index.html` (A/B/C) · `drafts/partners/variant-d.html` (D)

---

## Content Structure

4 partner segments:

| # | Segment | Headline | CTA |
|---|---|---|---|
| 01 | Fleet Operators | Charging Infrastructure That Pays for Itself | Fleet Partnership Inquiry |
| 02 | Property Owners | Turn Parking Into Profit. Zero Upfront Cost. | Property Partnership Inquiry |
| 03 | Retail Businesses | 15–25 Minutes = Captive Customers | Retail Partnership Inquiry |
| 04 | Municipalities | Fast Charging as Public Infrastructure | Municipal Partnership Inquiry |

**Audience:** Mix — most visitors are one of the 4 types, but page must also impress cold visitors.
**Primary conversion:** Form/inquiry per segment.
**Navigation:** Hybrid — sticky/pill nav for quick jumps + scroll through content.

---

## Color Language (per segment)

| Segment | Background | Accent | Rationale |
|---|---|---|---|
| Fleet | `#0C0214` dark | white + fuchsia | Industrial, night shift, infrastructure |
| Property | `#EDE6F8` lavender | `#7B4FAF` | Premium real estate, passive income |
| Retail | `#FFFFFF` white | `#FF00C5` | Daylight, foot traffic, energy |
| Municipality | `#060010` near-black | `#FF00C5` glow | Bold civic statement, electric future |

---

## Variants Explored

### Variant A — Ecosystem Hub
Hero shows 4 clickable portal cards → sticky tabs → sections below.
**Rejected:** Less cinematic, accordion pattern feels dated.

### Variant B — Chapter Scroll
Cinematic scroll chapters, each segment = own color world, sticky top nav with progress.
**Rejected in favor of D:** Good but standard pattern, no video storytelling.

### Variant C — Floating Switcher
Dark single-scroll, sticky left sidebar, auto-highlights current segment (Stripe/docs pattern).
**Rejected:** More "documentation" than "brand site".

### Variant D — Video Hero ⭐ CHOSEN
**Concept:**
1. **Hero** — full-screen drone video, headline, bottom pill nav
2. **4 Tiles** — 2×2 grid, each = one partner segment, dark cards with big stats/visuals
3. **Scroll Story** — GSAP-pinned section: video shrinks to 21:9 cinematic frame (left), glassmorphic content cards scroll alongside (right), giant watermark label below video
4. **Bottom pill nav** — fixed, shows current segment (icon + name), click → upward dropdown with all 4 segments

**Why chosen:** Cinematic, awards-winning level, video as storytelling vehicle per segment, pill nav is fresh and non-standard for EV/B2B space.

---

## Variant D — Technical Notes

### Video requirements
- Drone footage: 4 chapters (Uber fleet → apartment rooftop → café exterior → city hall)
- Either 1 continuous video split by timestamp, or 4 separate 8-sec loops
- Must be `muted + playsinline + autoplay` for iOS Safari compatibility

### Scroll story (desktop)
- GSAP ScrollTrigger `pin: true`, `end: +=400vh`
- `onUpdate` calculates segment index from `self.progress`
- Panel track: `translateY` transition between 4 glass cards
- Background + video gradient change per segment via JS

### Bottom pill nav
- `position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%)`
- Glassmorphic: `backdrop-filter: blur(20px)` + dark bg
- Dropdown: upward animation, 4 items (icon + name + color dot)
- Auto-updates from ScrollTrigger `onUpdate`

### Mobile strategy (TBD — separate session)
- 4 video loops (8 sec each), stacked under tiles
- No ScrollTrigger, no pin
- Pill nav switches active video + content card
- `position: fixed` video as background, tiles scroll over it

---

## Files

| File | Description |
|---|---|
| `drafts/partners/index.html` | Variants A / B / C with toggle bar |
| `drafts/partners/variant-d.html` | Variant D — Video Hero (chosen) |
| `UX/wireframes/partners.html` | Original wireframe (reference only) |

---

## Next Steps

1. Write design doc (`docs/plans/2026-03-09-partners-page-design.md`)
2. Source or commission drone video (4 chapters)
3. Implement full page per Variant D spec
4. Mobile implementation (separate session)
