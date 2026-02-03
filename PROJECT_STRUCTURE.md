# Документация Проекта: Anastasiya Gurina Portfolio Monorepo

## Обзор
Этот проект представляет собой монорепозиторий, управляемый **TurboRepo** и использующий **Bun** в качестве пакетного менеджера. Он объединяет портфолио-сайт, Telegram Mini App, бэкенд-сервис и смарт-контракты для блокчейна TON.

## Структура Проекта

### Приложения (`apps/`)

#### 1. Portfolio (`apps/portfolio`)
Веб-сайт портфолио, созданный для демонстрации работ (фотографии).
- **Стек:** React 19, Vite (Rolldown), Tailwind CSS v4, TypeScript.
- **Ключевые библиотеки:**
  - `i18next` / `react-i18next`: Интернационализация (EN/RU).
  - `react-photo-album`: Галерея фотографий.
  - `lucide-react`: Иконки.
  - `next-themes`: Управление темами (светлая/темная).
- **Сборка:** Использует Vite.

#### 2. Telegram Mini App (`apps/telegram-mini-app`)
Мини-приложение для Telegram с функционалом NFT.
- **Стек:** Next.js 15, React 19, Tailwind CSS v4, TypeScript.
- **Ключевые библиотеки:**
  - `@telegram-apps/sdk-react`: SDK для интеграции с Telegram.
  - `@tonconnect/ui-react`: Подключение кошельков TON.
  - `playwright`: E2E тестирование.
- **Сборка:** Next.js build.

### Пакеты (`packages/`)

#### 1. Backend (`packages/backend`)
API сервис для поддержки приложений.
- **Стек:** Hono (веб-фреймворк), Bun (runtime).
- **База данных:** Prisma ORM (использует SQLite в dev-режиме: `dev.db`).
- **Зависимости:** Зависит от пакета `@workspace/contracts` (вероятно, для использования типов или ABI контрактов).

#### 2. Contracts (`packages/contracts`)
Смарт-контракты для блокчейна TON.
- **Стек:** FunC (язык смарт-контрактов), Blueprint (среда разработки).
- **Ключевые файлы:** `contracts/nft_collection.fc` (логика NFT коллекции).
- **Инструменты:** `@ton/sandbox` (тестирование), `@ton/ton` (клиент).

#### 3. UI (`packages/ui`)
Общая библиотека UI компонентов.
- Используется в `apps/portfolio` и `apps/telegram-mini-app`.
- **Стек:** React, Tailwind CSS.

#### 4. TypeScript Config (`packages/typescript-config`)
Общие конфигурации TypeScript для обеспечения единых стандартов кода.

## Команды (Scripts)

Запуск из корня проекта:

- **Разработка (все приложения):** `bun run dev` (запускает `turbo run dev`)
- **Сборка (все приложения):** `bun run build`
- **Очистка:** `bun run clean`
- **Линтинг:** `bun run lint`

### Специфичные команды:
- `bun run build:portfolio`: Сборка только портфолио.
- `bun run build:telegram`: Сборка только Telegram Mini App.
- `bun run build:backend`: Сборка бэкенда.
- `bun run build:contracts`: Компиляция контрактов.

## Технологический Стек (Summary)

- **Runtime & Package Manager:** Bun
- **Monorepo Tool:** TurboRepo
- **Frontend Frameworks:** React 19, Next.js 15
- **Styling:** Tailwind CSS v4
- **Backend:** Hono, Prisma
- **Blockchain:** TON (FunC, Blueprint, TonConnect)
- **Testing:** Playwright, Bun Test
