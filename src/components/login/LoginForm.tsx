import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'

type LoginValues = {
  email: string
  password: string
}

type LoginErrors = Partial<Record<keyof LoginValues, string>>

const initialValues: LoginValues = {
  email: '',
  password: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const inputClassName =
  'w-full rounded-2xl border border-transparent bg-surface-muted px-4 py-4 text-text outline-none transition focus:border-accent/30 focus:shadow-[0_0_0_0.28rem_rgba(118,85,26,0.12)]'
const invalidInputClassName =
  'border-danger/35 bg-danger/5'

function validateField(name: keyof LoginValues, values: LoginValues) {
  switch (name) {
    case 'email':
      if (!values.email.trim()) {
        return 'Enter your email address.'
      }

      return emailPattern.test(values.email)
        ? ''
        : 'Use a valid email address.'
    case 'password':
      return values.password ? '' : 'Enter your password.'
    default:
      return ''
  }
}

function validateForm(values: LoginValues) {
  return (['email', 'password'] as (keyof LoginValues)[]).reduce<LoginErrors>(
    (errors, fieldName) => {
      const error = validateField(fieldName, values)

      if (error) {
        errors[fieldName] = error
      }

      return errors
    },
    {},
  )
}

export function LoginForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<LoginErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function updateValue(
    event: ChangeEvent<HTMLInputElement>,
    fieldName: keyof LoginValues,
  ) {
    const nextValues = {
      ...values,
      [fieldName]: event.target.value,
    }

    setValues(nextValues)
    setSubmitted(false)

    if (errors[fieldName]) {
      const nextError = validateField(fieldName, nextValues)
      setErrors((currentErrors) => ({
        ...currentErrors,
        [fieldName]: nextError || undefined,
      }))
    }
  }

  function handleBlur(fieldName: keyof LoginValues) {
    const error = validateField(fieldName, values)
    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: error || undefined,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
  }

  function handleReset() {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
    setShowPassword(false)
  }

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
        <label className="grid gap-2" htmlFor="login-email">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Email Address
          </span>
          <input
            aria-describedby={errors.email ? 'login-email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            className={`${inputClassName}${errors.email ? ` ${invalidInputClassName}` : ''}`}
            id="login-email"
            name="email"
            placeholder="name@example.com"
            type="email"
            value={values.email}
            onBlur={() => handleBlur('email')}
            onChange={(event) => updateValue(event, 'email')}
          />
          {errors.email ? (
            <p className="m-0 text-[0.82rem] text-danger" id="login-email-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </label>

        <label className="grid gap-2" htmlFor="login-password">
          <span className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
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
              aria-describedby={
                errors.password ? 'login-password-error' : undefined
              }
              aria-invalid={Boolean(errors.password)}
              className={`${inputClassName} pr-20${errors.password ? ` ${invalidInputClassName}` : ''}`}
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
        <section
          className="flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-success-border bg-success-bg px-5 py-4 text-success-text md:flex-row md:items-center"
          aria-live="polite"
        >
          <div>
            <strong className="block">Login form ready.</strong>
            <p className="m-0 mt-1 text-success-text/90">
              The screen is prepared to authenticate{' '}
              <span className="underline decoration-success-text/30 underline-offset-4">
                {values.email}
              </span>{' '}
              once a real backend is connected.
            </p>
          </div>
          <button
            className="rounded-full bg-success-text/10 px-4 py-3 font-semibold"
            type="button"
            onClick={handleReset}
          >
            Start over
          </button>
        </section>
      ) : null}
    </div>
  )
}
