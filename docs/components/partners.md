# Partners Page — Variant F: Video + Glass Cards

> **Файл:** `drafts/partners/variant-f.html`  
> **Статус:** Основной рабочий вариант (выбран из 6 вариантов A–F)  
> **Стек:** Vanilla HTML / CSS / JS (без библиотек)  
> **UX-ресёрч:** см. `docs/components/partners-page-ux.md`

---

## Архитектура страницы

### Общая структура

```
┌─ Toggle Bar (dev-only, fixed top, 44px) ─────────────┐
├─ Top Nav (.nav-bar, fixed) ───────────────────────────┤
│  ├─ Logo (.nav-logo)                                  │
│  ├─ Center Menu (.nav-center) — About|Network|...     │
│  └─ Buttons (.nav-switcher) — App | Contact Us        │
├─ Hero Section (.hero, 100vh) ─────────────────────────┤
│  ├─ Animated gradient background (.hero-vid)          │
│  ├─ Triple gradient overlay (.hero-overlay)           │
│  ├─ Bottom content: badge + h1 + description          │
│  ├─ Scroll hint (.hero-scroll)                        │
│  └─ Bottom gradient fade (::after → #2E0054)          │
├─ Partners Stage (#partners-stage) ────────────────────┤
│  ├─ Sticky Video Frame (#video-frame, 60vh)           │
│  │   ├─ 4× .vf-layer (curtain reveal bottom→top)     │
│  │   ├─ Watermark labels (FLEET / PROPERTY / ...)     │
│  │   └─ Section counter label                         │
│  └─ Cards Track (.cards-track)                        │
│      ├─ .card-group#fleet-cards (3 glass cards)       │
│      ├─ .card-group#property-cards                    │
│      ├─ .card-group#retail-cards                      │
│      └─ .card-group#muni-cards                        │
├─ CTA Section (.cta-section) ──────────────────────────┤
├─ Bottom Nav (#bottom-nav, fixed pill) ────────────────┤
└─ Footer (.site-footer) ──────────────────────────────-┘
```

---

## Ключевые компоненты

### 1. Smart Navbar

**Поведение при скролле:**
- При скролле **вниз** (после 100px): логотип и центральное меню плавно уезжают вверх (`translateY(-120px)` + `opacity: 0`)
- Кнопки **App** и **Contact Us** остаются всегда видимыми
- При малейшем скролле **вверх**: логотип и меню плавно возвращаются

**CSS-анимация:**
```css
.nav-logo, .nav-center {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-bar.nav-hidden .nav-logo {
    transform: translateY(-120px);
    opacity: 0;
}
```

**JS-логика:**
- `scroll` event listener (passive)
- Сравнение `currentScrollY` vs `lastScrollY` для определения направления
- Класс `.nav-hidden` на `.nav-bar`

### 2. Hero Section

- **Высота:** `100vh`, фиксированная
- **Фон:** Анимированный градиент (`gradDrift`, 14s, 300% 300%) — placeholder до реального видео
- **Оверлей:** 3 слоя linear-gradient для затемнения
- **Нижний градиент (`::after`):** 200px, плавный переход от прозрачного к `#2E0054` (Electric Purple) — обеспечивает бесшовный переход к видеоблоку

**Контент (bottom-left + bottom-right):**
- Badge «Partners» с fuchsia dot
- H1: "WE DON'T BUILD ALONE. WE BUILD WITH CITIES."
- Описание: "Property owners. Fleets. Retailers. Municipalities."

### 3. Sticky Video Frame (Leitwind-style)

Вдохновлено [lfrwind.com](https://lfrwind.com) — техника «curtain reveal».

- **Position:** `sticky`, `top: 20vh` (центрирован по вертикали)
- **Высота:** `60vh`
- **Border-radius:** `20px` (все углы)
- **4 слоя `.vf-layer`:** каждый содержит градиентный фон (placeholder для видео/фото)
- **Механика:** слои накладываются друг на друга, `height` анимируется от `0%` до `100%` снизу вверх (curtain reveal)

**Переход между секциями:**
```
Fleet (layer 0) → Property (layer 1) → Retail (layer 2) → Muni (layer 3)
```

Каждый новый слой «открывается» поверх предыдущего снизу вверх при скролле.

### 4. Background Color Interpolation

Фоновый цвет `.partners-stage` плавно интерполируется между 4 цветами при скролле:

| Секция | Цвет | Hex |
|--------|-------|-----|
| Fleet Operators | Electric Purple | `#2E0054` |
| Property Owners | Purple + Fuchsia mix | `rgb(138, 0, 106)` |
| Retail Businesses | Ice White | `#DEDCF9` |
| Municipalities | Pure White | `#FFFFFF` |

Реализация: `lerpColor()` — линейная интерполяция RGB между соседними секциями.

### 5. Glass Cards

- **Backdrop-filter:** `blur(24px)`
- **Background:** `rgba(12, 2, 20, 0.45)`
- **Border:** `1px solid rgba(255, 255, 255, 0.08)`
- **Border-radius:** `20px`
- Каждая карточка содержит: tag, заголовок, описание, иконку/бейдж

### 6. Bottom Nav Pill

- **Position:** `fixed`, `bottom: 28px`, по центру
- **Содержимое:** иконка текущего сегмента + название + chevron
- **Dropdown:** 4 пункта навигации, появляются вверх при клике
- **Синхронизация:** обновляется автоматически при скролле

---

## Цветовая палитра

| Переменная | Значение | Назначение |
|-----------|----------|------------|
| `--fuchsia` | `#FF00C5` | Акцент, CTA, активные элементы |
| `--purple` | `#2E0054` | Основной фон секций |
| `--ice` | `#DEDCF9` | Фон hero, Retail секция |
| `--graphit` | `#0C0C0C` | Nav background |
| `--dark` | `#0C0214` | Body background |

---

## JavaScript Engine

### Scroll-driven Animation Loop (`requestAnimationFrame`)

```
updateVideoFrame() → rAF loop:
  1. Для каждой card-group: вычислить progress (0→1)
  2. Eased progress: easeInOutQuad
  3. Lerp height для плавности (LERP_SPEED = 0.12)
  4. Применить height% к .vf-layer
  5. Определить dominant section (height > 50%)
  6. Интерполировать background-color
  7. Обновить label, watermark, bottom nav pill
```

### Smart Navbar (`scroll` event)

```
scroll event (passive):
  if (scrollY > 100 && scrolling DOWN) → add .nav-hidden
  if (scrolling UP) → remove .nav-hidden
```

---

## Файлы проекта

| Файл | Назначение |
|------|-----------|
| `drafts/partners/variant-f.html` | Основной рабочий файл (standalone) |
| `drafts/partners/index.html` | Все варианты A–D с переключателем |
| `drafts/partners/variant-d.html` | Архивный вариант D |
| `drafts/partners/variant-e.html` | Вариант E — Streamlined |
| `docs/components/partners-page-ux.md` | UX-ресёрч и описание вариантов |
| `docs/components/partners.md` | Эта документация |

---

## TODO

- [ ] Заменить градиентные placeholder'ы на реальные видео/фото
- [ ] Мобильная адаптация (отдельная логика без sticky)
- [ ] Интеграция в основной проект (`concept_v2/`)
- [ ] GSAP / Lenis smooth scroll (опционально)
