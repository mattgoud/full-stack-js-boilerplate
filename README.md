# Full-Stack JavaScript/TypeScript Boilerplate

A modern, high-performance monorepo boilerplate for building scalable web applications. This project is optimized for developer experience and performance, utilizing a strictly typed environment and the latest industry standards.

## 🏗️ Architecture

The project is organized as a monorepo using **Turborepo** and **pnpm** workspaces:

- **`apps/frontend`**: Next.js 16+ (App Router) with React 19, Tailwind CSS v4, Shadcn/UI, and Fumadocs.
- **`apps/backend`**: NestJS 11 application with Prisma ORM providing a RESTful API.
- **`packages/shared`**: Shared TypeScript types, DTOs, and utility functions used by both frontend and backend.
- **`apps/backend/prisma`**: Database schema and migrations using Prisma ORM with PostgreSQL.

## 🤖 AI Agent & Living Documentation

This boilerplate is designed to be **AI-First**. It includes a "Living Documentation" workflow that ensures code and documentation stay in sync.

- **Agent Context**: Optimized for **Gemini CLI** (and other LLMs) via the `.gemini/` folder.
- **Rules & Skills**: Custom instructions in `.gemini/rules.md` and `.gemini/skills.md` guide AI agents through complex tasks.
- **Sync Verification**: Use the `doc-check` tool to ensure architectural changes are documented.

## 📚 Documentation

The project includes an integrated documentation system built with **Fumadocs**:

- **Location**: `apps/frontend/content/docs`
- **Access**: [http://localhost:3000/dashboard/docs](http://localhost:3000/dashboard/docs)
- **Features**: MDX support, full-text search, and automated page tree generation.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Latest LTS recommended.
- **pnpm**: `v10.28.1`.
- **Docker**: Required for local database and services.

### Installation

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   pnpm install
   ```

### Running the Project

Choose one of the following methods to run the application:

#### Option 1: Local Development (Recommended)
This method allows for hot-reloading and better debugging.
1. **Start the database**:
   ```bash
   docker compose up db -d
   ```
2. **Run dev servers**:
   ```bash
   pnpm dev
   ```
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001](http://localhost:3001)

#### Option 2: Full Docker (Production-like)
Run the entire stack (Database, Backend, and Frontend) inside containers.
```bash
docker compose up
```

## 🛠️ Key Commands

- `pnpm dev`: Start all applications in development mode.
- `pnpm build`: Build all packages and applications.
- `pnpm lint`: Run ESLint across the entire monorepo.
- `pnpm turbo check-types`: Run TypeScript type checking globally.
- `pnpm doc-check`: Verify if documentation is in sync with code changes.
- `pnpm --filter backend prisma:migrate`: Run database migrations.

## 📐 Development Conventions

- **Strict Typing**: Mandatory strict mode for TypeScript.
- **No Prettier**: Formatting and linting are handled exclusively by ESLint.
- **Shared Code**: All common interfaces and DTOs MUST reside in `@repo/shared`.
- **UI Components**: Standard Shadcn/UI CLI commands are supported (e.g., `pnpm dlx shadcn@latest add ...`).

---
Generated with 💜 by Gemini CLI.