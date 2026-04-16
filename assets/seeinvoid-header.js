/**
 * SEEINVOID — Header scroll behavior
 *
 * Adds [data-void-scrolled] to #header-component when the page is
 * scrolled past SCROLL_THRESHOLD px.  CSS in sections/header.liquid
 * uses this attribute to:
 *   - fade the background from transparent → rgba(11,11,11,0.97)
 *   - reveal the logo with a slide-down animation
 *   - show the 1px bottom border
 */
(function () {
  const header = document.getElementById('header-component');
  if (!header) return;

  const SCROLL_THRESHOLD = 80;
  let ticking = false;

  function update() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.setAttribute('data-void-scrolled', '');
    } else {
      header.removeAttribute('data-void-scrolled');
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Run once immediately in case the page loads already scrolled
  update();

  window.addEventListener('scroll', onScroll, { passive: true });
})();
