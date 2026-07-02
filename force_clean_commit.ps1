# Kill any hanging git processes
Stop-Process -Name git -Force -ErrorAction SilentlyContinue

# Give it a second to release locks
Start-Sleep -Seconds 2

# Force remove .git
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

git init
git remote add origin https://github.com/ajmalfaris11/resort.git
git branch -M main

# Fix gitignore to ensure nested .next and node_modules are fully ignored
@"
node_modules/
**/.next/
/out/
build/
.DS_Store
*.pem
.env
.env.local
.turbo
.vercel
*.tsbuildinfo
next-env.d.ts
"@ | Out-File -FilePath .gitignore -Encoding utf8

git add .gitignore
git commit -m "chore: add .gitignore"

# Root configurations
git add package.json pnpm-lock.yaml turbo.json pnpm-workspace.yaml
git commit -m "chore: initial turborepo workspace setup"

# Shared Packages
git add packages/
git commit -m "feat: add shared UI package and configs"

# Web App config
git add apps/web/package.json apps/web/next.config.mjs apps/web/tsconfig.json apps/web/tailwind.config.ts apps/web/postcss.config.mjs apps/web/components.json apps/web/next.config.ts apps/web/public/
git commit -m "chore: configure next.js web application"

# Core UI Components, Hooks, and Utilities
git add apps/web/src/components/ui/ apps/web/src/lib/ apps/web/src/hooks/
git commit -m "feat: build foundational UI components and utilities"

# Providers and Data
git add apps/web/src/components/providers/ apps/web/src/data/
git commit -m "feat: add application providers and mock data"

# Global Styles and Layouts
git add apps/web/src/app/globals.css apps/web/src/app/layout.tsx apps/web/src/components/layout/
git commit -m "feat: implement global styling and root layout"

# Landing Page Sections and Main Page
git add apps/web/src/components/sections/ apps/web/src/app/page.tsx
git commit -m "feat: build landing page sections and assemble homepage"

# Catch-all
git add .
git commit -m "chore: add remaining assets and miscellaneous files"

# Force push
git push -f -u origin main
