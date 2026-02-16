# Eplug Website — Pipeline разработки

> Основано на брифе: "Eplug website structure and texts.md"
> Дата создания: 2026-02-16

---

## Общая информация из брифа

- **Проект:** Eplug — Urban DC Fast Charging Network
- **Локация:** Brooklyn, New York
- **Стадия:** Pre-launch (запуск 2026)
- **Уровень амбиций:** Award-level, category-defining website
- **Тон:** Bold but corporate, visionary but credible, urban, modern, American
- **Конкуренты:** ChargePoint, Tesla, Electrify America, EVgo, Blink, Shell Recharge, Jolt, FLO

---

## Структура сайта (6 страниц + Footer)

1. **Home** — главная с hero, value prop, DC Fast аргументация, App preview, 2026 roadmap, urban vision
2. **About** — миссия, принципы (6 штук), команда (placeholder)
3. **Network** — интерактивная карта, карточки локаций (флагман: 390 Bedford Ave), стратегия расширения
4. **App & Rewards** — функции приложения (4 колонки), лояльность, fleet tools, community integration, waitlist
5. **Partners** — 4 аудитории: Fleet Operators, Property Owners, Retail, Municipalities
6. **Contact** — форма с dropdown по типу партнёра, контактная информация
7. **Footer** — 5 колонок (Brand, Nav, Drivers, Partners, Legal) + соцсети

---

## Фаза 0 — Подготовка

- [ ] Согласовать стек технологий (рекомендация: Next.js + Framer Motion + Vanilla CSS / Tailwind)
- [ ] Определить хостинг и домен (Vercel? Netlify?)
- [ ] Собрать референсы: изучить сайты конкурентов (ChargePoint, Tesla, Electrify America — ссылки есть в брифе)
- [ ] Определить визуальный стиль: цветовая палитра, типографика, настроение
- [ ] Определить формат визуалов: рендеры станций, фото, видео (бриф указывает на looping video для hero)
- [ ] Подготовить или сгенерировать ассеты (рендеры станций, app mockups, иконки)

---

## Фаза 1 — Фундамент проекта

- [ ] Инициализация проекта (Next.js или Vite)
- [ ] Настройка структуры папок и роутинга (6 страниц)
- [ ] Создание дизайн-системы:
  - Цветовые токены (тёмная тема, «электрические» акценты)
  - Типографика (шрифты: рекомендации — Inter/Outfit для body, что-то более bold для заголовков)
  - Spacings, breakpoints, grid
- [ ] Базовые компоненты:
  - `<Navigation />` — 6 пунктов: Home, About, Network, App & Rewards, Partners, Contact
  - `<Footer />` — 5 колонок по брифу + соцсети
  - `<Button />` — primary / secondary / outline варианты
  - `<SectionWrapper />` — контейнер для секций с анимацией появления

---

## Фаза 2 — Главная страница (Home)

Это самая насыщенная страница, включает 7 секций:

### 2.1 Hero Section
- [ ] Fullscreen с headline: "Urban Fast Charging for the Future of America"
- [ ] Subheadline + 2 CTA кнопки (View Network Map / Partner with us)
- [ ] Фоновое видео или анимация (ночной городской контекст)

### 2.2 What Is Eplug?
- [ ] Headline: "The Charging Infrastructure Modern Cities Deserve"
- [ ] Текст о 80% урбанизации к 2050, urban density focus
- [ ] 5 пунктов "What makes us different" (с чекмарками)
- [ ] Визуал: split-screen highway vs. urban (можно сгенерировать)

### 2.3 Why DC Fast — And Only DC Fast
- [ ] Headline: "15–25 Minutes. Always. Everywhere."
- [ ] 3-колоночный layout: For Drivers / For Fleets / For Cities
- [ ] Callout box: "We don't do slow charging."

### 2.4 The App & Loyalty Program (превью)
- [ ] Headline: "Charge Smarter. Earn Faster. Live Better."
- [ ] 4 блока: Seamless Charging, Rewards, Fleet Tools, Community
- [ ] App mockup визуалы
- [ ] CTA: Join the App Waitlist (email capture)

### 2.5 Coming in 2026
- [ ] Headline: "Charging With Us in 2026"
- [ ] 6 пунктов (300 kW, lounges, restrooms, retail, security, 99% uptime)
- [ ] CTA: "Get Early Fleet Pricing" (форма)
- [ ] Визуал: рендеры + фото строительства

### 2.6 Built for the Electric City
- [ ] Headline: "We Believe Cities Should Work for Everyone"
- [ ] 4 блока: Cleaner / Fairer / Stronger / Smarter
- [ ] Визуал: urban montage

