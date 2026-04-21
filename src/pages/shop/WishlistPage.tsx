import { Link } from 'react-router-dom'
import wishlistEditorial from '../../assets/wishlist-editorial.jpg'
import wishlistItem1 from '../../assets/wishlist-item-1.jpg'
import wishlistItem2 from '../../assets/wishlist-item-2.jpg'
import wishlistItem3 from '../../assets/wishlist-item-3.jpg'
import wishlistItem4 from '../../assets/wishlist-item-4.jpg'

const wishlistItems = [
  { image: wishlistItem1, price: '$245.00', title: '1970s Wool Trench Coat' },
  { image: wishlistItem2, price: '$180.00', title: 'Artisan Leather Satchel' },
  { image: wishlistItem3, price: '$65.00', title: 'Hand-Painted Silk Scarf' },
  { image: wishlistItem4, price: '$120.00', title: '1960s Oversized Frames' },
]

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Contact Us']

export default function WishlistPage() {
  return (
    <div className="bg-[#fff8f7] text-[#241919]">
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-6 sm:px-6 lg:px-16">
          <Link className="text-2xl font-black uppercase tracking-[-0.06em] text-[#8b1e2d] no-underline" to="/">
            Feria Americana
          </Link>
          <div className="hidden items-center space-x-12 md:flex">
            <Link className="text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/catalog">
              Shop
            </Link>
            <Link className="border-b border-[#1a1a1a] pb-1 text-[#1a1a1a] no-underline" to="/wishlist">
              Wishlist
            </Link>
            <Link className="text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/">
              New Arrivals
            </Link>
            <Link className="text-neutral-500 no-underline transition-colors hover:text-[#8b1e2d]" to="/catalog">
              Collections
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link className="text-neutral-800 no-underline transition-opacity hover:opacity-80" to="/shopping-cart">
              Bag
            </Link>
            <Link className="text-neutral-800 no-underline transition-opacity hover:opacity-80" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto mt-[100px] min-h-screen max-w-[1440px] px-4 sm:px-6 lg:px-16">
        <header className="py-20">
          <div className="flex flex-col gap-6 border-b border-[#debfbf] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-2 block text-[0.68rem] uppercase tracking-[0.22em] text-[#a93342]">
                Private Collection
              </span>
              <h1 className="text-[clamp(2.8rem,6vw,4.2rem)] font-bold tracking-[-0.04em] text-[#241919]">
                Your Wishlist
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-[1rem] text-[#574142]">4 Curated Items Saved</p>
              <button className="border border-[#241919] px-6 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[#241919] hover:text-white" type="button">
                Share List
              </button>
            </div>
          </div>
        </header>

        <section className="pb-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {wishlistItems.map((item) => (
              <article key={item.title} className="group flex flex-col space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ffe9e8]">
                  <Link to="/product-detail">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={item.image}
                    />
                  </Link>
                  <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-white/90 text-[#241919] transition-colors hover:text-[#ba1a1a]" type="button">
                    ×
                  </button>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <Link
                      className="block w-full bg-[#8b1e2d] py-4 text-center text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white no-underline"
                      to="/shopping-cart"
                    >
                      Move to Bag
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-[1rem] text-[#241919]">
                    <Link className="no-underline text-[#241919]" to="/product-detail">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-[1.35rem] font-semibold text-[#241919]">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#debfbf] py-20">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-1 flex-col items-start justify-center space-y-6 bg-[#ffe9e8] p-12">
              <h2 className="text-[2rem] font-semibold text-[#241919]">Complete Your Look</h2>
              <p className="max-w-md text-[1.05rem] leading-8 text-[#574142]">
                Our new &apos;Midnight Gallery&apos; collection just arrived. Pieces that pair
                perfectly with your saved items.
              </p>
              <Link
                className="border-b-2 border-[#6b0119] pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[#6b0119] no-underline transition-opacity hover:opacity-80"
                to="/catalog"
              >
                Explore Collections
              </Link>
            </div>
            <div className="flex-1 overflow-hidden aspect-video md:aspect-auto">
              <img
                alt="Editorial fashion"
                className="h-full w-full object-cover"
                src={wishlistEditorial}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 w-full border-t border-neutral-200 bg-white text-sm uppercase tracking-wide">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between space-y-4 px-4 py-12 sm:px-6 md:flex-row md:space-y-0 lg:px-16">
          <div className="text-lg font-bold text-[#1a1a1a]">Feria Americana</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
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
          <div className="normal-case text-neutral-500">&copy; 2024 Feria Americana. Curated Quality.</div>
        </div>
      </footer>
    </div>
  )
}
