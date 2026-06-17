/**
 * Hero slider
 * - Renders slides from slidesData (data/slides-data.js)
 * - Auto-rotates every 5s (paused on hover/focus)
 * - Prev/next arrows + clickable timeline ticks
 * - Keyboard support (Left/Right arrows while the hero has focus)
 * - Updates an aria-live region for screen readers
 */

(function () {
  const AUTOPLAY_MS = 5000;

  const hero = document.getElementById("hero");
  const track = document.getElementById("heroTrack");
  const ticksWrap = document.getElementById("heroTicks");
  const progress = document.getElementById("heroProgress");
  const liveRegion = document.getElementById("heroLiveRegion");
  const prevBtn = document.getElementById("heroPrev");
  const nextBtn = document.getElementById("heroNext");

  let currentIndex = 0;
  let autoplayTimer = null;
  let isPaused = false;

  /* ---------- Build slides & ticks from data ---------- */
  function buildSlides(data) {
    data.forEach((slide, i) => {
      const article = document.createElement("article");
      article.className = "hero__slide";
      article.setAttribute("aria-hidden", "true");
      article.setAttribute("role", "group");
      article.setAttribute("aria-roledescription", "slide");
      article.setAttribute("aria-label", `${i + 1} of ${data.length}`);

      article.innerHTML = `
        <img class="hero__image" src="${slide.image}" alt="${slide.alt}" loading="${i === 0 ? "eager" : "lazy"}">
        <div class="hero__overlay"></div>
        <div class="hero__content">
          <p class="hero__eyebrow">${slide.eyebrow} / ${String(data.length).padStart(2, "0")}</p>
          <h2 class="hero__title">${slide.title}</h2>
          <p class="hero__description">${slide.description}</p>
          <a class="btn btn--primary hero__cta" href="${slide.cta.href}">${slide.cta.label}</a>
        </div>
      `;

      track.appendChild(article);

      // Timeline tick
      const tick = document.createElement("button");
      tick.className = "hero__tick";
      tick.type = "button";
      tick.setAttribute("aria-label", `Go to slide ${i + 1}: ${slide.title}`);
      tick.dataset.index = i;
      tick.innerHTML = `
        <span class="hero__tick-mark"></span>
        <span class="hero__tick-label">${String(i + 1).padStart(2, "0")}</span>
      `;
      tick.addEventListener("click", () => goToSlide(i, true));
      ticksWrap.appendChild(tick);
    });
  }

  /* ---------- Render active state ---------- */
  function render() {
    const slides = track.querySelectorAll(".hero__slide");
    const ticks = ticksWrap.querySelectorAll(".hero__tick");

    slides.forEach((slide, i) => {
      const active = i === currentIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
    });

    ticks.forEach((tick, i) => {
      tick.classList.toggle("is-active", i === currentIndex);
    });

    const activeSlide = slides[currentIndex];
    const title = activeSlide.querySelector(".hero__title").textContent;
    liveRegion.textContent = `Slide ${currentIndex + 1} of ${slides.length}: ${title}`;
  }

  /* ---------- Navigation ---------- */
  function goToSlide(index, userInitiated) {
    const slides = track.querySelectorAll(".hero__slide");
    currentIndex = (index + slides.length) % slides.length;
    render();
    restartAutoplay(userInitiated);
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1, true);
  }

  /* ---------- Autoplay / progress bar ---------- */
  function startProgress() {
    progress.classList.remove("is-animating");
    progress.style.width = "0%";
    // Force reflow so the browser registers the reset before re-adding
    // the animating class (otherwise the transition won't replay).
    void progress.offsetWidth;
    progress.classList.add("is-animating");
  }

  function restartAutoplay(userInitiated) {
    clearTimeout(autoplayTimer);
    startProgress();
    if (!isPaused) {
      autoplayTimer = setTimeout(nextSlide, AUTOPLAY_MS);
    }
    if (userInitiated) {
      // Brief pause/resume keeps user-driven navigation feeling responsive.
    }
  }

  function pauseAutoplay() {
    isPaused = true;
    clearTimeout(autoplayTimer);
    progress.classList.remove("is-animating");
  }

  function resumeAutoplay() {
    if (!isPaused) return;
    isPaused = false;
    restartAutoplay();
  }

  /* ---------- Event wiring ---------- */
  function init() {
    if (!Array.isArray(slidesData) || slidesData.length === 0) return;

    buildSlides(slidesData);
    render();
    restartAutoplay();

    nextBtn.addEventListener("click", () => nextSlide());
    prevBtn.addEventListener("click", () => prevSlide());

    // Pause on hover / keyboard focus, resume on leave / blur
    hero.addEventListener("mouseenter", pauseAutoplay);
    hero.addEventListener("mouseleave", resumeAutoplay);
    hero.addEventListener("focusin", pauseAutoplay);
    hero.addEventListener("focusout", resumeAutoplay);

    // Keyboard navigation
    hero.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
