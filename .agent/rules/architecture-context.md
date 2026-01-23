# Architecture Context

## Folder Structure
- `/apps/frontend`: Next.js Application (Port 3000).
- `/apps/backend`: NestJS API (Port 3001).
- `/packages/shared`: Logic, types, and DTOs shared between frontend and backend (`@repo/shared`).
- `/docker-compose.yml`: Orchestration (PostgreSQL on port 5432).

## pnpm Workflow
- Installation: `pnpm install` at the root.
- Add dependency: `pnpm add [package] --filter [app]`.
- Global execution: `pnpm dev` (runs `turbo dev`).
- Validation: `pnpm turbo check-types`, `pnpm lint`, and `pnpm test`.

## Environment Variables
- `.env` files are located in `apps/frontend/` and `apps/backend/`.
- Ensure `DATABASE_URL` is set in the backend for Prisma.
