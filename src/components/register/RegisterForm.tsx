import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'

type FormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptedTerms: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptedTerms: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const cardClassName = 'grid w-full max-w-[34rem] gap-8'
const inputClassName =
  'w-full rounded-2xl border border-transparent bg-surface-muted px-4 py-4 text-text outline-none transition focus:border-accent/30 focus:shadow-[0_0_0_0.28rem_rgba(118,85,26,0.12)]'
const invalidInputClassName =
  'border-danger/35 bg-danger/5'

function validateField(name: keyof FormValues, values: FormValues) {
  switch (name) {
    case 'name':
      return values.name.trim() ? '' : 'Enter your full name.'
    case 'email':
      if (!values.email.trim()) {
        return 'Enter your email address.'
      }

      return emailPattern.test(values.email)
        ? ''
        : 'Use a valid email address.'
    case 'password':
      if (!values.password) {
        return 'Create a password.'
      }

      return values.password.length >= 8
        ? ''
        : 'Password must be at least 8 characters.'
    case 'confirmPassword':
      if (!values.confirmPassword) {
        return 'Confirm your password.'
      }

      return values.confirmPassword === values.password
        ? ''
        : 'Passwords do not match.'
    case 'acceptedTerms':
      return values.acceptedTerms
        ? ''
        : 'You need to accept the terms to continue.'
    default:
      return ''
  }
}

function validateForm(values: FormValues) {
  const fieldNames: (keyof FormValues)[] = [
    'name',
    'email',
    'password',
    'confirmPassword',
    'acceptedTerms',
  ]

  return fieldNames.reduce<FormErrors>((errors, fieldName) => {
    const error = validateField(fieldName, values)

    if (error) {
      errors[fieldName] = error
    }

    return errors
  }, {})
}

export function RegisterForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function updateValue(
    event: ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormValues,
  ) {
    const nextValue =
      fieldName === 'acceptedTerms'
        ? event.target.checked
        : event.target.value

    const nextValues = {
      ...values,
      [fieldName]: nextValue,
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

    if (
      fieldName === 'password' &&
      (values.confirmPassword || errors.confirmPassword)
    ) {
      const confirmError = validateField('confirmPassword', nextValues)
      setErrors((currentErrors) => ({
        ...currentErrors,
        confirmPassword: confirmError || undefined,
      }))
    }
  }

  function handleBlur(fieldName: keyof FormValues) {
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
  }

  return (
    <div className={cardClassName}>
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
          <FormField
            id="full-name"
            label="Name"
            name="name"
            placeholder="Enter your full name"
            value={values.name}
            error={errors.name}
            onBlur={() => handleBlur('name')}
            onChange={(event) => updateValue(event, 'name')}
          />

          <FormField
            id="email"
            label="Email Address"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={values.email}
            error={errors.email}
            onBlur={() => handleBlur('email')}
            onChange={(event) => updateValue(event, 'email')}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              id="password"
              label="Password"
              name="password"
              type="password"
              placeholder="At least 8 characters"
              value={values.password}
              error={errors.password}
              onBlur={() => handleBlur('password')}
              onChange={(event) => updateValue(event, 'password')}
            />

            <FormField
              id="confirm-password"
              label="Confirm"
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              value={values.confirmPassword}
              error={errors.confirmPassword}
              onBlur={() => handleBlur('confirmPassword')}
              onChange={(event) => updateValue(event, 'confirmPassword')}
            />
          </div>
        </div>

        <label
          className={`grid grid-cols-[auto_1fr] items-start gap-3 rounded-2xl border bg-white/70 px-4 py-4 ${
            errors.acceptedTerms
              ? 'border-danger/30'
              : 'border-black/10'
          }`}
        >
          <input
            checked={values.acceptedTerms}
            name="acceptedTerms"
            className="mt-0.5 h-4 w-4 accent-accent"
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
        <section
          className="flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-success-border bg-success-bg px-5 py-4 text-success-text md:flex-row md:items-center"
          aria-live="polite"
        >
          <div>
            <strong className="block">Registration ready.</strong>
            <p className="mt-1 mb-0 text-success-text/90">
              {values.name || 'Your account'} can now be connected to a backend
              signup flow with{' '}
              <span className="underline decoration-success-text/30 underline-offset-4">
                {values.email}
              </span>
              .
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

type FormFieldProps = {
  error?: string
  id: string
  label: string
  name: string
  onBlur: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
  value: string
}

function FormField({
  error,
  id,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  type = 'text',
  value,
}: FormFieldProps) {
  const describedBy = error ? `${id}-error` : undefined

  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {label}
      </span>
      <input
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        className={`${inputClassName}${error ? ` ${invalidInputClassName}` : ''}`}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error ? (
        <p className="m-0 text-[0.82rem] text-danger" id={describedBy} role="alert">
          {error}
        </p>
      ) : null}
    </label>
  )
}
