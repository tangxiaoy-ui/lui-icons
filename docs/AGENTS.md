# docs - Documentation Site

> VitePress + Nitro documentation site for the Tubiao icon library.

## Structure

```
docs/
├── .vitepress/        # VitePress configuration
│   ├── config.ts      # Site config, nav, sidebar
│   └── theme/         # Custom theme
├── guide/             # Documentation pages
│   ├── basics/        # Getting started guides
│   ├── advanced/      # Advanced topics
│   ├── design/        # Design guidelines
│   └── packages/      # Package-specific docs
├── scripts/           # Doc generation scripts
├── public/            # Static assets (logos, images)
└── images/            # Image assets
```

## Commands

```bash
# Start dev server
pnpm --filter docs dev
# Runs at: http://localhost:5173

# Build for production
pnpm --filter docs build

# Preview production build
pnpm --filter docs preview
```

## Adding Content

| Content Type   | Location                    | Notes                                    |
| -------------- | --------------------------- | ---------------------------------------- |
| New guide page | `guide/<section>/<page>.md` | Add to sidebar in `.vitepress/config.ts` |
| Static assets  | `public/`                   | Referenced as `/filename`                |
| Images         | `images/`                   | Organize by feature/category             |

## Configuration

- **VitePress Config**: `.vitepress/config.ts`
- **Nitro Config**: `nitro.config.ts`
- **Deployment**: Configured for Vercel (`vercel.json`)
