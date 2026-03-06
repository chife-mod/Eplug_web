# Project History Log

**Project Overview:**  
Eplug Web — корпоративный сайт для компании Eplug (B2B, сеть EV-зарядных хабов). Проект представляет собой статический multi-page сайт на Vanilla HTML/CSS/JS. Включает UX-хаб с навигацией, визуальную карту сайта (Sitemap) и wireframes 5 страниц (Home, About, Network, Partners, Contact). Используется общий `shared-header.js` для единой навигации. Хостинг — GitHub Pages.

---

## 2026-03-05 — Инициализация структуры документации

### Документация — Architecture
- Создана папка `docs/architecture/`
- `overview.md` — глобальная карта проекта: стек, структура папок, соглашения
- `shared-header.md` — описание логики модуля `shared-header.js`

### Документация — Components (`docs/components/`)
- `ux-hub.md` — `UX/index.html` (redirect entry point)
- `sitemap.html` — визуальная карта сайта, 5 колонок, 25 секций
- `wireframes.md` — каталог и 5 wireframe-страниц (home, about, network, partners, contact) + CSS-система
- `hero.md` — Hero-секция concept_v2: видеофон, брутальная типографика, metrics card, GSAP + Framer Motion
- `the-app-scroll.md` — TheApp секция: GSAP горизонтальный pin-скролл, 4 панели, glassmorphic телефон-мокап
- `navbar.md` — Navbar concept_v2: transparent → glass при скролле, GSAP
- `header-buttons.md` — HeaderButtons v5: sliding fuchsia pill на hover, точные Figma-размеры
- `what-is-eplug-v5.md` — WhatIsEplug v5: 3 таба + image reel + ambient glow, Framer Motion, useInView

### История (history/)
- Создана папка `history/` с `HISTORY.md`

### Воркфлоу (.agents/workflows/)
- Обновлён `new-component.md` — правило: `architecture/` = логика, `components/` = UI+страницы+сборки
- Добавлен шаг логирования в `history/HISTORY.md` перед каждым коммитом

---

## 2026-03-06 — AppLoyalty 3-Slide Carousel

### Компоненты
- `AppLoyalty.jsx` — 3-slide carousel с авто-таймером, стрелками, круговым прогрессом
- `AppLoyaltySlide3.jsx` — карта Community Integration: blue/pink pins с пульсацией, лого, стрит-лейблы
- Тест-роуты `/test-app-loyalty` и `/test-slide3` в `App.jsx`

### Анимации
- Glass card: grow-from-bottom (clipPath), сжатие на slide 3
- CTA card: clipPath grow + content fade-in с задержкой
- Реверс: CTA схлопывается первой → белая с delay 0.45s расширяется

### Pixel-perfect (Figma)
- 550px = 32(top) + 294(white) + 8(gap) + 192(cta) + 24(bottom)
- Eplug лого: patched SVG, left:380 top:167 height:118
- CTA: треугольный декор, full-width fuchsia кнопка

### Документация
- Обновлён `docs/components/app-loyalty.md`
- Карточка компонента добавлена в `index.html` (Project Dashboard, секция Isolated Components)

