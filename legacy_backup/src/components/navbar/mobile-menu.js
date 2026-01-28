export const initMobileMenu = () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  const links = menu?.querySelectorAll('a');

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    closeBtn?.focus();
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);
  links?.forEach(link => link.addEventListener('click', closeMenu));

  // Accessibilty: Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Focus trap could be added here for stricter a11y, but for this scope managed focus is okay.
};
