# build-icons - Icon Generation Engine

> Core CLI tool that transforms SVG source files into framework-specific icon components.

## Overview

The `build-icons` tool parses SVGs from `/icons/` into an `IconNode` structure, then applies framework-specific templates to generate React, Vue, Angular, and other framework components.

## Key Files

| File                        | Purpose                                                       |
| --------------------------- | ------------------------------------------------------------- |
| `cli.ts`                    | Entry point - CLI argument parsing and orchestration          |
| `render/icons.ts`           | SVG parsing logic (`readSvgDirectory`, `renderIconsObject`)   |
| `render/format.ts`          | Code formatting utilities                                     |
| `render/default-attrs.json` | Default SVG attributes (Note: may differ from 24x24 template) |

## Architecture

```
/icons/*.svg ──► readSvgDirectory() ──► renderIconsObject()
                                            │
                                            ▼
                              IconNode: ['tag', { attrs }][]
                                            │
                                            ▼
                              exportTemplate.mts (per package)
                                            │
                                            ▼
                    packages/lui-icon-*/src/icons/*.ts
```

**Generation Pipeline:**

1. **Read**: Scan `/icons/` for SVG and JSON metadata files
2. **Parse**: Convert SVG XML into `IconNode` array structure
3. **Template**: Apply framework-specific template from package's `scripts/exportTemplate.mts`
4. **Output**: Write generated components to package's `src/icons/`
5. **Exports**: Generate index files and dynamic imports

## Conventions

- **Template-Driven**: Each package defines its own `scripts/exportTemplate.mts`
- **IconNode Format**: `['elementName', { attributes }]` tuples
- **Metadata Required**: Every SVG must have matching `.json` file with tags/categories
- **Keys**: React/Vue require `key` attributes on each element

## Commands

```bash
# Build icons for all packages (from root)
pnpm build

# Build icons for specific package
pnpm lui-icon-react build

# Direct CLI usage (internal)
cd tools/build-icons && pnpm start
```

## Adding a New Framework

1. Create package in `/packages/lui-icon-<framework>/`
2. Add `scripts/exportTemplate.mts` returning component code string
3. Add `build:icons` script calling `build-icons`
4. Run `pnpm build` to test generation
