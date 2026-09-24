# Speaker notes

Presenter-only. **Not imported or rendered by the app** — nothing here appears on screen.
The UI itself is deliberately neutral, so every "click this / say this" cue lives in this file.

```
npm run dev     # http://localhost:5173
```

Sidebar switches sections; **← / →** also work (suppressed while typing in section 7's inputs).
Each demo block is live result on the left, source on the right, with a Copy button.

---

## 1 · OKLCH colors
- **Click:** drag **Chroma to 0** — the swatch drains to gray with L and H untouched. Then drag **Hue** across the full range at the same L.
- **Then:** point at the seven-swatch ramp.
- **Say:** the palette ships as `oklch()` now. Lightness is a real perceptual axis, so one number gives you the tint or shade — you're not hand-picking a new hex per step.

## 2 · color-mix() opacity
- **Click:** right-click any `/50` swatch → **Inspect**. The Styles pane shows the literal `color-mix(in oklab, var(--color-brand) 50%, transparent)`.
- **Say:** v3 needed an `--tw-bg-opacity` variable and an rgb() channel to interpolate. v4 emits real `color-mix()`, which is why `/50` works on `bg-(--my-color)` — a color Tailwind has never seen.
- The on-screen "Generated CSS" panel has the same declaration if the projector makes DevTools unreadable.

## 3 · Dynamic values
- **Click:** the rows in the `data-current` list.
- **Say:** `grid-cols-15`, `w-17` and `data-current:` all work with no config file, no safelist, no square brackets. The v3 equivalents are in the code boxes as comments.

## 4 · 3D transforms
- **Click:** **rotate-x 60°**, then **rotate-z -30°**, then **Reset to flat**.
- **Then:** scroll to the `backface-hidden` pair.
- **Say:** first-class utilities, not arbitrary transform strings.

## 5 · Gradients
- **Click:** scroll to `bg-radial` / `bg-conic`, then land on the "Renamed in v4" panel.
- **Say:** `bg-gradient-to-r` → `bg-linear-to-r`. The old name still compiles in 4.3.3 as a deprecated alias, so nothing breaks loudly — the upgrade codemod rewrites it for you. Verified: 4.3.3 emits `.bg-gradient-to-r` with `--tw-gradient-position: to right in oklab`.

## 6 · Container queries
- **Click:** grab the corner handle on the dashed box and drag **both directions**.
  - It starts between the thresholds: header stacked, stats at three columns.
  - Pull **right** past 28rem → the header un-stacks.
  - Pull **left** past 24rem → the stats collapse to one column.
- **Say:** the browser window never changed. Also worth knowing if someone asks: the thresholds measure the container's *content* box, which is why the numbers look ~40px off the wrapper width.

## 7 · Everyday utilities
- **Click:** **popover button twice** (the entry fade is `starting:open:`), type a few lines into the **textarea**, then hit the **"Dark: add dark scheme-dark"** button.
- **Then:** point at the **scrollbar** and the **date picker**, not the page colors.
- **Say:** `dark` switched the palette you authored; `scheme-dark` is what repainted the user-agent UI — you can't reach those from author styles.

## 8 · v4.1 → v4.3
- **Click:** scroll the `scrollbar-thin` box; put slate-100 and mauve-100 side by side.
- **Say:** all six verified against the installed 4.3.3 — the availability panel at the top is real, not decorative.

---

## If asked

- **Config files:** there are none. `@tailwindcss/vite` only; no `tailwind.config.js`, no `postcss.config.js`.
- **Theme:** `--color-brand: oklch(62% 0.2 260)` and `--font-display` are in `src/index.css` under `@theme`.
- **Dark toggle:** `dark:` is re-pointed at a class via `@custom-variant`, since v4 defaults it to `prefers-color-scheme`.
- **`ring-dashed` doesn't exist** — rings are box-shadows, so they can't be dashed. Section 6 uses `border-dashed`. Good answer if someone asks why.
- **Font:** Outfit loads from Google Fonts. On bad venue wifi it falls back to the system stack; everything else is local.
