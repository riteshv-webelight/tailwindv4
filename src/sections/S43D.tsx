import { useState } from "react";
import Demo from "../components/Demo";
import Slide from "../components/Slide";

// Written out in full so Tailwind's scanner sees every class as literal text.
const X = [
  "rotate-x-0",
  "rotate-x-15",
  "rotate-x-30",
  "rotate-x-45",
  "rotate-x-60",
];
const Z = [
  "-rotate-z-30",
  "-rotate-z-15",
  "rotate-z-0",
  "rotate-z-15",
  "rotate-z-30",
];

const BTN =
  "rounded-lg px-4 py-2 font-mono text-lg font-semibold ring-2 ring-slate-300 transition dark:ring-slate-700";
const BTN_ON = "bg-brand text-white ring-brand";

export default function S43D() {
  const [x, setX] = useState("rotate-x-45");
  const [z, setZ] = useState("rotate-z-15");

  return (
    <Slide
      index={4}
      title="3D transforms"
      lede="rotate-x-*, rotate-z-*, translate-z-* and perspective-* are first-class utilities in v4. No arbitrary transform strings."
    >
      <Demo
        title="Rotation on the X and Z axes"
        note="perspective-distant on the parent (1200px), transform-3d on the card so children keep their own depth."
        code={`<div className="perspective-distant">
  <div className="transform-3d ${x} ${z} transition-transform duration-500">
    <div className="translate-z-12">lifted toward the viewer</div>
  </div>
</div>`}
      >
        <div className="perspective-distant flex h-80 items-center justify-center">
          <div
            className={`transform-3d ${x} ${z} h-52 w-80 rounded-3xl bg-linear-to-br from-brand to-sky-400 p-6 shadow-2xl transition-transform duration-500`}
          >
            <p className="font-display text-3xl font-extrabold text-white">
              Tailwind v4
            </p>
            <p className="mt-1 text-lg text-white/80">perspective-distant</p>
            <div className="mt-6 translate-z-12 rounded-xl bg-white/90 px-4 py-3 text-center font-mono text-lg font-bold text-brand-ink shadow-xl">
              translate-z-12
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-28 font-mono text-lg text-slate-500">
              rotate-x
            </span>
            {X.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setX(cls)}
                className={`${BTN} ${x === cls ? BTN_ON : ""}`}
              >
                {cls.replace("rotate-x-", "")}°
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-28 font-mono text-lg text-slate-500">
              rotate-z
            </span>
            {Z.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setZ(cls)}
                className={`${BTN} ${z === cls ? BTN_ON : ""}`}
              >
                {cls.startsWith("-")
                  ? `-${cls.replace("-rotate-z-", "")}`
                  : cls.replace("rotate-z-", "")}
                °
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setX("rotate-x-0");
              setZ("rotate-z-0");
            }}
            className="rounded-lg bg-slate-200 px-5 py-2 text-lg font-semibold dark:bg-slate-800"
          >
            Reset to flat
          </button>
        </div>
      </Demo>
    </Slide>
  );
}
