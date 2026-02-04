# AGENTS.md - Tubiao Icon Library

> Custom icon library based on Lucide, providing multi-framework SVG icon packages.

## Project Overview

Monorepo containing:

- **lucide-react** (React)
- **lucide-vue-next** (Vue 3)
- **lucide-solid** (SolidJS)
- **lucide-svelte** (Svelte)
- **lucide-angular** (Angular)
- **lucide-preact** (Preact)
- **@lucide/astro** (Astro)
- **lucide-static** (Static assets)
- **lucide** (Vanilla JS)

## Build & Test Commands

### Root Level

```bash
# Install dependencies
pnpm install

# Full build (all packages)
pnpm build

# Run all tests
pnpm test

# Linting (ESLint + Prettier + JSON schemas)
pnpm lint

# Fix formatting
pnpm lint:format-fix
```

### Package-Specific

_Run these from the root directory using filters:_

```bash
# Build specific package
pnpm lucide-react build

# Test specific package
pnpm lucide-react test
```

### Single Test Execution

_Useful for debugging specific components or icons._

```bash
# 1. Navigate to package
cd packages/lucide-react

# 2. Run specific test file
pnpm vitest run tests/Icon.spec.tsx

# 3. Run tests matching a pattern (e.g., "should render")
pnpm vitest run -t "should render"
```

### Utility Scripts

```bash
pnpm run optimize    # Optimize SVGs in icons/ directory
pnpm run gi          # Generate icon components from SVGs
pnpm run checkIcons  # Validate icons against schema and categories
```

## TypeScript Configuration

- **Strict Mode**: Enabled (`strict: true`).
- **Module Resolution**: `node`, target `ESNext`.
- **No Any**: **NEVER** use `as any`, `@ts-ignore`, or `@ts-expect-error`. Fix the types properly.
- **Type Definitions**:
  - Use `IconNode` for icon structures: `['elementName', { attrs }]`.
  - Use framework-specific props (e.g., `LucideProps` for React, `LucideProps` for Vue).

## Code Style & Conventions

### Linting & Formatting

- **ESLint**: Uses `airbnb-base` and `airbnb-typescript`.
- **Prettier**: Enforced for formatting.
- **Import Extensions**: Must use `.mjs` or `.json` extensions where applicable.
- **Hook**: Run `pnpm lint:format-fix` before committing to ensure compliance.

### Naming Conventions

| Context         | Convention                 | Example                |
| :-------------- | :------------------------- | :--------------------- |
| **Components**  | PascalCase                 | `Search`, `FolderOpen` |
| **Functions**   | camelCase                  | `createLucideIcon`     |
| **Icon Files**  | kebab-case                 | `folder-open.svg`      |
| **CSS Classes** | kebab-case                 | `lucide-folder-open`   |
| **Constants**   | UPPER_SNAKE_CASE           | `ICONS_DIR`            |
| **Test Files**  | `*.spec.ts` / `*.spec.tsx` | `Icon.spec.tsx`        |

### Import Order

Organize imports by: Framework -> Workspace/External -> Local.

```typescript
// 1. Framework / External
import { createElement, forwardRef } from 'react';

// 2. Workspace Packages
import { mergeClasses } from '@lucide/shared';

// 3. Local Imports
import { IconNode, LucideProps } from './types';
```

## Icon Component Pattern

When creating or modifying icon generation logic, follow this pattern:

```typescript
import createLucideIcon from '../createLucideIcon';
import { IconNode } from '../types';

// Icon definition: [tag, attrs][]
const iconNode: IconNode = [
  ['circle', { cx: '12', cy: '12', r: '10', key: 'k1' }],
  ['line', { x1: '12', y1: '8', x2: '12', y2: '12', key: 'k2' }],
  ['line', { x1: '12', y1: '16', x2: '12.01', y2: '16', key: 'k3' }],
];

const IconName = createLucideIcon('icon-name', iconNode);

export default IconName;
```

## Testing Guidelines

Tests use **Vitest** with **jsdom** and **@testing-library**.

```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Search } from '../src/lucide-react';

describe('Icon Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Search color="red" size={48} />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '48');
    expect(svg).toHaveAttribute('stroke', 'red');
    expect(container.innerHTML).toMatchSnapshot();
  });
});
```

## SVG Requirements (for `icons/*.svg`)

- **Root Attributes**: Must match `default-attrs.json` (viewBox="0 0 24 24", etc.).
- **Clean Code**:
  - No duplicate attributes.
  - No inline styles (`style="..."`).
  - Use self-closing tags where possible.
  - Indent with 2 spaces.
  - Use double quotes for attributes.
- **Accessibility**:
  - Icons automatically get `aria-hidden="true"` unless `aria-label`, `aria-labelledby`, or `role` is provided via props.

## File Structure

```
tubiao/
├── icons/                    # Source SVG files (Single Source of Truth)
├── packages/
│   ├── lucide-react/        # React package
│   │   ├── src/icons/       # Generated components
│   │   └── tests/           # Component tests
│   ├── lucide-vue-next/     # Vue 3 package
│   ├── shared/              # Shared utilities (@lucide/shared)
│   └── ...
├── tools/
│   └── build-icons/         # CLI tool for generating icons
├── scripts/                  # Maintenance scripts (optimize, generate)
└── .eslintrc.js              # Global lint config
```

## Common Workflows

### Adding a New Icon

1.  **Create SVG**: Place the new SVG file in `icons/my-new-icon.svg`.
2.  **Optimize**: Run `pnpm run optimize` to clean up the SVG code.
3.  **Generate**: Run `pnpm run gi` to generate components for all packages.
4.  **Verify**:
    - Run `pnpm run checkIcons` to validate.
    - Run `pnpm build` to ensure all packages build successfully.
5.  **Commit**: Commit the SVG and the generated artifacts.

### Debugging a Build Failure

1.  Check `package.json` scripts to see what `pnpm build` does (usually `pnpm -r build`).
2.  Isolate the failing package (e.g., `pnpm lucide-react build`).
3.  Run `pnpm typecheck` in that package to catch TS errors.
