# Feria Americana Store

Frontend prototype for the `Landing Page`, `Home Catalog`, `User Profile`, `Register`, and `Login` experiences implemented from Stitch project `12615917652504803710`.

## Current Scope

- responsive landing, catalog, profile, registration, and login screens inspired by the Stitch designs
- reusable React components for landing sections, catalog views, profile dashboard, auth layout, form behavior, shared footer, and route-based navigation
- Tailwind-first styling; `src/index.css` now only defines the shared theme tokens and base rules
- client-side validation for register and login flows
- local editorial and gallery assets imported into the app instead of relying on opaque hosted runtime URLs

## Project Structure

- `src/App.tsx`: route definitions and redirects for `/register` and `/login`
- `src/components/catalog/HomeCatalogPage.tsx`: route `/catalog` with filters, product grid, and pagination shell
- `src/components/landing/LandingPage.tsx`: route `/` with hero, featured products, and editorial narrative sections
- `src/components/profile/UserProfilePage.tsx`: route `/profile` with member overview, recent orders, saved pieces, and settings shell
- `src/components/auth/AuthExperience.tsx`: auth layout shell with shared footer and route-aware styling
- `src/components/register/RegisterPage.tsx`: register composition and shared footer
- `src/components/register/RegisterForm.tsx`: controlled register form, validation, and success state
- `src/components/login/LoginPage.tsx`: login composition and moodboard gallery
- `src/components/login/LoginForm.tsx`: controlled login form, validation, password visibility, and success state
- `src/components/shared/SiteFooter.tsx`: shared footer for landing and auth screens
- `src/index.css`: Tailwind theme tokens, fonts, and minimal global base rules
- `docs/register-screen-prd.md`: implementation planning document and scope decisions
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

## Integration Notes

The current submit flows are frontend-only by design. To connect a real auth backend, replace the success branches in `RegisterForm` and `LoginForm` with API calls and preserve the existing validation contracts unless product rules change.

Current auth routes:

- `/`
- `/catalog`
- `/profile`
- `/register`
- `/login`
