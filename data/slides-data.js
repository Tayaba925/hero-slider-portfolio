/**
 * Slide data for the hero carousel.
 *
 * This file is intentionally written as a small, self-contained JS module
 * (a global array) rather than loaded via fetch('data/slides.json').
 *
 * Why: browsers block fetch() of local JSON files when a page is opened
 * directly via file:// (CORS). A real deployment (GitHub Pages, Netlify,
 * Vercel, or any backend template engine) would instead serve this from
 * data/slides.json or a database — see data/slides.json in this project
 * for the equivalent data in plain JSON, ready to be wired up to a fetch()
 * call once the site is served over http(s).
 *
 * Each slide object:
 *  - eyebrow:  small label shown above the title (timeline "timecode" style)
 *  - title:    slide heading
 *  - description: 1–2 line summary
 *  - image:    background image URL
 *  - alt:      accessible alt text for the image
 *  - cta:      { label, href } for the call-to-action button
 */

const slidesData = [
  {
    eyebrow: "REEL 01",
    title: "Web Development",
    description: "Fast, responsive websites and WordPress builds with clean, maintainable code from start to launch.",
    image: "https://picsum.photos/seed/devdesk/1600/900",
    alt: "Laptop on a desk showing lines of code in an editor",
    cta: { label: "View web projects", href: "#work" }
  },
  {
    eyebrow: "REEL 02",
    title: "Video Editing & Motion",
    description: "Premiere Pro and After Effects edits — trailers, social cuts, and motion graphics that hold attention.",
    image: "https://picsum.photos/seed/videoedit/1600/900",
    alt: "Video editing timeline with multiple tracks on a monitor",
    cta: { label: "Watch the reel", href: "#work" }
  },
  {
    eyebrow: "REEL 03",
    title: "Backend & Database Builds",
    description: "SQL-driven backends and structured data systems that keep products running smoothly behind the scenes.",
    image: "https://picsum.photos/seed/serverroom/1600/900",
    alt: "Rows of server hardware in a data center",
    cta: { label: "See backend work", href: "#work" }
  },
  {
    eyebrow: "REEL 04",
    title: "AI Engineering — In Progress",
    description: "Currently leveling up through a backend AI engineering program, bringing automation into future projects.",
    image: "https://picsum.photos/seed/aitraining/1600/900",
    alt: "Abstract visualization of an AI neural network",
    cta: { label: "Get in touch", href: "#contact" }
  }
];
