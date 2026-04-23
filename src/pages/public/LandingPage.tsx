import { Link } from 'react-router-dom'
import landingCurationAccessories from '../../assets/landing-curation-accessories.jpg'
import landingCurationFootwear from '../../assets/landing-curation-footwear.jpg'
import landingCurationWool from '../../assets/landing-curation-wool.jpg'
import landingHeroEditorial from '../../assets/landing-hero-editorial.jpg'
import landingProductDenim from '../../assets/landing-product-denim.jpg'
import landingProductShirt from '../../assets/landing-product-shirt.jpg'
import landingProductTote from '../../assets/landing-product-tote.jpg'
import landingProductTrench from '../../assets/landing-product-trench.jpg'

const navItems = ['Novedades', 'Colecciones', 'Vintage', 'Editorial']

const curationCards = [
  {
    buttonLabel: 'Explorar',
    description: 'Sastrería de origen italiano y carbono neutral.',
    image: landingCurationWool,
    title: 'Lana sostenible',
    wide: true,
  },
  {
    image: landingCurationFootwear,
    title: 'Calzado',
  },
  {
    image: landingCurationAccessories,
    title: 'Accesorios',
  },
]

const arrivals = [
  {
    badge: 'Vintage',
    image: landingProductTrench,
    price: '$450.00',
    title: 'Trench coat heritage',
  },
  {
    image: landingProductTote,
    price: '$320.00',
    title: 'Bolso tote de cuero estructurado',
  },
  {
    badge: 'Agotado',
    image: landingProductShirt,
    muted: true,
    price: '$185.00',
    title: 'Camisa Oxford de algodón',
  },
  {
    image: landingProductDenim,
    price: '$210.00',
    title: 'Denim de borde crudo',
  },
]

const footerLinks = ['Envíos', 'Devoluciones', 'Privacidad', 'Contacto', 'Sustentabilidad']

