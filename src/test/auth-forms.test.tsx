import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { LoginForm } from '../components/auth/LoginForm'
import { RegisterForm } from '../components/auth/RegisterForm'

function renderWithRouter(node: ReactNode) {
  return render(<MemoryRouter>{node}</MemoryRouter>)
}

afterEach(() => {
  cleanup()
})

describe('LoginForm', () => {
  it('shows validation errors when submitting empty credentials', async () => {
    renderWithRouter(<LoginForm />)

    fireEvent.click(screen.getByRole('button', { name: /^Iniciar sesión$/i }))

    expect(await screen.findByText(/Enter your email address/i)).toBeInTheDocument()
    expect(screen.getByText(/Enter your password/i)).toBeInTheDocument()
  })

  it('shows the success notice after a valid submit', async () => {
    renderWithRouter(<LoginForm />)

    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), {
      target: { value: 'atelier@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('••••••••'), {
      target: { value: 'secret123' },
    })
    fireEvent.click(screen.getByRole('button', { name: /^Iniciar sesión$/i }))

    expect(await screen.findByText(/La validación de inicio de sesión fue correcta/i)).toBeInTheDocument()
    expect(screen.getByText(/atelier@example.com/i)).toBeInTheDocument()
  })
})

describe('RegisterForm', () => {
  it('shows validation errors for invalid registration data', async () => {
    renderWithRouter(<RegisterForm />)

    fireEvent.change(screen.getByLabelText(/^Correo electrónico$/i), {
      target: { value: 'invalid-email' },
    })
    fireEvent.change(screen.getByLabelText(/^Contraseña$/i), {
      target: { value: 'short' },
    })
    fireEvent.change(screen.getByLabelText(/^Confirm$/i), {
      target: { value: 'different' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Create account/i }))

    expect(await screen.findByText(/Enter your full name/i)).toBeInTheDocument()
    expect(screen.getByText(/Use a valid email address/i)).toBeInTheDocument()
    expect(screen.getByText(/La contraseña debe tener al menos 8 caracteres/i)).toBeInTheDocument()
    expect(screen.getByText(/Las contraseñas no coinciden/i)).toBeInTheDocument()
    expect(screen.getByText(/You need to accept the terms to continue/i)).toBeInTheDocument()
  })

  it('shows the success notice after a valid registration submit', async () => {
    renderWithRouter(<RegisterForm />)

    fireEvent.change(screen.getByLabelText(/^Name$/i), {
      target: { value: 'Julianna Vance' },
    })
    fireEvent.change(screen.getByLabelText(/^Correo electrónico$/i), {
      target: { value: 'julianna@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/^Contraseña$/i), {
      target: { value: 'secret123' },
    })
    fireEvent.change(screen.getByLabelText(/^Confirm$/i), {
      target: { value: 'secret123' },
    })
    fireEvent.click(screen.getByRole('checkbox'))
    fireEvent.click(screen.getByRole('button', { name: /Create account/i }))

    expect(await screen.findByText(/Registration ready/i)).toBeInTheDocument()
    expect(screen.getByText(/julianna@example.com/i)).toBeInTheDocument()
    expect(screen.getByText(/Julianna Vance/i)).toBeInTheDocument()
  })
})
