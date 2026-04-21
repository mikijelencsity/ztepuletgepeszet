/* ZT Épületgépészet – main.js */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile nav toggle ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (href === currentPath || (currentPath === '' && href === '/index.html') || (currentPath === '/index' && href === '/index.html')) {
      a.classList.add('active');
    }
  });

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) { el.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Elküldve ✓';
      btn.style.background = '#2a7a4b';
      btn.disabled = true;
    });
  }

  /* ── Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal');
    const observer  = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('revealed'); });
  }

});
