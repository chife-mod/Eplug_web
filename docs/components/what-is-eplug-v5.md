# WhatIsEplug v5 — Табbed секция с image reel

**Файл:** `concept_v2/src/components/v5/WhatIsEplug.jsx`  
**Тип:** UI-компонент (React / Vite) — крупная секция  
**Роль:** «What Is Eplug?» — 3-колоночная секция с табами, image slider и контентом

---

## Описание

Полноэкранная секция с заголовком «THE CHARGING INFRASTRUCTURE MODERN CITIES DESERVE». Три таба (колонки слева), горизонтальный image slider (по центру, 409×470px) и текстовый контент (справа). Все три элемента анимированы при scroll через `useInView` (Framer Motion).

Создана строго по Figma. Используются локальные PNG/SVG-ассеты.

---

## Структура / 3 колонки

| Позиция | Содержание |
|---|---|
| **Левая** | Список кликабельных табов (с bolt-иконкой у активного) |
| **Центр** | Image slider на spring — горизонтальный рельс, карточка 409×470 |
| **Правая** | Текст и icon-list для активного таба (AnimatePresence mode="wait") |

---

## Табы (3 шт.)

| ID | Заголовок | Изображение |
|---|---|---|
| `urban` | The Urban Reality | `winter-car.png` |
| `built` | Built From Scratch | `night-gas_station.png` |
| `different` | What Makes Us Different | `cheetah.png` |

---

## Анимации

| Элемент | Анимация |
|---|---|
| Заголовок | Fade + Y slide-down при входе в viewport |
| Левая колонка | Slide-in from left (x: -30) при scroll |
| Image slider | Scale 0.96→1 + fade при scroll |
| Правая колонка | Slide-in from right (x: 30) при scroll |
| Смена таба (image) | Spring horizontal slide (stiffness 55, damping 20) |
| Смена таба (текст) | AnimatePresence mode="wait", spring enter / fast ease exit |
| Ambient glow | `blur(55px)` копия текущего фото за слайдером |
| Авто-смена | Каждые 8 сек через `setInterval` |

---

## Фоновые элементы

- `triangle-pattern.svg` — декоративный паттерн по левому краю
- Ambient glow — blurred copy of the active image (z-index 0, behind slider)

---

## Ассеты (требуются локально)

```
concept_v2/src/assets/images/
├── winter-car.png
├── night-gas_station.png
├── cheetah.png
└── triangle-pattern.svg
```

---

## Тест-роут

Доступен по `/test-whatis` в dev-режиме (`bg-[#0A0A0A]`).

---

## Зависимости

- `framer-motion` (`motion`, `AnimatePresence`, `useInView`)
- `@tabler/icons-react` (8 иконок в контент-блоках)
- Локальные ассеты: 3 PNG + 1 SVG

---

## Известные ограничения

- Desktop-only верстка (абсолютная позиционировка колонок, нет мобильного брейкпоинта)
- shadow на image реализован через отдельный sibling-div (обходной путь для `overflow:hidden` + `boxShadow` конфликт)
