FROM node:22-alpine

RUN apk add --no-cache openssl libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 1. Copy root configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# 2. Copy package.json from ALL packages (essential for workspace linking)
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared/package.json ./packages/shared/

# 3. Now we can install (pnpm can finally resolve @repo/shared)
RUN pnpm install --no-frozen-lockfile

# 4. Copy the rest of the source code
COPY apps/backend ./apps/backend
COPY packages/shared ./packages/shared

EXPOSE 3001

CMD ["pnpm", "--filter", "backend", "start:dev"]