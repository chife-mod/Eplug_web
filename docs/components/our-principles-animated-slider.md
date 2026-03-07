# Our Principles Animated Slider

**Файл:** `concept_v2/src/components/OurPrinciplesAnimatedSlider/`  
**Тип:** UI-компонент (секция)  
**Роль:** Scroll-driven expanding cards section для секции «Our Principles» на странице About Us  
**Figma:** Node `485:1410`  
**Тест-роут:** `/#/test-principles-animated`  
**Статус:** ✅ Done (100% код, 27% дизайн)

---

## Описание

Вертикально сложенные карточки принципов Eplug. При скролле каждая карточка плавно расширяет изображение от компактного состояния до полной ширины. Анимация завершается в момент, когда верхний край карточки касается верхнего края viewport'а.

Референс анимации: `q-industrial.com/en-de/services`

**Ключевое отличие от референса**: Наша реализация полностью адаптивная (fluid), использует CSS custom properties вместо жёстких пикселей, и имеет отдельный мобильный лейаут.

---

## Структура / Состав

```
OurPrinciplesAnimatedSlider/
├── OurPrinciplesAnimatedSlider.jsx   — Секция-обёртка: заголовок + стек карточек
├── AnimatedPrincipleCard.jsx          — Отдельная карточка со scroll-хуком
└── OurPrinciplesAnimatedSlider.css   — Fluid adaptive стили
```

### Данные (`PRINCIPLES_DATA`)
6 принципов, захардкожены в `OurPrinciplesAnimatedSlider.jsx`:
`01 Urban-Only`, `02 100% DC Fast`, `03 Driver-First Design`, `04 Aggressive Deployment`, `05 Community Integration`, `06 Fleet-Grade Reliability`

---

## Анимация (ключевая логика)

Реализована через Framer Motion `useScroll` + `useTransform` + **CSS Custom Properties** внутри каждой карточки.

```jsx
// AnimatedPrincipleCard.jsx
const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 1', 'start 0'],
    //  scrollYProgress = 0  →  карточка входит снизу в viewport
    //  scrollYProgress = 1  →  верх карточки = верх viewport ← 100% ширина
});

// Fluid ширина: 32% → 66% от контейнера
const dynamicWidth = useTransform(scrollYProgress, [0, 1], ['32%', '66%']);

// Aspect Ratio: 2.01 (компакт) → 2.21 (expanded)
const dynamicAspect = useTransform(scrollYProgress, [0, 1], [410/204, 845/381]);

// Применяется как CSS custom properties:
<motion.div style={{ '--dynamic-width': dynamicWidth, '--dynamic-aspect': dynamicAspect }}>
```

**Ключевое правило:** `offset: ['start 1', 'start 0']` — расширение до 100% ширины происходит строго в момент касания верхней границы карточки и верхней границы экрана.

---

## Адаптивность (Super Adaptive)

### Desktop (>1024px)
- Текст: `32%` ширины контейнера, `min-width: 250px`
- Картинка: `32%` → `66%` (анимируется при скролле через CSS custom properties)
- Aspect ratio картинки: `~2.0` → `~2.21` (плавная анимация)
- Типографика: `clamp()` для всех шрифтов

### Tablet (≤1024px)
- Уменьшенные `gap` и `padding`

### Mobile (≤768px)
- `flex-direction: column` — стек: Номер → Заголовок → Текст → Картинка
- Картинка: `width: 100%`, `aspect-ratio: 4 / 3`
- Анимация расширения отключается (CSS переопределяет custom properties)

---

## Дизайн-токены

| Токен              | Значение   |
|--------------------|------------|
| Graphit Black      | `#0C0C0C`  |
| Electric Purple    | `#2E0054`  |
| Electric Fuchsia   | `#FF00C5`  |
| PureWhite          | `#FFFFFF`  |
| Font               | Montserrat |
| Card border color  | `#2E0054` (1px top) |
| Card border-radius | 16px (image) |

### Fluid Typography (clamp)
| Элемент        | Min   | Preferred | Max   |
|----------------|-------|-----------|-------|
| Section title  | 32px  | 4vw       | 48px  |
| Card number    | 20px  | 2vw       | 24px  |
| Card title     | 24px  | 2.5vw     | 32px  |
| Description    | 14px  | 1.5vw     | 16px  |

---

## API / Параметры `AnimatedPrincipleCard`

| Prop          | Тип      | Описание                      |
|---------------|----------|-------------------------------|
| `number`      | string   | Номер принципа: `'01'`–`'06'` |
| `title`       | string   | Заголовок принципа            |
| `description` | string   | Описание                      |
| `imageSrc`    | string   | Ссылка на изображение         |

---

## Зависимости

- `framer-motion` (`useScroll`, `useTransform`, `motion.div`)
- React `useRef`
- CSS Houdini Custom Properties (анимируемые CSS переменные через Framer Motion)
- Assets: `OurPrinciplesStaticCards/assets/` — 6 уникальных изображений

---

## История изменений

| Дата       | Изменение |
|------------|-----------|
| 2026-03-07 | Первая реализация: фиксированные пиксели, desktop-only |
| 2026-03-07 | Рефактор: CSS custom properties, fluid layout, mobile 4:3, clamp() typography |
| 2026-03-07 | Выравнивание картинки по левому краю (flex-start) |

---

## Известные ограничения / TODO

- `z-index` стекинг не применён — карточки не перекрываются (последовательный стек).
- На очень маленьких экранах (<320px) `min-width: 250px` у текста может конфликтовать с gap.
