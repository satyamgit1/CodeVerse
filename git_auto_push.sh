#!/bin/bash

# Check if a commit message was provided as an argument
if [ -z "$1" ]; then
  COMMIT_MESSAGE="Auto commit"
else
  COMMIT_MESSAGE=$1
fi

# Add all changes
git add .

# Commit with the provided or default message
git commit -m "$COMMIT_MESSAGE"

# Push to the main branch
git push -u origin main
