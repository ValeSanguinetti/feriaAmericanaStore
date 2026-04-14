# Frontend Architecture

## Stack

- React 19 + Vite
- TypeScript
- React Router 7
- Tailwind CSS 4
- native `fetch` for future API access
- Context-based session state

## Entry Point

- `src/main.tsx` mounts the application only
- `src/App.tsx` owns global composition:
  - providers
  - router
  - bootstrap initializer
  - suspense/loading shell
  - route tree

## Folder Structure

```text
src/
  api/           HTTP boundary prepared for future integrations
  components/    shared UI, navigation, and domain components
  hooks/         reusable domain/infrastructure hooks
  layouts/       high-level route shells
  lib/           transversal helpers
  pages/         final route screens
  routes/        route metadata and guards
  store/         lightweight global session/bootstrap state
  test/          test contract and future setup
```

## Layer Responsibilities

### `api`

- defines the future HTTP client and domain modules
- keeps URL building, headers, and error mapping out of pages
- is intentionally prepared but not yet wired to the current UI

### `components`

- `components/ui`: base reusable UI primitives without business logic
- `components/navigation`: site navigation and menu configuration
- domain folders (`auth`, `landing`, `catalog`, `profile`): reusable business-oriented presentation pieces

### `hooks`

- own repeated form and route coordination logic
- expose screen-ready state/actions without coupling pages to validation internals

### `layouts`

- define public, auth, and private application shells
- own shared structural concerns such as headers, footers, spacing, and route containers

### `pages`

- compose layouts, sections, hooks, and UI pieces
- should not define global app behavior or duplicate infrastructure concerns

### `routes`

- centralize route declarations, access metadata, and guards
- keep the distinction between public, auth, and prepared private routes explicit

### `store`

- stores only transversal session/bootstrap state
- does not absorb local screen state like filters, tabs, or forms

## Current Architectural Compatibility

- auth is not implemented yet, so session runs in compatibility mode
- guards are explicit, but permissive while `sessionMode` is disabled
- login/register still use local form state and success feedback only
- catalog/profile content remains static, but now lives behind explicit route/layout boundaries

## Reference Alignment

This architecture mirrors the reference project's responsibilities:

- thin `main.tsx`
- global composition in `App.tsx`
- route guards in `routes`
- layouts by context
- explicit session/bootstrap layer
- reusable hooks and utilities
- centralized API boundary

It does not mirror the reference project's packages one-to-one.
