import { Link } from 'react-router-dom'
import catalogProduct1 from '../../assets/catalog-product-1.png'
import catalogProduct2 from '../../assets/catalog-product-2.png'
import catalogProduct3 from '../../assets/catalog-product-3.png'
import catalogProduct4 from '../../assets/catalog-product-4.png'
import catalogProduct5 from '../../assets/catalog-product-5.png'
import catalogProduct6 from '../../assets/catalog-product-6.png'
import { SiteFooter } from '../shared/SiteFooter'

const navigationLinks = [
  'Collections',
  'New Arrivals',
  'Lookbook',
  'Archive',
]

const categoryFilters = ['Outerwear', 'Knitwear', 'Accessories', 'Footwear']
const genderFilters = ['All', 'Women', 'Men']
const sizeFilters = ['XS', 'S', 'M', 'L', 'XL']

const products = [
  {
    color: 'Sable Beige',
    image: catalogProduct1,
    price: '$1,240',
    title: 'Structured Wool Overcoat',
  },
  {
    badge: 'Limited Edition',
    color: 'Deep Navy',
    image: catalogProduct2,
    price: '$480',
    title: 'Essential Silk Poplin',
  },
  {
    color: 'Charcoal Grey',
    image: catalogProduct3,
    price: '$620',
    title: 'Wide-Leg Drape Trouser',
  },
  {
    color: 'Bone White',
    image: catalogProduct4,
    price: '$890',
    title: 'Mohair Blend Cardigan',
  },
  {
    color: 'Optical White',
    image: catalogProduct5,
    price: '$550',
    title: 'Sculpt Low Sneaker',
  },
  {
    color: 'Onyx Black',
    image: catalogProduct6,
    price: '$1,550',
    title: 'Nappa Leather Bucket Bag',
  },
]

export function HomeCatalogPage() {
  return (
    <div className="flex min-h-svh flex-col bg-[linear-gradient(180deg,#f8f3ee_0%,#fcf9f8_18%)]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-background/85 backdrop-blur">
        <div className="mx-auto flex min-h-20 w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 md:px-8">
          <div className="flex items-center gap-8">
            <Link
              className="font-headline text-[1.8rem] font-extrabold tracking-[-0.05em] text-headline no-underline"
              to="/"
            >
              L&apos;ATELIER
            </Link>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
              {navigationLinks.map((link) => (
                <a
                  key={link}
                  className={`font-headline text-[0.92rem] font-semibold no-underline ${
                    link === 'Collections'
                      ? 'border-b-2 border-[#d7a943] pb-1 text-headline'
                      : 'text-text-muted hover:text-headline'
                  }`}
                  href="/"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="relative hidden lg:inline-flex lg:items-center">
              <span className="absolute left-4 text-[0.82rem] text-text-muted/75">
                Search
              </span>
              <input
                className="w-60 rounded-xl border-0 bg-surface-muted px-4 py-3 pl-16"
                placeholder="Search catalog..."
                type="text"
              />
            </label>
            <button
              className="inline-flex min-h-10 items-center justify-center border-0 bg-transparent px-3 py-2 text-[0.84rem] font-semibold text-text"
              type="button"
            >
              Bag
            </button>
            <Link
              className="inline-flex min-h-10 items-center justify-center px-3 py-2 text-[0.84rem] font-semibold text-text no-underline"
              to="/profile"
            >
              Account
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 pt-28 pb-16 md:px-8 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-64">
          <div className="space-y-10 lg:sticky lg:top-32">
            <div>
              <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
                Category
              </h3>
              <div className="grid gap-3">
              {categoryFilters.map((filter, index) => (
                <label key={filter} className="flex items-center gap-3 text-text-muted">
                  <input className="accent-accent" defaultChecked={index === 0} type="checkbox" />
                  <span>{filter}</span>
                </label>
              ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
                Gender
              </h3>
              <div className="flex flex-wrap gap-2">
              {genderFilters.map((filter, index) => (
                <button
                  key={filter}
                  className={`rounded-xl px-4 py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] ${
                    index === 0
                      ? 'bg-surface-muted text-headline'
                      : 'bg-surface-soft text-text-muted'
                  }`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
                Size
              </h3>
              <div className="grid grid-cols-4 gap-2">
              {sizeFilters.map((size) => (
                <button
                  key={size}
                  className={`h-10 w-10 rounded-md border text-[0.78rem] font-semibold ${
                    size === 'S'
                      ? 'border-accent bg-surface-muted text-headline'
                      : 'border-transparent bg-surface-soft text-text-muted'
                  }`}
                  type="button"
                >
                  {size}
                </button>
              ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
                Price Range
              </h3>
              <div className="grid gap-4">
                <input className="accent-accent" defaultValue="35" max="100" min="0" type="range" />
                <div className="flex justify-between text-[0.76rem] text-text-muted">
                <span>$0</span>
                <span>$2,000+</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
                Spring / Summer 2024
              </span>
              <h1 className="m-0 font-headline text-[clamp(2.8rem,4vw,4rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
                The Full Catalog
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-text-muted">
              <p className="m-0">Showing 184 products</p>
              <div className="h-4 w-px bg-black/15" />
              <select
                className="border-0 bg-transparent font-bold text-headline"
                defaultValue="Sort by Featured"
              >
                <option>Sort by Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="grid gap-4">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1">
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    src={product.image}
                    alt={product.title}
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
                    Save
                  </button>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="m-0 font-headline text-[1.15rem] font-bold text-headline">
                      {product.title}
                    </h2>
                    <p className="mt-1 mb-0 text-text-muted">{product.color}</p>
                  </div>
                  <span className="font-mono font-bold whitespace-nowrap text-accent">
                    {product.price}
                  </span>
                </div>
                <button
                  className="rounded-xl bg-accent-strong px-4 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.18em] text-[#fffaf4]"
                  type="button"
                >
                  Add to Bag
                </button>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              className="rounded-full border border-black/15 px-4 py-3 font-bold text-headline"
              type="button"
            >
              Prev
            </button>
            <div className="flex gap-2">
              <button
                className="rounded-full bg-surface-muted px-4 py-3 font-bold text-headline"
                type="button"
              >
                1
              </button>
              <button
                className="rounded-full bg-surface-soft px-4 py-3 font-bold text-text-muted"
                type="button"
              >
                2
              </button>
              <button
                className="rounded-full bg-surface-soft px-4 py-3 font-bold text-text-muted"
                type="button"
              >
                3
              </button>
            </div>
            <button
              className="rounded-full border border-black/15 px-4 py-3 font-bold text-headline"
              type="button"
            >
              Next
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
