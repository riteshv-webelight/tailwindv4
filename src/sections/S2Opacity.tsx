import type { CSSProperties } from 'react'
import Demo from '../components/Demo'
import Slide from '../components/Slide'

const STEPS = [
  { cls: 'bg-brand/100', label: '/100' },
  { cls: 'bg-brand/75', label: '/75' },
  { cls: 'bg-brand/50', label: '/50' },
  { cls: 'bg-brand/25', label: '/25' },
]

export default function S2Opacity() {
  return (
    <Slide
      index={2}
      title="Opacity via color-mix()"
      lede="The /50 modifier is no longer a bespoke --tw-bg-opacity variable. v4 emits real color-mix() — so it works on any color, including ones Tailwind has never seen."
    >
      <Demo
        title="bg-brand at four opacities"
        note="A checkerboard sits behind the swatches so the transparency is visible."
        code={`<div className="bg-brand/100" />
<div className="bg-brand/75" />
<div className="bg-brand/50" />
<div className="bg-brand/25" />`}
      >
        <div
          className="grid grid-cols-4 gap-3 rounded-xl p-3"
          style={{
            backgroundImage:
              'repeating-conic-gradient(#cbd5e1 0% 25%, #f8fafc 0% 50%)',
            backgroundSize: '28px 28px',
          }}
        >
          {STEPS.map((s) => (
            <div key={s.cls} className="text-center">
              <div className={`${s.cls} h-32 rounded-xl`} />
              <p className="mt-2 rounded bg-white/80 py-1 font-mono text-base font-bold text-slate-900">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Demo>

      <Demo
        title="Opacity on an arbitrary CSS variable"
        note="bg-(--my-color) reads an arbitrary CSS variable — and the /50 modifier still applies, because color-mix() does not care where the color came from."
        code={`<div
  style={{ '--my-color': '#e11d48' } as CSSProperties}
  className="bg-(--my-color)/50"
/>

/* generated CSS: */
/* background-color: color-mix(in oklab, var(--my-color) 50%, transparent); */`}
      >
        <div
          style={{ '--my-color': '#e11d48' } as CSSProperties}
          className="flex items-center gap-6"
        >
          <div className="size-32 rounded-2xl bg-(--my-color) ring-1 ring-black/10" />
          <div className="size-32 rounded-2xl bg-(--my-color)/50 ring-1 ring-black/10" />
          <div>
            <p className="font-mono text-xl font-semibold">--my-color: #e11d48</p>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
              full &nbsp;·&nbsp; then the same variable at /50
            </p>
          </div>
        </div>
      </Demo>

      <Demo
        title="text-current/60"
        note="currentColor works too — the child inherits the parent's color, then fades it. No color name is repeated anywhere."
        code={`<div className="text-brand">
  <p>text inherits brand</p>
  <p className="text-current/60">same color at 60%</p>
</div>`}
      >
        <div className="text-brand">
          <p className="text-3xl font-bold">Inherited brand color</p>
          <p className="mt-2 text-3xl font-bold text-current/60">
            The exact same color at /60
          </p>
          <p className="mt-2 text-3xl font-bold text-current/30">…and at /30</p>
        </div>
      </Demo>

      <div className="rounded-2xl border-l-8 border-brand bg-brand/10 p-6">
        <p className="font-display text-2xl font-bold">Generated CSS</p>
        <p className="mt-2 text-xl text-slate-700 dark:text-slate-300">
          <code className="font-mono font-bold">bg-brand/50</code> compiles to a single
          declaration:
        </p>
        <code className="mt-3 block rounded-lg bg-slate-900 px-4 py-3 font-mono text-lg text-slate-100">
          background-color: color-mix(in oklab, var(--color-brand) 50%, transparent);
        </code>
        <p className="mt-3 text-xl text-slate-700 dark:text-slate-300">
          v3 emitted an <code className="font-mono">--tw-bg-opacity</code> variable and
          required an rgb() color channel to interpolate it.
        </p>
      </div>
    </Slide>
  )
}
