import type { ReactNode } from 'react'
import CodeBox from './CodeBox'

type Props = {
  title: string
  /** One-line "why this matters" shown under the title. */
  note?: ReactNode
  code: string
  language?: string
  codeTitle?: string
  children: ReactNode
}

/**
 * The demo unit used everywhere: live result on the left, the exact classes
 * that produced it on the right.
 */
export default function Demo({
  title,
  note,
  code,
  language,
  codeTitle,
  children,
}: Props) {
  return (
    <section className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 sm:p-8">
      <h3 className="font-display text-3xl font-semibold tracking-tight">{title}</h3>
      {note && (
        <p className="mt-2 max-w-4xl text-lg text-slate-600 dark:text-slate-400">{note}</p>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
          {children}
        </div>
        <CodeBox code={code} language={language} title={codeTitle} />
      </div>
    </section>
  )
}
