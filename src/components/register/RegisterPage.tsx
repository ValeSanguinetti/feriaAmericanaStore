import editorialImage from '../../assets/register-editorial.png'
import { RegisterForm } from './RegisterForm'

const featurePills = ['Sustainable', 'Ethical', 'Timeless']

export function RegisterPage() {
  return (
    <main className="grid min-h-[720px] flex-1 grid-cols-1 md:grid-cols-[minmax(320px,0.95fr)_minmax(320px,1.05fr)]">
      <aside className="relative flex min-h-[480px] flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(239,230,220,0.7)),#efe8e2] px-5 py-8 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(20,15,12,0.1),rgba(20,15,12,0.28))] md:min-h-[720px] md:p-12">
        <div className="relative z-10 font-headline text-[1.85rem] font-extrabold tracking-[-0.04em] text-headline">
          L&apos;ATELIER
        </div>

        <div className="relative z-10 grid max-w-[28rem] gap-5">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent">
            New Member Exclusive
          </span>
          <h1 className="m-0 max-w-[12ch] font-headline text-[clamp(3rem,6vw,4.8rem)] leading-[0.94] font-extrabold tracking-[-0.06em] text-headline">
            Join our curated community.
          </h1>
          <p className="m-0 max-w-[24rem] text-[1.05rem] leading-[1.8] text-headline/80">
            Gain early access to seasonal collections, sustainable lookbooks,
            and exclusive archival pieces crafted for the modern individual.
          </p>
        </div>

        <img
          className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-multiply grayscale"
          src={editorialImage}
          alt="Editorial fashion still life with neutral tones and soft shadows"
        />

        <div
          className="relative z-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-headline/70"
          aria-label="Brand values"
        >
          {featurePills.map((pill) => (
            <span key={pill} className="inline-flex items-center gap-3">
              {pill}
            </span>
          ))}
        </div>
      </aside>

      <section
        className="flex items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(118,85,26,0.08),transparent_26%),#fcf9f8] px-5 py-8 md:p-12"
        aria-labelledby="register-title"
      >
        <RegisterForm />
      </section>
    </main>
  )
}
