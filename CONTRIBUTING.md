# Contributing to @wyre-technology/node-hudu

Thank you for your interest in contributing to the Hudu SDK. This guide will help you get started.

## Prerequisites

- **Node.js** 18 or later
- **git**

## Development Setup

```bash
# Clone the repository
git clone https://github.com/wyre-technology/node-hudu.git
cd node-hudu

# Install dependencies
npm install

# Build the project
npm run build

# Run the test suite
npm test
```

## Project Structure

```
src/
  client.ts           # HuduClient — main entry point, composes all resources
  http.ts             # HTTP transport layer (native fetch)
  auth.ts             # API key authentication manager
  config.ts           # Configuration types and defaults
  errors.ts           # Custom error classes
  rate-limiter.ts     # Token-bucket rate limiter
  index.ts            # Public API exports
  resources/          # One file per API resource
    companies.ts
    assets.ts
    asset-layouts.ts
    asset-passwords.ts
    articles.ts
    websites.ts
    folders.ts
    procedures.ts
    activity-logs.ts
    relations.ts
    magic-dash.ts
  types/              # TypeScript type definitions
    common.ts
    companies.ts
    assets.ts
    asset-layouts.ts
    asset-passwords.ts
    articles.ts
    websites.ts
    folders.ts
    procedures.ts
    activity-logs.ts
    relations.ts
    magic-dash.ts
    index.ts
tests/                # Test files (mirrors src/ structure)
```

## Adding Features / Fixing Bugs

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/my-feature
   ```
2. Make your changes in `src/`.
3. Add or update types in `src/types/` as needed.
4. Add tests for your changes in `tests/`.
5. Ensure the build passes: `npm run build`
6. Ensure type checking passes: `npm run typecheck`
7. Ensure all tests pass: `npm test`

## Testing

The test suite uses **vitest** with **MSW** (Mock Service Worker) for HTTP mocking.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

Aim for at least **80% code coverage** on new code.

### Writing Tests

- Place test files in `tests/` mirroring the `src/` directory structure.
- Use MSW handlers to mock Hudu API responses.
- Test both success and error paths.

## Pull Request Process

1. Ensure all checks pass (`npm run build && npm run typecheck && npm test`).
2. Use **Conventional Commits** for your commit messages:
   - `feat:` — A new feature
   - `fix:` — A bug fix
   - `docs:` — Documentation changes
   - `test:` — Adding or updating tests
   - `refactor:` — Code refactoring (no feature or fix)
   - `chore:` — Maintenance tasks
3. Open a pull request against `main`.
4. Fill in the PR template with a description and test plan.
5. Wait for CI to pass and a maintainer to review.

## Code Style

- **TypeScript strict mode** is enabled.
- Use **ES modules** (`import` / `export`).
- **Zero runtime dependencies** — use native `fetch` only.
- Follow existing naming conventions in the codebase.
- Add JSDoc comments for public APIs.
- Use `async`/`await` instead of Promise chains.
- Prefer `const` / `let` over `var`.

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 license.
