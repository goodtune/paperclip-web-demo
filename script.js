'use strict';

// ─── Navigation: scroll + mobile toggle ─────────────────────────────────────
(function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (!nav || !toggle || !links) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ─── Scroll animations ────────────────────────────────────────────────────────
(function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || '0', 10);
      setTimeout(() => el.classList.add('visible'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  elements.forEach(el => observer.observe(el));
})();

// ─── Tech stack tabs ─────────────────────────────────────────────────────────
(function initTabs() {
  const tabsEl = document.querySelector('.tabs');
  if (!tabsEl) return;

  const tabs = tabsEl.querySelectorAll('.tabs__tab');
  const panels = tabsEl.querySelectorAll('.tabs__panel');

  function activateTab(targetKey) {
    tabs.forEach(tab => {
      const active = tab.dataset.tab === targetKey;
      tab.classList.toggle('tabs__tab--active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
      panel.classList.toggle('tabs__panel--active', panel.id === `tab-${targetKey}`);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
    tab.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateTab(tab.dataset.tab);
      }
    });
  });
})();

// ─── Contact form ─────────────────────────────────────────────────────────────
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const successEl = document.getElementById('contactSuccess');
  if (!form || !successEl) return;

  function setError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (!field || !error) return;
    field.classList.toggle('error', !!message);
    error.textContent = message || '';
  }

  function validate() {
    let valid = true;
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name) {
      setError('name', 'nameError', 'Please enter your name.');
      valid = false;
    } else {
      setError('name', 'nameError', '');
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email)) {
      setError('email', 'emailError', 'Please enter a valid email address.');
      valid = false;
    } else {
      setError('email', 'emailError', '');
    }

    if (!message) {
      setError('message', 'messageError', 'Please tell us about your project.');
      valid = false;
    } else {
      setError('message', 'messageError', '');
    }

    return valid;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;

    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn__text');
    btn.disabled = true;
    btnText.textContent = 'Sending…';

    // Simulate async submission
    setTimeout(() => {
      form.style.display = 'none';
      successEl.classList.add('visible');
    }, 1200);
  });

  // Live validation on blur
  ['name', 'email', 'message'].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.addEventListener('blur', validate);
  });
})();

// ─── Smooth counter animation (stats) ────────────────────────────────────────
(function initCounters() {
  const stats = document.querySelectorAll('.stat__number');
  if (!stats.length) return;

  const DURATION = 1200;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^([<>]?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isFloat = numStr.includes('.');
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const value = target * easeOut(progress);
      const display = isFloat ? value.toFixed(1) : Math.round(value).toString();
      el.textContent = `${prefix}${display}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
})();
