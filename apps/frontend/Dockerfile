FROM node:22-alpine

RUN apk add --no-cache openssl libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy package.json files from workspace members
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/shared/package.json ./packages/shared/

RUN pnpm install --no-frozen-lockfile

COPY apps/frontend ./apps/frontend
COPY packages/shared ./packages/shared

EXPOSE 3000

CMD ["pnpm", "--filter", "frontend", "dev"]