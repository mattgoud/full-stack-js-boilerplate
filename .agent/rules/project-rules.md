# Full-Stack JS Project Development Rules

## Tech Stack
- **Frontend**: Next.js 16+ (App Router), Tailwind CSS v4.
- **Backend**: NestJS 11+ (Modular Architecture), Prisma ORM.
- **Monorepo**: pnpm workspaces + Turborepo.
- **Database**: PostgreSQL (Docker).

## Living Documentation Strategy
- **Location**: Documentation content is in `apps/frontend/content/docs/` (MDX).
- **Syncing**: Any modification to architecture, workflows, or critical configurations MUST be immediately reflected in the documentation pages.
- **Verification**: When validating tasks, check if the documentation needs updates.

## Security & Hygiene
- **Secrets**: NEVER commit API keys, secrets, or private keys. Use `.env` files and ensure they are ignored.
- **Cleanup**: Before committing, ensure no temporary log files (`*_output.txt`) or build artifacts are staged.
- **Verification**: The `Security-Check` tool must be part of the pre-commit workflow.

## Code Conventions
- **TypeScript**: Strict mode mandatory.
- **DTOs**: Use the "!" operator (definite assignment assertion) for properties without initializers (e.g., `email!: string`).
- **Formatting**: **FORBIDDEN to use Prettier**. Use only ESLint with Stylistic plugins.
- **Imports**: Prefer imports from the shared package `@repo/shared` for common types and interfaces.
- **Docker**: Always use `docker compose` (modern CLI, no hyphen in usage, e.g., `docker compose up`).

## Architecture
- Shared interfaces and types MUST go in `packages/shared`.
- The backend must inject `PrismaService` for any DB access.

## Tool Usage Protocol
Before validating a task or considering code "finished", you MUST:
1. Consult `.agent/rules/tools.md` to identify the appropriate verification tool.
2. Run lint via `pnpm lint` to ensure rule compliance.
3. Run `pnpm turbo check-types` to validate TypeScript consistency.
4. Verify if `apps/frontend/content/docs/` needs updates.

## UI & Shadcn/UI
- **Installation Protocol**: cd into the frontend directory and run `pnpm dlx shadcn@latest add [component]`.

## Tailwind v4 & CSS
- Theme configuration is done in the `@theme` block of `globals.css` (or equivalent Tailwind v4 config), not in a `tailwind.config.js` file.

## Language & Code Conventions
- **Code & Comments**: All code and comments MUST be in English.
- **DTOs & Interfaces**: Property and file names must follow English naming conventions.
- **Commits**: Git commit messages must also be in English.
