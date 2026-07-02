Remove-Item -Recurse -Force .git
git init
git remote add origin https://github.com/ajmalfaris11/resort.git
git branch -M main

# 1. Base Gitignore
git add .gitignore
git commit -m "chore: add .gitignore"

# 2. Root configurations and base setup
git add package.json pnpm-lock.yaml turbo.json
git commit -m "chore: initial turborepo workspace setup"

# 3. Shared Packages (UI, config)
git add packages/
git commit -m "feat: add shared UI package and configs"

# 4. Web App config and public assets
git add apps/web/package.json apps/web/next.config.mjs apps/web/tsconfig.json apps/web/tailwind.config.ts apps/web/postcss.config.js apps/web/components.json
git add apps/web/public/
git commit -m "chore: configure next.js web application"

# 5. Core UI Components, Hooks, and Utilities
git add apps/web/src/components/ui/ apps/web/src/lib/ apps/web/src/hooks/
git commit -m "feat: build foundational UI components and utilities"

# 6. Providers and Data
git add apps/web/src/components/providers/ apps/web/src/data/
git commit -m "feat: add application providers and mock data"

# 7. Global Styles and Layouts
git add apps/web/src/app/globals.css apps/web/src/app/layout.tsx apps/web/src/components/layout/
git commit -m "feat: implement global styling and root layout"

# 8. Landing Page Sections and Main Page
git add apps/web/src/components/sections/ apps/web/src/app/page.tsx
git commit -m "feat: build landing page sections and assemble homepage"

# 9. Catch-all for any remaining files
git add .
git commit -m "chore: add remaining assets and miscellaneous files"

# Force push to overwrite the previous 172 commits
git push -f -u origin main
