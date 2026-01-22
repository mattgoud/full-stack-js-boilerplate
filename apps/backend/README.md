# Backend (NestJS 11)

The backend is a robust REST API built with **NestJS 11**, designed for scalability and maintainability. It utilizes **Prisma** with **PostgreSQL** for data persistence.

## 🚀 Key Features

- **Framework**: NestJS 11
- **Database**: PostgreSQL (orchestrated via Docker)
- **ORM**: Prisma Client v7
- **API Style**: RESTful
- **Monorepo Integration**: Shared DTOs and types from `@repo/shared`
- **CORS**: Enabled for `http://localhost:3000` (Frontend)

## 🗄️ Database Setup

The database is managed via Docker and Prisma.

### 1. Start Database
```bash
docker compose up db -d
```

### 2. Migrations
When `prisma/schema.prisma` changes:
```bash
pnpm --filter backend prisma:migrate
```

### 3. Prisma Studio
Visual database editor:
```bash
pnpm --filter backend prisma:studio
```

## 🛠️ Development

### Running the Server
```bash
# Watch mode
pnpm --filter backend dev
```
Runs on [http://localhost:3001](http://localhost:3001).

### Architecture
- **`src/`**: Source code
  - **`*.module.ts`**: Domain modules
  - **`*.controller.ts`**: API Endpoints
  - **`*.service.ts`**: Business Logic
- **`prisma/`**: Database schema and seeds
- **`dist/`**: Compiled output

### Scripts
- `pnpm --filter backend prisma:generate`: Regenerate Prisma Client types.
- `pnpm --filter backend prisma:seed`: Seed the database with initial data.
- `pnpm --filter backend lint`: Lint code with ESLint.

## 🧪 Testing

- **Unit Tests**: `pnpm --filter backend test`
- **E2E Tests**: `pnpm --filter backend test:e2e`

## 📝 Conventions

- **DTOs**: Define DTOs in `@repo/shared` if they are shared with the frontend.
- **Validation**: Use `class-validator` and `class-transformer` pipes.
- **Configuration**: Use `ConfigService` for environment variables.