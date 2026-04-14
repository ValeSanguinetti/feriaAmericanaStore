import type { ChangeEvent, ReactNode } from 'react'
import { cx } from '../../lib/ui'

const baseInputClassName =
  'w-full rounded-2xl border border-transparent bg-surface-muted px-4 py-4 text-text outline-none transition focus:border-accent/30 focus:shadow-[0_0_0_0.28rem_rgba(118,85,26,0.12)]'

export type TextFieldProps = {
  error?: string
  id: string
  label: ReactNode
  name: string
  onBlur: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
  value: string
}

export function TextField({
  error,
  id,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  type = 'text',
  value,
}: TextFieldProps) {
  const describedBy = error ? `${id}-error` : undefined

  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {label}
      </span>
      <input
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        className={cx(baseInputClassName, error && 'border-danger/35 bg-danger/5')}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error ? (
        <p className="m-0 text-[0.82rem] text-danger" id={describedBy} role="alert">
          {error}
        </p>
      ) : null}
    </label>
  )
}
