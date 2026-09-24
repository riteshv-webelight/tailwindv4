import type { ReactNode } from 'react'

type Props = {
  index: number
  title: string
  lede: string
  children: ReactNode
}

/** One talk slide = one scrollable section with a big heading. */
export default function Slide({ index, title, lede, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-10">
      <header className="mb-10">
        <p className="font-mono text-lg font-semibold tracking-[0.2em] text-brand uppercase">
          Section {index}
        </p>
        <h2 className="font-display mt-2 text-5xl font-extrabold tracking-tight text-shadow-lg text-shadow-brand/20 sm:text-6xl">
          {title}
        </h2>
        <p className="mt-4 max-w-5xl text-2xl text-slate-600 dark:text-slate-400">{lede}</p>
      </header>
      <div className="space-y-10">{children}</div>
    </div>
  )
}
