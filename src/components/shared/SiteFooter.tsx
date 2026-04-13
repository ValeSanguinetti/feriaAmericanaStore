type SiteFooterProps = {
  showSocialLinks?: boolean
}

const footerLinks = [
  'Sustainability',
  'Shipping',
  'Returns',
  'Privacy Policy',
  'Terms of Service',
]

export function SiteFooter({ showSocialLinks = false }: SiteFooterProps) {
  return (
    <footer className="grid grid-cols-1 items-center gap-6 border-t border-black/10 bg-[#f7f1ec]/85 px-5 py-6 backdrop-blur md:grid-cols-[auto_1fr_auto] md:px-8">
      <div className="grid gap-2">
        <span className="font-headline text-lg font-extrabold tracking-[-0.04em] text-headline">
          L&apos;ATELIER
        </span>
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
          &copy; 2024 L&apos;ATELIER DIGITAL. All rights reserved.
        </p>
      </div>

      <nav
        className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        aria-label="Footer"
      >
        {footerLinks.map((link) => (
          <a
            key={link}
            className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-text-muted no-underline transition-colors hover:text-headline"
            href="/"
          >
            {link}
          </a>
        ))}
      </nav>

      {showSocialLinks ? (
        <div
          className="flex justify-center gap-5 md:justify-end"
          aria-label="Social links"
        >
          <a
            aria-label="Share"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted no-underline transition-colors hover:text-headline"
            href="/"
          >
            Share
          </a>
          <a
            aria-label="Email"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted no-underline transition-colors hover:text-headline"
            href="/"
          >
            Email
          </a>
        </div>
      ) : null}
    </footer>
  )
}
