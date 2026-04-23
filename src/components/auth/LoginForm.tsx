import { Link } from 'react-router-dom'
import { useLoginForm } from '../../hooks/useLoginForm'
import { InlineNotice } from '../ui/InlineNotice'

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
    <div className="border border-[#debfbf] bg-white px-6 py-10 shadow-[0_8px_30px_rgba(107,1,25,0.06)] sm:px-10 sm:py-12">
      <div className="mb-10 grid gap-3 text-center">
        <h1
          id="login-title"
          className="m-0 font-headline text-[2.25rem] leading-[0.92] font-black uppercase tracking-[-0.06em] text-[#241919] sm:text-[2.7rem]"
        >
          Feria
          <br />
          Americana
        </h1>
        <p className="m-0 text-[0.62rem] uppercase tracking-[0.12em] text-[#574142] sm:text-[0.68rem]">
          Ingresa tus credenciales para continuar
        </p>
      </div>

      <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
        <label className="grid gap-2" htmlFor="login-email">
          <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#574142]">
            Correo electrónico
          </span>
          <span className="relative block">
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[0.9rem] text-[#8b7171]"
            >
              @
            </span>
            <input
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              aria-invalid={Boolean(errors.email)}
              className={`w-full border border-[#debfbf] bg-white py-3 pl-11 pr-4 text-[0.9rem] text-[#241919] outline-none transition focus:border-[#241919] ${
                errors.email ? 'border-[#ba1a1a] bg-[#fff3f1]' : ''
              }`}
              id="login-email"
              name="email"
              placeholder="name@example.com"
              type="email"
              value={values.email}
              onBlur={() => handleBlur('email')}
              onChange={(event) => updateValue(event, 'email')}
            />
          </span>
          {errors.email ? (
            <p className="m-0 text-[0.76rem] text-[#ba1a1a]" id="login-email-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </label>

        <label className="grid gap-2" htmlFor="login-password">
          <span className="flex items-center justify-between gap-3 text-[0.62rem] uppercase tracking-[0.16em] text-[#574142]">
            <span>Contraseña</span>
            <button
              className="border-0 bg-transparent p-0 text-left text-[0.62rem] uppercase tracking-[0.16em] text-[#8b1e2d] transition-colors hover:underline"
              type="button"
            >
              ¿Olvidaste?
            </button>
          </span>

          <span className="relative block">
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[0.95rem] text-[#8b7171]"
            >
              *
            </span>
            <input
              aria-describedby={errors.password ? 'login-password-error' : undefined}
              aria-invalid={Boolean(errors.password)}
              className={`w-full border border-[#debfbf] bg-white py-3 pl-11 pr-16 text-[0.9rem] text-[#241919] outline-none transition focus:border-[#241919] ${
                errors.password ? 'border-[#ba1a1a] bg-[#fff3f1]' : ''
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
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              className="absolute top-1/2 right-4 -translate-y-1/2 border-0 bg-transparent p-0 text-[0.68rem] uppercase tracking-[0.08em] text-[#8b7171] transition-colors hover:text-[#241919]"
              type="button"
              onClick={() => setShowPassword((currentValue) => !currentValue)}
            >
              {showPassword ? 'Ocultar' : 'Ver'}
            </button>
          </span>

          {errors.password ? (
            <p className="m-0 text-[0.76rem] text-[#ba1a1a]" id="login-password-error" role="alert">
              {errors.password}
            </p>
          ) : null}
        </label>

        <label className="flex items-center gap-2 py-1 text-[0.74rem] text-[#574142]" htmlFor="remember-me">
          <input
            className="h-4 w-4 rounded-[2px] border border-[#debfbf] accent-[#8b1e2d]"
            id="remember-me"
            type="checkbox"
          />
          <span>Recordarme</span>
        </label>

        <div className="grid gap-3">
          <button
            className="inline-flex items-center justify-center bg-[#8b1e2d] px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-90"
            type="submit"
          >
            Iniciar sesión
          </button>

          <Link
            className="inline-flex items-center justify-center border border-[#241919] bg-transparent px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#241919] no-underline transition hover:bg-[#f3dddd]"
            to="/register"
          >
            Crear cuenta
          </Link>
        </div>
      </form>

      <div className="mt-8 border-t border-[#debfbf] pt-6">
        <p className="m-0 text-center text-[0.6rem] uppercase tracking-[0.18em] text-[#574142]">
          O continúa con
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            className="flex items-center justify-center border border-[#debfbf] py-3 text-[#241919] transition hover:bg-[#fff0f0]"
            type="button"
          >
            <span aria-hidden="true" className="text-sm">
              A
            </span>
          </button>
          <button
            className="flex items-center justify-center border border-[#debfbf] py-3 text-[#241919] transition hover:bg-[#fff0f0]"
            type="button"
          >
            <span aria-hidden="true" className="text-sm">
              @
            </span>
          </button>
        </div>
      </div>

      {submitted ? (
        <InlineNotice
          action={
            <button
              className="rounded-sm bg-success-text/10 px-4 py-3 font-semibold"
              type="button"
              onClick={reset}
            >
              Reiniciar
            </button>
          }
        >
          <strong className="block">La validación de inicio de sesión fue correcta.</strong>
          <p className="mt-1 mb-0 text-success-text/90">
            <span className="underline decoration-success-text/30 underline-offset-4">
              {values.email}
            </span>{' '}
            está listo para conectarse a un flujo real de sesión.
          </p>
        </InlineNotice>
      ) : null}
    </div>
  )
}
