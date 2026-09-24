import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

type Props = {
  code: string
  language?: string
  /** Optional caption above the code, e.g. "App.tsx" or "index.css". */
  title?: string
}

export default function CodeBox({ code, language = 'jsx', title }: Props) {
  const [copied, setCopied] = useState(false)
  const source = code.trim()

  async function copy() {
    try {
      await navigator.clipboard.writeText(source)
    } catch {
      // Clipboard API needs a secure context; fall back to a temp textarea.
      const ta = document.createElement('textarea')
      ta.value = source
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl ring-2 ring-slate-800 dark:ring-slate-700">
      <div className="flex items-center justify-between gap-4 bg-slate-800 px-5 py-3">
        <span className="font-mono text-base tracking-wide text-slate-300">
          {title ?? language}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-lg bg-slate-700 px-4 py-2 text-base font-semibold text-slate-100
                     transition hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-brand active:scale-95"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <Highlight theme={themes.nightOwl} code={source} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className="overflow-x-auto p-5 text-[15px]/relaxed sm:text-base/relaxed"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, k) => (
                  <span key={k} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
