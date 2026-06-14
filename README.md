# snippet-library

Copy-paste **CSS**, **JavaScript**, **HTML**, and **React** snippets. Neutral dark defaults; swap themes or override `:root` for your palette. No build step.

[![License: MIT](https://img.shields.io/badge/License-MIT-ccff00?style=flat-square)](LICENSE)
[![Layout demo](https://img.shields.io/badge/demo-layout-ccff00?style=flat-square)](examples/layout.html)
[![Starter](https://img.shields.io/badge/starter-pure_react_19-ccff00?style=flat-square)](https://github.com/briancrabtree-me/pure-react-19-vanilla-starter)
[![Tokens](https://img.shields.io/badge/css-vanilla_css_tokens-ccff00?style=flat-square)](https://github.com/briancrabtree-me/vanilla-css-tokens)
[![Store](https://img.shields.io/badge/store-react_pubsub_store-ccff00?style=flat-square)](https://github.com/briancrabtree-me/react-pubsub-store)

**[Catalog](examples/index.html)** · **[Layout demo](examples/layout.html)** · **[vanilla-css-tokens](https://github.com/briancrabtree-me/vanilla-css-tokens)** · **[pure-react-19-vanilla-starter](https://github.com/briancrabtree-me/pure-react-19-vanilla-starter)**

---

## Use

Copy a file into your project, or load CSS from jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/briancrabtree-me/snippet-library@main/css/tokens.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/briancrabtree-me/snippet-library@main/css/layout.css" />
<!-- Optional theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/briancrabtree-me/snippet-library@main/css/themes/acid-dark.css" />
```

Open demos in a browser (not GitHub blob preview): [`examples/index.html`](examples/index.html) · [`examples/layout.html`](examples/layout.html).

---

## Catalog

| Path | What it does | Use |
|------|----------------|-----|
| `css/tokens.css` | Spacing, type, color tokens (neutral dark default) | `@import` or `<link>` first |
| `css/layout.css` | `.ui-header`, `.ui-nav`, `.ui-main`, `.ui-card`, `.ui-footer`, etc. | After `tokens.css` |
| `css/themes/neutral-light.css` | Light palette overrides | Optional second theme file |
| `css/themes/neutral-dark.css` | Dark palette (matches default) | Optional |
| `css/themes/acid-dark.css` | Acid accent preset | Optional; see [vanilla-css-tokens](https://github.com/briancrabtree-me/vanilla-css-tokens) |
| `js/dom-ready.js` | Run code when DOM is ready | `import { domReady } from './dom-ready.js'` |
| `js/copy-to-clipboard.js` | Copy text + status for a11y | `import { copyToClipboard } from './copy-to-clipboard.js'` |
| `html/skip-link.html` | Skip-to-main link + focus styles | Paste after `<body>` |
| `html/meta-basics.html` | charset, viewport, theme-color | Paste into `<head>` |
| `react/IdleMount.tsx` | Defer children until idle | Wrap below-fold UI |
| `react/VisuallyHidden.tsx` | Screen-reader-only span | Icon buttons, labels |

Full store + hooks: [react-pubsub-store](https://github.com/briancrabtree-me/react-pubsub-store).

---

## Customize colors

1. Edit `:root` in your own CSS after importing `tokens.css`, or  
2. Load one of `css/themes/*.css`, or  
3. Copy token values from [vanilla-css-tokens](https://github.com/briancrabtree-me/vanilla-css-tokens) for the acid kit.

Spacing and layout tokens stay the same across themes.

---

## Related

- [vanilla-css-tokens](https://github.com/briancrabtree-me/vanilla-css-tokens) — acid-on-dark tokens + `ui.css` (fixed layout demo)
- [react-pubsub-store](https://github.com/briancrabtree-me/react-pubsub-store) — external store via `useSyncExternalStore`
- [pure-react-19-vanilla-starter](https://github.com/briancrabtree-me/pure-react-19-vanilla-starter) — React 19 performance demo

## License

MIT — [LICENSE](LICENSE).
