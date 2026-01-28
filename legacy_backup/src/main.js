import './styles/main.css';
import { initNavbar } from './components/navbar/navbar.js';
import { initMobileMenu } from './components/navbar/mobile-menu.js';
import { initLightbox } from './components/lightbox/lightbox.js';
import { initAnimations } from './utils/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  const updateNav = initNavbar();
  initMobileMenu();
  initLightbox(updateNav);
  
  // Init animations slightly later to ensure layout is ready or immediate
  initAnimations();

  // Dynamic Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
