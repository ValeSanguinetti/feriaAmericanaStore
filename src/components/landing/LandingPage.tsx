import { Link } from 'react-router-dom'
import landingAtelier from '../../assets/landing-atelier.png'
import landingFeatureBlouse from '../../assets/landing-feature-blouse.png'
import landingFeatureCoat from '../../assets/landing-feature-coat.png'
import landingFeatureTrouser from '../../assets/landing-feature-trouser.png'
import landingHero from '../../assets/landing-hero.png'
import { SiteFooter } from '../shared/SiteFooter'

const navigationLinks = [
  'Collections',
  'New Arrivals',
  'Lookbook',
  'Archive',
]

const featureCards = [
  {
    badge: 'Limited Edition',
    cta: '+',
    image: landingFeatureCoat,
    price: '$1,850.00',
    title: 'Sculpted Wool Overcoat',
    variant: 'feature',
  },
  {
    badge: 'New Arrival',
    cta: 'Add to bag',
    image: landingFeatureBlouse,
    price: '$620.00',
    title: 'Noir Silk Blouse',
    variant: 'compact',
  },
  {
    badge: 'Essential',
    cta: 'Add to bag',
    image: landingFeatureTrouser,
    price: '$480.00',
    title: 'Tapered Trouser',
    variant: 'compact',
  },
]

const atelierPoints = [
  {
    description:
      "Our commitment to zero-waste production ensures that beauty doesn't cost the Earth.",
    icon: 'Eco',
    title: 'Sustainability First',
  },
  {
    description:
      "From Italian silk to Icelandic wool, we source only the world's finest textures.",
    icon: 'Stone',
    title: 'Exquisite Materials',
  },
]

export function LandingPage() {
  const [featureCard, ...secondaryCards] = featureCards

  return (
    <div className="flex min-h-svh flex-col bg-[linear-gradient(180deg,#f8f3ee_0%,#fcf9f8_22%)]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-background/85 backdrop-blur">
        <div className="mx-auto flex min-h-20 w-full max-w-[1320px] flex-wrap items-center justify-between gap-4 px-5 md:px-8">
          <div className="flex items-center gap-8 lg:gap-12">
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
                  className={`font-medium no-underline transition-colors ${
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

          <div className="flex items-center gap-4">
            <button
              aria-label="Shopping bag"
              className="border-0 bg-transparent font-semibold text-text"
              type="button"
            >
              Bag
            </button>
            <span className="h-4 w-px bg-black/15" />
            <Link
              className="font-semibold text-accent underline decoration-accent/35 underline-offset-4"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-accent-strong px-4 py-3 text-sm font-semibold text-[#fffaf4] no-underline"
              to="/register"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>

      <main className="grid">
        <section className="relative flex min-h-[88svh] items-center overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover grayscale-[0.2]"
            src={landingHero}
            alt="Editorial fashion portrait with beige tones and architectural lighting"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,249,248,0.96)_0%,rgba(252,249,248,0.5)_42%,transparent_78%)]" />
          <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8">
            <span className="mb-6 inline-flex rounded-full bg-accent-soft px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#694d0c]">
              Autumn Winter 2024
            </span>
            <h1 className="m-0 font-headline text-[clamp(3.6rem,7vw,6rem)] leading-[0.88] font-extrabold tracking-[-0.07em] text-headline">
              The Silent <br />
              <span className="font-light italic text-accent">Elegance</span>
            </h1>
            <p className="mt-6 mb-8 max-w-[36rem] text-[1.05rem] leading-[1.8] text-text-muted">
              Curated silhouettes designed for the modern individual. Experience
              a new era of digital luxury where every stitch tells a story of
              craftsmanship and intentionality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-2xl bg-accent bg-[linear-gradient(135deg,#76551a_0%,#5e4312_100%)] px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-[#fffaf4] no-underline shadow-panel transition hover:-translate-y-px hover:brightness-105"
                to="/catalog"
              >
                Explore Collection
              </Link>
              <Link
                className="inline-flex items-center py-4 text-sm font-bold uppercase tracking-[0.08em] text-headline no-underline"
                to="/catalog"
              >
                The Lookbook
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1320px] px-5 py-24 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="m-0 mb-3 font-headline text-[clamp(2rem,4vw,3.8rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
                Featured Selection
              </h2>
              <p className="m-0 max-w-[34rem] leading-7 text-text-muted">
                The season&apos;s most-coveted pieces, selected by our creative
                directors for their timeless quality.
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
                className="h-full w-full object-cover"
                src={featureCard.image}
                alt={featureCard.title}
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
                    card.title === 'Tapered Trouser'
                      ? 'bg-surface-muted'
                      : 'bg-surface-soft'
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
                    <img
                      className="h-full w-full object-cover"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-16 bg-[#f5f0eb] px-5 py-24 md:px-8 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[1320px] lg:max-w-none">
            <img
              className="min-h-[32rem] w-full rounded-[1.5rem] object-cover shadow-story lg:min-h-[42rem]"
              src={landingAtelier}
              alt="Minimalist atelier interior with luxury garments and warm morning light"
            />
            <aside className="mt-4 rounded-2xl bg-white p-8 shadow-card lg:absolute lg:right-[-2rem] lg:bottom-[-2rem] lg:mt-0 lg:w-[18rem]">
              <h3 className="m-0 font-headline text-[1.75rem] font-bold text-headline">
                Made to <span className="text-accent">Measure</span>
              </h3>
              <p className="mt-4 mb-0 leading-7 text-text-muted">
                Every piece in our Archive is meticulously documented and
                crafted from ethically sourced fibers across Europe.
              </p>
            </aside>
          </div>

          <div className="mx-auto grid w-full max-w-[1320px] gap-6 lg:max-w-none">
            <h2 className="m-0 font-headline text-[clamp(2rem,4vw,3.8rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
              The Craft Behind <br />
              The Curve
            </h2>
            <p className="m-0 text-[1.35rem] leading-[1.7] italic text-text-muted">
              &quot;We don&apos;t create fashion. We create the armor for your most
              authentic self.&quot;
            </p>
            <div className="grid gap-6">
              {atelierPoints.map((point) => (
                <article key={point.title} className="flex items-start gap-4">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold ${
                      point.icon === 'Eco'
                        ? 'bg-accent-soft text-[#694d0c]'
                        : 'bg-accent-tertiary text-[#5d5c57]'
                    }`}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="m-0 mb-2 font-headline text-lg font-bold text-headline">
                      {point.title}
                    </h3>
                    <p className="m-0 leading-7 text-text-muted">
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="border-t border-black/10 pt-6">
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-headline px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.18em] text-background no-underline"
                to="/register"
              >
                Join The Circle
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter showSocialLinks />
    </div>
  )
}
