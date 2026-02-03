# Anastasiya Gurina - Photography Portfolio & NFT Gallery Monorepo

[![Deploy Portfolio](https://github.com/aleksandrkireev/Anastasiya-Gurina/actions/workflows/deploy.yml/badge.svg)](https://github.com/aleksandrkireev/Anastasiya-Gurina/actions/workflows/deploy.yml)

**[Русская версия](#русская-версия) ниже**

## English Version

A modern monorepo containing a photography portfolio website and a Telegram Mini App NFT marketplace, built with Bun workspaces, Turborepo, React, Next.js, and TON blockchain.

### 📦 Monorepo Structure

```
/
├── apps/
│   ├── portfolio/              # Photography portfolio website
│   └── telegram-mini-app/      # Telegram Mini App for NFT purchases
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── typescript-config/      # Shared TypeScript configurations
│   ├── backend/                # Hono backend API
│   └── contracts/              # TON blockchain smart contracts
├── package.json                # Root workspace configuration
├── turbo.json                  # Turborepo pipeline configuration
└── bun.lock                    # Lockfile
```

### 🌟 Features

#### Portfolio Website
- **Responsive Design**: Optimized for all devices
- **Internationalization**: English and Russian support
- **Theme Switching**: Light, dark, and system themes
- **Photo Gallery**: Interactive gallery with modal viewing
- **GitHub Pages**: Automatic deployment

#### Telegram Mini App
- **TON Connect**: Wallet integration
- **NFT Marketplace**: Browse and purchase photography NFTs
- **Telegram Integration**: Native Telegram features
- **Responsive**: Optimized for mobile

#### Backend API
- **RESTful API**: Clean, documented endpoints
- **NFT Management**: Browse, purchase, verify ownership
- **Payment Processing**: TON blockchain verification
- **Fast**: Built on Bun runtime with Hono

#### Smart Contracts
- **NFT Collection**: TEP-62 compliant
- **Royalties**: Configurable royalty system
- **Batch Minting**: Efficient multi-NFT deployment
- **TypeScript Wrappers**: Type-safe contract interactions

### 🚀 Technologies

- **Monorepo**: Bun Workspaces + Turborepo
- **Frontend**: React 19, Next.js 15, TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **Backend**: Hono + Bun
- **Blockchain**: TON (The Open Network)
- **UI Components**: Radix UI
- **Package Manager**: Bun 1.3

### 🛠️ Development

#### Prerequisites
- Bun 1.3.0 or later
- Node.js 18+ (for some dependencies)

#### Getting Started

```bash
# Install dependencies
bun install

# Start all apps in development mode
bun run dev

# Start specific app
cd apps/portfolio && bun run dev
cd apps/telegram-mini-app && bun run dev
cd packages/backend && bun run dev

# Build all packages
bun run build

# Build specific package
bun run build:portfolio
bun run build:telegram
bun run build:backend
bun run build:contracts

# Run type checking
bun run type-check

# Clean all build artifacts
bun run clean
```

#### Available Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start all apps in development mode |
| `bun run build` | Build all packages |
| `bun run build:portfolio` | Build portfolio only |
| `bun run build:telegram` | Build Telegram app only |
| `bun run build:backend` | Build backend only |
| `bun run build:contracts` | Build smart contracts only |
| `bun run type-check` | Run TypeScript type checking |
| `bun run test` | Run all tests |
| `bun run clean` | Clean build artifacts |

### 📱 Apps

#### Portfolio Website
- **URL**: https://aleksandrkireev.github.io/Anastasiya-Gurina/
- **Tech**: Vite + React + TypeScript
- **Features**: Photo gallery, i18n, theme switching
- **Deployment**: GitHub Pages via Actions

#### Telegram Mini App
- **Tech**: Next.js 15 + TON Connect
- **Features**: NFT marketplace, wallet integration, payments
- **Deployment**: Vercel / Telegram hosting

#### Backend API
- **Port**: 8000 (development)
- **Tech**: Hono + Bun
- **Features**: NFT management, payment verification
- **Documentation**: See `packages/backend/README.md`

#### Smart Contracts
- **Network**: TON Testnet/Mainnet
- **Tech**: FunC + TON Blueprint
- **Standard**: TEP-62 (NFT)
- **Documentation**: See `packages/contracts/README.md`

### 🔗 Integration

All packages are interconnected:

- **telegram-mini-app** → uses **@workspace/ui** components
- **telegram-mini-app** → calls **backend** API
- **backend** → uses **@workspace/contracts** wrappers
- **portfolio** → uses **@workspace/ui** components

### 📝 Documentation

- [Portfolio Documentation](./apps/portfolio/README.md)
- [Telegram App Documentation](./apps/telegram-mini-app/README.md)
- [Backend API Documentation](./packages/backend/README.md)
- [Smart Contracts Documentation](./packages/contracts/README.md)
- [Development Guide](./CLAUDE.md)

### 🚢 Deployment

#### Portfolio (GitHub Pages)
Automatically deployed via GitHub Actions on push to `main` branch.

#### Telegram Mini App
1. Build: `bun run build:telegram`
2. Deploy to Vercel or Telegram hosting
3. Configure bot commands in @BotFather

#### Backend
1. Build: `bun run build:backend`
2. Deploy to your server or cloud platform
3. Set environment variables

#### Smart Contracts
1. Configure wallet in `packages/contracts/.env`
2. Deploy: `cd packages/contracts && bun run deploy`

### 🔐 Environment Variables

Create `.env` files in respective packages:

**packages/backend/.env**
```env
PORT=8000
NODE_ENV=development
TON_RECIPIENT_ADDRESS=your_wallet_address
TONCENTER_API_KEY=your_api_key
```

**packages/contracts/.env**
```env
TONCENTER_API_KEY=your_api_key
WALLET_MNEMONIC=your wallet mnemonic
```

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### 📄 License

MIT License - feel free to use this monorepo structure for your own projects!

---

## Русская версия

Современный монорепозиторий, содержащий сайт-портфолио фотографа и Telegram Mini App для покупки NFT, построенный с использованием Bun workspaces, Turborepo, React, Next.js и блокчейна TON.

### 📦 Структура монорепозитория

```
/
├── apps/
│   ├── portfolio/              # Сайт-портфолио фотографа
│   └── telegram-mini-app/      # Telegram Mini App для покупки NFT
├── packages/
│   ├── ui/                     # Общие UI компоненты
│   ├── typescript-config/      # Общие конфигурации TypeScript
│   ├── backend/                # Backend API на Hono
│   └── contracts/              # Смарт-контракты TON
├── package.json                # Корневая конфигурация workspace
├── turbo.json                  # Конфигурация пайплайна Turborepo
└── bun.lock                    # Lockfile
```

### 🌟 Возможности

#### Сайт-портфолио
- **Адаптивный дизайн**: Оптимизирован для всех устройств
- **Интернационализация**: Поддержка русского и английского
- **Переключение тем**: Светлая, темная и системная темы
- **Фотогалерея**: Интерактивная галерея с модальным просмотром
- **GitHub Pages**: Автоматический деплой

#### Telegram Mini App
- **TON Connect**: Интеграция кошелька
- **NFT Маркетплейс**: Просмотр и покупка NFT фотографий
- **Интеграция с Telegram**: Нативные функции Telegram
- **Адаптивность**: Оптимизировано для мобильных устройств

### 🛠️ Разработка

```bash
# Установка зависимостей
bun install

# Запуск всех приложений
bun run dev

# Запуск конкретного приложения
cd apps/portfolio && bun run dev
cd apps/telegram-mini-app && bun run dev

# Сборка
bun run build
bun run build:portfolio
bun run build:telegram

# Проверка типов
bun run type-check
```

### 📚 Документация

- [Документация Portfolio](./apps/portfolio/README.md)
- [Документация Telegram App](./apps/telegram-mini-app/README.md)
- [Документация Backend](./packages/backend/README.md)
- [Документация Smart Contracts](./packages/contracts/README.md)
- [Руководство разработчика](./CLAUDE.md)

### 🚀 Развертывание

- **Portfolio**: GitHub Pages (автоматически)
- **Telegram App**: Vercel / Telegram hosting
- **Backend**: Любой сервер с поддержкой Bun
- **Контракты**: TON Testnet/Mainnet

### 📄 Лицензия

MIT License
