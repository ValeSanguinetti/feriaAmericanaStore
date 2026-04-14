import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../App'

function renderAppAt(path: string) {
  window.history.pushState({}, '', path)
  return render(<App />)
}

describe('App routing', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the public landing page through the public layout', async () => {
    renderAppAt('/')

    expect(await screen.findByText(/The Silent/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Create Account/i })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('renders the catalog route with the shared public header', async () => {
    renderAppAt('/catalog')

    expect(await screen.findByRole('heading', { name: /The Full Catalog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Account/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search catalog/i)).toBeInTheDocument()
  })

  it('keeps the prepared protected route accessible while auth is disabled', async () => {
    renderAppAt('/profile')

    expect(await screen.findByRole('heading', { name: /Julianna Vance/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Profile/i })).toBeInTheDocument()
  })

  it('renders the login route through the auth layout', async () => {
    renderAppAt('/login')

    expect(await screen.findByRole('heading', { name: /Welcome Back/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Login$/i })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('renders the register route through the auth layout', async () => {
    renderAppAt('/register')

    expect(await screen.findByRole('heading', { name: /Create account/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Create account/i })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })
})
