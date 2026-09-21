document.addEventListener('DOMContentLoaded', () => {
  const demoModal = document.getElementById('demoModal');
  const modalClose = document.getElementById('modalClose');
  const modalOkBtn = document.getElementById('modalOkBtn');

  const openDemoModal = () => demoModal.classList.add('active');
  const closeDemoModal = () => demoModal.classList.remove('active');

  // Elements that should trigger the "demo only" popup
  const demoTriggerIds = [
    'chatFab',
    'loginBtn',
    'requestDemoBtn',
    'watchVideoBtn',
    'exploreBtn',
    'footerContactDev'
  ];

  demoTriggerIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openDemoModal();
      });
    }
  });

  modalClose.addEventListener('click', closeDemoModal);
  modalOkBtn.addEventListener('click', closeDemoModal);
  demoModal.addEventListener('click', (e) => {
    if (e.target === demoModal) closeDemoModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDemoModal();
  });

  // Contact form -> demo popup instead of real submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      openDemoModal();
      contactForm.reset();
    });
  }

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('mobile-open');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => navbar.classList.remove('mobile-open'));
    });

    // Sticky navbar shadow on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }
});
