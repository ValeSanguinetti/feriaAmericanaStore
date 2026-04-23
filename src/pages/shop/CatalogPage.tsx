import { Link } from 'react-router-dom'
import catalogCardigan from '../../assets/catalog-stitch-cardigan.jpg'
import catalogDenim from '../../assets/catalog-stitch-denim.jpg'
import catalogLoafers from '../../assets/catalog-stitch-loafers.jpg'
import catalogOvercoat from '../../assets/catalog-stitch-overcoat.jpg'
import catalogSilkShirt from '../../assets/catalog-stitch-silk-shirt.jpg'
import catalogTee from '../../assets/catalog-stitch-tee.jpg'

const navItems = ['Novedades', 'Colecciones', 'Vintage', 'Editorial']

const categoryFilters = [
  { count: 24, label: 'Abrigos', selected: true },
  { count: 42, label: 'Denim' },
  { count: 18, label: 'Accesorios' },
  { count: 31, label: 'Tejidos' },
]

const sizeFilters = ['XS', 'S', 'M', 'L', 'XL', 'OS']
const genderFilters = ['Hombre', 'Mujer', 'Unisex']

const products = [
  {
    category: 'Abrigos de archivo',
    image: catalogOvercoat,
    price: '$420.00',
    title: "Abrigo largo de cashmere de los 90",
    wishlist: true,
  },
  {
    badge: 'Agotado',
    category: 'Denim selvedge',
    image: catalogDenim,
    mutedPrice: true,
    price: '$185.00',
    title: 'Denim índigo japonés crudo',
  },
  {
    category: 'Básicos de lujo',
    image: catalogSilkShirt,
    price: '$210.00',
    title: 'Camisa de seda crema',
    wishlist: true,
  },
  {
    category: 'Vintage gráfico',
    image: catalogTee,
    price: '$85.00',
    title: 'Remera gráfica World Tour 1988',
  },
  {
    category: 'Tejidos premium',
    image: catalogCardigan,
    price: '$340.00',
    title: 'Cárdigan de mohair tejido a mano',
  },
  {
    category: 'Artículos de cuero',
    image: catalogLoafers,
    price: '$290.00',
    title: 'Mocasines vintage con borlas',
  },
]

const footerLinks = ['Envíos', 'Devoluciones', 'Privacidad', 'Contacto', 'Sustentabilidad']

