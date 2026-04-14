import { Link } from 'react-router-dom'
import { useLoginForm } from '../../hooks/useLoginForm'
import { InlineNotice } from '../ui/InlineNotice'
import { TextField } from '../ui/TextField'

export function LoginForm() {
  const {
    errors,
    handleBlur,
    handleSubmit,
    reset,
    setShowPassword,
    showPassword,
    submitted,
    updateValue,
    values,
  } = useLoginForm()

  return (
    <div className="grid gap-7 rounded-[1.3rem] border border-black/10 bg-white/90 p-6 shadow-card md:p-9">
      <div className="grid gap-2 text-center">
        <h1
          id="login-title"
          className="m-0 font-headline text-[clamp(2.4rem,4vw,3.2rem)] leading-none font-extrabold tracking-[-0.05em] text-headline"
        >
          Welcome Back
        </h1>
        <p className="m-0 text-text-muted">
          Enter your details to access your curated collection.
        </p>
      </div>

      <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
        <TextField
          error={errors.email}
          id="login-email"
          label="Email Address"
          name="email"
          placeholder="name@example.com"
          type="email"
          value={values.email}
          onBlur={() => handleBlur('email')}
          onChange={(event) => updateValue(event, 'email')}
        />

        <label className="grid gap-2" htmlFor="login-password">
          <span className="flex flex-col gap-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>Password</span>
            <button
              className="border-0 bg-transparent p-0 text-left text-[0.7rem] uppercase tracking-[0.14em] text-accent underline decoration-accent/35 underline-offset-4"
              type="button"
            >
              Forgot password
            </button>
          </span>

          <span className="relative block">
            <input
              aria-describedby={errors.password ? 'login-password-error' : undefined}
              aria-invalid={Boolean(errors.password)}
              className={`w-full rounded-2xl border border-transparent bg-surface-muted px-4 py-4 pr-20 text-text outline-none transition focus:border-accent/30 focus:shadow-[0_0_0_0.28rem_rgba(118,85,26,0.12)] ${
                errors.password ? 'border-danger/35 bg-danger/5' : ''
              }`}
              id="login-password"
              name="password"
              placeholder="••••••••"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onBlur={() => handleBlur('password')}
              onChange={(event) => updateValue(event, 'password')}
            />
            <button
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border-0 bg-transparent px-2 py-1 text-[0.82rem] font-semibold text-text-muted"
              type="button"
              onClick={() => setShowPassword((currentValue) => !currentValue)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </span>

          {errors.password ? (
            <p className="m-0 text-[0.82rem] text-danger" id="login-password-error" role="alert">
              {errors.password}
            </p>
          ) : null}
        </label>

        <div className="grid gap-4">
          <button
            className="inline-flex items-center justify-center rounded-2xl bg-accent bg-[linear-gradient(135deg,#76551a_0%,#5e4312_100%)] px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-[#fffaf4] shadow-panel transition hover:-translate-y-px hover:brightness-105"
            type="submit"
          >
            Login
          </button>

          <div
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-4"
            aria-hidden="true"
          >
            <span className="h-px bg-black/10" />
            <strong className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-text-muted/80">
              Or
            </strong>
            <span className="h-px bg-black/10" />
          </div>

          <Link
            className="inline-flex items-center justify-center rounded-2xl bg-accent-soft px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.18em] text-[#694d0c] no-underline"
            to="/register"
          >
            Create account
          </Link>
        </div>
      </form>

      {submitted ? (
        <InlineNotice
          action={
            <button
              className="rounded-full bg-success-text/10 px-4 py-3 font-semibold"
              type="button"
              onClick={reset}
            >
              Reset
            </button>
          }
        >
          <strong className="block">Login validation passed.</strong>
          <p className="mt-1 mb-0 text-success-text/90">
            <span className="underline decoration-success-text/30 underline-offset-4">
              {values.email}
            </span>{' '}
            is ready to connect to a real session flow.
          </p>
        </InlineNotice>
      ) : null}
    </div>
  )
}
