# Eplug Web — Design System (из Figma)

> [!IMPORTANT]
> Этот файл — единственный источник правды для цветов, типографики, иконок и UI-компонентов.
> Все значения вытяжены из переменных Figma (`get_variable_defs`) и утверждённых макетов.
> **НЕ используй** значения, которых нет в этом файле.

---

## 🎨 Цвета (Color Tokens)

Полная палитра — **6 цветов**, без исключений:

| Имя (Figma) | HEX | Назначение |
|---|---|---|
| **Electric Fuchsia** | `#FF00C5` | Акцент, CTA-кнопки, highlights, active states |
| **Electric Purple** | `#2E0054` | Тёмный акцент, заголовки-числа (99%+, 2026), dark sections |
| **Ice White** | `#DEDCF9` | Светлый фон секций (lavender), карточки, team section |
| **Graphit Black** | `#0C0C0C` | Основной текст на светлом фоне |
| **PureWhite** | `#FFFFFF` | Текст на тёмном фоне, фон белых секций |
| **Deep Dark** | `#0C0214` | Фон тёмных секций (Hero градиент, What Is Eplug) |

### Дополнительные (derived, не переменные Figma, но используются в макетах)

| HEX | Контекст |
|---|---|
| `#EFEEFF` | Фон секции "Charging With Us in 2026" (Home) |
| `#101223` | Конец градиента Footer |
| `rgba(0,0,0,0.8)` | Navbar, Button Switcher bg |
| `rgba(255,255,255,0.2)` | Glassmorphic cards bg |
| `rgba(255,255,255,0.4)` | Glassmorphic cards border |
| `rgba(12,2,20,0.64)` | Metric card bg (Hero) |
| `rgba(222,220,249,0.5)` | Amenity chips (Network Point Card) |

---

## 🔤 Типографика (Typography)

**Одно семейство: `Montserrat`** — без исключений.

### Текстовые стили (Text Styles)

| Имя стиля (Figma) | Weight | Size | Line-Height | Letter-Spacing | Назначение |
|---|---|---|---|---|---|
| **H1** | Bold (700) | `64px` | `1.1` | `0` | Hero заголовки, page titles |
| **H2** | Bold (700) | `48px` | `1.1` | `0` | Секционные заголовки (uppercase) |
| **H3 Bold** | Bold (700) | `32px` | `1.1` | `0` | Подзаголовки, card titles |
| **H4 Semibold** | SemiBold (600) | `24px` | `1.1` | `0` | Card headers, team names |
| **H4 Regular** | Regular (400) | `24px` | `1.3` | `0` | Подтекст, дескрипторы |
| **H5 Semibold** | SemiBold (600) | `20px` | `1.2` | `1px` | Feature titles (300kW DC Fast) |
| **H5 Medium** | Medium (500) | `20px` | `1.2` | `0` | Footer tagline "Faster to ⚡ Charge" |
| **Body 1** | Regular (400) | `16px` | `1.54` | `0` | Основной текст |
| **Body 1 (alt)** | Regular (400) | `16px` | `1.2` | `0` | Компактный текст в карточках |
| **Body 2** | Regular (400) | `14px` | `1.2` | `0` | Мелкий текст, описания сотрудников |
| **Menu Item** | Medium (500) | `16px` | `1.0` | `0` | Navbar пункты |
| **Menu Item 2** | Regular (400) | `14px` | `1.0` | `1px` | Footer links |
| **Menu Item 3** | Regular (400) | `12px` | `1.0` | `0` | Footer мелкий (Navigation, Legal labels) |

### Правила

- **Headlines (H1, H2, H3)** — всегда `uppercase`
- **H1** = `64px` — ТОЛЬКО для Hero (top-level page title)
- **H2** = `48px` — секционные заголовки
- **H3** = `32px` — подзаголовки внутри секций
- **НЕ используй** размеры вне этой таблицы (96px, 120px, 40px и т.д. — **запрещены**)
- **НЕ используй** другие шрифты (Inter, Roboto — **запрещены**)

---

## ⚡ Иконки (Tabler Icons)

**Библиотека: `@tabler/icons-react`** — без исключений.

### Используемые иконки (полный перечень из 3 макетов)

