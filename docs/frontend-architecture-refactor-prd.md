# Frontend Architecture Refactor PRD

## Problem and Goal

The current frontend works, but its structure is still flat and page-centric:

- routing is defined directly in `src/App.tsx`
- final screens live under `src/components/*`
- shared navigation and shell concerns are duplicated
- there is no explicit `api`, `hooks`, `layouts`, `routes`, `store`, or `lib` layer

The goal of this refactor is to reorganize the frontend so it follows the same architectural responsibilities as the reference project `educonnect-portal`, while preserving this repository's existing stack and current visible behavior.

This is a structural refactor, not a rewrite and not a backend integration effort.

## Scope

In scope:

- move the app to an architecture with explicit `pages`, `layouts`, `routes`, `hooks`, `store`, `api`, and `lib` layers
- keep `src/main.tsx` limited to mounting the application
- move global composition into `src/App.tsx`
- centralize routing and access rules in `src/routes`
- create session/bootstrap infrastructure without inventing real authentication
- centralize shared navigation and layout shells
- migrate landing, catalog, profile, login, and register screens into `src/pages`
- extract reusable form and UI primitives
- document the new architecture and its current compatibility rules

Out of scope:

- real backend authentication
- mock authentication that changes current behavior
- new state/query/http/UI dependencies
- business-level redesign of the existing screens

## Affected Users and Actors

- visitors using the landing and catalog routes
- users navigating login and register flows
- users opening the current profile screen
- future developers who will connect the frontend to real auth and APIs

## Implementation Approach

- keep the existing stack: React, React Router, Tailwind, native `fetch`, and lightweight Context-based session state
- create a compatibility-oriented session layer with `sessionMode = disabled`
- introduce explicit guards now, but make them permissive while auth is not implemented
- move page-level infrastructure into `layouts`, `hooks`, and `lib`
- centralize route metadata and navigation configuration
- preserve the existing design tokens in `src/index.css`

## Data, Contracts, and Integrations

Current real contracts remain unchanged:

- login and register are still local-only form flows
- no backend endpoints are called by the UI yet

New internal frontend contracts introduced by this refactor:

- `src/store/session.tsx` owns bootstrap state and future session shape
- `src/routes/guards.tsx` owns access-rule entry points
- `src/api/client.ts` and `src/api/auth.ts` define the future HTTP boundary
- `src/lib/validation.ts` owns reusable form validation helpers

## Rules and Compatibility Decisions

- protected and role-based guards must exist, but they cannot block current routes while auth is disabled
- page components should focus on composition, not app bootstrapping or route decisions
- shared header/footer/navigation must be defined once and consumed by layouts
- local form state remains local
- no new dependency may be introduced just to mimic the reference repo

## Risks and Edge Cases

- moving pages without carefully reusing the current markup can accidentally change layout behavior
- introducing guards too aggressively could block routes that are currently public
- future backend integration may require enabling stricter behavior in guards and session bootstrap
- if shared navigation config drifts from actual routes, active-state styling can become inconsistent

## Open Follow-up Items

- connect the prepared auth/session/API layer to a real backend
- decide which routes will become truly protected when auth is enabled
- add a real frontend test runner if automated route smoke tests become required
