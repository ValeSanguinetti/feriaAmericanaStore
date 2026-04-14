import { useState, type ChangeEvent, type FormEvent } from 'react'
import { validateEmail, validateLoginPassword } from '../lib/validation'

type LoginValues = {
  email: string
  password: string
}

type LoginErrors = Partial<Record<keyof LoginValues, string>>

const initialValues: LoginValues = {
  email: '',
  password: '',
}

function validateField(name: keyof LoginValues, values: LoginValues) {
  switch (name) {
    case 'email':
      return validateEmail(values.email)
    case 'password':
      return validateLoginPassword(values.password)
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

export function useLoginForm() {
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

  function reset() {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
    setShowPassword(false)
  }

  return {
    errors,
    handleBlur,
    handleSubmit,
    reset,
    setShowPassword,
    showPassword,
    submitted,
    updateValue,
    values,
  }
}
