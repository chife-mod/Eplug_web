# Our Principles Animated Slider

**Файл:** `concept_v2/src/components/OurPrinciplesAnimatedSlider/`  
**Тип:** UI-компонент (секция)  
**Роль:** Scroll-driven expanding cards section для секции «Our Principles» на странице About Us  
**Figma:** Node `485:1410`  
**Тест-роут:** `/#/test-principles-animated`

---

## Описание

Вертикально сложенные карточки принципов Eplug. При скролле каждая карточка плавно расширяет изображение от компактного состояния до полной ширины. Анимация завершается в момент, когда верхний край карточки касается верхнего края viewport'а.

Референс анимации: `q-industrial.com/en-de/services`

---

## Структура / Состав

```
OurPrinciplesAnimatedSlider/
├── OurPrinciplesAnimatedSlider.jsx   — Секция-обёртка: заголовок + стек карточек
├── AnimatedPrincipleCard.jsx          — Отдельная карточка со scroll-хуком
└── OurPrinciplesAnimatedSlider.css   — Pixel-perfect стили (Figma 485:1410)
```

### Данные (`PRINCIPLES_DATA`)
6 принципов, захардкожены в `OurPrinciplesAnimatedSlider.jsx`:
`01 Urban-Only`, `02 100% DC Fast`, `03 Driver-First Design`, `04 Aggressive Deployment`, `05 Community Integration`, `06 Fleet-Grade Reliability`

---

## Анимация (ключевая логика)

Реализована через Framer Motion `useScroll` + `useTransform` внутри каждой карточки.

```jsx
// AnimatedPrincipleCard.jsx
const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 1', 'start 0'],
    //  scrollYProgress = 0  →  карточка входит снизу в viewport
    //  scrollYProgress = 1  →  верх карточки = верх viewport ← 100% ширина
});

const imageWidth  = useTransform(scrollYProgress, [0, 1], [410, 845]);
const imageHeight = useTransform(scrollYProgress, [0, 1], [204, 381]);
const cardHeight  = useTransform(scrollYProgress, [0, 1], [252, 429]);
```

**Ключевое правило:** `offset: ['start 1', 'start 0']` — расширение до 100% ширины происходит строго в момент касания верхней границы карточки и верхней границы экрана.

---

## Figma-размеры

| Состояние | card height | image width | image height |
|-----------|------------|-------------|--------------|
| Компакт   | 252px      | 410px       | 204px        |
| Expanded  | 429px      | 845px       | 381px        |

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

---

## API / Параметры `AnimatedPrincipleCard`

| Prop          | Тип      | Описание                      |
|---------------|----------|-------------------------------|
| `number`      | string   | Номер принципа: `'01'`–`'06'` |
| `title`       | string   | Заголовок принципа            |
| `description` | string   | Описание (поддерживает `\n`)  |
| `imageSrc`    | string   | Ссылка на изображение         |

---

## Зависимости

- `framer-motion` (`useScroll`, `useTransform`, `motion.div`)
- React `useRef`
- Assets: `OurPrinciplesStaticCards/assets/city-urban.png` *(временная заглушка, будет заменена)*

---

## Известные ограничения / TODO

- Изображение `city-urban.png` — временный placeholder. Нужны 6 уникальных изображений для каждого принципа.
- Карточки имеют фиксированную ширину `1280px` — нужна адаптация под меньшие разрешения.
- `z-index` стекинг не применён — карточки не перекрываются (последовательный стек).
- `.principles-slider__scroll-spacer` (60vh) обеспечивает скролл-пространство для последней карточки.
