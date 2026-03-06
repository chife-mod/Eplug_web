# HeaderButtons — Интерактивные кнопки навигации

**Файл:** `concept_v2/src/components/v5/HeaderButtons.jsx`  
**Тип:** UI-компонент (React / Vite) — переиспользуемый  
**Роль:** Пара CTA-кнопок в шапке с анимированным sliding pill при hover

---

## Описание

Два таба/кнопки («App» и «Contact Us») в glassmorphic-контейнере. При наведении на любую кнопку фоновый pill (fuchsia) плавно скользит на неё через `layoutId` Framer Motion. По умолчанию (и при уходе мыши) активна кнопка «Contact Us».

Компонент создан строго по Figma-спецификации. Все размеры точные: `h-[48px]`, `pl-[16px]`, `pr-[24px]`, `rounded-[8px]`.

---

## Состав / Элементы

| Элемент | Описание |
|---|---|
| Внешний контейнер | `bg-white/40 backdrop-blur-[10px] rounded-[12px]` — glassmorphic |
| Кнопки (×2) | `App` (иконка телефон) + `Contact Us` (иконка письмо) |
| Sliding pill | `motion.div layoutId="header-active-pill"` — fuchsia `#FF00C5`, `rounded-[8px]` |
| Иконки | `@tabler/icons-react` — `IconDeviceMobileCharging`, `IconMail`, size 24, stroke 1.5 |
| Текст | Montserrat Medium 16px, `tracking-[0.16px]` |

---

## Интерактивность

| Событие | Поведение |
|---|---|
| `onMouseEnter` (кнопка) | `setHoveredTab(tab.id)` → pill скользит к этой кнопке |
| `onMouseLeave` (контейнер) | `setHoveredTab('contact')` → pill возвращается на Contact |

---

## Анимация

- **Framer Motion `layoutId`** — spring-анимация перемещения pill: `stiffness: 400, damping: 30`
- Цвет иконки и текста меняется через `transition-colors duration-200`: белый (active) ↔ `#0c0c0c` (inactive)

---

## Тест-роут

Доступен по адресу `/test-header-buttons` в dev-режиме (светлый фон `#DEDCF9`).

---

## Зависимости

- `framer-motion` (`motion`, `AnimatePresence`)
- `@tabler/icons-react`
- Монтируется в `App.jsx` на роуте `/test-header-buttons`

---

## Известные ограничения

- Hover-логика (не click) → на тач-устройствах поведение отличается
- Кнопки пока не функциональны — нет `onClick` обработчиков
