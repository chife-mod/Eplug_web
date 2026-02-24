# EPLUG — MASTER BRIEF v3.0
### Creative Direction for Anti-Gravity / AI Build

**Role:** Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer with a portfolio of Awwwards, FWA, and CSS Design Awards winners.

**Objective:** Architect a cinematic, pixel-perfect, awards-winning landing page for **Eplug — Urban Fast Charging**. This is not a website. This is a **digital urban manifesto**. The visual language must feel like a collaboration between a brutalist architecture firm and a futurist energy lab. Every scroll triggers emotion. Every section earns attention.

**Aesthetic Identity:** "Urban Energy Infrastructure meets Cinematic Precision" — the site bridges raw city infrastructure and premium investor-grade digital experience.

---

## 1. CORE DESIGN SYSTEM (STRICT TOKENS)

### Palette
| Token | Hex | Usage |
|---|---|---|
| Electric Fuchsia | `#FF00C5` | Primary energy accent, CTAs, glow focal points |
| Electric Purple | `#2E0054` | Dark narrative blocks, depth layers |
| Deep Violet | `#0C0214` | Cinematic dark hero, section peaks |
| White | `#FFFFFF` | Light sections, primary background |
| Cool Light Grey | `#DEDCF9` | Card surfaces, layer separation |

- Fuchsia is the **energy signal** — use it sparingly, make it hit hard.
- No uncontrolled gradients. Glow: `rgba(255,0,197,0.35)` max — suggest energy, never scream.

### Typography
- **Headings:** Montserrat Bold — H1: 80px / H2: 56px / H3: 36px / H4: 24px
- **Body:** Montserrat Regular — 16px, line-height: 154%
- **Cinematic Drama:** Allow oversized display type (120px+) for hero moments. Tight tracking.
- No text walls. Headings breathe. Content chunked visually.

---

## 2. TECH STACK

- React 19 · Tailwind CSS 4 · GSAP 3 + ScrollTrigger + SplitText · Lucide React
- All animations: `gsap.context()` within `useEffect`. Zero placeholder content.

---

## 3. COMPONENT ARCHITECTURE & BEHAVIOR

### A. NAVBAR — The Floating Urban Signal

Fixed pill-shaped container.

**Morphing Logic:**
- Hero top: transparent, white links.
- On scroll: `backdrop-blur-md` frosted glass, fuchsia-tinted border at 0.2 opacity, subtle fuchsia glow on logo mark.
- Links: magnetic hover — `translateY(-2px)` + fuchsia underline sliding in from left.

---

### B. HERO — The City Breathes Electricity

`100dvh`. Dark. Cinematic. Immersive.

**Visual:** Dramatic urban nighttime aerial — dark rain-slicked streets, electric light streaks. Image: `https://images.unsplash.com/photo-1477959858617-67f85cf4f1df`. Deep Violet to transparent overlay. Fuchsia light leak bottom-left — like a charging point glowing in rain.

**Layout:** Content anchored bottom-left. Two-line display type.

**Typography Drama:**
```
"The city runs on"     ← Montserrat Regular, 48px, white/70
"electricity."         ← Montserrat Bold, 120px, white + fuchsia glow on last letter
```

**Animation:** GSAP staggered fade-up. `cubic-bezier(0.16, 1, 0.3, 1)`, 0.8s. Fuchsia bolt SVG pulses once, then holds.

**Scroll Cue:** Animated vertical fuchsia 2px line crawling down with pulsing dot at tip.

---

### C. WHAT IS EPLUG — Sticky Cinematic Split

**Desktop ≥1024px:**
- Left: Sticky vertical subnav, 4 anchors. Active state = fuchsia dot + fuchsia text.
- Right: Scrollable content segments — GSAP ScrollTrigger `scrub`. Sharp background cuts between White and Deep Violet.

**Segments:**
1. **Urban Network** — SVG city map, charging points appear one by one with fuchsia ripple pulse.
2. **Speed** — Counter animates 0 → 22 min. "From 0 to 80% in **22 min**."
3. **Coverage** — Expanding fuchsia circle on minimal city grid.
4. **Trust** — Partner logos, fade-in stagger.

