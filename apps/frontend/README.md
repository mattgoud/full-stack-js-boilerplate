# Frontend (Next.js 16 + React 19)

The frontend application is built with **Next.js 16 (App Router)** and **React 19**, styled with **Tailwind CSS v4** and **Shadcn/UI**.

## 🚀 Key Features

- **Framework**: Next.js 16.1.4 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 + Tailwind Animate
- **UI Components**: Shadcn/UI (Radix UI)
- **Documentation**: Fumadocs (MDX based)
- **Charts**: Recharts
- **Type Safety**: Strict TypeScript
- **Monorepo Integration**: Imports types/DTOs from `@repo/shared`

## 📦 Components & Structure

- **`app/`**: Next.js App Router pages and layouts.
- **`content/docs/`**: MDX documentation files.
- **`components/ui`**: Reusable Shadcn/UI primitive components (e.g., `Button`, `Card`).
- **`components/`**: Feature-specific components.
- **`lib/source.ts`**: Fumadocs configuration and page tree generation.
- **`lib/utils.ts`**: Utility functions (specifically `cn` for class merging).

## 🛠️ Getting Started

### Installation
Dependencies are managed at the root, but you can add frontend-specific packages:
```bash
pnpm add [package] --filter frontend
```

### Running Development Server
```bash
pnpm --filter frontend dev
```
Runs on [http://localhost:3000](http://localhost:3000).

### Adding UI Components
Navigate to the frontend directory and use the standard Shadcn CLI:
```bash
cd apps/frontend
pnpm dlx shadcn@latest add [component-name]
```

## 🧪 Testing

Run unit tests with Vitest:
```bash
pnpm --filter frontend test
```

## 📝 Conventions

- **State Management**: Use React Server Components (RSC) by default. Add `'use client'` only when interactivity is required.
- **Icons**: Use `lucide-react`.
- **Data Fetching**: Fetch data in Server Components and pass it to Client Components.