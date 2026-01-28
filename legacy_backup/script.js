// ===============================================
// NAVBAR APPEARANCE (color, fondo, logo)
// ===============================================
const initNavbarAppearance = () => {
  const navbar = document.querySelector('.navbar');
  const logoImg = navbar?.querySelector('.brand img');
  if (!navbar) return null;

  const updateNavbarState = () => {
    const shouldBeSolid =
      window.scrollY > 12 ||
      document.body.classList.contains('no-scroll') ||
      document.body.classList.contains('lightbox-open') ||
      navbar.classList.contains('force-scrolled');

    navbar.classList.toggle('scrolled', shouldBeSolid);

    if (logoImg) {
      const targetSrc = shouldBeSolid
        ? logoImg.dataset.logoDark || logoImg.src
        : logoImg.dataset.logoLight || logoImg.src;

      if (targetSrc && logoImg.getAttribute('src') !== targetSrc) {
        logoImg.setAttribute('src', targetSrc);
      }
    }
  };

  window.addEventListener('scroll', updateNavbarState);
  updateNavbarState();

  return updateNavbarState;
};

// ===============================================
// NAVIGATION (hamburguesa + menú móvil)
// ===============================================
const initNavigation = (refreshNavbarState) => {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!navToggle || !mobileMenu) return;

  const setMenuState = (isOpen) => {
    navToggle.classList.toggle('is-open', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.body.classList.toggle('no-scroll', isOpen);
    refreshNavbarState?.();
  };

  const closeMenu = () => setMenuState(false);

  navToggle.addEventListener('click', () => {
    const willOpen = !navToggle.classList.contains('is-open');
    setMenuState(willOpen);
  });

  // Click en backdrop o botón cerrar
  mobileMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (
      target.classList.contains('mobile-menu-backdrop') ||
      target.hasAttribute('data-mobile-menu-close')
    ) {
      closeMenu();
    }
  });

  // Cerrar al click en links del menú móvil
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
};

// ===============================================
// SMOOTH SCROLL
// ===============================================
const initSmoothScroll = () => {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId.length <= 1) return;

      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// ===============================================
// FOOTER YEAR
// ===============================================
const updateYear = () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
};

// ===============================================
// GALLERY LIGHTBOX
// ===============================================
const initGalleryLightbox = (refreshNavbarState) => {
  const figures = Array.from(document.querySelectorAll('.gallery-card'));
  const lightbox = document.querySelector('.lightbox');

  if (!figures.length || !lightbox) return;

  const sourceEl = lightbox.querySelector('.lightbox-source');
  const imageEl = lightbox.querySelector('.lightbox-image');
  const captionEl = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-control.prev');
  const nextBtn = lightbox.querySelector('.lightbox-control.next');
  const backdrop = lightbox.querySelector('.lightbox-backdrop');

  let currentIndex = 0;
  let isOpen = false;

  const updateContent = () => {
    const figure = figures[currentIndex];
    const imageSrc = figure.dataset.image;
    const imageWebp = figure.dataset.imageWebp;
    const caption = figure.dataset.caption || '';
    const alt =
      figure.querySelector('img')?.getAttribute('alt') ||
      caption ||
      'Proyecto IC Studio';

    if (sourceEl) {
      sourceEl.srcset = imageWebp || '';
    }
    if (imageEl) {
      imageEl.src = imageSrc || '';
      imageEl.alt = alt;
    }
    if (captionEl) {
      captionEl.textContent = caption;
    }
  };

  const openLightbox = (index) => {
    currentIndex = index;
    updateContent();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    refreshNavbarState?.();
    isOpen = true;
  };

  const closeLightbox = () => {
    if (!isOpen) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    refreshNavbarState?.();
    isOpen = false;
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % figures.length;
    updateContent();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + figures.length) % figures.length;
    updateContent();
  };

  figures.forEach((figure, index) => {
    const trigger = figure.querySelector('.gallery-trigger') || figure;
    trigger.addEventListener('click', () => openLightbox(index));
  });

  nextBtn?.addEventListener('click', showNext);
  prevBtn?.addEventListener('click', showPrev);
  closeBtn?.addEventListener('click', closeLightbox);
  backdrop?.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (event) => {
    if (!isOpen) return;
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      showNext();
    } else if (event.key === 'ArrowLeft') {
      showPrev();
    }
  });
};

// ===============================================
// INIT
// ===============================================
window.addEventListener('DOMContentLoaded', () => {
  const refreshNavbarState = initNavbarAppearance();
  initNavigation(refreshNavbarState);
  initSmoothScroll();
  initGalleryLightbox(refreshNavbarState);
  updateYear();
});
