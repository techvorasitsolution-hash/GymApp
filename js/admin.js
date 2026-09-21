document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.admin-nav-item');
  const tabs = document.querySelectorAll('.admin-tab');
  const pageTitle = document.getElementById('adminPageTitle');
  const sidebar = document.getElementById('adminSidebar');
  const hamburger = document.getElementById('adminHamburger');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.tab;

      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      tabs.forEach(t => t.classList.remove('active'));
      const targetTab = document.getElementById('tab-' + target);
      if (targetTab) targetTab.classList.add('active');

      pageTitle.textContent = item.textContent.trim().replace(/^\S+\s/, '');
      sidebar.classList.remove('open');
    });
  });

  if (hamburger) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // "+ Add New" also routes to the demo popup handled in script.js
  const addBtn = document.getElementById('adminAddBtn');
  const demoModal = document.getElementById('demoModal');
  if (addBtn && demoModal) {
    addBtn.addEventListener('click', () => demoModal.classList.add('active'));
  }
});