**Mobile <768px:** Clean vertical stack. Motion simplified, narrative preserved.

---

### D. FOR WHO — Dark-to-Light Card Bridge

Three full-bleed cards overlapping both Deep Violet and White sections. Background changes; cards stay stable.

- **For Drivers:** Fuchsia gradient edge. "Charge in minutes. Drive for hours."
- **For Fleets:** Electric Purple background. "City-scale energy management for urban mobility operators."
- **For Cities:** Cool Light Grey. "Infrastructure that makes your city investable."

**Hover:** `translateY(-8px)` lift + fuchsia edge glow. `0.4s cubic-bezier(0.34, 1.2, 0.64, 1)`.

---

### E. THE APP — Horizontal Storytelling (Cinematic Peak)

Full `100vw` horizontal scroll. GSAP ScrollTrigger pin. 3 panels.

**Panel 01 — Connect.** Phone mockup animates up. App UI: charging map with fuchsia pins dropping in one by one with ripple.

**Panel 02 — Charge.** Screen transitions to live fuchsia energy bar filling. Countdown counter: "22:00 → 00:00".

**Panel 03 — Earn.** Point counter animates upward. Cards cascade in. "Every charge earns." Fuchsia number display.

Each panel has oversized panel number (01 / 02 / 03) in Deep Violet at 10% opacity as bg texture.

---

### F. THE NUMBERS — Data as Drama

Full-width Deep Violet. **Second cinematic peak.**

Bold asymmetric stats grid. GSAP `countTo` on ScrollTrigger enter:
```
2,400+          40+           22 min          98.6%
charging        cities        avg charge      network
points          connected     time            uptime
```

Fuchsia horizontal rules between stat groups. White type. Institutional. Powerful.

---

### G. INVESTOR SECTION — Trust Architecture

Clean White. Institutional.

- Two-column: left = typographic block, right = sticky metrics card.
- Revenue chart SVG draws itself on scroll via `stroke-dashoffset`. Fuchsia traces the growth line.
- City expansion dots appear sequentially.
- CTA: pill button, fuchsia bg. Hover: magnetic `scale(1.04)` + overflow-hidden white sliding layer.

---

### H. FOOTER — Urban Signal Station

Deep Violet. `rounded-t-[4rem]`.

- Left: Eplug logo (white SVG). "Charging the urban future."
- Center: Utility links, two columns.
- Right: Pulsing fuchsia dot + "Network Operational."
- Bottom: "© 2025 Eplug. Urban Energy Network."

---

## 4. MOTION SYSTEM

| Interaction | Timing | Curve |
|---|---|---|
| Section enters | 0.8s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Card hover | 0.4s | `cubic-bezier(0.34, 1.2, 0.64, 1)` |
| Number counters | 1.2s | `power2.out` GSAP |
| Horizontal scroll | scrub: 1 | ScrollTrigger pin |
| Text reveals | 0.6s stagger | SplitText + fade-up |

Every motion has structural intent — zero decorative animation.

---

## 5. MICRO-INTERACTIONS

- **Buttons:** `scale(1.04)` + overflow-hidden fuchsia sliding layer.
- **Nav links:** Fuchsia underline slides from left.
- **Cards:** `translateY(-8px)` + fuchsia edge glow.
- **Map pins:** 2-ring ripple pulse, fuchsia, fade out.
- **Scroll cue:** Fuchsia crawling line, pulsing dot.

---

## 6. MOBILE

- Horizontal panels → vertical sequence with fades.
- Sticky split → vertical stack.
- H1 → 48px, H2 → 36px.
- Motion simplified, never removed. Feels intentional — not broken.

---

## EXECUTION DIRECTIVE

Do not build a website.

**Build a digital urban instrument for a city that runs on electricity.**

Every scroll: moving through a city at night — intentional, weighted, alive.
Every number: real infrastructure data — precise, undeniable.
Every animation earns its place on screen.

Design like it's going to Awwwards. Build like it ships tomorrow.

**Eradicate all generic AI patterns. Zero compromise.**
