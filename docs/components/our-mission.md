# OurMission — Секция «Our Mission» страницы About

**Файл:** `concept_v2/src/components/OurMission.jsx`
**Превью (статика):** `concept_v2/about-our-mission-preview.html` (открыть в браузере)
**Превью (React):** `http://localhost:5173/#/test-our-mission`
**Тип:** UI-компонент (React / Vite) — Content секция
**Роль:** Вторая секция страницы About — миссия, проблема, решение

---

## Описание

Editorial-секция, следующая за AboutHero. Раскрывает суть компании через двухактную структуру: сначала — масштаб проблемы (headline + stats), затем — противопоставление проблемы и решения в параллельных колонках. Завершается манифест-тэглайном «Dense. Fast. Urban.» и CTA. Выполнена в той же дизайн-системе: `--color-brand-violet` фон, Montserrat Black, fuchsia-акценты, GSAP ScrollTrigger.

---

## Структура / Layout

```
┌──────────────────────────────────────────────────────────────┐
│  ● OUR MISSION                                               │
│                                                              │
│  MAKE FAST CHARGING            ┌────────────────────────┐   │
│  AS ESSENTIAL AS               │ THE SCALE OF THE       │   │
│  STREETLIGHTS                  │ PROBLEM                │   │
│                                │                        │   │
│  American cities are going     │ 250M+  urban zones     │   │
│  electric faster than anyone   │  65%   can't charge    │   │
│  predicted. But the infra-     │    0   urban networks  │   │
│  structure is failing them.    └────────────────────────┘   │
│                                                              │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━     │
│  (fuchsia gradient divider)                                  │
│                                                              │
│  THE PROBLEM         ▌  OUR SOLUTION                        │
│                      ▌                                       │
│  01  65% can't       ▌  DC Fast charging where it           │
│      charge at home  ▌  matters — residential zones,        │
│  02  Highways, not   ▌  fleet corridors, retail clusters.   │
│      neighborhoods   ▌                                       │
│  03  Level 2 too     ▌  Not scattered. Not slow.            │
│      slow for city   ▌  Not suburban.                       │
│  04  Fleets can't    ▌                                       │
│      scale           ▌  DENSE.  FAST.  URBAN.               │
│  05  Retail under-   ▌                                       │
│      served          ▌  [SEE OUR NETWORK →]                 │
└──────────────────────────────────────────────────────────────┘
```

---

## Ключевые элементы

### Overline (eyebrow badge)

Паттерн из AboutHero: pulsing fuchsia dot + мелкий caps текст.

```
● OUR MISSION
```

- `font-size: 10px`, `letter-spacing: 0.28em`, `text-transform: uppercase`
- Dot: `bg-[var(--color-brand-fuchsia)]`, `animate-pulse`, glow `box-shadow rgba(255,0,197,0.9)`

### Headline (H2)

Слова рендерятся через `.map()` как отдельные `inline-block` спаны — для word-by-word GSAP reveal.

| Параметр | Значение |
|---|---|
| Шрифт | Montserrat 900, uppercase |
| Размер | `clamp(36px, 4vw, 60px)` |
| Line-height | `1.06` |
| Letter-spacing | `-0.02em` |
| Анимация | `y: 105% → 0`, stagger `0.045s` |

### Stats Card (top-right)

Glassmorphic карточка с тремя ключевыми цифрами:

| Число | Значение | Цвет |
|---|---|---|
| `250M+` | Americans in urban zones | White |
| `65%` | Can't charge at home | **Fuchsia** + glow |
| `0` | Urban-first DC Fast networks before Eplug | White |

`backdrop-filter: blur(20px)`, `border: 1px solid rgba(255,255,255,0.07)`, border-radius `20px`.

### Fuchsia Gradient Divider

Горизонтальный разделитель между двумя блоками:

```css
background: linear-gradient(to right, rgba(255,0,197,0.5) 0%, rgba(255,0,197,0.1) 50%, transparent 100%);
```

Анимация: `scaleX 0 → 1` от левого края при скролле.

### The Problem (левая колонка)

5 пронумерованных проблем с тонкими разделителями между строками:

| № | Стат | Текст |
|---|---|---|
| 01 | **65%** (fuchsia) | of urban households can't charge at home |
| 02 | — | Existing networks focus on highways, not neighborhoods |
| 03 | — | Level 2 chargers are too slow for city turnover |
| 04 | — | Fleets have nowhere to charge at scale |
| 05 | — | Retail and mixed-use properties are underserved |

