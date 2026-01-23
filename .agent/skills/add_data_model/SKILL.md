---
name: Add a new data model
description: Instructions for adding a new data model to the backend and shared package.
---
# Skill: Add a new data model

1. Modify `apps/backend/prisma/schema.prisma`.
2. Run `pnpm --filter backend prisma:migrate`.
3. Create/Update the corresponding interface/DTO in `packages/shared/src`.
4. Generate NestJS resources: `pnpm --filter backend nest g resource [name]`.
