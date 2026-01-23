---
name: Add a shared utility/type
description: Instructions for adding a new shared utility or type to the shared package.
---
# Skill: Add a shared utility/type

1. Create/Modify file in `packages/shared/src`.
2. Export it from `packages/shared/src/index.ts`.
3. Run `pnpm turbo build` if needed (though workspace link usually works).
4. Import in frontend/backend using `@repo/shared`.
