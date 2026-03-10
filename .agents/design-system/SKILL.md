---
name: Eplug Design System
description: Единый источник правды для дизайн-токенов, типографики, иконок и UI-паттернов проекта Eplug Web. Все значения вытяжены из Figma-переменных.
---

# Eplug Design System

> **ОБЯЗАТЕЛЬНО** к применению при создании/редактировании любого компонента.
> Полная документация: `docs/design-system.md`
> CSS-переменные: `concept_v2/src/index.css`

## Цвета — ТОЛЬКО эти 6 токенов

```
--color-brand-fuchsia:  #FF00C5   (Electric Fuchsia — CTA, акценты)
--color-brand-purple:   #2E0054   (Electric Purple — dark sections)
--color-brand-ice:      #DEDCF9   (Ice White — light section bg)
--color-brand-graphit:  #0C0C0C   (Graphit Black — text on light)
--color-brand-white:    #FFFFFF   (PureWhite — text on dark, white bg)
--color-brand-dark:     #0C0214   (Deep Dark — dark hero bg)
```

**ЗАПРЕЩЕНО:** Придумывать цвета, использовать gradient-цвета вне палитры, использовать `red`, `blue`, `green`, `#646cff` и т.д.

## Типографика — ТОЛЬКО Montserrat

Семейство: `Montserrat` — для ВСЕХ текстов (headings + body).

| Токен | Size | Weight | Line-Height | Использование |
|-------|------|--------|-------------|---------------|
| `--text-h1` | 64px | 700 | 1.1 | Hero page titles, uppercase |
| `--text-h2` | 48px | 700 | 1.1 | Section titles, uppercase |
| `--text-h3` | 32px | 700 | 1.1 | Sub-section titles |
| `--text-h4-semi` | 24px | 600 | 1.1 | Card headers |
| `--text-h4` | 24px | 400 | 1.3 | Descriptive text |
| `--text-h5-semi` | 20px | 600 | 1.2 | Feature titles (letter-spacing: 1px) |
| `--text-h5` | 20px | 500 | 1.2 | Taglines |
| `--text-body` | 16px | 400 | 1.54 | Main body text |
| `--text-body-compact` | 16px | 400 | 1.2 | Cards, compact blocks |
| `--text-small` | 14px | 400 | 1.2 | Descriptions, footer links |
| `--text-caption` | 12px | 400 | 1.0 | Labels, legal |
| `--text-menu` | 16px | 500 | 1.0 | Navbar items |

**ЗАПРЕЩЕНО:** Размеры вне таблицы (96px, 120px, 40px). Шрифты вне Montserrat (Inter, Roboto, Outfit, Arial).

## Иконки — ТОЛЬКО @tabler/icons-react

Размеры: 16px, 20px, 24px, 32px, 64px.

Основные: `bolt` (бренд), `mail`, `device-mobile-charging`, `chevron-left/right`, `arrow-up-right`, `arrow-right`, `plus`, `x`, `steering-wheel`, `brand-uber`, `building-skyscraper`, `air-conditioning`, `toilet-paper`, `shopping-bag-check`, `shield-check`, `loader`, `building-store`, `bulb`, `arrows-maximize`, `brand-linkedin`, `brand-facebook`, `brand-x`.

**ЗАПРЕЩЕНО:** Lucide, Heroicons, Font Awesome, кастомные SVG-иконки (кроме логотипа Eplug).

## UI-паттерны

### Радиусы
- Карточки: `16px`
- Кнопки, Navbar: `8px`
- Button Switcher outer: `12px`

### Glassmorphic Card
```css
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(28px);
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: 16px;
```

### Сетка
- Max width: `1440px`
- Content padding: `80px` horizontal
- Section gap: `8px`

## Checklist для каждого компонента

- [ ] Цвета ТОЛЬКО из 6 токенов?
- [ ] Шрифт ТОЛЬКО Montserrat?
- [ ] Размеры текста ТОЛЬКО из таблицы?
- [ ] Иконки ТОЛЬКО @tabler/icons-react?
- [ ] border-radius: 16px/8px/12px?
- [ ] Нет выдуманных gradient/shadow?
