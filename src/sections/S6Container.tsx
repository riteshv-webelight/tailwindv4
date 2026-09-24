import Demo from '../components/Demo'
import Slide from '../components/Slide'

/** One component. Its layout depends on its own width, never on the viewport. */
function StatsCard() {
  return (
    <div className="@container rounded-2xl bg-white p-5 ring-2 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
      <div className="@max-md:flex-col @max-md:items-start flex items-center justify-between gap-3">
        <h4 className="font-display text-2xl font-bold">Deploys</h4>
        <span className="rounded-full bg-brand/15 px-3 py-1 font-mono text-base font-semibold text-brand-ink dark:text-brand">
          last 7 days
        </span>
      </div>

      <div className="@sm:grid-cols-3 mt-4 grid grid-cols-1 gap-3">
        {[
          ['128', 'shipped'],
          ['3', 'rolled back'],
          ['99.2%', 'success'],
        ].map(([n, label]) => (
          <div key={label} className="rounded-xl bg-slate-100 p-4 dark:bg-slate-900">
            <p className="font-display text-3xl font-extrabold text-brand">{n}</p>
            <p className="text-base text-slate-600 dark:text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function S6Container() {
  return (
    <Slide
      index={6}
      title="Container queries"
      lede="Built in — no plugin. @container marks the parent, @sm:/@max-md: respond to that parent's width instead of the screen's."
    >
      <Demo
        title="The same component, two widths"
        note="Nothing about the card changes between these two. Only the box around it does."
        code={`<div className="@container">
  <div className="@max-md:flex-col flex items-center">…</div>
  <div className="@sm:grid-cols-3 grid grid-cols-1">…</div>
</div>

// @sm = container is ≥ 24rem
// @max-md = container is < 28rem`}
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 font-mono text-lg text-slate-500">narrow parent — w-80</p>
            <div className="w-80">
              <StatsCard />
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-lg text-slate-500">wide parent — w-full</p>
            <div className="w-full">
              <StatsCard />
            </div>
          </div>
        </div>
      </Demo>

      <Demo
        title="A resizable parent"
        note="resize-x makes the wrapper's width adjustable. The card responds to that width; the viewport is unchanged throughout."
        code={`<div className="resize-x overflow-auto w-136
                min-w-64 max-w-full
                border-4 border-dashed border-brand/40">
  <StatsCard />   {/* unchanged */}
</div>

/* resize-x → resize: horizontal */`}
      >
        <div className="w-136 min-w-64 max-w-full resize-x overflow-auto rounded-2xl bg-brand/10 p-4 border-4 border-dashed border-brand/40">
          <StatsCard />
        </div>
        <dl className="mt-4 space-y-2 text-lg text-slate-600 dark:text-slate-400">
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 font-mono font-bold">≥ 28rem</dt>
            <dd>header lays out as a row — @max-md no longer matches</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 font-mono font-bold">≥ 24rem</dt>
            <dd>stats span three columns — @sm matches</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 font-mono font-bold">&lt; 24rem</dt>
            <dd>stats collapse to a single column</dd>
          </div>
        </dl>
        <p className="mt-3 text-lg text-slate-500">
          Thresholds are measured against the container's content box.
        </p>
      </Demo>
    </Slide>
  )
}