export default function LandingPage() {
  return (
    <div className="bg-[#fff8f7] text-[#241919]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white">
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-16">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              className="text-[1.6rem] font-black uppercase tracking-[-0.06em] text-zinc-900 no-underline sm:text-2xl"
              to="/"
            >
              <span>Feria</span>
              <span className="text-[#8b1e2d]"> Americana</span>
            </Link>
            <nav className="hidden items-center gap-8 text-[0.8rem] font-semibold uppercase tracking-[0.16em] md:flex">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  className={
                    index === 0
                      ? 'border-b border-[#8b1e2d] pb-1 text-[#8b1e2d] no-underline'
                      : 'text-zinc-500 no-underline transition-colors hover:text-[#8b1e2d]'
                  }
                  href="/"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              aria-label="Buscar"
              className="border-0 bg-transparent p-0 text-zinc-900"
              type="button"
            >
              Buscar
            </button>
            <span className="hidden h-4 w-px bg-zinc-200 sm:block" />
            <Link
              className="hidden text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-zinc-900 no-underline transition-colors hover:text-[#6b0119] sm:inline"
              to="/login"
            >
              Iniciar sesión
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-[4px] bg-[#8b1e2d] px-4 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white no-underline transition hover:opacity-95 sm:px-6"
              to="/register"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative flex min-h-[700px] items-center overflow-hidden bg-zinc-950 lg:h-[921px]">
          <div className="absolute inset-0 opacity-80">
            <img
              alt="Fotografía editorial de moda de un modelo con un abrigo minimalista de lujo en un entorno brutalista"
              className="h-full w-full object-cover"
              src={landingHeroEditorial}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 lg:px-16">
            <div className="max-w-2xl">
              <span className="mb-8 inline-block bg-[#8b1e2d] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white">
                Edición limitada
              </span>
              <h1 className="m-0 text-[clamp(3.4rem,9vw,5.8rem)] leading-[0.92] font-bold uppercase text-white">
                Otoño
                <br />
                Invierno <span className="font-light italic">2024</span>
              </h1>
              <p className="mt-6 mb-10 max-w-lg text-[1.02rem] leading-8 text-zinc-300">
                Descubre nuestra selección curada de piezas editoriales vintage y contemporáneas
                de alta gama. Calidad definida por el tiempo, curada para la persona moderna.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  className="inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#8b1e2d] px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white no-underline transition hover:opacity-95 sm:px-10"
                  to="/catalog"
                >
                  Explorar colección
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="inline-flex items-center justify-center rounded-[4px] border border-white px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white no-underline transition hover:bg-white hover:text-zinc-950 sm:px-10"
                  href="#our-story"
                >
                  Nuestra historia
                </a>
              </div>
            </div>
          </div>

          <div className="absolute right-4 bottom-12 hidden items-end gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-white/50 lg:flex lg:right-16">
            <div className="flex flex-col items-end gap-2">
              <span>Desliza para explorar</span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <div className="absolute inset-0 origin-top animate-pulse bg-white" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 lg:px-16">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="m-0 text-[clamp(2.8rem,6vw,4.8rem)] uppercase tracking-[-0.06em]">
                La curaduría
              </h2>
              <p className="m-0 mt-2 text-[1.05rem] text-zinc-500">
                Piezas excepcionales seleccionadas a mano para la temporada.
              </p>
            </div>
            <a
              className="w-fit border-b-2 border-[#8b1e2d] pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#8b1e2d] no-underline"
              href="/"
            >
              Ver todas las novedades
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:grid-rows-2 lg:h-[800px]">
            {curationCards.map((card) => (
              <article
                key={card.title}
                className={
                  card.wide
                    ? 'group relative overflow-hidden rounded-[4px] lg:col-span-8 lg:row-span-2'
                    : 'group relative overflow-hidden rounded-[4px] lg:col-span-4 lg:row-span-1'
                }
              >
                <img
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={card.image}
                />
                <div
                  className={
                    card.wide
                      ? 'absolute inset-0 bg-zinc-950/20 transition-colors group-hover:bg-zinc-950/40'
                      : 'absolute inset-0 bg-zinc-950/10 transition-colors group-hover:bg-zinc-950/30'
                  }
                />
                <div
                  className={
                    card.wide
                      ? 'absolute bottom-10 left-8 text-white sm:bottom-12 sm:left-12'
                      : 'absolute bottom-8 left-8 text-white'
                  }
                >
                  <h3
                    className={
                      card.wide
                        ? 'm-0 text-[2rem] uppercase sm:text-[2.3rem]'
                        : 'm-0 text-[1.5rem] uppercase'
                    }
                  >
                    {card.title}
                  </h3>
                  {card.description ? (
                    <p className="mt-2 mb-6 max-w-sm text-[1rem] text-white/80">{card.description}</p>
                  ) : null}
                  {card.buttonLabel ? (
                    <button
                      className="border-0 bg-white px-6 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-colors hover:bg-[#8b1e2d] hover:text-white"
                      type="button"
                    >
                      {card.buttonLabel}
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-100 bg-zinc-50 py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16">
            <div className="mb-16 text-center">
              <h2 className="m-0 text-[clamp(2.8rem,6vw,4.8rem)] uppercase tracking-[-0.06em]">
                Novedades
              </h2>
              <div className="mx-auto mt-4 h-1 w-12 bg-[#8b1e2d]" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {arrivals.map((item) => (
                <article key={item.title} className="group">
                  <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-white">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.image}
                    />

                    {item.badge ? (
                      <div className="absolute top-4 left-4">
                        <span
                          className={
                            item.badge === 'Agotado'
                              ? 'bg-[#8b1e2d] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white'
                              : 'bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-950'
                          }
                        >
                          {item.badge}
                        </span>
                      </div>
                    ) : null}

                    {!item.muted ? (
                      <button
                        className="absolute right-4 bottom-4 left-4 flex translate-y-12 items-center justify-center gap-2 bg-zinc-950 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        type="button"
                      >
                        <span aria-hidden="true">Bolso</span>
                        Añadir rápido
                      </button>
                    ) : null}
                  </div>

                  <div className={item.muted ? 'flex flex-col gap-1 opacity-60' : 'flex flex-col gap-1'}>
                    <h3 className="m-0 text-[1rem] text-zinc-900 transition-colors group-hover:text-[#6b0119]">
                      {item.title}
                    </h3>
                    <span className="text-[1.45rem] font-semibold text-zinc-950">{item.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="our-story" className="mx-auto max-w-[1440px] px-4 py-20 text-center sm:px-6 lg:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="m-0 text-[2.1rem] uppercase tracking-[-0.04em] sm:text-[2.5rem]">
              Únete al círculo
            </h2>
            <p className="mt-6 mb-10 text-[1rem] leading-7 text-zinc-500">
              Recibe acceso anticipado a lanzamientos de temporada y contenido editorial
              exclusivo directamente en tu correo.
            </p>
            <form className="flex flex-col gap-4 md:flex-row">
              <input
                className="min-w-0 flex-1 border border-zinc-200 bg-white px-6 py-4 text-[0.74rem] uppercase tracking-[0.2em] outline-none transition focus:border-zinc-950"
                placeholder="Tu correo electrónico"
                type="email"
              />
              <button
                className="bg-zinc-950 px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#6b0119]"
                type="submit"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-16">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="text-lg font-bold uppercase tracking-[0.04em] text-zinc-900">
              Feria <span className="text-[#8b1e2d]">Americana</span>
            </div>
            <div className="text-[0.58rem] uppercase tracking-[0.24em] text-zinc-400">
              &copy; 2024 Feria Americana. Calidad curada.
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                className="text-[0.58rem] uppercase tracking-[0.24em] text-zinc-400 no-underline transition-all hover:text-[#8b1e2d] hover:opacity-80"
                href="/"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 text-zinc-400">
            <a className="no-underline transition-colors hover:text-zinc-950" href="/">
              Público
            </a>
            <a className="no-underline transition-colors hover:text-zinc-950" href="/">
              Compartir
            </a>
            <a className="no-underline transition-colors hover:text-zinc-950" href="/">
              Correo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
