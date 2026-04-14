import { Link } from 'react-router-dom'
import landingAtelier from '../../assets/landing-atelier.png'

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

export function LandingStorySection() {
  return (
    <section className="grid gap-16 bg-[#f5f0eb] px-5 py-24 md:px-8 lg:grid-cols-2">
      <div className="relative mx-auto w-full max-w-[1320px] lg:max-w-none">
        <img
          alt="Minimalist atelier interior with luxury garments and warm morning light"
          className="min-h-[32rem] w-full rounded-[1.5rem] object-cover shadow-story lg:min-h-[42rem]"
          src={landingAtelier}
        />
        <aside className="mt-4 rounded-2xl bg-white p-8 shadow-card lg:absolute lg:right-[-2rem] lg:bottom-[-2rem] lg:mt-0 lg:w-[18rem]">
          <h3 className="m-0 font-headline text-[1.75rem] font-bold text-headline">
            Made to <span className="text-accent">Measure</span>
          </h3>
          <p className="mt-4 mb-0 leading-7 text-text-muted">
            Every piece in our Archive is meticulously documented and crafted from ethically
            sourced fibers across Europe.
          </p>
        </aside>
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] gap-6 lg:max-w-none">
        <h2 className="m-0 font-headline text-[clamp(2rem,4vw,3.8rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
          The Craft Behind <br />
          The Curve
        </h2>
        <p className="m-0 text-[1.35rem] leading-[1.7] italic text-text-muted">
          &quot;We don&apos;t create fashion. We create the armor for your most authentic
          self.&quot;
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
                <p className="m-0 leading-7 text-text-muted">{point.description}</p>
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
  )
}
