import profileOrder1 from '../../assets/profile-order-1.png'
import profileOrder2 from '../../assets/profile-order-2.png'
import profileSaved1 from '../../assets/profile-saved-1.png'
import profileSaved2 from '../../assets/profile-saved-2.png'

const profileTags = ['Silk', 'Monochrome', 'Structured']

const recentOrders = [
  {
    deliveredAt: 'Delivered Oct 12, 2023',
    id: 'Order #AT-88291',
    image: profileOrder1,
    price: '$340.00',
    title: 'Raw Silk Drapery Blouse',
  },
  {
    deliveredAt: 'Delivered Sep 28, 2023',
    id: 'Order #AT-87550',
    image: profileOrder2,
    price: '$485.00',
    title: 'Structured Wool Trousers',
  },
]

const savedPieces = [
  {
    image: profileSaved1,
    price: '$1,200',
    title: 'Cashmere Coat',
  },
  {
    image: profileSaved2,
    price: '$550',
    title: 'Leather Mules',
  },
]

const settingsLinks = [
  'Security & Privacy',
  'Payment Methods',
  'Email Notifications',
  'Sustainability Preferences',
]

export function ProfileOverviewGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.4fr)]">
      <section className="grid gap-6">
        <article className="rounded-2xl bg-surface-soft p-8">
          <h2 className="mb-6 font-headline text-[1.35rem] font-bold text-headline">
            Personal Information
          </h2>
          <dl className="grid gap-5">
            <div>
              <dt className="mb-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-text-muted">
                Email Address
              </dt>
              <dd className="m-0 font-semibold text-headline">j.vance@atelier-digital.com</dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-text-muted">
                Shipping Destination
              </dt>
              <dd className="m-0 font-semibold text-headline">Lower East Side, NYC, USA</dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-text-muted">
                Preferred Size
              </dt>
              <dd className="m-0 font-semibold text-headline">EU 38 / Small</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-2xl bg-accent-tertiary p-8">
          <h2 className="mb-4 font-headline text-[1.35rem] font-bold text-headline">
            Style Profile
          </h2>
          <p className="m-0 leading-7 text-[#5d5c57]">
            Your aesthetic is currently leaning towards <strong>Architectural Minimalism</strong>{' '}
            with a preference for natural fibers.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profileTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/75 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-headline"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6">
        <article className="rounded-2xl bg-white p-8 shadow-card">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="m-0 font-headline text-[1.35rem] font-bold text-headline">
              Recent Orders
            </h2>
            <button
              className="border-0 bg-transparent p-0 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-accent"
              type="button"
            >
              View All
            </button>
          </div>

          <div className="grid gap-4">
            {recentOrders.map((order) => (
              <article key={order.id} className="flex items-center gap-4 rounded-xl bg-background p-4">
                <div className="h-20 w-16 shrink-0 overflow-hidden rounded-md bg-surface-muted">
                  <img alt={order.title} className="h-full w-full object-cover" src={order.image} />
                </div>
                <div className="flex-1">
                  <span className="text-[0.78rem] text-text-muted">{order.id}</span>
                  <h3 className="my-1 font-headline text-lg font-bold text-headline">
                    {order.title}
                  </h3>
                  <p className="m-0 text-[0.78rem] text-text-muted">{order.deliveredAt}</p>
                </div>
                <div className="text-right">
                  <strong className="block text-headline">{order.price}</strong>
                  <span className="text-[0.72rem] font-bold text-accent">Open</span>
                </div>
              </article>
            ))}
          </div>
        </article>

        <div className="grid gap-6 xl:grid-cols-2">
          <article className="rounded-2xl bg-surface-soft p-8">
            <h2 className="mb-6 font-headline text-[1.35rem] font-bold text-headline">
              Saved Pieces
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {savedPieces.map((piece) => (
                <article
                  key={piece.title}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white"
                >
                  <img alt={piece.title} className="h-full w-full object-cover" src={piece.image} />
                  <span className="absolute left-2 bottom-2 rounded bg-background/90 px-2 py-1 text-[0.64rem] font-bold">
                    {piece.price}
                  </span>
                </article>
              ))}
            </div>
            <button
              className="mt-4 w-full rounded-xl border border-black/15 bg-transparent px-4 py-4 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-headline"
              type="button"
            >
              Go to Wishlist
            </button>
          </article>

          <article className="rounded-2xl border border-black/10 bg-background p-8">
            <h2 className="mb-6 font-headline text-[1.35rem] font-bold text-headline">
              Account Settings
            </h2>
            <div className="grid gap-2">
              {settingsLinks.map((setting) => (
                <button
                  key={setting}
                  className="flex items-center justify-between gap-4 rounded-xl px-4 py-4 text-left text-headline transition hover:bg-surface-muted"
                  type="button"
                >
                  <span>{setting}</span>
                  <span className="text-[0.72rem] font-bold text-accent">Open</span>
                </button>
              ))}
            </div>
            <div className="mt-5 border-t border-black/10 pt-4">
              <button
                className="border-0 bg-transparent p-0 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-danger"
                type="button"
              >
                Deactivate Account
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
