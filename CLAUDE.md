# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **monorepo** containing:
1. **Photography Portfolio** - Website showcasing Anastasiya Gurina's photography
2. **Telegram Mini App** - NFT marketplace for purchasing exclusive photos
3. **Backend API** - Hono-based API for NFT and payment management
4. **Smart Contracts** - TON blockchain contracts for NFT minting
5. **Shared Packages** - UI components and TypeScript configurations

Built with Bun Workspaces, Turborepo, React, Next.js, and TON blockchain.

## Development Commands

### Package Manager
This project uses **Bun** as its package manager. Always use `bun` instead of `npm`, `yarn`, or `pnpm`.

### Monorepo Commands (from root)
- `bun install` - Install all dependencies
- `bun run dev` - Start all apps in development mode
- `bun run build` - Build all packages with Turborepo
- `bun run build:portfolio` - Build only portfolio app
- `bun run build:telegram` - Build only Telegram Mini App
- `bun run build:backend` - Build only backend API
- `bun run build:contracts` - Build only smart contracts
- `bun run type-check` - Run TypeScript type checking across all packages
- `bun run test` - Run tests across all packages
- `bun run clean` - Clean all build artifacts

### App-Specific Commands
Navigate to specific app directory first:

**Portfolio** (`cd apps/portfolio`)
- `bun run dev` - Start Vite dev server (port 5173)
- `bun run build` - Build portfolio
- `bun run preview` - Preview production build

**Telegram Mini App** (`cd apps/telegram-mini-app`)
- `bun run dev` - Start Next.js dev server (port 3000)
- `bun run dev:https` - Start with HTTPS for Telegram testing
- `bun run build` - Build Next.js app
- `bun run start` - Start production server

**Backend** (`cd packages/backend`)
- `bun run dev` - Start API with hot reload (port 8000)
- `bun run build` - Build backend
- `bun run start` - Start production server

**Contracts** (`cd packages/contracts`)
- `bun run build` - Compile FunC contracts
- `bun run test` - Run contract tests
- `bun run deploy` - Deploy to TON blockchain

## Monorepo Architecture

### Workspace Structure
This monorepo uses Bun Workspaces with Turborepo for build orchestration:

```
/
├── apps/
│   ├── portfolio/          # Vite + React portfolio
│   └── telegram-mini-app/  # Next.js Telegram app
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── typescript-config/  # Shared TS configs
│   ├── backend/            # Hono API server
│   └── contracts/          # TON smart contracts
├── package.json            # Root workspace
├── turbo.json             # Turborepo config
└── bun.lock
```

### Dependency Graph
- `telegram-mini-app` depends on `@workspace/ui`
- `telegram-mini-app` calls `backend` API
- `backend` uses `@workspace/contracts`
- `portfolio` uses `@workspace/ui`
- All apps extend `@workspace/typescript-config`

### Apps Overview

#### 1. Portfolio (`apps/portfolio`)
Vite + React photography portfolio with:

