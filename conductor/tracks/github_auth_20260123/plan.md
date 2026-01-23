# Implementation Plan: GitHub Authentication Integration

This plan follows the TDD workflow and high-coverage requirements as defined in the project's `workflow.md`.

## Phase 1: Data Model & Shared Types [checkpoint: 99c389a]
- [x] Task: Update Prisma schema for GitHub Auth (95e745d)
- [x] Task: Update Shared User Types (95e745d)
    - [x] Add `githubId` to `UserDto` or relevant interfaces in `packages/shared/src/user.dto.ts`
- [x] Task: Conductor - User Manual Verification 'Phase 1: Data Model & Shared Types' (Protocol in workflow.md)

## Phase 2: Backend GitHub OAuth Implementation
- [ ] Task: Setup Passport GitHub Strategy
    - [ ] Install dependencies: `passport-github2`, `@types/passport-github2` in `apps/backend`
    - [ ] Write unit tests for `GithubStrategy` logic (mocking profile response)
    - [ ] Implement `GithubStrategy` in `apps/backend/src/auth/strategies/github.strategy.ts`
- [ ] Task: Implement Auth Service Logic for GitHub
    - [ ] Write unit tests for `validateGithubUser` in `AuthService`
    - [ ] Implement logic to find or create a user based on GitHub profile (Email and Username)
- [ ] Task: Auth Controller OAuth Endpoints
    - [ ] Write E2E tests for `/auth/github` and `/auth/github/callback`
    - [ ] Implement controller methods and `@UseGuards(AuthGuard('github'))`
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Backend GitHub OAuth Implementation' (Protocol in workflow.md)

## Phase 3: Frontend Login Page (Shadcn/UI Split Layout)
- [ ] Task: Setup GitHub Auth Button Component
    - [ ] Create a reusable `GithubSignInButton` using Shadcn `Button` and `Lucide` icons
    - [ ] Write Vitest tests for the button component
- [ ] Task: Implement Split Layout Login Page
    - [ ] Create `apps/frontend/app/login/page.tsx`
    - [ ] Use Shadcn/UI for the split screen design (Side A: Visual/Branding, Side B: Login Button)
    - [ ] Write Vitest tests for the Login page structure
- [ ] Task: Handle OAuth Callback and JWT
    - [ ] Implement client-side logic to extract/receive JWT from the callback
    - [ ] Update `AuthProvider` to handle the new authentication state
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Frontend Login Page (Shadcn/UI Split Layout)' (Protocol in workflow.md)

## Phase 4: Route Protection and Final Integration
- [ ] Task: Secure Dashboard Access
    - [ ] Update Next.js middleware to protect `/dashboard`
    - [ ] Write tests verifying redirection of unauthenticated users
- [ ] Task: Final E2E Flow Verification
    - [ ] Manually verify the full flow from Login -> GitHub -> Dashboard
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Route Protection and Final Integration' (Protocol in workflow.md)
