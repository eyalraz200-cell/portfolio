/* the nav: 34px of air above the links at the top of the page, 16px (the same
   as below them) once the page has scrolled. On scroll the current link's
   underline becomes the bar's bottom hairline, and the fill's edge rides on it:
   --ul-rest is where the underline sits below the line box (the resting
   bottom padding), --ul-dx / --ul-sx how far to shift and stretch it. */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var cur = nav.querySelector('.nav-link.is-current');
  var measure = function () {
    if (!cur) return;
    var n = nav.getBoundingClientRect(), l = cur.getBoundingClientRect();
    var cs = getComputedStyle(nav), fs = parseFloat(getComputedStyle(cur).fontSize);
    var contentBottom = n.bottom - parseFloat(cs.paddingBottom);
    nav.style.setProperty('--ul-rest', (l.bottom + 0.25 * fs - contentBottom).toFixed(2) + 'px');
    nav.style.setProperty('--ul-dx', (n.left - l.left) + 'px');
    nav.style.setProperty('--ul-sx', (n.width / l.width).toFixed(4));
  };
  /* px of scroll before the bar tightens: the hero fold. 1114 was tuned by eye
     on the desktop; on a phone the hero is one viewport tall, so the fold is
     the viewport height there. */
  var head = document.querySelector('.page--study .page-head');
  var trigger = function () {
    /* case studies: once the page-head text (title, lede, credit, links) has gone by */
    if (head) return head.getBoundingClientRect().bottom + window.scrollY;
    return window.matchMedia('(max-width: 700px)').matches ? window.innerHeight : 1114;
  };
  var on = function () { nav.classList.toggle('is-scrolled', window.scrollY > trigger()); };
  window.addEventListener('scroll', on, { passive: true });
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  measure(); on();
})();
