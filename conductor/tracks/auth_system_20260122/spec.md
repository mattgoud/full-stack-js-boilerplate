# Specification: Authentication System Flow

## Context
This track implements a full-stack authentication system for the boilerplate. It includes user registration, login, and JWT-based session management, spanning the backend (NestJS), frontend (Next.js), and shared package.

## User Stories
- **As a new user**, I want to create an account with my email and password so I can access protected features.
- **As an existing user**, I want to sign in securely to my account.
- **As a logged-in user**, I want to remain authenticated across sessions.
- **As a logged-in user**, I want to sign out securely.

## Functional Requirements
- **Backend (NestJS):**
    - User model in Prisma schema with hashed passwords (bcrypt).
    - Authentication module using JWT strategy.
    - Endpoints for `POST /auth/register` and `POST /auth/login`.
    - Protected routes example.
- **Shared Package:**
    - DTOs for Login and Register requests/responses.
    - User types/interfaces.
- **Frontend (Next.js):**
    - Login and Register pages using Shadcn/UI forms.
    - Auth provider/context to manage user state.
    - Middleware for route protection.

## Technical Constraints
- Use `bcrypt` for password hashing.
- Use `passport-jwt` for authentication.
- Strict TypeScript types across all layers.
- Form validation using `zod` and `react-hook-form`.
- Adhere to the Modern and Minimalist visual identity.

## Acceptance Criteria
- User can successfully register and is stored in the database.
- User can login with correct credentials and receives a JWT.
- Invalid login attempts return appropriate error messages.
- Protected frontend routes redirect unauthenticated users to the login page.
- JWT is stored securely (HttpOnly cookie or as per best practices).
