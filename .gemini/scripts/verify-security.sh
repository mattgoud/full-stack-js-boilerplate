#!/bin/bash

# Script to check for sensitive data and unwanted files
set -e

echo "🔒 Running Security & Hygiene Check..."

# 1. Check for sensitive patterns (basic check)
# Define patterns
PATTERN_AIZA="AIza[a-zA-Z0-9_-]{35}"
PATTERN_SK="sk-[a-zA-Z0-9]{48}"
PATTERN_RSA="BEGIN RSA PRIVATE KEY"
PATTERN_SSH="BEGIN OPENSSH PRIVATE KEY"

SENSITIVE_PATTERNS=("$PATTERN_AIZA" "$PATTERN_SK" "$PATTERN_RSA" "$PATTERN_SSH")

# Get list of staged files excluding this security script
STAGED_FILES=$(git diff --staged --name-only | grep -v ".gemini/scripts/verify-security.sh" || true)

if [ -n "$STAGED_FILES" ]; then
  for pattern in "${SENSITIVE_PATTERNS[@]}"; do
    # Search for the pattern in the content of staged changes for the filtered files
    if git diff --staged $STAGED_FILES | grep -E -q "$pattern"; then
      echo "❌ ERROR: Sensitive pattern detected: $pattern"
      exit 1
    fi
  done
fi

# 2. Check for unwanted file patterns that should be ignored
UNWANTED_PATTERNS=("_output.txt$" ".log$" ".tsbuildinfo$")

for pattern in "${UNWANTED_PATTERNS[@]}"; do
  if git diff --staged --name-only | grep -E -q "$pattern"; then
    echo "❌ ERROR: Unwanted file pattern detected in staged files: $pattern"
    echo "Please remove these files and add them to .gitignore if necessary."
    exit 1
  fi
done

echo "✅ Security check passed."
exit 0
