import profileAvatar from '../../assets/profile-avatar.png'

export function ProfileHero() {
  return (
    <header className="mb-12 flex flex-wrap items-end gap-6">
      <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full bg-surface-muted">
        <img
          alt="Retrato de Julianna Vance"
          className="h-full w-full object-cover"
          src={profileAvatar}
        />
      </div>

      <div className="flex-1">
        <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
          Miembro desde 2022
        </span>
        <h1 className="m-0 mb-2 font-headline text-[clamp(3rem,5vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-headline">
          Julianna Vance
        </h1>
        <p className="m-0 max-w-[34rem] text-text-muted">
          Curando un guardarropa atemporal mediante selección consciente y trabajo artesanal.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          className="inline-flex items-center justify-center rounded-2xl bg-accent bg-[linear-gradient(135deg,#76551a_0%,#5e4312_100%)] px-6 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-[#fffaf4] shadow-panel transition hover:-translate-y-px hover:brightness-105"
          type="button"
        >
          Editar perfil
        </button>
        <button
          className="rounded-xl bg-accent-soft px-5 py-4 text-sm font-bold text-[#694d0c]"
          type="button"
        >
          Membresía gold
        </button>
      </div>
    </header>
  )
}
