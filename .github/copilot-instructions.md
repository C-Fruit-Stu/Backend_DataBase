# Copilot / AI agent instructions — Backend_DataBase

Quick reference to get productive in this repository.

- **High-level layout**: This repo contains two independent frontends and a backend area:
  - `website/repairshop` — Next.js (app router, TypeScript) site. See [website/repairshop/README.md](website/repairshop/README.md).
  - `app` — Vite + React app (JavaScript) used for the blog frontend. See [app/README.md](app/README.md).
  - `server/` — backend services (explore when required).

- **Run / build (examples)**:
  - Repair shop (Next):
    - `cd website/repairshop && npm run dev` (dev server on :3000)
    - `cd website/repairshop && npm run build && npm run start`
  - Blog (Vite):
    - `cd app && npm run dev` (Vite dev server)
    - `cd app && npm run build` (production build)

- **Where to look for UI primitives and patterns**:
  - `website/repairshop/src/components/ui` contains low-level UI primitives (e.g. [website/repairshop/src/components/ui/button.tsx](website/repairshop/src/components/ui/button.tsx)).
  - Higher-level components live under `website/repairshop/src/components` and `app/src/components` respectively.

- **Styling / variants**:
  - `website/repairshop` uses Tailwind CSS (v4) and `class-variance-authority` for variant-driven classes — follow existing CVA patterns when adding props to components.

- **Routing and pages**:
  - `website/repairshop` uses Next.js `app` directory (app router). Add routes under `website/repairshop/src/app` and avoid changing the router type.
  - `app` is a single-page Vite React app that uses `react-router-dom` for client routes.

- **TypeScript & linting**:
  - `website/repairshop` is TypeScript-first. Keep types in `src` and update `tsconfig.json` when adding global type paths.
  - Run `npm run lint` in the relevant subproject. ESLint configs live at `website/repairshop/eslint.config.mjs` and `app/eslint.config.js`.

- **Dependency guidance**:
  - Dependency changes are per-subproject. Run package installs inside the subfolder (`website/repairshop` or `app`). Example: `cd website/repairshop && npm install <pkg>`.
  - Note Next version pinned in `website/repairshop/package.json` — be cautious when upgrading major framework versions.

- **Context & data flow cues**:
  - State/context providers in the blog app: `app/src/context/BlogsContextProvider.jsx` — follow the same provider pattern when adding global state.
  - Repairshop UI components often accept `className`/`variant` props and delegate to CVA helper functions.

- **Typical dev tasks for AI changes**:
  - Prefer small, focused PRs that modify a single subproject.
  - Run the relevant dev server and lint before proposing changes.
  - When adding a UI primitive, add story/example usage in the nearest component folder.

- **Files worth checking before edits**:
  - `website/repairshop/package.json` and [website/repairshop/README.md](website/repairshop/README.md)
  - `app/package.json` and [app/README.md](app/README.md)
  - UI primitives: `website/repairshop/src/components/ui/*` (e.g. `button.tsx`)

If anything is unclear or you want me to expand any section (CI, release, or backend integration patterns), tell me which area to deepen.
