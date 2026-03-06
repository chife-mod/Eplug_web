# TheApp — Горизонтальный скролл-раздел

**Файл:** `concept_v2/src/components/TheApp.jsx`  
**Тип:** UI-компонент (React / Vite)  
**Роль:** Секция «The App & Loyalty Program» с горизонтальным pin-скроллом (GSAP)

---

## Описание

Полноэкранная секция, демонстрирующая мобильное приложение Eplug и программу лояльности. При скролле страница «пинается» (фиксируется), а содержимое едет горизонтально — 4 панели, каждая с уникальным UI внутри телефонного мокапа.

Визуально: гигантский фон с номером панели, контент-колонка слева, glassmorphic телефонный мокап справа.

---

## Панели (4 шт.)

| № | Заголовок | Контент в телефоне |
|---|---|---|
| 1 | Seamless Charging Experience | Radar map + stall status card |
| 2 | Rewards That Actually Matter | Points balance + партнёрские редим-карточки |
| 3 | Fleet & Power User Tools | Pro Tier badge + fleet stats |
| 4 | Community Integration | Hub photo + partner perks list |

---

## Технология

- **GSAP ScrollTrigger** — горизонтальный скролл с `pin: true`, `scrub: 1.5`, `snap`
- **Framer Motion** — *не используется* в этом компоненте (только в Hero)
- **TailwindCSS** — стилизация через utility-классы
- Glassmorphic телефонный мокап — чистый CSS (`backdrop-blur`, `border`, `shadow`)

---

## Нижний блок (CTA)

Фиксированная подложка внизу секции: email-инпут + кнопка «Join Waitlist».

---

## Зависимости

- `gsap` + `gsap/ScrollTrigger`
- `App.jsx` — монтируется как дочерний компонент
- CSS-переменные: `--color-brand-violet`, `--color-brand-fuchsia`

---

## Известные ограничения

- Работает только в `concept_v2` (React/Vite)
- Горизонтальный скролл может конфликтовать с другими ScrollTrigger-секциями
- На мобильных телефонный мокап скрыт (`hidden lg:flex`)
