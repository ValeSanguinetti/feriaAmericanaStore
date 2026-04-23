import { Link } from 'react-router-dom'
import cartItem1 from '../../assets/shopping-cart-item-1.jpg'
import cartItem2 from '../../assets/shopping-cart-item-2.jpg'
import cartRelatedBag from '../../assets/shopping-cart-related-bag.jpg'
import cartRelatedHat from '../../assets/shopping-cart-related-hat.jpg'
import cartRelatedScarf from '../../assets/shopping-cart-related-scarf.jpg'
import cartRelatedShirt from '../../assets/shopping-cart-related-shirt.jpg'

const cartItems = [
  {
    category: 'Colección vintage',
    details: 'Azul medianoche | Talle L',
    image: cartItem1,
    price: '$345.00',
    title: 'Abrigo estructurado de lana',
  },
  {
    category: 'Calzado',
    details: 'Cuero coñac | Talle 42',
    image: cartItem2,
    price: '$280.00',
    title: 'Botas chelsea artesanales',
  },
]

const relatedItems = [
  {
    image: cartRelatedScarf,
    price: '$120.00',
    title: 'Pañuelo de seda pintado a mano',
  },
  {
    image: cartRelatedHat,
    price: '$185.00',
    title: 'Fedora de fieltro de ala ancha',
  },
  {
    image: cartRelatedShirt,
    price: '$145.00',
    title: 'Camisa de algodón orgánico a medida',
  },
  {
    image: cartRelatedBag,
    price: '$420.00',
    title: 'Bolso tote de cuero estructurado',
  },
]

const footerLinks = [
  'Política de privacidad',
  'Términos de servicio',
  'Envíos y devoluciones',
  'Contáctanos',
]

export default function ShoppingCartPage() {
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
            <Link className="text-sm text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/catalog">Tienda</Link>
            <Link className="text-sm text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/wishlist">Lista de deseos</Link>
            <Link className="text-sm text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/">Novedades</Link>
            <Link className="text-sm text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/catalog">Colecciones</Link>
          </nav>
          <div className="flex items-center space-x-6 text-[#8b1e2d]">
            <button className="border-0 bg-transparent p-0 font-semibold" type="button">Bolso</button>
            <Link className="border-0 bg-transparent p-0 text-[#8b1e2d] no-underline" to="/profile">Perfil</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 pt-[120px] pb-20 sm:px-6 lg:px-16">
        <div className="mb-12">
          <h1 className="text-[clamp(2.8rem,6vw,4.2rem)] font-bold tracking-[-0.04em] text-[#241919]">
            Tu bolso de compras
          </h1>
          <p className="mt-2 text-[1.05rem] text-[#574142]">
            Selecciones cuidadosamente curadas para tu colección.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 space-y-6 lg:col-span-8">
            {cartItems.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-6 rounded border border-[#eaeaea] bg-white p-6 sm:flex-row"
              >
                <div className="h-48 w-full overflow-hidden bg-[#ffe9e8] sm:w-40">
                  <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="mb-1 text-[0.68rem] uppercase tracking-[0.18em] text-[#a93342]">
                        {item.category}
                      </p>
                      <h3 className="text-[1.4rem] font-semibold text-[#241919]">{item.title}</h3>
                      <p className="text-[1rem] text-[#574142]">{item.details}</p>
                    </div>
                    <button className="border-0 bg-transparent p-0 text-[#574142] transition-colors hover:text-[#ba1a1a]" type="button">
                      Eliminar
                    </button>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div className="flex items-center rounded border border-[#eaeaea]">
                      <button className="px-3 py-1 transition-colors hover:bg-[#ffe9e8]" type="button">-</button>
                      <span className="px-4 py-1 text-[0.82rem] font-semibold">1</span>
                      <button className="px-3 py-1 transition-colors hover:bg-[#ffe9e8]" type="button">+</button>
                    </div>
                    <span className="text-[1.4rem] font-semibold text-[#8b1e2d]">{item.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-[120px] rounded border border-[#eaeaea] bg-white p-6">
              <h2 className="mb-6 text-[1.5rem] font-semibold text-[#241919]">Resumen del pedido</h2>
              <div className="mb-6 space-y-4">
                <div className="flex justify-between text-[1rem]">
                  <span className="text-[#574142]">Subtotal</span>
                  <span>$625.00</span>
                </div>
                <div className="flex justify-between text-[1rem]">
                  <span className="text-[#574142]">Envío estimado</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-[1rem]">
                  <span className="text-[#574142]">Impuestos</span>
                  <span>$50.00</span>
                </div>
                <div className="flex justify-between border-t border-[#eaeaea] pt-4 text-[1.7rem] font-semibold">
                  <span>Total</span>
                  <span className="text-[#8b1e2d]">$690.00</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-[0.68rem] uppercase tracking-[0.18em] text-[#574142]">
                  Código promocional
                </label>
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-[#eaeaea] px-4 py-2 text-[1rem] outline-none transition-colors focus:border-[#241919]"
                    placeholder="Ingresa el código"
                    type="text"
                  />
                  <button className="border border-[#241919] px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition hover:bg-[#241919] hover:text-white" type="button">
                    Aplicar
                  </button>
                </div>
              </div>

              <button className="mb-4 w-full rounded-sm bg-[#8b1e2d] py-4 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-90 active:scale-95" type="button">
                Proceder al pago
              </button>

              <div className="flex items-center justify-center gap-2 text-[#574142]">
                <span aria-hidden="true">Lock</span>
                <span className="text-[0.72rem] uppercase tracking-[0.16em]">Pago seguro garantizado</span>
              </div>

              <div className="mt-8 border-t border-[#eaeaea] pt-6">
                <p className="mb-4 text-[0.68rem] uppercase tracking-[0.18em] text-[#574142]">
                  Aceptamos
                </p>
                <div className="flex gap-4 opacity-60 grayscale transition-all duration-300 hover:grayscale-0">
                  <span>Card</span>
                  <span>Wallet</span>
                  <span>Tap</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mb-8 border-b border-[#eaeaea] pb-4 text-[2rem] font-semibold text-[#241919]">
            Completa el look
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedItems.map((item) => (
              <article key={item.title} className="group cursor-pointer">
                <div className="mb-4 aspect-[3/4] overflow-hidden bg-[#fff0f0]">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                  />
                </div>
                <p className="mb-1 text-[1rem] text-[#241919]">
                  <Link className="no-underline text-[#241919]" to="/product-detail">
                    {item.title}
                  </Link>
                </p>
                <p className="text-[1.3rem] font-semibold text-[#241919]">{item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 w-full border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between space-y-4 px-4 py-12 sm:px-6 md:flex-row md:space-y-0 lg:px-16">
          <div className="text-lg font-bold text-[#1a1a1a]">Feria Americana</div>
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wide">
            {footerLinks.map((link) => (
              <Link
                key={link}
                className="text-neutral-500 no-underline transition-colors hover:text-[#1a1a1a]"
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
