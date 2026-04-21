import { Link } from 'react-router-dom'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { InlineNotice } from '../ui/InlineNotice'

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
    <div className="w-full">
      <div className="mb-12">
        <h2
          id="register-title"
          className="m-0 text-[2rem] font-semibold text-[#241919] sm:text-[2.15rem]"
        >
          Create Account
        </h2>
        <p className="m-0 mt-2 text-[1rem] text-[#574142]">
          Experience fashion curated for you.
        </p>
      </div>

      <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          <label className="grid gap-2" htmlFor="full-name">
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#574142]">
              Full Name
            </span>
            <input
              aria-describedby={errors.name ? 'full-name-error' : undefined}
              aria-invalid={Boolean(errors.name)}
              aria-label="Name"
              className={`h-12 w-full rounded-[4px] border bg-white px-4 text-[0.92rem] uppercase tracking-[0.03em] text-[#241919] outline-none transition focus:border-[#241919] ${
                errors.name ? 'border-[#ba1a1a] bg-[#fff3f1]' : 'border-[#debfbf]'
              }`}
              id="full-name"
              name="name"
              placeholder="ALEXANDER VOGUE"
              value={values.name}
              onBlur={() => handleBlur('name')}
              onChange={(event) => updateValue(event, 'name')}
            />
            {errors.name ? (
              <p className="m-0 text-[0.76rem] text-[#ba1a1a]" id="full-name-error" role="alert">
                {errors.name}
              </p>
            ) : null}
          </label>

          <label className="grid gap-2" htmlFor="email">
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#574142]">
              Email Address
            </span>
            <input
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={Boolean(errors.email)}
              className={`h-12 w-full rounded-[4px] border bg-white px-4 text-[0.92rem] uppercase tracking-[0.03em] text-[#241919] outline-none transition focus:border-[#241919] ${
                errors.email ? 'border-[#ba1a1a] bg-[#fff3f1]' : 'border-[#debfbf]'
              }`}
              id="email"
              name="email"
              placeholder="CURATED@FERIA.COM"
              type="email"
              value={values.email}
              onBlur={() => handleBlur('email')}
              onChange={(event) => updateValue(event, 'email')}
            />
            {errors.email ? (
              <p className="m-0 text-[0.76rem] text-[#ba1a1a]" id="email-error" role="alert">
                {errors.email}
              </p>
            ) : null}
          </label>

          <label className="grid gap-2" htmlFor="password">
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#574142]">
              Password
            </span>
            <span className="relative block">
              <input
                aria-describedby={errors.password ? 'password-error' : undefined}
                aria-invalid={Boolean(errors.password)}
                aria-label="Password"
                className={`h-12 w-full rounded-[4px] border bg-white px-4 pr-12 text-[0.92rem] text-[#241919] outline-none transition focus:border-[#241919] ${
                  errors.password ? 'border-[#ba1a1a] bg-[#fff3f1]' : 'border-[#debfbf]'
                }`}
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                value={values.password}
                onBlur={() => handleBlur('password')}
                onChange={(event) => updateValue(event, 'password')}
              />
              <span
                aria-hidden="true"
                className="absolute top-1/2 right-4 -translate-y-1/2 text-[0.9rem] text-[#574142]"
              >
                View
              </span>
            </span>
            {errors.password ? (
              <p className="m-0 text-[0.76rem] text-[#ba1a1a]" id="password-error" role="alert">
                {errors.password}
              </p>
            ) : null}
          </label>

          <label className="grid gap-2" htmlFor="confirm-password">
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#574142]">
              Confirm Password
            </span>
            <input
              aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
              aria-invalid={Boolean(errors.confirmPassword)}
              aria-label="Confirm"
              className={`h-12 w-full rounded-[4px] border bg-white px-4 text-[0.92rem] text-[#241919] outline-none transition focus:border-[#241919] ${
                errors.confirmPassword ? 'border-[#ba1a1a] bg-[#fff3f1]' : 'border-[#debfbf]'
              }`}
              id="confirm-password"
              name="confirmPassword"
              placeholder="••••••••"
              type="password"
              value={values.confirmPassword}
              onBlur={() => handleBlur('confirmPassword')}
              onChange={(event) => updateValue(event, 'confirmPassword')}
            />
            {errors.confirmPassword ? (
              <p
                className="m-0 text-[0.76rem] text-[#ba1a1a]"
                id="confirm-password-error"
                role="alert"
              >
                {errors.confirmPassword}
              </p>
            ) : null}
          </label>
        </div>

        <label className="flex items-start gap-3 py-2" htmlFor="terms">
          <input
            aria-describedby={errors.acceptedTerms ? 'terms-error' : undefined}
            checked={values.acceptedTerms}
            className="mt-1 h-4 w-4 rounded border-[#debfbf] accent-[#8b1e2d]"
            id="terms"
            name="acceptedTerms"
            type="checkbox"
            onBlur={() => handleBlur('acceptedTerms')}
            onChange={(event) => updateValue(event, 'acceptedTerms')}
          />
          <span className="text-[0.88rem] leading-5 text-[#574142]">
            I agree to the{' '}
            <a
              className="font-semibold text-[#8b1e2d] underline underline-offset-4"
              href="/"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              className="font-semibold text-[#8b1e2d] underline underline-offset-4"
              href="/"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {errors.acceptedTerms ? (
          <p className="m-0 text-[0.76rem] text-[#ba1a1a]" id="terms-error" role="alert">
            {errors.acceptedTerms}
          </p>
        ) : null}

        <div className="grid gap-6">
          <button
            className="mt-2 h-14 w-full rounded-lg bg-[#8b1e2d] text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-[#6b0119] active:scale-[0.98]"
            type="submit"
          >
            Create account
          </button>

          <div className="border-t border-[#debfbf] pt-6 text-center">
            <p className="m-0 text-[1rem] text-[#574142]">
              Already have an account?
            </p>
            <Link
              className="ml-1 font-bold uppercase text-[#241919] no-underline transition-colors hover:text-[#8b1e2d]"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-[#8b7171]">
          <span aria-hidden="true">Verified</span>
          <span aria-hidden="true">Premium</span>
          <span aria-hidden="true">Eco</span>
        </div>
      </form>

      {submitted ? (
        <InlineNotice
          action={
            <button
              className="rounded-sm bg-success-text/10 px-4 py-3 font-semibold"
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
