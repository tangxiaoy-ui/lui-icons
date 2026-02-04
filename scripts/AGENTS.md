# scripts - Utility Scripts

> Build, optimization, validation, and maintenance scripts for the icon library.

## Where to Look

| Script                        | Purpose                                  | Trigger               |
| ----------------------------- | ---------------------------------------- | --------------------- |
| `generate/generateIcons.mts`  | Create new icon boilerplate (SVG + JSON) | `pnpm run gi <name>`  |
| `optimizeSvgs.mts`            | Optimize SVGs with svgo                  | `pnpm run optimize`   |
| `checkIconsAndCategories.mts` | Validate icons against schema            | `pnpm run checkIcons` |
| `addMissingIconJsonFiles.mts` | Add missing metadata JSONs               | Manual                |
| `suggestTags.mts`             | AI-powered tag suggestions               | Manual                |
| `rename/`                     | Icon renaming utilities                  | Manual                |
| `render/`                     | SVG rendering helpers                    | Internal              |

## Icon Workflow

```
1. pnpm run gi <icon-name>
   └─► Creates: icons/<icon-name>.svg (template)
                icons/<icon-name>.json (metadata)

2. Edit SVG and JSON files

3. pnpm run optimize
   └─► Runs svgo on all SVGs in icons/

4. pnpm run checkIcons
   └─► Validates against icon.schema.json

5. pnpm build
   └─► Generates components for all packages
```

## Utility Scripts

```bash
# Check for missing JSON metadata files
pnpm run addjsons

# Get AI tag suggestions (requires API key)
pnpm run suggest:tags

# Rename an icon
pnpm run rename <old-name> <new-name>

# Update contributors list
pnpm run generate:contributors
```

## Schema Validation

- **Icons**: Validated against `icon.schema.json`
- **Categories**: Validated against `category.schema.json`
- **Tool**: Uses `ajv-cli` for JSON schema validation
