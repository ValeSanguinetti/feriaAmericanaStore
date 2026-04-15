# Landing, Catalog, Profile, and Auth Screens PRD

## Problem and Goal

The repository contains frontend screens derived from Stitch. We need to support `Landing Page`, `Home Catalog`, `User Profile`, `Register`, and `Login` experiences from project `12615917652504803710` as functional React routes instead of static exported HTML.

The goal is to implement a production-oriented frontend slice that:

- matches the Stitch layout and visual direction closely
- works as responsive React pages instead of static exported HTML
- includes basic client-side validation and submit behavior
- leaves the repo with enough documentation for future auth integration

## Scope

In scope:

- replace the current starter screen with integrated landing, catalog, profile, register, and login views
- split the UI into reusable React components
- add route-based navigation between auth screens with React Router
- implement controlled form state
- validate required fields, email format, password length, password confirmation, and terms acceptance
- add submit success states that simulate account creation and login readiness
- adapt the visual system to a Tailwind-first setup with only minimal global CSS

Out of scope:

- backend auth integration
- persistent auth state
- API clients
- real commerce functionality behind catalog and landing CTAs

## Affected Users

- visitors discovering the brand and featured collection on the landing page
- visitors browsing the catalog and filtering visible products
- signed-in members reviewing profile, orders, saved items, and account settings
- new customers trying to create an account
- returning customers signing in
- future developers who will connect these screens to a real auth backend

## Implementation Approach

- create route-based site entrypoints in `src/App.tsx`
- extract presentational and form concerns into small components under `src/components/landing`, `src/components/catalog`, `src/components/profile`, `src/components/register`, `src/components/login`, `src/components/auth`, and `src/components/shared`
- use local assets plus Tailwind theme tokens for the Stitch-inspired design system
- keep validation logic in the form components so backend integration can later replace only the submit handlers

## Data, Contracts, and Integrations

Current frontend-only contract:

- `name`: required
- `email`: required, basic email validation
- `password`: required, minimum length validation
- `confirmPassword`: must match `password`
- `acceptedTerms`: must be true before submit
- login `email`: required, basic email validation
- login `password`: required

No external integration is introduced in this change.
Frontend navigation now depends on `react-router-dom`.
Frontend styling now depends on `tailwindcss` and `@tailwindcss/vite`.

## Validations and Rules

- all visible fields are required
- email must match a basic email pattern
- password must have at least 8 characters
- password confirmation must match
- terms checkbox must be accepted
- successful register submit shows a confirmation state and preserves the entered name/email context
- successful login submit shows a confirmation state and preserves the entered email context
- landing page CTAs route to `/register` or `/login` where appropriate
- landing collection CTAs route to `/catalog`
- catalog is available at `/catalog` with static filters, sorting shell, and pagination shell
- profile is available at `/profile` with static member summary, orders, saved pieces, and settings shell
- register and login screens navigate through real routes (`/register`, `/login`)
- `/` renders the landing page and unknown paths fall back to `/`

## Risks and Edge Cases

- the Stitch export uses remote image assets; localizing the landing, catalog, profile, editorial, and gallery images avoids fragile runtime dependencies
- visual parity is approximate because exported Stitch styles must be translated into maintainable Tailwind utilities and shared theme tokens
- backend integration is still open, so success is intentionally simulated in the frontend

## Open Questions

- which backend or auth provider will own account creation and sign-in
- whether login, password recovery, and legal links should route internally or externally
- which landing, catalog, and profile CTAs should eventually connect to product, collection, cart, wishlist, order detail, and account management flows
- whether password rules need stronger requirements than minimum length
