# Frontend Test Contract

This project now uses `vitest` + `jsdom` + React Testing Library.

The `src/test` folder contains the base frontend testing contract for:

- test setup files
- route smoke tests
- hook and component tests

Current covered flows:

- app bootstrap renders without crashing
- public routes render through their layouts
- auth routes render through `AuthLayout`
- protected-route scaffolding remains permissive while auth is disabled
- login validation and success feedback
- register validation and success feedback
