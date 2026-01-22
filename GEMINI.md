# Project Overview

This is a full-stack JavaScript/TypeScript boilerplate project organized as a monorepo. It utilizes **TurboRepo** for build system orchestration and **PNPM** for package management.

## Architecture

The project consists of the following main components:

*   **Frontend (`apps/frontend`)**: A **Next.js** application (App Router) using **Next.js 16** and **React 19**.
    *   **Styling**: **Tailwind CSS v4** with **PostCSS**.
    *   **UI Components**: **Shadcn/UI** (Radix UI primitives).
    *   **Documentation**: **Fumadocs** (integrated MDX documentation).
    *   **Icons**: `lucide-react`.
*   **Backend (`apps/backend`)**: A **NestJS 11** application.
    *   **Database ORM**: **Prisma** with a PostgreSQL database.
    *   **API**: RESTful API structure.
*   **Shared (`packages/shared`)**: A shared library (`@repo/shared`) for common code, TypeScript types, DTOs, and utility functions shared between frontend and backend.
*   **Infrastructure**: **Docker Compose** is used to orchestrate the PostgreSQL database and services.

## Prerequisites

*   **Node.js**: Compatible with the versions specified in the project (LTS recommended).
*   **PNPM**: The project uses `pnpm v10.28.1`.
*   **Docker**: Required for running the database and services.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    pnpm install
    ```

2.  **Environment Setup:**
    *   Ensure Docker is running.
    *   Check for `.env` files in `apps/backend` and `apps/frontend`. Copy `.env.example` if available.

3.  **Start Database:**
    ```bash
    docker compose up db -d
    ```

4.  **Run Development Server:**
    To run the entire stack in development mode:
    ```bash
    pnpm dev
    ```
    *   **Frontend**: `http://localhost:3000`
    *   **Backend**: `http://localhost:3001`

    Alternatively, run the full stack via Docker Compose:
    ```bash
    docker compose up
    ```

## Key Commands

These commands utilize TurboRepo to execute tasks across the workspace.

*   **Build**: `pnpm build`
*   **Lint**: `pnpm lint`
*   **Type Check**: `pnpm turbo check-types`
*   **Clean**: `pnpm clean`

### Backend Specifics (`apps/backend`)

*   **Database Migration**: `pnpm --filter backend prisma:migrate`
*   **Generate Prisma Client**: `pnpm --filter backend prisma:generate`
*   **Seed Database**: `pnpm --filter backend prisma:seed`
*   **Tests**: `pnpm --filter backend test` (Unit) / `pnpm --filter backend test:e2e` (E2E)

### Frontend Specifics (`apps/frontend`)

*   **Dev Server**: `pnpm --filter frontend dev`
*   **Add UI component**: `cd apps/frontend && pnpm dlx shadcn@latest add [component]`

## Development Conventions

*   **Strict Types**: Strict mode is mandatory. Shared types MUST be in `@repo/shared`.
*   **No Prettier**: Use ESLint for both linting and formatting.
*   **Language**: All code and comments must be in English.

