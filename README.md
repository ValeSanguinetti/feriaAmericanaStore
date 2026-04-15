# Feria Americana Store

Frontend prototype for the `Landing Page`, `Home Catalog`, `User Profile`, `Register`, and `Login` experiences implemented from Stitch project `12615917652504803710`.

## Current Scope

- responsive landing, catalog, profile, registration, and login screens inspired by the Stitch designs
- reusable React components for landing sections, catalog views, profile dashboard, auth layout, form behavior, shared footer, and route-based navigation
- Tailwind-first styling; `src/index.css` now only defines the shared theme tokens and base rules
- client-side validation for register and login flows
- local editorial and gallery assets imported into the app instead of relying on opaque hosted runtime URLs

## Project Structure

- `src/App.tsx`: application composition and bootstrap entrypoint
- `src/routes/`: route table, metadata, and access guards
- `src/pages/`: route-level pages for landing, catalog, profile, register, and login
- `src/components/`: reusable UI sections and form components
- `src/layouts/`: public, private, and auth shells
- `src/store/`: session bootstrap and shared app state
- `src/lib/` and `src/api/`: frontend helpers, validation, navigation, and future HTTP boundaries
- `src/index.css`: shared theme tokens and base rules
- `docs/`: technical and maintenance documentation owned by this frontend
- `prds/`: planning documents and feature/refactor PRDs with numeric prefix convention
- `stitch_exports/project_12615917652504803710/`: downloaded Stitch HTML and screenshot references

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run lint
```

## Deployment

This project is deployed as a client-side React Router SPA. [vercel.json](/home/alexi-dg/Desktop/GitHub_Repositories/feria-americana-store/vercel.json:1) preserves static assets with a filesystem check first and rewrites unknown routes to `index.html`, which prevents Vercel `404` responses on direct navigation to routes like `/catalog`, `/profile`, `/register`, and `/login`.

## Integration Notes

The current submit flows are frontend-only by design. To connect a real auth backend, replace the success branches in `RegisterForm` and `LoginForm` with API calls and preserve the existing validation contracts unless product rules change.

Current auth routes:

- `/`
- `/catalog`
- `/profile`
- `/register`
- `/login`
