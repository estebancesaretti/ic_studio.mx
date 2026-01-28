import { animate, inView, stagger } from 'motion';

export const initAnimations = () => {
  // Config: Set initial states in JS to ensure visibility if JS fails
  const entranceProps = { opacity: [0, 1], transform: ['translateY(30px)', 'none'] };
  const entranceOptions = { duration: 0.8, easing: 'ease-out' };

  // Hero Animations (Direct)
  animate('.hero h1', { opacity: [0, 1], transform: ['translateY(20px)', 'none'] }, entranceOptions);
  
  animate(
    '.hero .subtitle', 
    { opacity: [0, 1], transform: ['translateY(20px)', 'none'] }, 
    { ...entranceOptions, delay: 0.2 }
  );

  animate(
    '.hero-actions', 
    { opacity: [0, 1], transform: ['translateY(20px)', 'none'] }, 
    { ...entranceOptions, delay: 0.4 }
  );

  // Section Headings
  inView('.section-heading', ({ target }) => {
    animate(target, entranceProps, entranceOptions);
  });

  // Services Stagger
  inView('.services-grid', ({ target }) => {
    const cards = target.querySelectorAll('.service-card');
    if (cards.length) {
       animate(
        cards,
        entranceProps,
        { delay: stagger(0.1), duration: 0.6, easing: 'ease-out' }
      );
    }
  });

  // Gallery Stagger
  inView('.gallery-grid', ({ target }) => {
    const cards = target.querySelectorAll('.gallery-card');
    if (cards.length) {
      animate(
        cards,
        { opacity: [0, 1], transform: ['scale(0.95)', 'scale(1)'] },
        { delay: stagger(0.05), duration: 0.5, easing: 'ease-out' }
      );
    }
  });

  // Process Stagger
  inView('.process-timeline', ({ target }) => {
     const steps = target.querySelectorAll('.process-step');
     if (steps.length) {
       animate(
        steps,
        { opacity: [0, 1], transform: ['translateX(-20px)', 'none'] },
        { delay: stagger(0.2), duration: 0.6, easing: 'ease-out' }
      );
    }
  });
};
