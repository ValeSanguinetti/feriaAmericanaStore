import { Link } from 'react-router-dom'
import profileOrder from '../../assets/profile-stitch-order.jpg'
import profileSaved1 from '../../assets/profile-stitch-saved-1.jpg'
import profileSaved2 from '../../assets/profile-stitch-saved-2.jpg'
import profileSaved3 from '../../assets/profile-stitch-saved-3.jpg'
import profileSaved4 from '../../assets/profile-stitch-saved-4.jpg'

const navItems = ['New Arrivals', 'Collections', 'Vintage', 'Editorial']

const profileNavItems = [
  'Personal Information',
  'Order History',
  'Saved Items',
  'Account Settings',
]

const savedItems = [
  {
    image: profileSaved1,
    price: '$420.00',
    title: 'Architectural Silk Midi',
  },
  {
    image: profileSaved2,
    price: '$185.00',
    title: 'Vintage Selvedge Denim',
  },
  {
    image: profileSaved3,
    price: '$295.00',
    title: 'Hand-Crafted Loafer',
  },
  {
    image: profileSaved4,
    price: '$850.00',
    title: 'Solid Gold Chain No. 4',
  },
]

const footerLinks = ['Shipping', 'Returns', 'Privacy', 'Contact', 'Sustainability']

export default function ProfilePage() {
  return (
    <div className="bg-[#fff8f7] text-[#241919]">
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-zinc-100 bg-white">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-16">
          <Link className="text-[1.5rem] font-black uppercase tracking-[-0.06em] text-zinc-900 no-underline sm:text-2xl" to="/">
            Feria Americana
          </Link>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item}
                className="text-[0.8rem] uppercase tracking-[0.16em] text-zinc-500 no-underline transition-colors hover:text-[#8b1e2d]"
                to={index === 1 ? '/catalog' : '/'}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button className="border-0 bg-transparent p-0 text-zinc-900" type="button">
              Search
            </button>
            <button className="border-b border-[#8b1e2d] pb-1 text-[#8b1e2d]" type="button">
              Profile
            </button>
            <Link className="border-0 bg-transparent p-0 text-zinc-900 no-underline" to="/shopping-cart">
              Bag
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 pt-32 pb-20 sm:px-6 md:px-16">
        <div className="flex flex-col gap-12 md:flex-row">
          <aside className="w-full shrink-0 md:w-64">
            <div className="mb-10">
              <h1 className="m-0 text-[2rem] font-semibold text-[#241919]">My Profile</h1>
              <p className="m-0 mt-2 text-[1rem] text-[#574142]">Member since October 2023</p>
            </div>

            <nav className="flex flex-col gap-1">
              {profileNavItems.map((item, index) => (
                <Link
                  key={item}
                  className={
                    index === 0
                      ? 'rounded-lg bg-[#8b1e2d] px-4 py-3 text-[0.82rem] font-semibold text-white no-underline'
                      : 'rounded-lg px-4 py-3 text-[0.82rem] font-semibold text-[#241919] no-underline transition-colors hover:bg-[#fff0f0]'
                  }
                  to={item === 'Saved Items' ? '/wishlist' : '/profile'}
                >
                  {item}
                </Link>
              ))}

              <Link
                className="mt-8 rounded-lg px-4 py-3 text-[0.82rem] font-semibold text-[#241919] no-underline transition-colors hover:bg-[#fff0f0]"
                to="/login"
              >
                Sign Out
              </Link>
            </nav>
          </aside>

          <div className="flex-grow space-y-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="border border-[#debfbf] bg-white p-8 md:col-span-2">
                <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.18em] text-[#8b1e2d]">
                  Default Shipping
                </span>
                <h2 className="m-0 mb-6 text-[1.8rem] font-semibold text-[#241919]">
                  Julianne Thorne
                </h2>
                <div className="space-y-1 text-[1rem] text-[#574142]">
                  <p className="m-0">1280 Lexington Avenue</p>
                  <p className="m-0">New York, NY 10028</p>
                  <p className="m-0">United States</p>
                </div>
                <div className="mt-8">
                  <button
                    className="border-0 border-b border-[#241919] bg-transparent p-0 pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[#8b1e2d] hover:text-[#8b1e2d]"
                    type="button"
                  >
                    Edit Address
                  </button>
                </div>
              </article>

              <article className="bg-[#8b1e2d] p-8 text-white">
                <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.18em] opacity-80">
                  Tier Status
                </span>
                <h2 className="m-0 mb-2 text-[1.8rem] font-semibold">Vintage Elite</h2>
                <p className="m-0 text-[1rem] opacity-90">1,450 Points Earned</p>
                <div className="mt-8">
                  <div className="mb-2 h-1 w-full bg-white/20">
                    <div className="h-full w-[70%] bg-white" />
                  </div>
                  <p className="m-0 text-[0.68rem] uppercase tracking-[0.18em]">
                    550 pts to next tier
                  </p>
                </div>
              </article>
            </div>

            <section>
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="m-0 text-[1.7rem] font-semibold text-[#241919]">Recent Order</h3>
                <Link
                  className="border-b border-[#241919] pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#241919] no-underline"
                  to="/profile"
                >
                  View All
                </Link>
              </div>

              <article className="flex flex-col items-center gap-8 border border-[#debfbf] bg-white p-6 md:flex-row">
                <div className="h-40 w-32 shrink-0 bg-zinc-100">
                  <img
                    alt="Oversized Cashmere Trench"
                    className="h-full w-full object-cover"
                    src={profileOrder}
                  />
                </div>
                <div className="flex-grow">
                  <div className="mb-2 flex flex-wrap gap-3">
                    <span className="rounded-full bg-[#f9e3e3] px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-[#8b1e2d]">
                      In Transit
                    </span>
                    <span className="pt-1 text-[0.72rem] text-[#574142]">#FA-9821034</span>
                  </div>
                  <h4 className="m-0 mb-1 text-[1.2rem] font-bold text-[#241919]">
                    Oversized Cashmere Trench
                  </h4>
                  <p className="m-0 text-[1rem] text-[#574142]">
                    Estimated arrival: Oct 24, 2023
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <button
                    className="w-full bg-[#6b0119] px-8 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#8b1e2d] md:w-auto"
                    type="button"
                  >
                    Track Order
                  </button>
                </div>
              </article>
            </section>

            <section>
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="m-0 text-[1.7rem] font-semibold text-[#241919]">Saved Items</h3>
                <Link
                  className="border-b border-[#241919] pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#241919] no-underline"
                  to="/wishlist"
                >
                  Edit Wishlist
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {savedItems.map((item) => (
                  <article key={item.title} className="group cursor-pointer">
                    <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-zinc-100">
                      <img
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={item.image}
                      />
                      <button
                        className="absolute top-4 right-4 rounded-full bg-white/80 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                        type="button"
                      >
                        <span aria-hidden="true" className="text-[#8b1e2d]">
                          Heart
                        </span>
                      </button>
                    </div>
                    <h5 className="m-0 mb-1 text-[1rem] text-[#241919]">
                      <Link className="no-underline text-[#241919]" to="/product-detail">
                        {item.title}
                      </Link>
                    </h5>
                    <p className="m-0 text-[1.15rem] font-semibold text-[#241919]">{item.price}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-16">
          <div className="text-lg font-bold uppercase tracking-[0.04em] text-zinc-900">
            Feria Americana
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[0.58rem] uppercase tracking-[0.24em] text-zinc-400">
            {footerLinks.map((link) => (
              <Link
                key={link}
                className="no-underline transition-colors hover:text-[#8b1e2d]"
                to="/"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="text-[0.58rem] uppercase tracking-[0.24em] text-zinc-400">
            &copy; 2024 Feria Americana. Curated quality.
          </div>
        </div>
      </footer>
    </div>
  )
}
