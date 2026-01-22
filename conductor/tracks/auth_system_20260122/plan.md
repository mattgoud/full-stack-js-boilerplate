# Implementation Plan: Authentication System Flow

This plan follows the TDD workflow and high-coverage requirements.

## Phase 1: Data Model & Backend Foundation
- [ ] Task: Update Prisma schema and generate client
    - [ ] Add User model to `apps/backend/prisma/schema.prisma`
    - [ ] Run `pnpm --filter backend prisma:migrate`
    - [ ] Run `pnpm --filter backend prisma:generate`
- [ ] Task: Create Shared DTOs and Types
    - [ ] Define `RegisterUserDto` and `LoginUserDto` in `packages/shared/src/user.dto.ts`
    - [ ] Export from shared index
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Data Model & Backend Foundation' (Protocol in workflow.md)

## Phase 2: Backend Authentication Logic
- [ ] Task: Implement Users Service
    - [ ] Write tests for `UsersService` (create, findByEmail)
    - [ ] Implement `UsersService` in `apps/backend/src/users/`
- [ ] Task: Implement Auth Service and JWT Logic
    - [ ] Write tests for `AuthService` (validateUser, login)
    - [ ] Implement `AuthService` with JWT strategy
- [ ] Task: Auth Controller Endpoints
    - [ ] Write E2E tests for `/auth/register` and `/auth/login`
    - [ ] Implement `AuthController`
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Backend Authentication Logic' (Protocol in workflow.md)

## Phase 3: Frontend Auth Integration
- [ ] Task: Setup Auth Client and Context
    - [ ] Create API client for auth endpoints
    - [ ] Implement `AuthProvider` for React state management
- [ ] Task: Build Register and Login Forms
    - [ ] Write Vitest tests for Register form
    - [ ] Implement Register page with Shadcn/UI
    - [ ] Write Vitest tests for Login form
    - [ ] Implement Login page with Shadcn/UI
- [ ] Task: Route Protection Middleware
    - [ ] Implement Next.js middleware for protected routes
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Frontend Auth Integration' (Protocol in workflow.md)
