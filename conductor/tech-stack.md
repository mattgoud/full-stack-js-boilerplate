# Technology Stack

## Core Technologies
- **Language:** TypeScript (Strict Mode mandatory)
- **Package Manager:** pnpm (v10.28.1)
- **Monorepo Management:** Turborepo

## Frontend (`apps/frontend`)
- **Framework:** Next.js 16+ (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Component Library:** Shadcn/UI (Radix UI primitives)
- **Documentation:** Fumadocs (MDX based)
- **Icons:** Lucide React
- **Testing:** Vitest
- **Authentication:** GitHub OAuth (via Backend Passport)

## Backend (`apps/backend`)
- **Framework:** NestJS 11
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Testing:** Jest (Unit & E2E)
- **Authentication:**
    - Passport.js with `passport-github2` strategy
    - JWT (JSON Web Tokens) for session management
    - Next.js Middleware for server-side route protection

## Shared Package (`packages/shared`)
- **Purpose:** Centralized TypeScript types, DTOs, and utility functions shared across applications.

## Infrastructure
- **Containerization:** Docker & Docker Compose
- **CI/CD Readiness:** Optimized for AI-assisted workflows and automated documentation verification.
