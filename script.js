const initNavigation = (refreshNavbarState) => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!hamburger || !mobileMenu) return;

    const setMenuState = (isOpen) => {
        hamburger.classList.toggle('is-active', isOpen);
        mobileMenu.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        document.body.classList.toggle('no-scroll', isOpen);
        refreshNavbarState?.();
    };

    const closeMenu = () => setMenuState(false);

    hamburger.addEventListener('click', () => {
        const isOpen = !hamburger.classList.contains('is-active');
        setMenuState(isOpen);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    mobileMenu.addEventListener('click', (event) => {
        if (event.target === mobileMenu) {
            closeMenu();
        }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
};

const initNavbarAppearance = () => {
    const navbar = document.querySelector('.navbar');
    const logoImg = navbar?.querySelector('.brand img');
    if (!navbar) return null;

    const updateNavbarState = () => {
        const shouldBeSolid = window.scrollY > 12 || document.body.classList.contains('no-scroll');
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

const initSmoothScroll = () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId.length <= 1) return;
            const target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};

const updateYear = () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const refreshNavbarState = initNavbarAppearance();
    initNavigation(refreshNavbarState);
    initSmoothScroll();
    updateYear();
});
