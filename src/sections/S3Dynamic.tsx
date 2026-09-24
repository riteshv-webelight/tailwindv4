import { useState } from 'react'
import Demo from '../components/Demo'
import Slide from '../components/Slide'

const ITEMS = ['Overview', 'Installation', 'Theme variables', 'Upgrade guide']

export default function S3Dynamic() {
  const [current, setCurrent] = useState(1)

  return (
    <Slide
      index={3}
      title="Dynamic values"
      lede="v4 derives utilities on demand instead of reading them out of a config. Any number works — no safelist, no square brackets, no tailwind.config.js."
    >
      <Demo
        title="grid-cols-15"
        note="15 was never in Tailwind's scale. It works anyway, because the grid-cols-* utility now takes any integer."
        code={`<div className="grid grid-cols-15 gap-2">
  {cells.map((n) => <div key={n}>{n}</div>)}
</div>

// v3 needed an arbitrary value:
// grid-cols-[repeat(15,minmax(0,1fr))]`}
      >
        <div className="grid grid-cols-15 gap-2">
          {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-lg bg-brand/15 font-mono text-lg font-bold text-brand-ink dark:text-brand"
            >
              {n}
            </div>
          ))}
        </div>
      </Demo>

      <Demo
        title="w-17 sits between w-16 and w-18"
        note="The spacing scale is a formula now: calc(var(--spacing) * 17) with --spacing: 0.25rem. Every integer is a real step."
        code={`<div className="w-16 h-24" />   {/* 4rem    */}
<div className="w-17 h-24" />   {/* 4.25rem */}

// v3 needed: w-[4.25rem]`}
      >
        <div className="flex items-end gap-8">
          <div>
            <div className="h-24 w-16 rounded-xl bg-slate-400 dark:bg-slate-600" />
            <p className="mt-3 font-mono text-lg font-bold">w-16</p>
            <p className="font-mono text-base text-slate-500">4rem</p>
          </div>
          <div>
            <div className="h-24 w-17 rounded-xl bg-brand" />
            <p className="mt-3 font-mono text-lg font-bold">w-17</p>
            <p className="font-mono text-base text-slate-500">4.25rem</p>
          </div>
          <p className="pb-8 text-lg text-slate-600 dark:text-slate-400">
            ← 4px apart, with no arbitrary value
          </p>
        </div>
      </Demo>

      <Demo
        title="data-current: without square brackets"
        note="A bare data-* variant matches on the presence of the attribute. Selecting a row sets data-current on that row only."
        code={`<button data-current={isCurrent ? '' : undefined}
  className="opacity-40 data-current:opacity-100
             data-current:bg-brand/15">
  {item}
</button>

// v3 needed: data-[current]:opacity-100`}
      >
        <div className="space-y-2">
          {ITEMS.map((item, i) => (
            <button
              key={item}
              type="button"
              data-current={i === current ? '' : undefined}
              onClick={() => setCurrent(i)}
              className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-2xl
                         opacity-40 transition
                         data-current:bg-brand/15 data-current:font-bold data-current:opacity-100"
            >
              <span className="size-3 rounded-full bg-brand" />
              {item}
            </button>
          ))}
          <p className="pt-2 text-lg text-slate-500">
            The <code className="font-mono">data-current</code> attribute is the only
            difference between the two states.
          </p>
        </div>
      </Demo>
    </Slide>
  )
}
