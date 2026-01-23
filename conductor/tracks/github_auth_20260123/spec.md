# Specification: GitHub Authentication Integration

## Overview
Implement a robust authentication system using GitHub OAuth strategy (`passport-github2`) integrated into the NestJS backend. The frontend will feature a Shadcn/UI-based Login page with a split layout, providing a seamless "Sign in with GitHub" experience. This feature ensures secure user registration and session management.

## Functional Requirements
- **Backend (NestJS)**
    - Implement `GitHubStrategy` using `@nestjs/passport` and `passport-github2`.
    - Create endpoints for OAuth redirection (`/auth/github`) and callback (`/auth/github/callback`).
    - Logic to check if a user exists based on GitHub ID or Email:
        - If user exists: Issue JWT.
        - If new user: Create user record with Email and Username, then issue JWT.
    - Securely pass the JWT to the frontend (e.g., via HTTP-only cookie or redirection URL parameter, to be refined in implementation).

- **Frontend (Next.js)**
    - **Login Page**:
        - Split layout design using Shadcn/UI components.
        - "Sign in with GitHub" button initiating the backend flow.
    - **Session Management**:
        - Mechanism to store and validate the received JWT.
        - Redirection to a protected dashboard upon success.
    - **Error Handling**:
        - Display user-friendly error messages if authentication fails or is cancelled.

## Data Model
- **User Entity Update**:
    - Ensure `email` and `username` fields are present (as selected).
    - Add `githubId` (or similar provider ID field) to link the GitHub account uniquely.

## Non-Functional Requirements
- **Security**: JWT tokens must be handled securely to prevent XSS/CSRF.
- **Performance**: Minimal latency during the OAuth redirect and user creation process.
- **UX**: Clear visual feedback during the redirection phase.

## Acceptance Criteria
- [ ] Clicking "Sign in with GitHub" redirects the user to GitHub's authorization page.
- [ ] After GitHub approval, the user is redirected back to the app and logged in.
- [ ] A new user is automatically created in the database if they don't exist (capturing Email and Username).
- [ ] Protected routes are inaccessible without a valid login.
- [ ] Login page follows the "Split Layout" design using Shadcn/UI.
