# Network Page — UX Design

**Date:** 2026-03-08
**Status:** MVP Draft complete · Variant chosen · Pending implementation
**Draft:** `drafts/network-page-mvp.html`
**Figma:** https://www.figma.com/design/NsarAMa9SQMVyRCQDvgqg3?node-id=536-783

---

## Chosen Approach — Variant 4: Map Hero

Full-width interactive map as the hero of the page, with two UI overlays and an expansion section below.

### Layout

```
[ HERO — headline, overline, subtext ]
┌─────────────────────────────────────────────────────┐
│ [ ● Brooklyn  ○ NYC 2027  ○ LA  ○ SF ]  ← tab strip │
│                                                     │
│           MAP (full width, 82vh)     ┌────────────┐ │
│                                      │  Floating  │ │
│                                      │   Card     │ │
│                                      │  320×650px │ │
│                                      └────────────┘ │
└─────────────────────────────────────────────────────┘
[ Expansion timeline 2026 → 2030 + CTA ]
```

### Components

**Tab strip** — pill-shaped overlay, top-center of map
- `background: rgba(12, 2, 20, 0.88)` + `backdrop-filter: blur(12px)`
- Active tab: `background: rgba(255, 0, 197, 0.18)`, white text
- Inactive: 40% white opacity
- Dot indicator per tab, color = location status color

**Floating card** — sticky overlay, top-right of map
- Width: `320px`, Height: `650px` (fixed), internal scroll
- `background: rgba(12, 2, 20, 0.92)` + `backdrop-filter: blur(16px)`
- `border-left: 3px solid #FF00C5`
- Always visible — default = first location selected
- Contents: photo/rendering → badge → name → address → description → facts list

**Map markers**
- Active: full opacity, enlarged (22px), fuchsia pulse ring
- Inactive: 30% opacity, smaller (14px)
- Click marker OR tab → `flyTo()` animation + card update

**Status color system**
| Status | Color |
|---|---|
| Under Construction | `#FF00C5` (Electric Fuchsia) |
| Planned 2027 | `#aaa` (neutral grey) |
| Planned 2028 | `#7B00CC` (Electric Purple) |

### Mobile (≤768px)

```
[ HERO ]
[ MAP — 44vh, full width ]
[ Tab strip — horizontal scroll, below map, no backdrop ]
[ Floating card — full width, static block below tabs ]
[ Expansion section ]
```

### UX Rationale

- Map dominates — sells "we're everywhere in the city" positioning
- Tab strip pattern = Apple Maps / Airbnb — zero learning curve
- Card always visible = no empty states, instant context on load
- Expansion timeline below = turns the map into a brand ambition narrative
- Scales cleanly: new tabs added as locations grow

---

## Rejected Variants

| # | Name | Why rejected |
|---|---|---|
| V1 | Split Screen | Map compressed to 60% — loses dominance |
| V2 | Scroll Story | Map flying on scroll feels jarring with few locations |
| V3 | Spotlight | Good, but tab strip below map is weaker connector than overlay |

---

## Locations Data

| Location | Status | Coords |
|---|---|---|
| 390 Bedford Ave, Williamsburg | Under Construction | 40.7135, -73.9637 |
| NYC Expansion (Midtown) | Planned 2027 | 40.7549, -73.9840 |
| Los Angeles (Downtown) | Planned 2027 | 34.0522, -118.2437 |
| San Francisco (Bay Area) | Planned 2028 | 37.7749, -122.4194 |

---

## Implementation Notes

- Map library: Leaflet + OpenStreetMap tiles (no API key needed)
- Animations: GSAP `flyTo` on tab/marker click
- Font: Montserrat (all weights)
- Tech stack: React 19 + Tailwind CSS 4 + GSAP 3