Разделители: `border-b border-white/[0.07]`
Нумерация: `9px`, `rgba(255,255,255,0.18)`

### Vertical Fuchsia Rule

Разделитель между колонками Problem / Solution:

```css
background: linear-gradient(to bottom, var(--color-brand-fuchsia), rgba(255,0,197,0.08));
box-shadow: 0 0 14px rgba(255,0,197,0.2);
```

Анимация: `scaleY 0 → 1` при скролле. Скрыта на мобильных.

### Our Solution (правая колонка)

- Заголовок `OUR SOLUTION` — muted caps overline
- Основной текст: ключевые места (residential zones, fleet corridors и т.д.) выделены `font-weight: 600, color: white`
- Italic-строка «Not scattered. Not slow. Not suburban.» — `color: rgba(255,255,255,0.38)`

### Tagline «Dense. Fast. Urban.»

Три слова — отдельные overflow-hidden блоки для clip-reveal:

- Шрифт: Montserrat 900, uppercase
- Размер: `clamp(28px, 2.8vw, 44px)`
- Цвет: `var(--color-brand-fuchsia)` + `text-shadow rgba(255,0,197,0.35)`
- Анимация: `y: 80% → 0`, stagger `0.1s`

### CTA Button

```
[SEE OUR NETWORK →]
```

Паттерн из AboutHero: `bg-fuchsia`, square corners, `letter-spacing: 0.18em`.
Hover: `bg-white, color-violet`.

---

## Анимационная последовательность (ScrollTrigger)

Все анимации — on-scroll (`start: 'top 85-90%'`), GSAP `ScrollTrigger`.

| Элемент | Задержка trigger | Анимация |
|---|---|---|
| Eyebrow badge | top 88% | `opacity 0 → 1, y -12 → 0` |
| Headline words | top 85% | `y 105% → 0`, stagger 0.045s |
| Body intro | top 88% | `opacity 0 → 1, y 20 → 0` |
| Stats card | top 85% | `opacity 0 → 1, x 32 → 0` |
| Fuchsia divider | top 90% | `scaleX 0 → 1` |
| Problem items | top 82% | `opacity 0 → 1, x -20 → 0`, stagger 0.12s |
| Solution block | top 82% | `opacity 0 → 1, x 24 → 0` |
| Tagline words | top 88% | `y 80% → 0`, stagger 0.1s |

---

## Дизайн-токены

| Элемент | Значение | Токен |
|---|---|---|
| Фон секции | `#0C0214` | `--color-brand-violet` |
| Fuchsia акцент | `#FF00C5` | `--color-brand-fuchsia` |
| Glow | `rgba(255,0,197,0.35)` | text-shadow |
| Heading font | Montserrat 900 | `--font-heading` |
| Body font | Outfit 400/500 | `--font-body` |
| Glassmorphism | `rgba(255,255,255,0.03)` + `blur(20px)` | — |
| Grid lines | `rgba(255,255,255,0.025)` | — |
| Problem dividers | `rgba(255,255,255,0.07)` | — |

---

## Структура файлов

```
concept_v2/
├── src/components/
│   └── OurMission.jsx          ← React-компонент
└── about-our-mission-preview.html  ← Автономный статик-превью
```

---

## Зависимости

- `gsap` + `gsap/ScrollTrigger` — все scroll-анимации
- `react` (useEffect, useRef) — инициализация GSAP-контекста
- Tailwind CSS v4 — утилиты разметки
- Встраивается после `<AboutHero />` на странице About
- Добавлен тест-роут `/test-our-mission` в `App.jsx`

---

## Размещение на странице About

```
<AboutHero />       ← hero-экран (fullscreen)
<OurMission />      ← эта секция (py-24 lg:py-36)
...                 ← следующие секции
```

---

## Известные особенности

- Headline-слова используют один общий `overflow-hidden` контейнер (не per-word), что корректно работает для многострочного wrap при reveal-анимации
- Вертикальный fuchsia rule скрыт на мобильных (`hidden lg:block`) — на мобильных Problem/Solution идут в колонку
- Стат-карточка и двухколонка переключаются в `flex-col` ниже `lg:` (1024px)
- `65%` в блоке Problem выделен fuchsia; остальные 4 пункта — без стат, только текст
