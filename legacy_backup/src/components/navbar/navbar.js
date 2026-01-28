export const initNavbar = () => {
  const navbar = document.querySelector('.navbar');
  const logo = navbar?.querySelector('.brand img');
  
  if (!navbar) return;

  const updateNavbar = () => {
    const isScrolled = window.scrollY > 20 || document.body.classList.contains('no-scroll');
    navbar.classList.toggle('scrolled', isScrolled);
    
    // Logo switching if needed (based on data attributes)
    if (logo) {
      const lightSrc = logo.dataset.logoLight;
      const darkSrc = logo.dataset.logoDark;
      if (lightSrc && darkSrc) {
        logo.src = isScrolled ? darkSrc : lightSrc;
      }
    }
  };

  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Init check
  
  // Expose update for other components (like lightbox) to force update
  return updateNavbar;
};
