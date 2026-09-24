import { useState } from "react";
import Demo from "../components/Demo";
import Slide from "../components/Slide";

const SLIDER = "w-full accent-brand h-3 cursor-pointer";

// Same hue + chroma as --color-brand; only L moves.
const RAMP = [30, 40, 50, 60, 70, 80, 90];

export default function S1Oklch() {
  const [l, setL] = useState(62);
  const [c, setC] = useState(0.2);
  const [h, setH] = useState(260);

  const value = `oklch(${l}% ${c.toFixed(3)} ${h})`;

  return (
    <Slide
      index={1}
      title="OKLCH colors"
      lede="v4's default palette is OKLCH, not hex. Perceptual lightness is its own axis — so one number makes a tint or a shade."
    >
      <Demo
        title="The palette is already OKLCH"
        note="The default color palette ships as oklch() values rather than hex."
        code={`<div className="size-40 rounded-2xl bg-blue-500" />

/* what Tailwind v4 actually defines: */
/* --color-blue-500: oklch(62.3% 0.214 259.815); */`}
      >
        <div className="flex items-center gap-8">
          <div className="size-40 shrink-0 rounded-2xl bg-blue-500 shadow-lg" />
          <div>
            <p className="text-2xl font-semibold">bg-blue-500</p>
            <p className="mt-2 font-mono text-xl text-slate-600 dark:text-slate-400">
              oklch(62.3% 0.214 259.815)
            </p>
            <p className="mt-3 text-lg text-slate-500">
              L = lightness · C = chroma · H = hue
            </p>
          </div>
        </div>
      </Demo>

      <Demo
        title="The three OKLCH channels"
        note="Each channel maps to one slider. At chroma 0 the result is a neutral gray of the same lightness."
        code={`const value = \`oklch(\${l}% \${c} \${h})\`

<div style={{ backgroundColor: value }} className="size-48 rounded-2xl" />`}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div
            style={{ backgroundColor: value }}
            className="size-48 shrink-0 rounded-2xl shadow-lg ring-1 ring-black/10"
          />
          <div className="w-full space-y-5">
            <label className="block">
              <span className="flex justify-between font-mono text-lg">
                <span>Lightness</span>
                <span className="font-bold tabular-nums">{l}%</span>
              </span>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={l}
                onChange={(e) => setL(+e.target.value)}
                className={SLIDER}
              />
            </label>
            <label className="block">
              <span className="flex justify-between font-mono text-lg">
                <span>Chroma</span>
                <span className="font-bold tabular-nums">{c.toFixed(3)}</span>
              </span>
              <input
                type="range"
                min={0}
                max={0.37}
                step={0.005}
                value={c}
                onChange={(e) => setC(+e.target.value)}
                className={SLIDER}
              />
            </label>
            <label className="block">
              <span className="flex justify-between font-mono text-lg">
                <span>Hue</span>
                <span className="font-bold tabular-nums">{h}</span>
              </span>
              <input
                type="range"
                min={0}
                max={360}
                step={1}
                value={h}
                onChange={(e) => setH(+e.target.value)}
                className={SLIDER}
              />
            </label>
            <p className="rounded-xl bg-slate-100 px-4 py-3 font-mono text-xl font-bold dark:bg-slate-800">
              {value}
            </p>
          </div>
        </div>
      </Demo>

      <Demo
        title="One brand color, seven steps"
        note="All seven swatches share the brand hue and chroma. Only lightness varies."
        code={`/* index.css */
@theme {
  --color-brand: oklch(62% 0.2 260);
}

{[30, 40, 50, 60, 70, 80, 90].map((L) => (
  <div key={L} style={{ backgroundColor: \`oklch(\${L}% 0.2 260)\` }} />
))}`}
        codeTitle="index.css + App.tsx"
      >
        <div className="grid grid-cols-7 gap-2">
          {RAMP.map((step) => (
            <div key={step} className="text-center">
              <div
                style={{ backgroundColor: `oklch(${step}% 0.2 260)` }}
                className="h-28 rounded-xl ring-1 ring-black/10"
              />
              <p className="mt-2 font-mono text-base font-semibold">{step}%</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-xl bg-brand/10 px-4 py-3 text-lg text-brand-ink dark:text-brand">
          The middle swatch (62%) is <code className="font-bold">bg-brand</code>{" "}
          itself.
        </p>
      </Demo>
    </Slide>
  );
}
