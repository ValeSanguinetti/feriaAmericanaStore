import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from '../lib/validation'

type RegisterValues = {
  acceptedTerms: boolean
  confirmPassword: string
  email: string
  name: string
  password: string
}

type RegisterErrors = Partial<Record<keyof RegisterValues, string>>

const initialValues: RegisterValues = {
  acceptedTerms: false,
  confirmPassword: '',
  email: '',
  name: '',
  password: '',
}

function validateField(name: keyof RegisterValues, values: RegisterValues) {
  switch (name) {
    case 'name':
      return validateRequired(values.name, 'Enter your full name.')
    case 'email':
      return validateEmail(values.email)
    case 'password':
      return validatePassword(values.password)
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

function validateForm(values: RegisterValues) {
  const fieldNames: (keyof RegisterValues)[] = [
    'name',
    'email',
    'password',
    'confirmPassword',
    'acceptedTerms',
  ]

  return fieldNames.reduce<RegisterErrors>((errors, fieldName) => {
    const error = validateField(fieldName, values)

    if (error) {
      errors[fieldName] = error
    }

    return errors
  }, {})
}

export function useRegisterForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<RegisterErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function updateValue(
    event: ChangeEvent<HTMLInputElement>,
    fieldName: keyof RegisterValues,
  ) {
    const nextValue =
      fieldName === 'acceptedTerms' ? event.target.checked : event.target.value

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

    if (fieldName === 'password' && (values.confirmPassword || errors.confirmPassword)) {
      const confirmError = validateField('confirmPassword', nextValues)
      setErrors((currentErrors) => ({
        ...currentErrors,
        confirmPassword: confirmError || undefined,
      }))
    }
  }

  function handleBlur(fieldName: keyof RegisterValues) {
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
  }

  return {
    errors,
    handleBlur,
    handleSubmit,
    reset,
    submitted,
    updateValue,
    values,
  }
}
