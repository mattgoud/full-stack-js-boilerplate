#!/bin/bash

# Simple script to check if documentation should be updated
# Logic: If code or core configuration has changes, but content/docs has none, it might need attention.

CHANGES_CODE=$(git diff --name-only HEAD | grep -E "^apps/(backend|frontend/app|frontend/components)|^packages/shared|^\.gemini" | grep -v "content/docs")
CHANGES_DOCS=$(git diff --name-only HEAD | grep "^apps/frontend/content/docs")

if [ -n "$CHANGES_CODE" ] && [ -z "$CHANGES_DOCS" ]; then
  echo "⚠️  CODE CHANGES DETECTED WITHOUT DOCUMENTATION UPDATES."
  echo "Files changed:"
  echo "$CHANGES_CODE"
  echo ""
  echo "Please verify if these changes require updating files in apps/frontend/content/docs/"
  exit 0 # Non-blocking for now, just informative
fi

echo "✅ Documentation sync looks good."
exit 0
