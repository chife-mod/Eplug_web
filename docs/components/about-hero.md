# AboutHero — Hero секция страницы «About Us»

**Файл:** `concept_v2/src/components/AboutHero.jsx`  
**Превью:** `concept_v2/about-hero-preview.html` (открыть в браузере)  
**Тип:** UI-компонент (React / Vite) — Hero секция  
**Роль:** Первый экран страницы About — брутальная типографика, manifesto, live stats

---

## Описание

Полноэкранная Hero-секция для страницы «About Us». Построена на 5 принципах award-winning design: брутальная editorial-типографика, layered depth через outline-текст, numbered manifesto, fuchsia signal line и живая stats-карточка с циклическими метриками.

---

## Структура / Layout

```
┌─────────────────────────────────────────────────────┐
│ NAV: [⚡ EPLUG]  About | Network | App | Partners  [Contact] │
├──┬──────────────────────────────────────┬───────────┤
│  │                                      │ STATS CARD│
│  │  □ About Eplug — Our Story           │ ─────────│
│ ▌│                                      │ 250M+     │
│ ▌│  EPLUG ────                          │ Americans │
│ ▌│  THE FIRST  (outline)                │ ▓▓▓░░░░░ │
│ ▌│  NETWORK.                            └───────────┤
│ ▌│  THAT GETS CITIES                               │
│  │                                                  │
│  │ ─── │ 01 We're not highway...    [OUR NETWORK →]│
│  │     │ 02 We're not a garage...   [PARTNER ────→]│
│  │     │ 03 We are the urban...     Built from...  │
│  ├─────────────────────────────────────────────────┤
│  │ Brooklyn · Manhattan · Chicago · LA    [↕ Scroll]│
└──┴─────────────────────────────────────────────────┘
```

---

## Ключевые элементы

### Типографика (3 строки + subheadline)

| Строка | Стиль | Эффект |
|---|---|---|
| `EPLUG —` | Solid white | fuchsia тире как пунктуация |
| `THE FIRST` | **Outline** (transparent + stroke) | Создаёт глубину |
| `NETWORK.` | Solid white | fuchsia точка = «заряд» |
| `THAT GETS CITIES` | Маленький, spaced | Subheadline |

Паттерн solid → outline → solid = cinematic layering.  
Размер: `clamp(64px, 11vw, 168px)`, Montserrat 900.

### Stats Card (top-right)

Glassmorphic карточка, циклически показывает 3 метрики (каждые 3.2s):
- **2030** — Launch year
- **250M+** — Americans in cities
- **100%** — DC Fast commitment

Синхронизированный прогресс-бар. `backdrop-filter: blur(24px)`.

### Manifesto (3 тезиса)

| № | Вес | Текст |
|---|---|---|
| 01 | Muted `rgba(255,255,255,0.38)` | We're not highway... |
| 02 | Muted `rgba(255,255,255,0.38)` | We're not a garage... |
| 03 | **Bold white + fuchsia «We are»** | Кульминация |

### Fuchsia Signal Line

Вертикальная 2px линия по левому краю, высота `55dvh`.  
Анимация: `scaleY 0 → 1` при входе. Glow: `box-shadow rgba(255,0,197,0.5)`.

### Parallax Background

JS scroll-parallax: bg сдвигается на 12% скорости скролла.  
Фото: Unsplash URL → заменить на `/public/assets/about-hero-bg.jpg`.

---

## Анимационная последовательность

| Время | Элемент | Анимация |
|---|---|---|
| 0.15s | Eyebrow badge | fadeUp |
| 0.30s | «EPLUG—» | wordReveal (y 110% → 0) |
| 0.36s | «THE FIRST» | wordReveal |
| 0.40s | Signal line | scaleY 0 → 1 |
| 0.42s | «NETWORK.» | wordReveal |
| 0.56s | «THAT GETS CITIES» | wordReveal |
| 1.00s | Stats card | slideInRight |
| 1.10s | Manifesto 01 | fadeUp |
| 1.30s | Manifesto 02 | fadeUp |
| 1.50s | Manifesto 03 | fadeUp |
| 1.60s | CTA кнопки | fadeUp |
| 1.90s | Footer bar | fadeUp |

---

## Дизайн-токены

| Элемент | Значение | Токен |
|---|---|---|
| Фон | `#0C0214` | `--color-brand-violet` |
| Акцент | `#FF00C5` | `--color-brand-fuchsia` |
| Lavender текст | `#DEDCF9` | `--brand-grey` |
| Heading font | Montserrat 900 | `--font-heading` |
| Body font | Outfit 500 | `--font-body` |
| Glassmorphism | `rgba(255,255,255,0.04)` + blur(24px) | — |

---

## Зависимости

- GSAP — entrance animations (wordReveal, scaleY, fadeUp)
- React useState/useEffect — stats card cycling
- Монтируется в `App.jsx` / страница About
- Фоновое фото: сейчас Unsplash URL, нужно заменить на локальный ассет

---

## Известные ограничения

- Фоновое фото — Unsplash URL, для production заменить на `/public/assets/about-hero-bg.jpg`
- Desktop-first дизайн, мобильная адаптация требует проверки
- Stats card скрыта на мобильных (аналогично Hero)
