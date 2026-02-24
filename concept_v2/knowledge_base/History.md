# Eplug Web Project History & Context Summary

## 1. Project Vibe & Aesthetic Goals
*   **Target Level:** Awwwards-winning, ultra-premium, cinematic digital experience.
*   **Style:** Light mode by default, with periodic deep dark screens (`#07000E`, `#1A0A26`), and bright neon accents (fuchsia `#FF00C5` / lime / emerald) for interactive elements and glows.
*   **Typography:** We use `Montserrat` for headers (bold, uppercase in hero elements) and a clean sans-serif for body copy. Large typography with tight line-heights for dramatic effect.
*   **UI Elements:** Deep glassmorphism (`backdrop-blur`), subtle borders (`border-white/10`), rounded and pill-shaped cards/buttons, smooth micro-actions. 
*   **What to avoid:** Dry minimalism, basic layouts, standard boxy white-background sections. "If it looks like a standard dashboard, it's incorrect."

## 2. Technical Stack & Environment
*   **Base Framework:** React + Vite + Tailwind CSS.
*   **Scroll Animations:** GSAP (ScrollTrigger) is our primary engine for large scroll magic, parallax, and card reveals.
*   **Smooth Scroll:** Lenis is used globally to give the site that premium "heavy" scrolling feel.
*   **Micro-Interactions (UI Magic):** Framer Motion is the standard for component-level UI interactions (hover states, animated pill sliders via `layoutId`, smooth spring transitions).
*   **Icons:** `@tabler/icons-react` is the chosen icon library.
*   **Current State:** We are working exclusively inside the `/concept_v2` directory. The old `/concept` folder has been deleted.
    *   The premium version we just built is now the root `localhost:5174/` (powered by `V4App.jsx`).
    *   Isolated Figma-driven components will be built in `src/components/v5` and tested on separate sub-routes.

## 3. The "10x Pipeline" Agreement
To avoid wasting time guessing margins and colors from screenshots, we established a new AI-Figma pipeline:

1.  **Figma Input:** Oleg provides a link to a specific Frame/Section from Figma.
2.  **Design System Extraction:** The AI uses its MCP tools to read `mcp_figma_get_variable_defs` and `mcp_figma_get_design_context` to pull exact paddings, colors, and layout structures.
3.  **Isolated Component Creation:** The AI creates a *new, isolated file* (e.g., `src/components/v5/HeroFigma.jsx`).
4.  **Test Route:** The AI spins up a temporary test route (e.g., `localhost:5174/test-hero`) so Oleg can view the isolated component without breaking the main app.
5.  **GSAP Magic:** The AI adds the required scroll animations (parallax, fade-ins) to this isolated component.
6.  **Approval & Merge:** Only after Oleg approves the isolated component, it gets imported into the main page layout. 
7.  **Dashboard Sync:** After approval, the AI adds a link to the component in the local HTML dashboard (`/Users/oleg/MEGA/Dev/Project/Eplug_web/index.html`) so the team has a live directory.

## 4. Current File Structure
*   `src/components/v4/` - Contains the latest approved components (Header, Hero, WhatIsEplug, WhyDCFast, AppAndLoyalty). All fixed up regarding layout gaps and animations.
*   `src/index.css` - Contains global Tailwind imports and custom keyframes (like `fadeSlideUp`).
*   `tailwind.config.js` - Should be the source of truth for colors and fonts extracted from Figma going forward.
