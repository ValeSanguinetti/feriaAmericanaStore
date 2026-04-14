import loginDetail1 from '../../assets/login-detail-1.png'
import loginDetail2 from '../../assets/login-detail-2.png'
import loginDetail3 from '../../assets/login-detail-3.png'
import { LoginForm } from '../../components/auth/LoginForm'

const loginGallery = [
  {
    alt: 'Close-up of textured beige wool fabric in soft studio light',
    src: loginDetail1,
  },
  {
    alt: 'Minimal fashion portrait in white linen against a neutral stone backdrop',
    src: loginDetail2,
  },
  {
    alt: 'Curated row of designer garments in a quiet boutique interior',
    src: loginDetail3,
  },
]

export default function LoginPage() {
  return (
    <>
      <header className="sticky top-0 z-10 flex justify-center bg-background/85 px-6 py-6 backdrop-blur">
        <div className="font-headline text-[2rem] font-extrabold tracking-[-0.05em] text-headline">
          L&apos;ATELIER
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pt-5 pb-16">
        <section className="grid w-full max-w-[34rem] gap-6" aria-labelledby="login-title">
          <LoginForm />

          <div className="grid grid-cols-3 gap-3" aria-label="Brand moodboard">
            {loginGallery.map((image) => (
              <div key={image.alt} className="aspect-square overflow-hidden rounded-2xl bg-surface-muted">
                <img
                  alt={image.alt}
                  className="h-full w-full object-cover grayscale opacity-70"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
