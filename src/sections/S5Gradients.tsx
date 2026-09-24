import Demo from '../components/Demo'
import Slide from '../components/Slide'

export default function S5Gradients() {
  return (
    <Slide
      index={5}
      title="Gradients"
      lede="Linear gradients take an angle, and radial and conic gradients finally have utilities of their own."
    >
      <Demo
        title="bg-linear-45 — an angle, not a direction"
        note="Any degree value works, the same way any spacing number works."
        code={`<div className="bg-linear-45 from-brand to-sky-400" />
<div className="bg-linear-to-r from-brand to-sky-400" />

/* ⚠️ RENAMED in v4:
   v3: bg-gradient-to-r
   v4: bg-linear-to-r          */`}
      >
        <div className="space-y-4">
          <div>
            <div className="h-32 rounded-2xl bg-linear-45 from-brand to-sky-400" />
            <p className="mt-2 font-mono text-lg font-bold">bg-linear-45 from-brand to-sky-400</p>
          </div>
          <div>
            <div className="h-32 rounded-2xl bg-linear-to-r from-brand to-sky-400" />
            <p className="mt-2 font-mono text-lg font-bold">bg-linear-to-r from-brand to-sky-400</p>
          </div>
          <div>
            <div className="h-32 rounded-2xl bg-linear-120 from-brand via-fuchsia-500 to-amber-300" />
            <p className="mt-2 font-mono text-lg font-bold">bg-linear-120 … via-fuchsia-500 …</p>
          </div>
        </div>
      </Demo>

      <Demo
        title="bg-radial and bg-conic"
        note="Brand new in v4 — in v3 both needed an arbitrary background-image."
        code={`<div className="bg-radial from-brand to-slate-900" />
<div className="bg-conic from-brand via-fuchsia-500 to-brand" />

// v3: bg-[radial-gradient(...)] / bg-[conic-gradient(...)]`}
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="aspect-square rounded-2xl bg-radial from-brand to-slate-900" />
            <p className="mt-2 text-center font-mono text-lg font-bold">bg-radial</p>
          </div>
          <div>
            <div className="aspect-square rounded-2xl bg-conic from-brand via-fuchsia-500 to-brand" />
            <p className="mt-2 text-center font-mono text-lg font-bold">bg-conic</p>
          </div>
        </div>
      </Demo>

      <div className="rounded-2xl border-l-8 border-amber-500 bg-amber-50 p-6 dark:bg-amber-950/40">
        <p className="font-display text-2xl font-bold">Renamed in v4</p>
        <p className="mt-2 text-xl text-slate-700 dark:text-slate-300">
          <code className="font-mono font-bold line-through">bg-gradient-to-r</code> became{' '}
          <code className="font-mono font-bold text-brand dark:text-sky-300">bg-linear-to-r</code>.
          The v3 name still compiles in 4.3.3 as a deprecated alias; the upgrade
          codemod rewrites it.
        </p>
      </div>
    </Slide>
  )
}
