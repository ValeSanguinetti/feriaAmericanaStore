import editorialImage from '../../assets/register-editorial-stitch.jpg'
import { RegisterForm } from '../../components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-1 flex-col bg-[#fff8f7] text-[#241919]">
      <main className="flex min-h-svh flex-1 flex-col md:flex-row">
        <section className="relative hidden items-center justify-center overflow-hidden bg-zinc-100 md:flex md:w-1/2 lg:w-3/5">
          <img
            alt="Retrato editorial de alta moda de una mujer con un abrigo rojo estructurado frente a un muro minimalista de hormigón beige"
            className="absolute inset-0 h-full w-full object-cover grayscale-[20%]"
            src={editorialImage}
          />
          <div className="absolute inset-0 bg-[#6b0119]/20 mix-blend-multiply" />
          <div className="relative z-10 flex max-w-xl flex-col items-center px-12 text-center text-white">
            <h1 className="m-0 text-[clamp(3.5rem,6vw,5.2rem)] font-black uppercase tracking-[-0.06em] drop-shadow-xl">
              Feria Americana
            </h1>
            <p className="mt-4 mb-0 text-[1.05rem] leading-8 tracking-[0.02em] text-white/95">
              Calidad curada. Estilo atemporal. Únete a nuestra comunidad editorial de amantes
              del vintage.
            </p>
          </div>
        </section>

        <section className="flex flex-1 items-center justify-center bg-[#fff8f7] px-6 py-16 md:px-16 md:py-20">
          <div className="w-full max-w-md">
            <div className="mb-12 text-center md:hidden">
              <h1 className="m-0 text-[2rem] font-black uppercase tracking-[-0.05em] text-[#574142]">
                Feria Americana
              </h1>
            </div>

            <RegisterForm />
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-zinc-100 bg-zinc-50 py-2 md:fixed md:bottom-0">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 opacity-40 md:flex-row md:px-16">
          <span className="text-[0.58rem] uppercase tracking-[0.24em]">
            &copy; 2024 Feria Americana. Calidad curada.
          </span>
          <div className="flex gap-6 text-[0.58rem] uppercase tracking-[0.24em]">
            <span>Sustentabilidad</span>
            <span>Privacidad</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
