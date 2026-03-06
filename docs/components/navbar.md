# Navbar — Фиксированная навигация концепта

**Файл:** `concept_v2/src/components/Navbar.jsx`  
**Тип:** UI-компонент (React / Vite)  
**Роль:** Fixed-хедер для concept_v2 с Glass-эффектом при скролле

---

## Описание

Навигационная шапка для концептуального лендинга (concept_v2). По умолчанию прозрачная. При скролле страницы > 50px плавно переходит в glassmorphic-стиль через GSAP: тёмный фон + blur + border.

---

## Состав

| Элемент | Описание |
|---|---|
| Логотип | `<EplugLogo />` — отдельный компонент |
| Меню (desktop) | 4 пункта: About, Network, App & Rewards, Partners — `xl:flex` |
| CTA кнопка | «Contact» — outline style, `md:block` |

---

## Поведение при скролле

| Состояние | Стиль |
|---|---|
| Top (scrollY ≤ 50) | `background: transparent`, нет blur |
| Scrolled (scrollY > 50) | `rgba(12, 2, 20, 0.85)` + `backdropFilter: blur(16px)` + тонкая border |

Переход анимирован через `gsap.to()` (duration: 0.4).

---

## Hover-эффект на пунктах меню

Fuchsia-линия под текстом: `w-0 → w-full` через `transition-all duration-300`, CSS-only.

---

## Зависимости

- `gsap`
- `./EplugLogo` — дочерний компонент (логотип)
- Монтируется в `V5App.jsx`

---

## Известные ограничения

- Меню скрыто до брейкпоинта `xl` (1280px)
- CTA-кнопка скрыта до `md` (768px)
- Пункты меню без роутинга (нет `<Link>`)