export default function CatalogPage() {
  return (
    <div className="bg-[#fff8f7] text-[#241919]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white">
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-16">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              className="text-[1.5rem] font-black uppercase tracking-[-0.06em] text-zinc-900 no-underline sm:text-2xl"
              to="/"
            >
              Feria Americana
            </Link>
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  className={
                    index === 0
                      ? 'border-b border-[#8b1e2d] pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#8b1e2d] no-underline'
                      : 'text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-zinc-500 no-underline transition-colors hover:text-[#8b1e2d]'
                  }
                  to={index === 1 ? '/catalog' : '/'}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button aria-label="Buscar" className="border-0 bg-transparent p-0 text-zinc-600" type="button">
              Buscar
            </button>
            <Link className="text-zinc-600 no-underline transition-colors hover:text-[#8b1e2d]" to="/profile">
              Cuenta
            </Link>
            <div className="relative">
              <Link aria-label="Bolso de compras" className="border-0 bg-transparent p-0 text-zinc-600 no-underline" to="/shopping-cart">
              Bolso
              </Link>
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#8b1e2d] text-[10px] text-white">
                2
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto min-h-screen w-full max-w-[1440px] px-4 pt-32 pb-20 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row">
          <aside className="w-full shrink-0 space-y-10 md:w-64">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-zinc-900">Filtros</h2>
              <button className="text-[0.72rem] text-zinc-400 underline underline-offset-4 transition-colors hover:text-[#8b1e2d]" type="button">
                Restablecer todo
              </button>
            </div>

            <div>
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-zinc-900">
                Categoría
              </h3>
              <ul className="space-y-3">
                {categoryFilters.map((filter) => (
                  <li key={filter.label}>
                    <label className="group flex cursor-pointer items-center gap-3">
                      <input
                        className="h-4 w-4 rounded border-[#debfbf] text-[#6b0119] accent-[#6b0119]"
                        defaultChecked={filter.selected}
                        type="checkbox"
                      />
                      <span className="text-[1rem] text-[#574142] transition-colors group-hover:text-[#6b0119]">
                        {filter.label}
                      </span>
                      <span className="ml-auto text-[0.72rem] text-zinc-400">({filter.count})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-zinc-900">
                Rango de precios
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[0.72rem] text-zinc-500">
                  <span>$0</span>
                  <span>$2,500</span>
                </div>
                <input
                  className="h-1 w-full cursor-pointer appearance-none rounded-lg accent-[#6b0119]"
                  type="range"
                />
                <div className="flex gap-2">
                  <div className="flex-1 border border-[#debfbf] bg-white px-3 py-2 text-[0.72rem] text-zinc-900">
                    $ Mín
                  </div>
                  <div className="flex-1 border border-[#debfbf] bg-white px-3 py-2 text-[0.72rem] text-zinc-900">
                    $ Máx
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-zinc-900">
                Talle
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {sizeFilters.map((size) => (
                  <button
                    key={size}
                    className={
                      size === 'S'
                        ? 'border border-zinc-900 bg-zinc-900 py-2 text-[0.72rem] uppercase text-white'
                        : 'border border-[#debfbf] py-2 text-[0.72rem] uppercase transition-colors hover:border-zinc-900'
                    }
                    type="button"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-zinc-900">
                Género
              </h3>
              <ul className="space-y-2">
                {genderFilters.map((filter) => (
                  <li key={filter}>
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        className="h-4 w-4 border-[#debfbf] text-[#6b0119] accent-[#6b0119]"
                        defaultChecked={filter === 'Unisex'}
                        name="gender"
                        type="radio"
                      />
                      <span className="text-[1rem] text-[#574142]">{filter}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-10 flex flex-col gap-4 border-b border-zinc-100 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h1 className="m-0 text-[clamp(2.6rem,6vw,4rem)] tracking-[-0.06em] text-zinc-900">
                  Nuestro catálogo
                </h1>
                <p className="m-0 mt-1 text-[1rem] text-zinc-500">124 piezas curadas disponibles</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-zinc-400">
                  Ordenar por:
                </span>
                <select className="border-0 bg-transparent text-[0.78rem] font-bold uppercase text-zinc-900 outline-none">
                  <option>Últimos ingresos</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Más populares</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article key={product.title} className="group">
                  <Link className="relative mb-6 block aspect-[3/4] overflow-hidden bg-zinc-100" to="/product-detail">
                    <img
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={product.image}
                    />
                    <Link
                      className="absolute right-0 bottom-0 left-0 translate-y-full bg-[#8b1e2d] py-4 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 group-hover:translate-y-0"
                      to="/shopping-cart"
                    >
                      Agregar al bolso
                    </Link>
                    {product.wishlist ? (
                      <Link
                        className="absolute top-4 right-4 rounded-full bg-white/80 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                        to="/wishlist"
                      >
                        <span aria-hidden="true" className="text-zinc-900">
                          Favorito
                        </span>
                      </Link>
                    ) : null}
                    {product.badge ? (
                      <span className="absolute top-4 left-4 bg-[#6b0119] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        {product.badge}
                      </span>
                    ) : null}
                  </Link>
                  <div className="space-y-1">
                    <p className="m-0 text-[0.7rem] uppercase tracking-[0.08em] text-zinc-400">
                      {product.category}
                    </p>
                    <h3 className="m-0 text-[1rem] font-medium text-zinc-900">
                      <Link className="no-underline" to="/product-detail">
                        {product.title}
                      </Link>
                    </h3>
                    <p
                      className={
                        product.mutedPrice
                          ? 'm-0 text-[1.45rem] font-semibold text-zinc-400 line-through'
                          : 'm-0 text-[1.45rem] font-semibold text-[#6b0119]'
                      }
                    >
                      {product.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-20 flex items-center justify-center gap-4">
              <button className="flex h-10 w-10 items-center justify-center border border-[#debfbf] transition-colors hover:border-zinc-900" type="button">
                ‹
              </button>
              <button className="flex h-10 w-10 items-center justify-center bg-zinc-900 text-[0.78rem] font-semibold text-white" type="button">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center border border-[#debfbf] text-[0.78rem] font-semibold transition-colors hover:border-zinc-900" type="button">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center border border-[#debfbf] text-[0.78rem] font-semibold transition-colors hover:border-zinc-900" type="button">
                3
              </button>
              <button className="flex h-10 w-10 items-center justify-center border border-[#debfbf] transition-colors hover:border-zinc-900" type="button">
                ›
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-16">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="text-lg font-bold uppercase tracking-[0.04em] text-zinc-900">
              Feria Americana
            </span>
            <p className="m-0 text-[0.58rem] uppercase tracking-[0.24em] text-zinc-400">
              &copy; 2024 Feria Americana. Calidad curada.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                className="text-[0.58rem] uppercase tracking-[0.24em] text-zinc-400 no-underline transition-opacity hover:text-[#8b1e2d] hover:opacity-80"
                href="/"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 text-zinc-400">
            <a className="no-underline transition-colors hover:text-[#8b1e2d]" href="/">
              Compartir
            </a>
            <a className="no-underline transition-colors hover:text-[#8b1e2d]" href="/">
              Correo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
