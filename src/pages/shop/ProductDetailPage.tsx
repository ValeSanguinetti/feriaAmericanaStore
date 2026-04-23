import { Link } from 'react-router-dom'
import productLookBelt from '../../assets/product-detail-look-belt.jpg'
import productLookBoots from '../../assets/product-detail-look-boots.jpg'
import productLookKnit from '../../assets/product-detail-look-knit.jpg'
import productLookTrouser from '../../assets/product-detail-look-trouser.jpg'
import productMain from '../../assets/product-detail-main.jpg'
import productModel from '../../assets/product-detail-model.jpg'
import productTexture from '../../assets/product-detail-texture.jpg'

const relatedItems = [
  {
    image: productLookTrouser,
    price: '$185',
    title: 'Pantalón gris de sastrería',
  },
  {
    image: productLookKnit,
    price: '$210',
    title: 'Tejido de seda crema',
  },
  {
    image: productLookBoots,
    price: '$350',
    title: 'Bota de cuero heritage',
  },
  {
    image: productLookBelt,
    price: '$95',
    title: 'Cinturón fino de archivo',
  },
]

const productImages = [
  { alt: 'Premium Vintage Wool Coat', image: productMain, wide: true },
  { alt: 'Coat Texture Detail', image: productTexture },
  { alt: 'Model wearing coat', image: productModel },
]

const footerLinks = [
  'Política de privacidad',
  'Términos de servicio',
  'Envíos y devoluciones',
  'Contáctanos',
]

export default function ProductDetailPage() {
  return (
    <div className="bg-[#fff8f7] text-[#241919]">
      <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-6 sm:px-6 lg:px-16">
          <div className="cursor-pointer text-2xl font-black uppercase tracking-[-0.06em] text-[#8b1e2d]">
            <Link className="no-underline text-[#8b1e2d]" to="/">
              Feria Americana
            </Link>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link className="border-b border-[#1a1a1a] pb-1 text-[0.82rem] font-semibold uppercase text-[#1a1a1a] no-underline" to="/catalog">
              Tienda
            </Link>
            <Link className="text-[0.82rem] font-semibold uppercase text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/wishlist">
              Lista de deseos
            </Link>
            <Link className="text-[0.82rem] font-semibold uppercase text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/">
              Novedades
            </Link>
            <Link className="text-[0.82rem] font-semibold uppercase text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/catalog">
              Colecciones
            </Link>
          </nav>
          <div className="flex items-center space-x-6 text-[#241919]">
            <button className="border-0 bg-transparent p-0" type="button">Buscar</button>
            <Link className="border-0 bg-transparent p-0 no-underline text-[#241919]" to="/shopping-cart">Bolso</Link>
            <Link className="border-0 bg-transparent p-0 no-underline text-[#241919]" to="/profile">Perfil</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 pt-[120px] pb-20 sm:px-6 lg:px-16">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-2 gap-4">
              {productImages.map((item) => (
                <div
                  key={item.alt}
                  className={`${item.wide ? 'col-span-2' : ''} aspect-[4/5] overflow-hidden bg-[#ffe9e8]`}
                >
                  <img alt={item.alt} className="h-full w-full object-cover" src={item.image} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-4 md:sticky md:top-[120px]">
            <div className="flex flex-col space-y-6">
              <nav className="mb-2 flex text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500">
                <Link className="no-underline hover:text-[#6b0119]" to="/catalog">Tienda</Link>
                <span className="mx-2">/</span>
                <Link className="no-underline hover:text-[#6b0119]" to="/catalog">Abrigos</Link>
                <span className="mx-2">/</span>
                <span className="text-[#241919]">Herencia vintage</span>
              </nav>

              <div className="space-y-2">
                <h1 className="text-[2.2rem] font-semibold text-[#241919]">
                  Abrigo de lana de archivo 1974
                </h1>
                <p className="text-[1.6rem] font-semibold text-[#a93342]">$420</p>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <p className="text-[1rem] leading-7 text-[#574142]">
                  Una obra maestra curada de nuestra colección de archivo. Esta silueta cruzada
                  presenta costuras terminadas a mano, auténticos botones de cuerno y un peso que
                  impone presencia. Procedente de una colección privada en Florencia, representa la
                  cumbre de la sastrería de los años 70.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#241919]">
                    Seleccionar talle
                  </span>
                  <a className="text-[0.72rem] uppercase text-neutral-500" href="/">Guía de talles</a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="flex h-14 w-14 items-center justify-center border border-neutral-200 text-[0.82rem] font-semibold transition-colors hover:border-[#241919]" type="button">
                    S
                  </button>
                  <button className="flex h-14 w-14 items-center justify-center border border-[#241919] bg-[#241919] text-[0.82rem] font-semibold text-white" type="button">
                    M
                  </button>
                  <button className="flex h-14 w-14 items-center justify-center border border-neutral-200 text-[0.82rem] font-semibold transition-colors hover:border-[#241919]" type="button">
                    L
                  </button>
                  <button className="flex h-14 w-14 cursor-not-allowed items-center justify-center border border-neutral-200 text-[0.82rem] font-semibold opacity-40" type="button">
                    XL
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-3 pt-4">
                <Link className="block w-full bg-[#8b1e2d] py-5 text-center text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-white no-underline transition hover:opacity-90 active:scale-[0.98]" to="/shopping-cart">
                  Agregar al bolso
                </Link>
                <Link className="flex w-full items-center justify-center gap-2 border border-[#241919] py-5 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#241919] no-underline transition hover:bg-[#241919] hover:text-white" to="/wishlist">
                  <span aria-hidden="true">Heart</span>
                  Agregar a lista de deseos
                </Link>
              </div>

              <div className="space-y-4 pt-6">
                <details className="group border-t border-neutral-200" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em]">
                    Detalles del producto
                    <span className="transition-transform group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="space-y-2 pb-4 text-[1rem] text-[#574142]">
                    <p>• 100% lana virgen</p>
                    <p>• Forro interior mezcla de seda</p>
                    <p>• Solo limpieza en seco</p>
                    <p>• Hecho en Italia</p>
                  </div>
                </details>
                <details className="group border-y border-neutral-200" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em]">
                    Envíos y devoluciones
                    <span className="transition-transform group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="pb-4 text-[1rem] text-[#574142]">
                    Envío exprés de cortesía en todas las piezas vintage de archivo. Se aceptan
                    devoluciones dentro de los 14 días de la entrega en condición original.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mb-12 border-b border-neutral-100 pb-6 text-[2rem] font-semibold uppercase tracking-[-0.03em] text-[#241919]">
            Completa el look
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {relatedItems.map((item) => (
              <article key={item.title} className="group cursor-pointer">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[#ffe9e8]">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                  />
                  <div className="absolute right-4 bottom-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-white p-2 shadow-lg">+</span>
                  </div>
                </div>
                <p className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#241919]">
                  {item.title}
                </p>
                <p className="mt-1 text-[1.35rem] font-semibold text-[#a93342]">{item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 w-full border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between space-y-4 px-4 py-12 sm:px-6 md:flex-row md:space-y-0 lg:px-16">
          <div className="text-lg font-bold text-[#1a1a1a]">Feria Americana</div>
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link}
                className="text-sm uppercase tracking-wide text-neutral-500 no-underline transition-colors hover:text-[#1a1a1a]"
                to="/"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="text-sm uppercase tracking-wide text-neutral-500">
            &copy; 2024 Feria Americana. Calidad curada.
          </div>
        </div>
      </footer>
    </div>
  )
}
