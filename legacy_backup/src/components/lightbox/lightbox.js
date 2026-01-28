export const initLightbox = (onToggle) => {
  const triggers = document.querySelectorAll('.gallery-trigger');
  const lightbox = document.querySelector('.lightbox');
  
  if (!lightbox || triggers.length === 0) return;

  const img = lightbox.querySelector('.lightbox-image');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-control.prev');
  const nextBtn = lightbox.querySelector('.lightbox-control.next');

  let currentIndex = 0;
  const items = Array.from(triggers).map(trigger => {
    // Navigate up to figure to get data
    const card = trigger.closest('.gallery-card');
    return {
      src: card.dataset.image,
      webp: card.dataset.imageWebp,
      caption: card.dataset.caption,
      alt: card.querySelector('img')?.alt
    };
  });

  const showImage = (index) => {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;

    const item = items[index];
    img.src = item.src;
    img.alt = item.alt;
    caption.textContent = item.caption;
  };

  const open = (index) => {
    showImage(index);
    lightbox.classList.add('open');
    document.body.classList.add('no-scroll');
    onToggle?.(); 
  };

  const close = () => {
    lightbox.classList.remove('open');
    document.body.classList.remove('no-scroll');
    onToggle?.();
  };

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent bubbling issues
      open(idx);
    });
  });

  closeBtn?.addEventListener('click', close);
  prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
  nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
};
