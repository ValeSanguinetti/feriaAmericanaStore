import { Link } from 'react-router-dom'
import landingHero from '../../assets/landing-hero.png'

export function LandingHero() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden">
      <img
        alt="Retrato editorial de moda con tonos beige e iluminación arquitectónica"
        className="absolute inset-0 h-full w-full object-cover grayscale-[0.2]"
        src={landingHero}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,249,248,0.96)_0%,rgba(252,249,248,0.5)_42%,transparent_78%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8">
        <span className="mb-6 inline-flex rounded-full bg-accent-soft px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#694d0c]">
          Otoño Invierno 2024
        </span>
        <h1 className="m-0 font-headline text-[clamp(3.6rem,7vw,6rem)] leading-[0.88] font-extrabold tracking-[-0.07em] text-headline">
          La silenciosa <br />
          <span className="font-light italic text-accent">elegancia</span>
        </h1>
        <p className="mt-6 mb-8 max-w-[36rem] text-[1.05rem] leading-[1.8] text-text-muted">
          Siluetas curadas diseñadas para la persona moderna. Vive una nueva era de lujo digital
          donde cada puntada cuenta una historia de oficio e intención.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            className="inline-flex items-center justify-center rounded-2xl bg-accent bg-[linear-gradient(135deg,#76551a_0%,#5e4312_100%)] px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-[#fffaf4] no-underline shadow-panel transition hover:-translate-y-px hover:brightness-105"
            to="/catalog"
          >
            Explorar colección
          </Link>
          <Link
            className="inline-flex items-center py-4 text-sm font-bold uppercase tracking-[0.08em] text-headline no-underline"
            to="/catalog"
          >
            El lookbook
          </Link>
        </div>
      </div>
    </section>
  )
}
