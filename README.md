# Tayaba — Portfolio Home Page with Hero Slider

A single-page home page built with **vanilla HTML, CSS, and JavaScript** —
no frameworks or libraries required. The centerpiece is a fully custom,
accessible hero carousel that showcases featured services/projects.

## Live Demo

> Replace this with your deployed link after publishing (GitHub Pages,
> Netlify, or Vercel — see "Deploying" below).

## Project Structure

```
hero-slider/
├── index.html          # Page markup (header, hero slider, services, contact, footer)
├── css/
│   └── style.css       # All styling, design tokens, responsive rules
├── js/
│   └── script.js       # Slider logic (autoplay, nav, accessibility)
├── data/
│   ├── slides-data.js  # Slide content as a JS array (used by script.js)
│   └── slides.json      # Same content in plain JSON (for backend/db use)
└── README.md
```

## Design Choices

The visual identity blends Tayaba's two crafts — **web development** and
**video editing**:

- **Palette** — graphite/charcoal surfaces (`#12151A`, `#1B1F26`) with warm
  off-white text (`#F2EFE9`), an amber "render" accent (`#FF7A45`) for
  primary actions, and a teal "active state" accent (`#4FD1C5`) borrowed
  from code-editor syntax highlighting.
- **Type** — Space Grotesk for headings (a confident, geometric display
  face), Inter for body copy, and IBM Plex Mono for small labels —
  evoking timecodes and code comments.
- **Signature element** — the slider's bottom bar is styled as a **video
  editor's timeline scrubber**. It doubles as both the autoplay progress
  indicator (fills up over 5 seconds) and the slide picker (click any
  tick to jump to that slide).

## Hero Slider Features

- ✅ Full-width, auto-rotating carousel (every 5 seconds)
- ✅ Image, eyebrow label, title, 1–2 line description, and CTA per slide
- ✅ Previous / next arrow controls
- ✅ Clickable timeline ticks act as slide indicators
- ✅ Smooth fade/cross-dissolve between slides + staggered text entrance
- ✅ Subtle parallax/zoom on the active slide's image
- ✅ Hover effects on buttons and arrows (lift + scale + color shift)
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Pauses autoplay on hover/keyboard focus, resumes on exit
- ✅ Keyboard navigation: **Left/Right arrow keys** move slides when the
  hero is focused (tab to it, or click into it)
- ✅ `aria-live` region announces the active slide for screen readers
- ✅ Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, one
  page `<h1>`, slide `<h2>`s) and descriptive `alt` text on all images
- ✅ Respects `prefers-reduced-motion`

## Dynamic Content

Slide content (title, image, description, link) lives in
`data/slides-data.js` as a plain JS array, and `script.js` builds the DOM
for each slide and timeline tick on page load — add, remove, or reorder
slides by editing that one array.

`data/slides.json` contains the same content as plain JSON. It's provided
for teams that want to load slides from a backend/database instead: once
the site is served over `http(s)` (not opened directly as a `file://`
page), swap the `<script src="data/slides-data.js">` tag for a `fetch`
call, e.g.:

```js
const res = await fetch("data/slides.json");
const slidesData = await res.json();
```

## Running Locally

Just open `index.html` in a browser — it works with no build step.

For the JSON/fetch version above, run a tiny local server instead (to
avoid `file://` CORS restrictions):

```bash
npx serve .
# or
python3 -m http.server
```

## Deploying

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. In the repo, go to *Settings → Pages*, choose the `main` branch and
   root folder, and save.

**Netlify / Vercel**
1. Drag-and-drop this folder into the Netlify "Sites" dashboard, or run
   `vercel` / `netlify deploy` from inside this folder.
2. No build command or output directory is needed — it's a static site.

## Notes

- Placeholder images are served from `picsum.photos`. Replace the `image`
  URLs in `data/slides-data.js` (and `data/slides.json`) with your own
  project screenshots, video thumbnails, or photography.
- Update the email address in the "Get in touch" button and the LinkedIn
  / GitHub links in the footer.
