# Project History Log

**Project Overview:**  
Eplug Web — корпоративный сайт для компании Eplug (B2B, сеть EV-зарядных хабов). Проект представляет собой статический multi-page сайт на Vanilla HTML/CSS/JS. Включает UX-хаб с навигацией, визуальную карту сайта (Sitemap) и wireframes 5 страниц (Home, About, Network, Partners, Contact). Используется общий `shared-header.js` для единой навигации. Хостинг — GitHub Pages.

---

## 2026-03-10 — Partners Page UX Research

### UX-ресёрч — страница Partners

**Процесс:** Brainstorming-сессия → 4 вопроса по аудитории, конверсии, навигации, визуальному языку → 4 UX-варианта → выбор Варианта D.

**Ключевые решения:**
- Аудитория: микс (самоидентификация + холодные визиторы)
- Конверсия: форма/inquiry для каждого сегмента
- Навигация: гибрид — pill nav для прыжков + scroll-главы
- Цвета: каждый сегмент = свой мир (Fleet = dark, Property = lavender, Retail = white, Muni = fuchsia glow)

### Варианты (все в `drafts/partners/index.html`, переключатель A/B/C/D)

| Вариант | Концепция | Статус |
|---|---|---|
| A — Ecosystem Hub | Hero → 4 portal cards → sticky tabs → секции | Отклонён |
| B — Chapter Scroll | Кинематографические главы по цветам | Отклонён |
| C — Floating Switcher | Sticky sidebar слева, тёмный скролл | Отклонён |
| D — Video Hero | Full-screen video → 4 tiles → 21:9 scroll story → pill nav | ⭐ Выбран |

### Вариант D — детали архитектуры

**Hero:** Full-screen drone video (placeholder: анимированный градиент), headline bottom-left, play button, scroll hint

**4 плитки (2×2):**
- Fleet: `88+` big number, тёмный тайл
- Property: dotted pattern, lavender accent
- Retail: `+40%` big number
- Municipality: `99%`, fuchsia accent

**Scroll Story (GSAP pin):**
- `ScrollTrigger.create({ pin: true, end: +=400vh })`
- Левая колонка: 21:9 cinematic frame (анимированный градиент-placeholder), big watermark label (FLEET / PROPERTY / RETAIL / CITY), counter `01/04`
- Правая колонка: glassmorphic карточки (`backdrop-filter: blur(18px)`), 4 панели на track, transition `translateY`
- Прогресс-точки слева

**Bottom Pill Nav:**
- `position: fixed; bottom: 28px`, glassmorphic pill
- Показывает: иконка + название текущего сегмента + chevron
- Click → dropdown вверх с 4 пунктами (иконка + название + цветная точка)
- Синхронизирован с ScrollTrigger `onUpdate`

**Мобайл (TBD):** 4 видео по 8 сек (loop), pill nav переключает видео + карточку, без ScrollTrigger/pin

### Файлы

- `drafts/partners/index.html` — все 4 варианта с toggle bar
- `drafts/partners/variant-d.html` — standalone Variant D (архив)
- `docs/components/partners-page-ux.md` — полная документация ресёрча

### Dashboard

- Карточка "Partners Page — UX Research" добавлена в секцию UX Exploration (`index.html`)
- Счётчик секции: 1 draft → 2 drafts

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

