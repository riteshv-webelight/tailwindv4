import { useEffect, useState } from 'react'
import Demo from '../components/Demo'
import Slide from '../components/Slide'

export default function S7Utilities() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.classList.toggle('scheme-dark', dark)
  }, [dark])

  return (
    <Slide
      index={7}
      title="Small everyday utilities"
      lede="Smaller additions that replace patterns previously written by hand in custom CSS or JavaScript."
    >
      <Demo
        title="not-last:border-b"
        note="The not-* variant negates another variant, removing the need for a last:border-0 override."
        code={`<ul>
  {rows.map((r) => (
    <li className="not-last:border-b border-slate-300 py-4">
      {r}
    </li>
  ))}
</ul>`}
      >
        <ul>
          {['Theme variables', 'Container queries', 'Native cascade layers', 'Zero config'].map(
            (r) => (
              <li
                key={r}
                className="not-last:border-b border-slate-300 py-4 text-2xl dark:border-slate-700"
              >
                {r}
              </li>
            ),
          )}
        </ul>
        <p className="mt-3 text-lg text-slate-500">
          The last row has no bottom border — nothing had to undo it.
        </p>
      </Demo>

      <Demo
        title="in-focus:font-bold"
        note="in-* applies to a descendant when any ancestor matches. Here the parent carries tabindex and the children carry the style."
        code={`<div tabIndex={0} className="...">
  <p className="in-focus:font-bold in-focus:text-brand">
    Bold while an ancestor has focus
  </p>
</div>`}
      >
        <div
          tabIndex={0}
          className="cursor-pointer rounded-2xl border-4 border-dashed border-slate-300 p-6 outline-none focus:border-brand dark:border-slate-700"
        >
          <p className="font-mono text-lg text-slate-500">
            parent — tabindex=&quot;0&quot;
          </p>
          <p className="mt-3 text-2xl in-focus:font-bold in-focus:text-brand">
            First child — in-focus:font-bold
          </p>
          <p className="mt-1 text-2xl in-focus:font-bold in-focus:text-brand">
            Second child — in-focus:font-bold
          </p>
        </div>
      </Demo>

      <Demo
        title="Popover with a starting:open: transition"
        note="@starting-style supplies the initial value for an entry transition, which is otherwise impossible from display: none."
        code={`<button popoverTarget="tw-tip">Show popover</button>

<div id="tw-tip" popover="auto"
  className="opacity-0 open:opacity-100
             starting:open:opacity-0
             transition-all transition-discrete duration-300">
  …
</div>`}
      >
        <button
          type="button"
          popoverTarget="tw-tip"
          className="rounded-xl bg-brand px-6 py-4 text-xl font-bold text-white transition hover:brightness-110"
        >
          Show popover
        </button>
        <div
          id="tw-tip"
          popover="auto"
          className="m-auto max-w-lg rounded-2xl bg-slate-900 p-8 text-xl text-slate-100 opacity-0 shadow-2xl
                     transition-all transition-discrete duration-300
                     open:opacity-100 starting:open:opacity-0 backdrop:bg-black/50"
        >
          <p className="font-display text-2xl font-bold">Native popover</p>
          <p className="mt-2 text-slate-300">
            Dismissed with <kbd className="font-mono">Esc</kbd> or a click outside. The
            entry fade comes from{' '}
            <code className="font-mono">starting:open:opacity-0</code> paired with{' '}
            <code className="font-mono">transition-discrete</code>.
          </p>
        </div>
        <p className="mt-4 text-lg text-slate-500">
          Without the starting-style rule the element would appear at full opacity.
        </p>
      </Demo>

      <Demo
        title="field-sizing-content"
        note="The textarea sizes itself to its content, replacing the usual scrollHeight measurement in JavaScript."
        code={`<textarea
  className="field-sizing-content min-h-20 w-full
             rounded-xl p-4"
  defaultValue="Sized to its content."
/>`}
      >
        <textarea
          className="field-sizing-content min-h-20 w-full resize-none rounded-xl bg-slate-100 p-4 text-xl outline-none ring-2 ring-slate-300 focus:ring-brand dark:bg-slate-900 dark:ring-slate-700"
          defaultValue="This textarea has no fixed row count. Its height follows the content it holds, with a min-h-20 floor."
        />
        <p className="mt-3 text-lg text-slate-500">No JavaScript involved.</p>
      </Demo>

      <Demo
        title="inset-shadow-sm and inset-ring-2"
        note="Inner shadows and inner rings, both new in v4. They compose with the regular shadow/ring on the same element."
        code={`<input
  className="inset-shadow-sm inset-ring-2
             inset-ring-slate-300 rounded-xl px-5 py-4"
/>`}
      >
        <input
          type="text"
          placeholder="An input that looks inset…"
          className="w-full rounded-xl bg-slate-50 px-5 py-4 text-xl inset-shadow-sm inset-ring-2 inset-ring-slate-300 outline-none focus:inset-ring-brand dark:bg-slate-900 dark:inset-ring-slate-700"
        />
        <p className="mt-3 text-lg text-slate-500">
          On focus the <code className="font-mono">inset-ring</code> color changes; no
          outline is drawn.
        </p>
      </Demo>

      <Demo
        title="dark and scheme-dark on the root element"
        note="dark switches the authored palette. scheme-dark sets color-scheme, which repaints scrollbars, checkboxes and date pickers."
        code={`// @custom-variant dark (&:where(.dark, .dark *));

const root = document.documentElement
root.classList.toggle('dark', on)
root.classList.toggle('scheme-dark', on)`}
        codeTitle="index.css + toggle"
      >
        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          className="rounded-xl bg-slate-900 px-6 py-4 text-xl font-bold text-white dark:bg-white dark:text-slate-900"
        >
          {dark ? 'Light: remove dark scheme-dark' : 'Dark: add dark scheme-dark'}
        </button>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="h-40 overflow-y-scroll rounded-xl bg-slate-100 p-4 text-lg dark:bg-slate-900">
            <p className="font-bold">Scrollable region</p>
            {Array.from({ length: 12 }, (_, i) => (
              <p key={i}>content line {i + 1}</p>
            ))}
          </div>
          <div className="space-y-3 rounded-xl bg-slate-100 p-4 dark:bg-slate-900">
            <p className="font-bold">Native controls</p>
            <input type="checkbox" defaultChecked className="size-6" />{' '}
            <input type="range" className="w-full" />
            <input type="date" className="w-full rounded p-2 text-lg" />
          </div>
        </div>
        <p className="mt-4 text-lg text-slate-500">
          The scrollbar and the date picker are repainted by{' '}
          <code className="font-mono">scheme-dark</code> — they are user-agent UI and are
          not reachable from author styles.
        </p>
      </Demo>
    </Slide>
  )
}
