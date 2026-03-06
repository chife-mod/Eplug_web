# Wireframes — Каталог и страницы

**Файлы:** `UX/wireframes/index.html`, `UX/wireframes/*.html`  
**Тип:** Страница-каталог + набор страниц (Page Assembly)  
**Роль:** Набросок страниц сайта для согласования структуры и UX

---

## Описание

Набор wireframe-страниц — структурных набросков каждой страницы сайта. Все страницы выполнены в единой CSS-системе (`wireframe-styles.css`). Каталог (`index.html`) выводит карточки с превью и прямыми ссылками на каждую страницу.

---

## Состав

| Файл | Страница | Размер |
|---|---|---|
| `index.html` | Каталог wireframes (карточки) | 7.5 KB |
| `home.html` | Home / Главная | 27.5 KB |
| `about.html` | About / О компании | 14.6 KB |
| `network.html` | Network / Сеть хабов | 14.6 KB |
| `partners.html` | Partners / Партнёры | 20.9 KB |
| `contact.html` | Contact / Контакты | 13.0 KB |
| `wireframe-styles.css` | Общие стили wireframes | 13.9 KB |

---

## Дизайн-система wireframes

`wireframe-styles.css` — единый файл со стилями всех wireframe-страниц. Содержит:
- Сетки и лейауты
- Компоненты-заглушки (placeholder sections)
- Типографику и цвета каркаса

---

## Зависимости

- `wireframe-styles.css` — обязателен для всех страниц
- `shared-header.js` — общая шапка (подключён через `../shared-header.js`)

---

## Известные ограничения

- Wireframes — это каркас, не финальный дизайн
- `home.html` заметно тяжелее остальных (27 KB) — самая насыщенная страница
- Добавление новой wireframe-страницы требует обновления `index.html` (каталог)
