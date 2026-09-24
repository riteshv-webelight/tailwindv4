import { useEffect, useState } from 'react'
import S1Oklch from './sections/S1Oklch'
import S2Opacity from './sections/S2Opacity'
import S3Dynamic from './sections/S3Dynamic'
import S43D from './sections/S43D'
import S5Gradients from './sections/S5Gradients'
import S6Container from './sections/S6Container'
import S7Utilities from './sections/S7Utilities'
import S8Newest from './sections/S8Newest'

const SECTIONS = [
  { id: 1, label: 'OKLCH colors', hint: 'perceptual lightness', el: <S1Oklch /> },
  { id: 2, label: 'color-mix() opacity', hint: 'the /50 modifier', el: <S2Opacity /> },
  { id: 3, label: 'Dynamic values', hint: 'grid-cols-15, w-17', el: <S3Dynamic /> },
  { id: 4, label: '3D transforms', hint: 'rotate-x / rotate-z', el: <S43D /> },
  { id: 5, label: 'Gradients', hint: 'linear / radial / conic', el: <S5Gradients /> },
  { id: 6, label: 'Container queries', hint: '@container, @sm, @max-md', el: <S6Container /> },
  { id: 7, label: 'Everyday utilities', hint: 'popover, field-sizing', el: <S7Utilities /> },
  { id: 8, label: 'v4.1 → v4.3', hint: 'text-shadow, mask, mauve', el: <S8Newest /> },
]

export default function App() {
  const [active, setActive] = useState(1)
  const current = SECTIONS.find((s) => s.id === active)!

  // Arrow keys move between slides, unless we're typing in the demo inputs.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement | null
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return
      if (e.key === 'ArrowRight') setActive((a) => Math.min(SECTIONS.length, a + 1))
      if (e.key === 'ArrowLeft') setActive((a) => Math.max(1, a - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="flex min-h-screen">
      <nav className="sticky top-0 flex h-screen w-80 shrink-0 flex-col gap-1 overflow-y-auto border-r-2 border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="px-3 pt-3 pb-5">
          <p className="font-display text-3xl font-extrabold tracking-tight">
            Tailwind <span className="text-brand">v4</span>
          </p>
          <p className="mt-1 font-mono text-base text-slate-500">tailwindcss 4.3.3</p>
        </div>

        {SECTIONS.map((s) => {
          const on = s.id === active
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setActive(s.id)
                window.scrollTo({ top: 0 })
              }}
              className={`rounded-xl px-4 py-3 text-left transition ${
                on
                  ? 'bg-brand text-white shadow-lg'
                  : 'hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span
                  className={`font-mono text-lg font-bold ${on ? 'text-white/70' : 'text-slate-400'}`}
                >
                  {s.id}
                </span>
                <span className="text-xl font-semibold">{s.label}</span>
              </span>
              <span
                className={`ml-8 block text-base ${on ? 'text-white/70' : 'text-slate-500'}`}
              >
                {s.hint}
              </span>
            </button>
          )
        })}

        <div className="mt-auto px-3 py-4 text-base text-slate-500">
          ← / → switch sections
        </div>
      </nav>

      <main className="flex-1">{current.el}</main>
    </div>
  )
}
