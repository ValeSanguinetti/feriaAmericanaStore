import { cx } from '../../lib/ui'

type InlineNoticeProps = {
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function InlineNotice({ action, children, className }: InlineNoticeProps) {
  return (
    <section
      className={cx(
        'flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-success-border bg-success-bg px-5 py-4 text-success-text md:flex-row md:items-center',
        className,
      )}
      aria-live="polite"
    >
      <div>{children}</div>
      {action ? <div>{action}</div> : null}
    </section>
  )
}
