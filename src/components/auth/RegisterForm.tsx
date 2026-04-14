import { Link } from 'react-router-dom'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { InlineNotice } from '../ui/InlineNotice'
import { TextField } from '../ui/TextField'

export function RegisterForm() {
  const {
    errors,
    handleBlur,
    handleSubmit,
    reset,
    submitted,
    updateValue,
    values,
  } = useRegisterForm()

  return (
    <div className="grid w-full max-w-[34rem] gap-8">
      <div className="grid gap-2.5">
        <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent">
          Membership registration
        </p>
        <h2
          id="register-title"
          className="m-0 font-headline text-[clamp(2.6rem,5vw,3.8rem)] leading-[0.98] font-extrabold tracking-[-0.06em] text-headline"
        >
          Create account
        </h2>
        <p className="m-0 text-base text-text-muted">
          Become a part of the L&apos;ATELIER movement.
        </p>
      </div>

      <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5">
          <TextField
            error={errors.name}
            id="full-name"
            label="Name"
            name="name"
            placeholder="Enter your full name"
            value={values.name}
            onBlur={() => handleBlur('name')}
            onChange={(event) => updateValue(event, 'name')}
          />

          <TextField
            error={errors.email}
            id="email"
            label="Email Address"
            name="email"
            placeholder="name@example.com"
            type="email"
            value={values.email}
            onBlur={() => handleBlur('email')}
            onChange={(event) => updateValue(event, 'email')}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              error={errors.password}
              id="password"
              label="Password"
              name="password"
              placeholder="At least 8 characters"
              type="password"
              value={values.password}
              onBlur={() => handleBlur('password')}
              onChange={(event) => updateValue(event, 'password')}
            />

            <TextField
              error={errors.confirmPassword}
              id="confirm-password"
              label="Confirm"
              name="confirmPassword"
              placeholder="Repeat your password"
              type="password"
              value={values.confirmPassword}
              onBlur={() => handleBlur('confirmPassword')}
              onChange={(event) => updateValue(event, 'confirmPassword')}
            />
          </div>
        </div>

        <label
          className={`grid grid-cols-[auto_1fr] items-start gap-3 rounded-2xl border bg-white/70 px-4 py-4 ${
            errors.acceptedTerms ? 'border-danger/30' : 'border-black/10'
          }`}
        >
          <input
            checked={values.acceptedTerms}
            className="mt-0.5 h-4 w-4 accent-accent"
            name="acceptedTerms"
            type="checkbox"
            onBlur={() => handleBlur('acceptedTerms')}
            onChange={(event) => updateValue(event, 'acceptedTerms')}
          />
          <span className="text-[0.95rem] leading-6 text-text-muted">
            I agree to the <a href="/">Terms of Service</a> and{' '}
            <a href="/">Privacy Policy</a>.
          </span>
        </label>

        {errors.acceptedTerms ? (
          <p className="m-0 text-[0.82rem] text-danger" role="alert">
            {errors.acceptedTerms}
          </p>
        ) : null}

        <div className="grid gap-4">
          <button
            className="inline-flex items-center justify-center rounded-full bg-accent bg-[linear-gradient(135deg,#76551a_0%,#5e4312_100%)] px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-[#fffaf4] shadow-panel transition hover:-translate-y-px hover:brightness-105"
            type="submit"
          >
            Create account
          </button>
          <p className="m-0 text-center text-text-muted">
            Already have an account?{' '}
            <Link
              className="font-semibold text-headline underline decoration-accent/35 underline-offset-4"
              to="/login"
            >
              Log in
            </Link>
          </p>
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
              Start over
            </button>
          }
        >
          <strong className="block">Registration ready.</strong>
          <p className="mt-1 mb-0 text-success-text/90">
            {values.name || 'Your account'} can now be connected to a backend signup flow with{' '}
            <span className="underline decoration-success-text/30 underline-offset-4">
              {values.email}
            </span>
            .
          </p>
        </InlineNotice>
      ) : null}
    </div>
  )
}
