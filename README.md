# Hero Slider – Portfolio Home Page

Live demo: [add your link here]

---

## What I built

A responsive portfolio home page with a custom hero slider. I kept it vanilla — no Bootstrap, no Swiper.js, just plain HTML, CSS, and JavaScript. I wanted full control over how everything looked and behaved, and I felt using a library would hide too much of the logic.

---

## Folder structure

```
hero-slider/
├── index.html
├── css/style.css
├── js/script.js
├── data/slides-data.js
└── data/slides.json
```

---

## Why I made certain decisions

**No framework.** I built the slider from scratch using vanilla JS. It was more work but I learned a lot about DOM manipulation, timing functions, and CSS transitions in the process.

**Slide data is separated from the HTML.** All slide content (title, image, description, link) sits in `data/slides-data.js` as a JS array. The script reads it and builds the slides dynamically. This way you can add or remove slides without touching the HTML at all. I also included `slides.json` in case someone wants to load the data from a backend instead.

**The timeline bar.** Since I do video editing, I styled the slide indicator as a timeline scrubber — it fills up as the autoplay counts down and you can click any tick to jump to that slide. It felt more interesting than plain dots.

**Dark color scheme.** I picked dark graphite backgrounds with an amber accent. It reads well on screens and matches the kind of professional/creative work I want to show.

---

## Features

- Auto-rotates every 5 seconds, pauses when you hover or tab into it
- Prev/next arrows for manual control
- Timeline ticks at the bottom work as clickable slide indicators
- Smooth fade transition between slides, text animates in with a stagger
- Images have a subtle slow zoom while active (parallax effect)
- Fully responsive — tested on desktop, tablet, and mobile sizes
- Keyboard navigation works: focus the slider and use Left/Right arrow keys
- Screen reader friendly: aria-live region announces each slide change
- Respects prefers-reduced-motion for users who have that setting on

---

## How to run it

Open `index.html` directly in a browser — no build step or server needed.

---

## Technologies used

- HTML5 (semantic elements throughout)
- CSS3 (custom properties, transitions, media queries)
- JavaScript (vanilla, no dependencies)