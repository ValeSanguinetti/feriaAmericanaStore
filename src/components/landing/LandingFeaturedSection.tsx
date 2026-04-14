import { Link } from 'react-router-dom'
import landingFeatureBlouse from '../../assets/landing-feature-blouse.png'
import landingFeatureCoat from '../../assets/landing-feature-coat.png'
import landingFeatureTrouser from '../../assets/landing-feature-trouser.png'

const featureCards = [
  {
    badge: 'Limited Edition',
    cta: '+',
    image: landingFeatureCoat,
    price: '$1,850.00',
    title: 'Sculpted Wool Overcoat',
  },
  {
    badge: 'New Arrival',
    cta: 'Add to bag',
    image: landingFeatureBlouse,
    price: '$620.00',
    title: 'Noir Silk Blouse',
  },
  {
    badge: 'Essential',
    cta: 'Add to bag',
    image: landingFeatureTrouser,
    price: '$480.00',
    title: 'Tapered Trouser',
  },
]

export function LandingFeaturedSection() {
  const [featureCard, ...secondaryCards] = featureCards

  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 py-24 md:px-8">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="m-0 mb-3 font-headline text-[clamp(2rem,4vw,3.8rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
            Featured Selection
          </h2>
          <p className="m-0 max-w-[34rem] leading-7 text-text-muted">
            The season&apos;s most-coveted pieces, selected by our creative directors for their
            timeless quality.
          </p>
        </div>
        <Link
          className="border-b-2 border-accent pb-1 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-accent no-underline"
          to="/catalog"
        >
          View all collections
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <article className="relative min-h-[32rem] overflow-hidden rounded-2xl bg-white lg:min-h-[46rem]">
          <img
            alt={featureCard.title}
            className="h-full w-full object-cover"
            src={featureCard.image}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.95))] p-8">
            <div>
              <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-accent">
                {featureCard.badge}
              </span>
              <h3 className="mt-2 mb-1 font-headline text-2xl font-bold text-headline">
                {featureCard.title}
              </h3>
              <p className="m-0 text-text-muted">{featureCard.price}</p>
            </div>
            <button
              className="h-12 w-12 rounded-full border-0 bg-accent-strong text-xl text-[#fffaf4]"
              type="button"
            >
              {featureCard.cta}
            </button>
          </div>
        </article>

        <div className="grid gap-8">
          {secondaryCards.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center ${
                card.title === 'Tapered Trouser' ? 'bg-surface-muted' : 'bg-surface-soft'
              }`}
            >
              <div className="flex-1">
                <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-accent">
                  {card.badge}
                </span>
                <h3 className="mt-2 mb-1 font-headline text-xl font-bold text-headline">
                  {card.title}
                </h3>
                <p className="m-0 text-text-muted">{card.price}</p>
                <button
                  className="mt-4 border-0 border-b border-black/15 bg-transparent p-0 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-headline"
                  type="button"
                >
                  {card.cta}
                </button>
              </div>
              <div className="aspect-square w-full overflow-hidden rounded-2xl md:w-40">
                <img alt={card.title} className="h-full w-full object-cover" src={card.image} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
