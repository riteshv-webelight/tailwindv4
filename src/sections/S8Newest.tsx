import Demo from '../components/Demo'
import Slide from '../components/Slide'

const AVAILABILITY = [
  ['text-shadow-lg', 'v4.1', true],
  ['mask-b-from-50%', 'v4.1', true],
  ['scrollbar-thin', 'v4.3', true],
  ['scrollbar-thumb-sky-700', 'v4.3', true],
  ['pbs-4 / mbe-2', 'v4.2', true],
  ['bg-mauve-100', 'v4.3', true],
] as const

export default function S8Newest() {
  return (
    <Slide
      index={8}
      title="v4.1 – v4.3 additions"
      lede="Utilities added across the 4.1, 4.2 and 4.3 point releases. Each one below compiles in the installed version."
    >
      <div className="rounded-2xl bg-emerald-50 p-6 ring-2 ring-emerald-300 dark:bg-emerald-950/40 dark:ring-emerald-800">
        <p className="font-display text-2xl font-bold">
          Availability in tailwindcss 4.3.3
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {AVAILABILITY.map(([cls, ver, ok]) => (
            <p key={cls} className="font-mono text-lg">
              <span className={ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}>
                {ok ? '✓' : '✗'}
              </span>{' '}
              <span className="font-bold">{cls}</span>{' '}
              <span className="text-slate-500">— {ver}</span>
            </p>
          ))}
        </div>
      </div>

      <Demo
        title="text-shadow-* (v4.1)"
        note="Added in 4.1, with a size scale, a color scale and an opacity modifier."
        code={`<h3 className="text-shadow-lg">Shadowed</h3>
<h3 className="text-shadow-lg text-shadow-brand/40">Tinted</h3>`}
      >
        <div className="space-y-4 rounded-xl bg-slate-100 p-6 dark:bg-slate-900">
          <p className="font-display text-5xl font-extrabold">No shadow</p>
          <p className="font-display text-5xl font-extrabold text-shadow-lg">text-shadow-lg</p>
          <p className="font-display text-5xl font-extrabold text-brand text-shadow-lg text-shadow-brand/40">
            + text-shadow-brand/40
          </p>
        </div>
      </Demo>

      <Demo
        title="mask-b-from-50% (v4.1)"
        note="Composable mask utilities. The bottom half of the block fades to transparent without an overlay element."
        code={`<div className="bg-linear-45 from-brand to-fuchsia-500
                mask-b-from-50%" />`}
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="h-56 rounded-2xl bg-linear-45 from-brand to-fuchsia-500" />
            <p className="mt-2 text-center font-mono text-lg">no mask</p>
          </div>
          <div>
            <div className="h-56 rounded-2xl bg-linear-45 from-brand to-fuchsia-500 mask-b-from-50%" />
            <p className="mt-2 text-center font-mono text-lg font-bold">mask-b-from-50%</p>
          </div>
        </div>
      </Demo>

      <Demo
        title="scrollbar-* (v4.3)"
        note="Maps to the standard scrollbar-width and scrollbar-color properties. scrollbar-color needs both a thumb and a track value."
        code={`<div className="overflow-y-scroll scrollbar-thin
                scrollbar-thumb-sky-700
                scrollbar-track-slate-200">
  …
</div>`}
      >
        <div className="h-56 overflow-y-scroll rounded-xl bg-slate-100 p-4 text-xl scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-slate-200 dark:bg-slate-900 dark:scrollbar-track-slate-800">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="py-1">
              Content line {i + 1}
            </p>
          ))}
        </div>
      </Demo>

      <Demo
        title="Logical properties: pbs-4, mbe-2 (v4.2)"
        note="Block-direction logical spacing. pbs is padding-block-start and mbe is margin-block-end; both follow writing-mode, unlike pt- and mb-."
        code={`<div className="pbs-4 pbe-8 mbe-2">…</div>

/* pbs-4 → padding-block-start: 1rem
   mbe-2 → margin-block-end: 0.5rem  */`}
      >
        <div className="rounded-xl bg-brand/10 ring-2 ring-brand/30">
          <div className="pbs-4 pbe-8 mbe-2 bg-brand/20 px-4">
            <p className="text-xl font-semibold">pbs-4 pbe-8 mbe-2</p>
          </div>
          <p className="px-4 pb-4 text-lg text-slate-600 dark:text-slate-400">
            The gap above this line is <code className="font-mono">mbe-2</code>; the padding
            inside the tinted block is <code className="font-mono">pbs-4</code> /{' '}
            <code className="font-mono">pbe-8</code>.
          </p>
        </div>
      </Demo>

      <Demo
        title="The mauve palette (v4.3)"
        note="4.3 added further neutral ramps. mauve is a warm gray, in contrast to the cooler slate."
        code={`<div className="bg-mauve-100" />
<div className="bg-mauve-500" />
<div className="bg-mauve-900" />

/* --color-mauve-100: oklch(96% 0.003 325.6) */`}
      >
        <div className="space-y-4">
          <div className="rounded-xl bg-mauve-100 p-6 text-xl font-semibold text-mauve-900">
            bg-mauve-100 with text-mauve-900
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['bg-mauve-100', 'bg-mauve-300', 'bg-mauve-500', 'bg-mauve-700', 'bg-mauve-900'].map(
              (c) => (
                <div key={c}>
                  <div className={`${c} h-20 rounded-lg ring-1 ring-black/10`} />
                  <p className="mt-1 text-center font-mono text-sm">{c.replace('bg-mauve-', '')}</p>
                </div>
              ),
            )}
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            <span className="rounded bg-slate-100 px-3 py-1 text-slate-900">slate-100</span>{' '}
            <span className="rounded bg-mauve-100 px-3 py-1 text-slate-900">mauve-100</span>
          </p>
        </div>
      </Demo>
    </Slide>
  )
}