- **App.tsx** - Main application component that composes all sections and wraps them with context providers (ThemeProvider, LayoutProvider)
- **Header** - Navigation bar with language switcher, theme switcher, and layout switcher
- **Hero, About, PhotoGallery, Contact, Footer** - Page sections rendered in order
- **ui/** - Reusable UI components (Button, DropdownMenu) using Radix UI primitives

### Context Providers Architecture
The app uses React Context for global state management:

1. **ThemeProvider** (src/components/theme-provider.tsx)
   - Manages theme state: 'light', 'dark', or 'system'
   - Persists theme preference to localStorage (key: 'vite-ui-theme')
   - Uses a ThemeWrapper component that applies theme classes after client-side mount
   - Detects system theme using `window.matchMedia('(prefers-color-scheme: dark)')`
   - Export: `useTheme()` hook for accessing theme state

2. **LayoutProvider** (src/components/layout-switcher.tsx)
   - Manages layout width state: default or full-width
   - Persists layout preference to localStorage (key: 'layout-width')
   - Applies 'layout-full-width' class to document.body when full-width is enabled
   - Export: `useLayout()` hook and `LayoutSwitcher` component

### i18n (Internationalization)
- Configuration: src/lib/i18n.ts
- Translation files: src/locales/en/translation.json and src/locales/ru/translation.json
- Default language: English ('en')
- Access translations using `useTranslation()` hook from react-i18next
- When adding new translatable strings, update both translation files

### Photo Gallery
- Photos are stored in public/photos/ directory
- Photo paths are constructed using `import.meta.env.BASE_URL` to handle GitHub Pages base path
- The base path is set to "/Anastasiya-Gurina/" in vite.config.ts for GitHub Pages deployment
- Photo list is hardcoded in App.tsx (portfolioPhotos array)
- Uses react-photo-album library for gallery layout

### Path Aliasing
- `@/*` is aliased to `src/*` (configured in vite.config.ts and tsconfig.json)
- Always use `@/` imports for internal modules: `import { cn } from "@/lib/utils"`

### Styling
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Theme colors are managed through CSS custom properties (not shown in config files - check actual CSS/component usage)
- Uses tailwind-merge and class-variance-authority for dynamic class composition
- Utility function: `cn()` from src/lib/utils.ts for conditional class merging

## Deployment

### GitHub Pages
- Automatic deployment via GitHub Actions (.github/workflows/deploy.yml)
- Triggers on push to main branch, pull requests, or manual dispatch
- Uses Bun for installing dependencies and building
- Builds output to ./dist directory
- **Important**: Base path is set to "/Anastasiya-Gurina/" in vite.config.ts
  - When referencing public assets, always use `import.meta.env.BASE_URL` prefix
  - Example: `${import.meta.env.BASE_URL}photos/image.jpg`

### Build Configuration
- vite.config.ts:
  - base: "/Anastasiya-Gurina/" (GitHub Pages repository path)
  - Uses Vite override: rolldown-vite@7.1.12 (package.json overrides)
  - Path alias: @ → ./src
  - Output directory: dist

## TypeScript Configuration
- Multi-config setup: tsconfig.json references tsconfig.app.json and tsconfig.node.json
- Base URL set to "." with path mapping for @/* alias
- Run `bun run type-check` to check types without building

## Key Dependencies
- React 19.1.1 with React DOM
- Vite 7 (overridden with rolldown-vite)
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Radix UI for accessible components (dropdown-menu, slot)
- i18next and react-i18next for internationalization
- react-photo-album for photo gallery
- Lucide React for icons
- next-themes integration (via custom ThemeProvider)

## Working with Photos
To add/remove photos:
1. Add image files to public/photos/
2. Update the portfolioPhotos array in src/App.tsx
3. Ensure paths use the base URL prefix pattern: `${base}photos/filename.jpg`

## Working with Translations
To add new translatable content:
1. Add translation keys to both src/locales/en/translation.json and src/locales/ru/translation.json
2. Use `useTranslation()` hook in components: `const { t } = useTranslation();`
3. Access translations: `{t('key.path')}`

#### 2. Telegram Mini App (`apps/telegram-mini-app`)
Next.js 15 app for NFT marketplace:

- **app/layout.tsx** - Root layout with Telegram and TON Connect providers
- **app/page.tsx** - Home page with wallet connection and NFT preview
- **app/providers/** - Context providers for Telegram WebApp and TON Connect
- **next.config.ts** - Configuration for Telegram Mini Apps (headers, optimization)
- **tailwind.config.ts** - Extends base config with Telegram theme variables

**Key Features:**
- Telegram WebApp SDK integration
- TON Connect for wallet connection
- Telegram theme color support via CSS variables
- Mobile-optimized UI
- Access to Telegram user data

**Important Files:**
- `app/providers/telegram-provider.tsx` - Telegram WebApp context
- `app/providers/ton-connect-provider.tsx` - TON Connect setup
- `public/tonconnect-manifest.json` - TON Connect manifest (in portfolio public/)

#### 3. Backend API (`packages/backend`)
Hono API server running on Bun:

- **src/index.ts** - Main server with routes and middleware
- **src/api/nft/** - NFT management endpoints
- **src/api/payments/** - Payment processing endpoints

**API Endpoints:**
- `GET /api/nft` - List all NFTs
- `GET /api/nft/:id` - Get NFT details
- `GET /api/nft/:id/metadata` - TEP-64 metadata
- `POST /api/nft/:id/purchase` - Purchase NFT
- `POST /api/payments/invoice` - Create payment invoice
- `POST /api/payments/verify` - Verify TON transaction

**Key Features:**
- CORS configured for portfolio and Telegram app
- In-memory storage (TODO: add database)
- TON transaction verification (TODO: implement)

#### 4. Smart Contracts (`packages/contracts`)
TON blockchain NFT contracts:

- **contracts/nft_collection.fc** - Main NFT collection contract (TEP-62)
- **wrappers/NftCollection.ts** - TypeScript wrapper
- **blueprint.config.ts** - TON Blueprint configuration

**Contract Operations:**
- `op=1` - Mint single NFT
- `op=2` - Batch mint NFTs
- `op=3` - Change collection owner

**Get Methods:**
- `get_collection_data()` - Collection info
- `get_nft_address_by_index(index)` - Calculate NFT address
- `royalty_params()` - Royalty configuration
- `get_nft_content(index, content)` - NFT metadata

#### 5. Shared UI Package (`packages/ui`)
Reusable UI components:

- **src/components/ui/button.tsx** - Button component with variants
- **src/components/ui/dropdown-menu.tsx** - Dropdown menu component
- **src/lib/utils.ts** - cn() utility for class merging
- **src/index.css** - Base styles with theme variables
- **tailwind.config.ts** - Base Tailwind configuration

**Usage in apps:**
```typescript
// Note: Currently using relative paths due to module resolution
import { Button } from '../../../../packages/ui/src/components/ui/button';
```

#### 6. TypeScript Config Package (`packages/typescript-config`)
Shared TypeScript configurations:

- **base.json** - Base TS config (strict mode, ESM)
- **react.json** - React/Vite specific config
- **nextjs.json** - Next.js specific config

**Usage:**
```json
{
  "extends": "@workspace/typescript-config/react.json"
}
```

## Turborepo Configuration

### Build Pipeline (`turbo.json`)
Tasks are orchestrated with dependencies:

- `build` - Depends on ^build (build dependencies first)
- `dev` - No cache, persistent mode
- `test` - Depends on ^build
- `type-check` - Depends on ^build

### Caching
Turborepo caches:
- Build outputs: `dist/**`, `.next/**`, `build/**`
- Test outputs: `coverage/**`

### Parallel Execution
Turborepo runs independent tasks in parallel automatically.

## TON Blockchain Integration

### TON Connect
- Manifest: `apps/portfolio/public/tonconnect-manifest.json`
- Provider: `apps/telegram-mini-app/app/providers/ton-connect-provider.tsx`
- Network: Testnet (configurable in contracts package)

### Smart Contract Deployment
1. Configure wallet in `packages/contracts/.env`
2. Add mnemonic: `WALLET_MNEMONIC=your mnemonic here`
3. Deploy: `cd packages/contracts && bun run deploy`

### Payment Flow
1. User connects wallet via TON Connect
2. Frontend creates invoice via backend API
3. User sends TON to collection address
4. Backend verifies transaction on-chain
5. Backend mints NFT to buyer address

## Important Notes

### Module Resolution
Currently using relative paths for workspace packages in some places due to Vite/Rolldown resolution issues:
```typescript
// Instead of:
import { Button } from '@workspace/ui/button';

// Use:
import { Button } from '../../../../packages/ui/src/components/ui/button';
```

### GitHub Pages Base Path
Portfolio uses base path `/Anastasiya-Gurina/` - remember when:
- Adding new routes
- Referencing public assets
- Configuring deployment

### Port Configuration
- Portfolio: 5173 (Vite)
- Telegram App: 3000 (Next.js)
- Backend: 8000 (Hono)

### Environment Variables
Create `.env` files:
- `packages/backend/.env` - Backend config
- `packages/contracts/.env` - Blockchain config

## Development Workflow

### Adding New Features
1. Determine which package needs changes
2. If shared UI needed, add to `packages/ui`
3. If contract changes needed, update `packages/contracts`
4. If API endpoint needed, add to `packages/backend`
5. Implement in app (`portfolio` or `telegram-mini-app`)
6. Test locally with `bun run dev`
7. Build with `bun run build` to verify

### Testing Changes
- Portfolio: `cd apps/portfolio && bun run build`
- All packages: `bun run build` (from root)
- Type check: `bun run type-check`

### Common Tasks

**Add new photo to portfolio:**
1. Add image to `apps/portfolio/public/photos/`
2. Update `portfolioPhotos` array in `apps/portfolio/src/App.tsx`
3. Use base URL prefix: `${base}photos/newphoto.jpg`

**Add new NFT endpoint:**
1. Add route in `packages/backend/src/api/nft/routes.ts`
2. Add service method in `packages/backend/src/api/nft/service.ts`
3. Update Telegram app to call new endpoint

**Deploy new smart contract:**
1. Write contract in `packages/contracts/contracts/`
2. Create wrapper in `packages/contracts/wrappers/`
3. Add deployment script in `packages/contracts/scripts/`
4. Deploy: `cd packages/contracts && bun run deploy`

## Troubleshooting

### Build Failures
- Check Turborepo cache: `bun run clean`
- Reinstall dependencies: `rm -rf node_modules bun.lock && bun install`
- Check TypeScript errors: `bun run type-check`

### Module Resolution Issues
- Verify workspace protocol in package.json: `"@workspace/ui": "workspace:*"`
- Check tsconfig paths are correct
- Use relative paths if workspace imports fail

### TON Integration Issues
- Verify TONCENTER_API_KEY in `.env`
- Check network configuration (testnet vs mainnet)
- Verify wallet has sufficient balance for gas

## Resources

- [Bun Workspaces](https://bun.com/guides/install/workspaces)
- [Turborepo Docs](https://turborepo.com/docs)
- [TON Docs](https://docs.ton.org/)
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
