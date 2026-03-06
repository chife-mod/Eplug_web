# Hero — Главная секция с анимацией

**Файл:** `concept_v2/src/components/Hero.jsx`  
**Тип:** UI-компонент (React / Vite)  
**Роль:** Первый экран концепта — брутальная типографика, видео-фон, метрики

---

## Описание

Полноэкранная hero-секция для концептуального лендинга Eplug. Cinematic-подход: тёмный видеофон, массивная типографика «URBAN FAST CHARGING.», живая карточка с меняющимися метриками, две CTA-кнопки. Входная анимация через GSAP при загрузке.

---

## Состав / Элементы

| Элемент | Описание |
|---|---|
| Видеофон | `hero-bg.mp4`, `mix-blend-screen`, opacity 40% |
| Overlay | Двойной фиолетовый оверлей для затемнения видео |
| Accent line | Вертикальная fuchsia-линия слева (GSAP scaleY анимация) |
| Типографика | `URBAN FAST CHARGING.` — 11vw, font-black, stroke-эффект на второй строке |
| Metrics Card | Glassmorphic карточка, показывает 3 метрики с ротацией каждые 3.5 сек |
| CTA кнопки | «View Network Map» (белая) + «Partner with us» (outline) |

---

## Анимации

- **GSAP entrance**: слова `.hero-word` появляются снизу вверх (stagger 0.05s)
- **GSAP entrance**: `.hero-sub` и `.hero-signal` (задержка 0.5–0.8s)
- **Framer Motion AnimatePresence**: смена метрик в карточке (blur + translate)
- **Progress bar**: линейное заполнение синхронизировано с ротацией метрик (3.5s)

---

## Метрики (в карточке)

1. AVG CHARGE TIME — 22 MIN
2. NETWORK UPTIME — 98.6%
3. CHARGING POINTS — 2,400+

---

## CTA-кнопки

| Кнопка | Стиль | Действие |
|---|---|---|
| View Network Map | Белая, стрелка с hover | Переход на карту сети |
| Partner with us | Outline border/white | Переход на форму партнёрства |

---

## Зависимости

- `gsap`
- `framer-motion` (`motion`, `AnimatePresence`)
- `/assets/videos/hero-bg.mp4` — видеофайл (должен быть в `concept_v2/public/assets/videos/`)
- CSS-переменные: `--color-brand-violet`, `--color-brand-fuchsia`

---

## Известные ограничения

- Видео рендерится только если файл `hero-bg.mp4` доступен локально или на хостинге
- На мобильных Metrics Card скрыта (`hidden lg:flex`)
- GSAP и Framer Motion — параллельно, следить за конфликтами анимаций при интеграции
