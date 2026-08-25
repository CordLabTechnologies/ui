---
name: npm-publish-workflow
description: Standard operating procedure for publishing updates to the @cordlab/ui NPM package.
---

# NPM Publishing Workflow for Agents

When a user requests to publish a new version of the `@cordlab/ui` package to NPM, you MUST follow these steps precisely to ensure code quality, accurate versioning, and documentation integrity.

## Prerequisites
- The library must be built and tested locally before ANY publication.
- Ensure the registry is targeting the public NPM registry (`https://registry.npmjs.org/`), not GitHub Packages, unless explicitly requested by the user.

## Step-by-Step Execution

### 1. Verification Phase
Do not proceed to publishing without verifying the codebase works.
- Run `npm run test` (Unit tests via Vitest).
- Run `npm run build-storybook` (Validates that all components compile correctly).
- **Blocker:** If any tests fail, stop the publishing process, inform the user, and offer to fix the bugs first.

### 2. Version Bump
- Analyze the changes since the last release.
- Update the `version` field in `package.json` appropriately:
  - `patch` for bug fixes.
  - `minor` for new features or components in a backwards-compatible manner.
  - `major` for breaking changes.
- *Alternatively, use `npm version [patch|minor|major]`.*

### 3. Build Phase
- Run `npm run build`.
- This step is critical to ensure the `dist/` directory contains the updated compiled TypeScript, CSS, and component definitions.

### 4. Update README
- If new components or templates were added, or structural changes were made, edit the root `README.md` to reflect these changes so consuming users know what is available.

### 5. Publish
- Run `npm publish`.
- If the command returns an `ENEEDAUTH` or `403 Forbidden` error, inform the user they must authenticate using `npm login`, or complete their 2FA prompt in the browser. Do not try to bypass this for them.

### 6. Post-Publish Confirmation
- Run `npm info @cordlab/ui` to verify the new version is registered (Note: it may take a few minutes for the cache to clear, so look at the command output instead of relying solely on the website).
- Create a `walkthrough.md` artifact summarizing the changes published in this release.