| Иконка | Назначение | Размер |
|---|---|---|
| `tabler:bolt` | Молния — главный бренд-символ Eplug | 20px, 24px, 64px |
| `tabler:plus` | Bullet point в списках, "ещё" | 16px, 20px |
| `tabler:x` | Перечёркнутый пункт (проблемы в Problem card) | 20px |
| `tabler:mail` | Contact Us кнопка | 24px |
| `tabler:device-mobile-charging` | App кнопка | 24px |
| `tabler:steering-wheel` | For Drivers card | 32px |
| `tabler:brand-uber` | For Fleets card | 32px |
| `tabler:building-skyscraper` | For Cities / Property CTA | 32px, 64px |
| `tabler:chevron-left` | Slider arrow left | 24px |
| `tabler:chevron-right` | Slider arrow right | 24px |
| `tabler:arrow-up-right` | CTA button arrow | 24px |
| `tabler:arrow-right` | CTA button arrow (Network) | 24px |
| `tabler:air-conditioning` | Climate lounge | 20px, 24px |
| `tabler:toilet-paper` | Real restrooms | 20px, 24px |
| `tabler:shopping-bag-check` | Retail integration | 20px |
| `tabler:shield-check` | 24/7 security | 20px |
| `tabler:loader` | Uptime 99%+ | 20px |
| `tabler:building-store` | Retail (Network page) | 24px |
| `tabler:bulb` | LED lighting | 24px |
| `tabler:arrows-maximize` | Walking distance | 24px |
| `tabler:brand-linkedin` | Social link | 20px |
| `tabler:brand-facebook` | Social link | 20px |
| `tabler:brand-x` | Social link (Twitter/X) | 20px |

### Размеры иконок

| Размер | Где |
|---|---|
| `16px` | Bullet-point "plus" в списках |
| `20px` | Feature-item icons, social links, Problem card "x" |
| `24px` | Navbar buttons, CTA arrows, amenity icons |
| `32px` | Card headers (Drivers, Fleets, Cities) |
| `64px` | Hero decorative bolt, CTA decorative |

---

## 🧩 UI-компоненты (Patterns)

### Navbar
```
backdrop-blur: 10px
background: rgba(0, 0, 0, 0.8)
padding: 20px 24px
border-radius: 8px
height: 56px
position: center
font: Menu Item (Montserrat Medium 16px)
active indicator: 6px dot (fuchsia) under active item
```

### Button Switcher (App + Contact Us)
```
container: backdrop-blur 10px, bg rgba(0,0,0,0.8), padding 4px, border-radius 12px
inactive button: transparent, padding 16px 24px, height 48px, border-radius 8px
active button (Contact Us): bg #FF00C5, same padding
font: Montserrat Medium 16px white
icons: 24px (device-mobile-charging, mail)
```

### Section Label (повторяющийся паттерн)
```
icon: 16px SVG (eplug bolt mark)
text: Montserrat Regular 16px
gap: 8px
```

### CTA Button (fuchsia)
```
background: #FF00C5
height: 48px
border-radius: 8px
padding: 16px 24px (or 16px left, 16px right with icon)
font: Montserrat Medium 16px white
icon-right: 24px (arrow-up-right or arrow-right)
```

### CTA Button (outline)
```
background: transparent
border: 2px solid #2E0054
height: 48px  
border-radius: 8px
font: Montserrat Medium 16px, color #2E0054
```

### Glassmorphic Card
```
background: rgba(255, 255, 255, 0.2)
backdrop-filter: blur(28px)
border: 1px solid rgba(255, 255, 255, 0.4)
border-radius: 16px
padding: 24px 32px
shadow: 0px 52px 15px rgba(0,0,0,0.01), 0px 33px 13px rgba(0,0,0,0.04), 
        0px 19px 11px rgba(0,0,0,0.15), 0px 8px 8px rgba(0,0,0,0.26), 
        0px 2px 5px rgba(0,0,0,0.29)
```

### Image Card
```
border-radius: 16px
overflow: hidden
object-fit: cover
```

### Team Member Card
```
background: white
border-radius: 16px
overflow: hidden
width: 302px
photo: padded 8px, border-radius 8px, height 319px
content: padding 16px 24px 24px
name: H4 Semibold (24px)
role: Body 1 (16px), opacity 70%
bio: Body 2 (14px), opacity 70%
socials: 40×40 circles, bg #DEDCF9, icon 20px opacity 70%
```

### Footer
```
background: linear-gradient(to bottom, #2E0054, #101223)
border-radius: 16px (outer container)
padding: 64px horizontal
4 columns: Navigation / For Drivers / For Partners / Legal
link font: Menu Item 2 (14px Regular, opacity 80%)
label font: Menu Item 3 (12px Regular, opacity 50%)
logo: ePlug white version
tagline: "Faster to ⚡ Charge" — H5 Medium 20px, color #DEDCF9
bottom bar: border-top rgba(255,255,255,0.2), copyright 12px
```

---

## 📐 Сетка и отступы

| Параметр | Значение |
|---|---|
| **Max width** | `1440px` |
| **Content padding** | `80px` horizontal |
| **Content width** | `1280px` (1440 - 80×2) |
| **Section gap** | `8px` between major sections |
| **Section padding** | `40px` top, `80px` bottom |
| **Card gap** | `8px` – `24px` |
| **Card border-radius** | `16px` (cards), `8px` (buttons, navbar) |
| **Logo** | `219px × 80px`, positioned `left: 80px, top: 32px` |
