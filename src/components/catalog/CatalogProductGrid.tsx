import catalogProduct1 from '../../assets/catalog-product-1.png'
import catalogProduct2 from '../../assets/catalog-product-2.png'
import catalogProduct3 from '../../assets/catalog-product-3.png'
import catalogProduct4 from '../../assets/catalog-product-4.png'
import catalogProduct5 from '../../assets/catalog-product-5.png'
import catalogProduct6 from '../../assets/catalog-product-6.png'

const products = [
  {
    color: 'Beige sable',
    image: catalogProduct1,
    price: '$1,240',
    title: 'Abrigo estructurado de lana',
  },
  {
    badge: 'Edición limitada',
    color: 'Azul marino profundo',
    image: catalogProduct2,
    price: '$480',
    title: 'Popelina de seda esencial',
  },
  {
    color: 'Gris carbón',
    image: catalogProduct3,
    price: '$620',
    title: 'Pantalón amplio con caída',
  },
  {
    color: 'Blanco hueso',
    image: catalogProduct4,
    price: '$890',
    title: 'Cárdigan de mezcla de mohair',
  },
  {
    color: 'Blanco óptico',
    image: catalogProduct5,
    price: '$550',
    title: 'Zapatilla baja sculpt',
  },
  {
    color: 'Negro ónix',
    image: catalogProduct6,
    price: '$1,550',
    title: 'Bolso bucket de cuero napa',
  },
]

export function CatalogProductGrid() {
  return (
    <section className="min-w-0 flex-1">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
            Primavera / Verano 2024
          </span>
          <h1 className="m-0 font-headline text-[clamp(2.8rem,4vw,4rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
            El catálogo completo
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-text-muted">
          <p className="m-0">Mostrando 184 productos</p>
          <div className="h-4 w-px bg-black/15" />
          <select className="border-0 bg-transparent font-bold text-headline" defaultValue="Ordenar por destacados">
            <option>Ordenar por destacados</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
            <option>Más recientes</option>
          </select>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.title} className="grid gap-4">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1">
              <img
                alt={product.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                src={product.image}
              />
              {product.badge ? (
                <span className="absolute top-4 left-4 rounded bg-accent px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#fffaf4]">
                  {product.badge}
                </span>
              ) : null}
              <button
                className="absolute right-4 bottom-4 h-11 w-11 rounded-full bg-white/95 text-[0.76rem] font-bold text-headline"
                type="button"
              >
                Guardar
              </button>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="m-0 font-headline text-[1.15rem] font-bold text-headline">
                  {product.title}
                </h2>
                <p className="mt-1 mb-0 text-text-muted">{product.color}</p>
              </div>
              <span className="font-mono font-bold whitespace-nowrap text-accent">{product.price}</span>
            </div>
            <button
              className="rounded-xl bg-accent-strong px-4 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.18em] text-[#fffaf4]"
              type="button"
            >
              Agregar al bolso
            </button>
          </article>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-4">
        <button className="rounded-full border border-black/15 px-4 py-3 font-bold text-headline" type="button">
          Ant
        </button>
        <div className="flex gap-2">
          <button className="rounded-full bg-surface-muted px-4 py-3 font-bold text-headline" type="button">
            1
          </button>
          <button className="rounded-full bg-surface-soft px-4 py-3 font-bold text-text-muted" type="button">
            2
          </button>
          <button className="rounded-full bg-surface-soft px-4 py-3 font-bold text-text-muted" type="button">
            3
          </button>
        </div>
        <button className="rounded-full border border-black/15 px-4 py-3 font-bold text-headline" type="button">
          Sig
        </button>
      </div>
    </section>
  )
}
