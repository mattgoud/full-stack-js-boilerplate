# Tools Registry (CLI Tools)

## Verification and Quality
- **Linting**: `pnpm turbo lint` (Runs ESLint on the entire monorepo and fixes what can be fixed).
- **Type-Check**: `pnpm turbo check-types` (Verifies global TypeScript consistency).
- **Test**: `pnpm test` (Executes the unit and integration test suite).
- **Doc-Check**: `./.gemini/scripts/verify-docs.sh` (Verifies if code changes are mirrored in documentation).
- **Security-Check**: `./.gemini/scripts/verify-security.sh` (Scans for secrets and unwanted files).

## Test Tools
- **Global Test**: `pnpm test` (Runs Vitest everywhere).
- **Backend Test**: `pnpm --filter backend test` (NestJS Tests).
- **Frontend Test**: `pnpm --filter frontend test` (React + Shadcn Tests).

## Database (Prisma)
- **Migrate**: `pnpm --filter backend prisma migrate dev` (Applies schema changes).
- **Studio**: `pnpm --filter backend prisma studio` (Opens the visualization interface).
- **Generate**: `pnpm --filter backend prisma generate` (Regenerates the TypeScript client).

## Monorepo Management
- **Add Dependency**: `pnpm add [package] --filter [target]` (Adds a package to a specific app).
- **Clean**: `pnpm clean` (Deletes caches and node_modules to start fresh).

## Final Validation Tool
- **Pre-commit Check**: `./.gemini/scripts/pre-commit.sh`
  - *Usage*: Must be run before suggesting a commit or finalizing a complex feature.
  - *Guarantees*: Validates style (ESLint) and type consistency (TS) across the entire monorepo.
