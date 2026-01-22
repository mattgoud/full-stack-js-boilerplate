#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "🔍 Starting pre-commit validation..."

# 0. Security & Hygiene Check
echo "--- 🔒 Security Check ---"
./.gemini/scripts/verify-security.sh

# 1. Formatting and Linting (ESLint handles everything)
echo "--- 🛠️  Linting & Formatting ---"
pnpm turbo lint

# 2. TypeScript type checking across the entire monorepo
echo "--- 🟦 TypeScript Type Check ---"
pnpm turbo check-types

# 3. Documentation Sync Check
echo "--- 📚 Documentation Check ---"
./.gemini/scripts/verify-docs.sh

# 4. Unit tests (if applicable)
# echo "--- 🧪 Running Tests ---"
# pnpm turbo test

echo "✅ All checks passed! Ready to commit."