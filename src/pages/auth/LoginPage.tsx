import loginBackgroundTexture from '../../assets/login-background-texture.jpg'
import { LoginForm } from '../../components/auth/LoginForm'

const footerLinks = [
  'Envíos',
  'Devoluciones',
  'Privacidad',
  'Contacto',
  'Sustentabilidad',
]

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col overflow-hidden bg-[#fff8f7] text-[#241919]">
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12 sm:px-6 md:px-16 md:py-20">
        <section className="w-full max-w-[30rem]" aria-labelledby="login-title">
          <LoginForm />
        </section>
      </main>

      <footer className="relative z-10 grid gap-6 border-t border-[#e5d0d0] bg-[#faf7f7] px-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:px-16 md:py-10">
        <div className="text-center text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#241919] md:text-left">
          Feria Americana
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link}
              className="text-[0.58rem] uppercase tracking-[0.24em] text-[#9a8b8b] no-underline transition-colors hover:text-[#6b0119]"
              href="/"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="text-center text-[0.58rem] uppercase tracking-[0.24em] text-[#9a8b8b] md:text-right">
          &copy; 2024 Feria Americana. Calidad curada.
        </div>
      </footer>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[26rem] overflow-hidden opacity-35">
        <div className="absolute inset-0 bg-gradient-to-t from-[#8b1e2d]/10 to-transparent" />
        <img
          alt="Textura abstracta de tela de moda con sombras suaves en tonos beige y rojo profundo"
          className="h-full w-full object-cover mix-blend-multiply"
          src={loginBackgroundTexture}
        />
      </div>
    </div>
  )
}
