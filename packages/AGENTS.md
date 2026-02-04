# packages - Framework Packages

> Framework-specific icon packages generated from source SVGs.

## Overview

Each package is a standalone npm package containing icon components for a specific framework. Components are generated from `/icons/` source using `@lui-icon/build-icons`.

**Naming Convention**: Use `lui-icon-*` prefix (not `lucide-*`).

## Package Structure

```
packages/lui-icon-react/
├── src/
│   ├── icons/              # Generated icon components
│   ├── types.ts            # TypeScript definitions
│   ├── createLUIIcon.ts    # Icon factory function
│   └── aliases/            # Prefixed/suffixed aliases
├── scripts/
│   └── exportTemplate.mts  # Generation template
├── tests/                  # Vitest tests
└── package.json
```

## Build Lifecycle (5 Steps)

```json
{
  "build": "pnpm clean && pnpm copy:license && pnpm build:icons && pnpm typecheck && pnpm build:bundles"
}
```

| Step | Command         | Purpose                                        |
| ---- | --------------- | ---------------------------------------------- |
| 1    | `clean`         | Remove `dist/` and `src/icons/`                |
| 2    | `copy:license`  | Copy root LICENSE file                         |
| 3    | `build:icons`   | Generate from SVGs via `@lui-icon/build-icons` |
| 4    | `typecheck`     | TypeScript validation                          |
| 5    | `build:bundles` | Rollup bundling (ESM, CJS, UMD)                |

## Key Packages

| Package             | Framework | Notes                        |
| ------------------- | --------- | ---------------------------- |
| `lui-icon-react`    | React     | Main React package           |
| `lui-icon-vue-next` | Vue 3     | Composition API              |
| `lui-icon-angular`  | Angular   | Component library format     |
| `lui-icon-static`   | Static    | SVG string exports           |
| `shared`            | Utils     | `@lui-icon/shared` utilities |

## Adding a New Framework

1. Create directory: `packages/lui-icon-<framework>/`
2. Add `package.json` with build scripts (see lifecycle above)
3. Create `scripts/exportTemplate.mts`:
   ```ts
   export default (iconName, iconNode) => `
     import { createIcon } from '../createIcon';
     export const ${iconName} = createIcon('${iconName}', ${JSON.stringify(iconNode)});
   `;
   ```
4. Add type definitions in `src/types.ts`
5. Test: `pnpm lui-icon-<framework> build`

## Testing

```bash
# Test specific package
pnpm lui-icon-react test

# Test with coverage
pnpm lui-icon-react test -- --coverage
```
