(() => {
  const header = document.getElementById('siteHeader');
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 36);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  menuButton?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));
})();
