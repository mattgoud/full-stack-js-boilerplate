# Skills & Workflows

## Skill: Add a new data model
1. Modify `apps/backend/prisma/schema.prisma`.
2. Run `pnpm --filter backend prisma:migrate`.
3. Create/Update the corresponding interface/DTO in `packages/shared/src`.
4. Generate NestJS resources: `pnpm --filter backend nest g resource [name]`.

## Skill: Add a UI component (Shadcn)
1. Navigate to frontend: `cd apps/frontend`.
2. Add component: `pnpm dlx shadcn@latest add [component-name]`.
3. Export if needed or use directly in pages.

## Skill: Add a shared utility/type
1. Create/Modify file in `packages/shared/src`.
2. Export it from `packages/shared/src/index.ts`.
3. Run `pnpm turbo build` if needed (though workspace link usually works).
4. Import in frontend/backend using `@repo/shared`.

## Skill: Create a GitHub authenticated route
1. Use Auth.js (NextAuth) on the frontend.
2. Protect the backend route via a NestJS Guard checking the JWT or session.

## Skill: Update Documentation (Living Docs)
1. Identify the relevant file in `apps/frontend/content/docs/`.
   - Overview: `index.mdx`
   - Frontend: `frontend.mdx`
   - Backend: `backend.mdx`
   - Workflows: `workflows.mdx`
   - AI Guide: `ai-guide.mdx`
2. Update the MDX content (Text, Code blocks, Callouts).
3. If adding a new page, remember to update `apps/frontend/components/app-sidebar.tsx` navigation.