# AppLoyalty — Секция «The App & Loyalty Program» (3-slide carousel)

**Файл:** `concept_v2/src/components/AppLoyalty.jsx`  
**Вспомогательный:** `concept_v2/src/components/AppLoyaltySlide3.jsx`  
**Figma Node:** `180:408` (секция), `355:2072` (slide 3 — Community Integration)  
**Тип:** UI-компонент (React / Vite) — Content Section  
**Роль:** Презентация мобильного приложения и программы лояльности Eplug  
**Превью:** `http://localhost:5175/#/test-app-loyalty`

---

## Описание

Светлая секция с авто-переключаемым 3-slide каруселем. Левая часть — фоновая сцена на полную ширину (1280×550px), правая — glassmorphic карточка с фичами. На 3-м слайде белая карточка сжимается вверх и появляется тёмная CTA-карточка снизу. Навигация — стрелки с круговым таймером (без пагинации).

---

## Слайды

| # | ID | Заголовок | Фон | Фичи |
|---|---|---|---|---|
| 1 | 0 | SEAMLESS CHARGING EXPERIENCE | Фото зарядной станции + мокап телефона | 5 пунктов |
| 2 | 1 | FLEET & POWER USER TOOLS | Фото зарядной станции | 5 пунктов |
| 3 | 2 | COMMUNITY INTEGRATION | Карта (AppLoyaltySlide3) | 3 пункта + CTA |

---

## Ключевые размеры (Slide 3 — pixel-perfect)

| Элемент | Значение |
|---|---|
| Высота слайда | 550px |
| Белая карточка (slide 3) | 294px |
| Gap | 8px |
| CTA карточка | 192px |
| Bottom offset | 24px |
| **Итого:** | 32top + 294 + 8 + 192 + 24bottom = 550px |

---

## Glassmorphic Card

| Параметр | Значение |
|---|---|
| Ширина | 355px |
| Border-radius | 8px |
| Padding | 32px |
| Фон | `rgba(255,255,255,0.6)` + `backdrop-filter: blur(28px)` |
| Позиция | `right: 112px`, `top: 32px`, `bottom: 24px` |
| Заголовок | Montserrat Bold 700, 32px, uppercase, lh 1.1 |
| Фичи | 16px Regular, gap 12px, width 234px |
| Layout | `space-between` — title вверху, фичи внизу |

---

## CTA Card (slide 3)

| Параметр | Значение |
|---|---|
| Высота | 192px, border-radius 16px |
| Фон | `#2E0054` |
| Декор | Triangle bg SVG (219×400px) |
| Текст | "Rewards you actually want, UX that actually works, and a network you can trust." — 18px, `#DEDCF9` |
| Кнопка | `#FF00C5`, 48px height, full-width, text left + arrow right |

---

## Анимации

| Элемент | Тип | Описание |
|---|---|---|
| Белая карточка — появление | `clipPath` | `inset(100% 0 0 0)` → `inset(0)` — растёт снизу вверх |
| Белая карточка — slide 3 | `bottom` | Сжимается снизу (bottom: 24 → 224) |
| CTA карточка — появление | `clipPath` | `inset(100% 0 0 0)` → `inset(0)` — растёт снизу |
| CTA контент | `opacity` | Fade-in с задержкой 0.65s после роста блока |
| Реверс (уход со slide 3) | `delay` | CTA схлопывается первой, белая карточка расширяется с delay 0.45s |
| Контент карточки | `x + blur` | Fade/slide с stagger 0.07s |
| Таймер | SVG stroke | Круговой прогресс на кнопке Next |

---

## AppLoyaltySlide3 (карта)

| Параметр | Значение |
|---|---|
| Файл | `AppLoyaltySlide3.jsx` |
| Prop `inSlider` | Скрывает правую панель (используется в окружении AppLoyalty) |
| Карта | PNG из Figma, 1061×550px |
| Пины | 5 blue + 1 pink (EplugPin), пульсирующая анимация |
| Лого | `eplug-logo-vertical-fixed.svg` (patched preserveAspectRatio), `left: 380, top: 167, height: 118px` |
| Street labels | Montserrat SemiBold 15.92px, rotated |

---

## Зависимости

- `framer-motion` — AnimatePresence, motion, clipPath/opacity/layout transitions
- React `useState`, `useRef`, `useCallback`, `useEffect`
- Figma assets: PNG/SVG из `public/assets/`
- Монтируется как `<Route path="/test-app-loyalty" />` в `App.jsx`
