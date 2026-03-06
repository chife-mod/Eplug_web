# UX Hub — Главная точка входа

**Файл:** `UX/index.html`  
**Тип:** Redirect-страница  
**Роль:** Точка входа в UX-раздел — автоматический редирект на `sitemap.html`

---

## Описание

Главный хаб агрегирует все UX-материалы с верхней навигационной панелью. Позволяет переключаться между Sitemap и всеми Wireframes без перезагрузки страницы через iframe или навигацию.

---

## Структура

```
UX/
├── index.html          ← Этот файл (хаб с навигацией)
├── sitemap.html        ← Визуальная карта сайта
└── wireframes/
    ├── index.html      ← Каталог wireframes (карточки)
    ├── home.html
    ├── about.html
    ├── network.html
    ├── partners.html
    └── contact.html
```

---

## Страницы (Wireframes)

| № | Страница | Файл |
|---|---|---|
| 01 | Home / Главная | `wireframes/home.html` |
| 02 | About / О компании | `wireframes/about.html` |
| 03 | Network / Сеть хабов | `wireframes/network.html` |
| 04 | Partners / Партнёры | `wireframes/partners.html` |
| 05 | Contact / Контакты | `wireframes/contact.html` |

---

## Зависимости

- `shared-header.js` — общая навигационная шапка
- `assets/` — логотипы и медиа

---

## Известные ограничения

- Статический HTML, без фреймворка
- При добавлении новой страницы нужно обновить `UX/wireframes/index.html` (карточки)
