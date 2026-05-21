# Frontend

## Overview

React + Vite frontend for the project. Contains UI, components, and pages used by users.

## Prerequisites

- Node.js 16+ (LTS recommended)
- npm or yarn

## Quickstart

1. Install dependencies

```bash
npm install
# or
# yarn install
```

2. Environment

- Create a `.env` or `.env.local` to store runtime variables (e.g., `VITE_API_URL`).

3. Run development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
npm run preview
```

## Scripts (package.json)

- `dev`: Start Vite dev server
- `build`: Create production build
- `preview`: Preview production build
- `lint` / `test`: (if configured) run linter/tests

## Project structure

- `src/`
	- `main.jsx` — app entry
	- `App.jsx` — top-level app
	- `components/` — reusable components (`UserForm.jsx`, `UserList.jsx`, `Notification.jsx`)
	- `pages/` — route-level pages (`Home.jsx`, `ViewData.jsx`)
	- `assets/` — images and static assets

## Connecting to backend

- Set `VITE_API_URL` in `.env.local` to point to the backend API base URL.
- Use `fetch` or your preferred HTTP client to call endpoints.

## Linting & Formatting

- ESLint config is present in `eslint.config.js`.
- Run configured linters via `npm run lint` if available.

## Testing

- Add tests to `src/` and run via `npm test` if a test tool is configured.

## Deployment

- Build with `npm run build` and deploy the `dist/` folder to your static host (Netlify, Vercel, S3, etc.).

## Next steps

Add any required environment examples or CI/CD steps you want included.
