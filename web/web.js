(() => {
  document.documentElement.classList.add('js-reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      if (el.hasAttribute('data-stagger')) {
        [...el.children].forEach((child, i) => {
          child.style.transitionDelay = `${i * 90}ms`;
        });
      }
      observer.unobserve(el);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  if (!reduce) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, [data-stagger], [data-flow], .web-cta').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, [data-stagger], [data-flow], .web-cta, .hero-anim').forEach(el => el.classList.add('is-visible'));
  }
})();
