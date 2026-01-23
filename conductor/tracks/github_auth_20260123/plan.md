# Implementation Plan: GitHub Authentication Integration

This plan follows the TDD workflow and high-coverage requirements as defined in the project's `workflow.md`.

## Phase 1: Data Model & Shared Types [checkpoint: 99c389a]
- [x] Task: Update Prisma schema for GitHub Auth (95e745d)
- [x] Task: Update Shared User Types (95e745d)
    - [x] Add `githubId` to `UserDto` or relevant interfaces in `packages/shared/src/user.dto.ts`
- [x] Task: Conductor - User Manual Verification 'Phase 1: Data Model & Shared Types' (Protocol in workflow.md)

## Phase 2: Backend GitHub OAuth Implementation [checkpoint: f2ad468]
- [x] Task: Setup Passport GitHub Strategy (3d84dde)
- [x] Task: Implement Auth Service Logic for GitHub (5fdb695)
- [x] Task: Auth Controller OAuth Endpoints (cc0289a)
- [x] Task: Conductor - User Manual Verification 'Phase 2: Backend GitHub OAuth Implementation' (Protocol in workflow.md)

## Phase 3: Frontend Login Page (Shadcn/UI Split Layout) [checkpoint: 3915b49]
- [x] Task: Setup GitHub Auth Button Component (e3a0f5e)
- [x] Task: Implement Split Layout Login Page (bd89a42)
- [x] Task: Handle OAuth Callback and JWT (9bc9b37)
- [x] Task: Conductor - User Manual Verification 'Phase 3: Frontend Login Page (Shadcn/UI Split Layout)' (Protocol in workflow.md)
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Frontend Login Page (Shadcn/UI Split Layout)' (Protocol in workflow.md)

## Phase 4: Route Protection and Final Integration
- [ ] Task: Secure Dashboard Access
    - [ ] Update Next.js middleware to protect `/dashboard`
    - [ ] Write tests verifying redirection of unauthenticated users
- [ ] Task: Final E2E Flow Verification
    - [ ] Manually verify the full flow from Login -> GitHub -> Dashboard
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Route Protection and Final Integration' (Protocol in workflow.md)