### 2.7 Footer CTA
- [ ] "The Future Is Urban. The Future Is Fast."
- [ ] 2 CTA: Fleet Operator / Property Owner

---

## Фаза 3 — About Page

- [ ] Hero: "Eplug — The First Network That Gets Cities"
- [ ] Mission: "Make Fast Charging as Essential as Streetlights" + статистика проблемы (5 пунктов)
- [ ] Principles: 6-item grid (Urban-Only, 100% DC Fast, Driver-First, Aggressive Deployment, Community Integration, Fleet-Grade Reliability)
- [ ] Team section (placeholder — структура под будущий контент)

---

## Фаза 4 — Network Page

- [ ] Hero: "Where We're Building the Future"
- [ ] Интерактивная карта (Mapbox GL JS или Leaflet) с location finder
- [ ] Location Card: 390 Bedford Ave, Williamsburg
  - 44 DC Fast chargers, 88 parking bays
  - Lounge, restrooms, retail, 24/7 security
  - Статус: "Opening Soon"
- [ ] Expansion Strategy секция:
  - Критерии выбора локаций (6 пунктов)
  - Timeline 2026→2030 (Brooklyn → 1,000+ hubs)
  - CTA: "Have a property? Let's move fast"

---

## Фаза 5 — App & Rewards Page

- [ ] Hero: "The App That Charges You and Rewards You"
- [ ] "What's Wrong With Current Charging Apps" — проблематика
- [ ] Feature Grid (4 колонки): Plug & Charge / Real-Time Intel / Transparent Pricing / Instant Support
- [ ] Loyalty & Rewards секция (структура — placeholder для тарифов)
- [ ] Fleet & Power User Tools (5 фич: Reserved Stall, Bulk Credits, Expense Reporting, Predictive Wait, Multi-Vehicle)
- [ ] Community Integration (nearby partners, auto-discounts)
- [ ] Waitlist CTA (founding member badge, bonus points, grand opening invites)

---

## Фаза 6 — Partners Page

Самая сегментированная страница — 4 аудитории:

- [ ] Hero: "We Don't Build Alone. We Build With Cities."
- [ ] **For Fleet Operators** — 7 value props, список идеальных клиентов, CTA + testimonial placeholder
- [ ] **For Property Owners** — 7 value props + 4 модели партнёрства (Profit Sharing, Lease, Co-Investment, Full Deployment), case study placeholder
- [ ] **For Retail Businesses** — foot traffic value prop, dwell time аргумент, conversion data (20-40% uplift)
- [ ] **For Municipalities & Developers** — turnkey deployment, job creation, equity, climate compliance

---

## Фаза 7 — Contact Page

- [ ] Hero: "Let's Build the Future Together"
- [ ] Форма: Name, Email, Phone (opt), Dropdown (8 типов: Fleet / Property / Retail / Municipality / Driver / Investor / Press / Other), Message
- [ ] Office info: адреса email (info@, partnership@, pr@), телефон (TBD)
- [ ] Визуально оформить как premium experience, не как generic форму

---

## Фаза 8 — Визуал и Анимации

- [ ] Scroll-triggered анимации появления секций (Framer Motion / GSAP)
- [ ] Hover-эффекты на карточках, кнопках, навигации
- [ ] Параллакс или depth-эффекты для hero секций
- [ ] Плавные переходы между страницами
- [ ] Glassmorphism элементы (если подходит к стилю)
- [ ] Микро-анимации на иконках и чекмарках
- [ ] Loading state / skeleton screens

---

## Фаза 9 — Адаптивность и Оптимизация

- [ ] Mobile-first responsive рефакторинг всех страниц
- [ ] Оптимизация изображений (WebP, lazy loading)
- [ ] SEO: мета-теги, Open Graph, structured data, semantic HTML
- [ ] Доступность (a11y): ARIA labels, keyboard navigation, contrast
- [ ] Performance: Lighthouse audit, Core Web Vitals
- [ ] Тестирование в браузерах (Chrome, Safari, Firefox, mobile Safari/Chrome)

---

## Фаза 10 — Финальная полировка

- [ ] Кросс-страничная консистентность (стили, тон, spacing)
- [ ] Проверка всех CTA и форм
- [ ] Финальный визуальный review в браузере
- [ ] Подготовка к деплою (production build, environment variables)
- [ ] Деплой на staging → review → production

---

## Примечания

- **Видео для Hero**: бриф упоминает "Nano Banano?" — нужно уточнить формат и источник видео
- **Команда (About page)**: placeholder — нужны фото и биографии основателей
- **Rewards тарифы (App page)**: помечены как placeholder в брифе
- **Адрес офиса и телефон**: TBD в брифе
- **Дополнительные локации**: "as sites are confirmed" — нужна система для добавления новых карточек
