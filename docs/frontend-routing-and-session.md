# Frontend Routing and Session Compatibility

## Current Mode

This repository does not have real backend authentication yet.

For that reason the session layer runs in:

- `sessionMode = disabled`

This means:

- the routing architecture is ready for public/protected/role-based flows
- guards exist and document intended behavior
- current routes remain accessible so visible behavior does not break

## Bootstrap Flow

1. `src/App.tsx` mounts `SessionProvider`
2. `AppInitializer` calls `bootstrap()`
3. bootstrap resolves the frontend in compatibility mode
4. route rendering waits for bootstrap to finish

## Guards

### `PublicRoute`

- intended for public-only flows such as login/register
- while auth is disabled, it lets current behavior continue

### `ProtectedRoute`

- intended for authenticated areas
- while auth is disabled, it stays permissive

### `RoleRoute`

- intended for role-based sections
- while auth is disabled, it stays permissive

### `ProfileStateRoute`

- intended for future flows like onboarding, incomplete profile, or blocked account
- while auth is disabled, it stays permissive

## Future Activation Path

When real auth exists, the following changes should be enough:

- set a real session mode during bootstrap
- load the authenticated user/profile into `SessionProvider`
- enable redirect logic already defined in guards
- connect login/logout/profile bootstrap to `src/api/auth.ts`

No route tree rewrite should be required.
