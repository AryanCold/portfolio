/* ============================================================
   navigation.js  –  Mobile menu, active links, scroll reveal,
                     contact-form validation
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ══════════════════ MOBILE NAV ══════════════════════════ */
  const burger    = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Close panel when a link is tapped
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close panel on outside click
    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ══════════════════ ACTIVE NAV ON SCROLL ════════════════ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ══════════════════ SCROLL REVEAL ═══════════════════════ */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ══════════════════ CONTACT FORM VALIDATION ═════════════ */
  const form      = document.getElementById('contact-form');
  const msgBox    = document.getElementById('form-message');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  /** Mark a field group as valid or invalid */
  function setError(groupId, inputId, hasError) {
    const group = document.getElementById(groupId);
    const input = document.getElementById(inputId);
    if (!group || !input) return;
    group.classList.toggle('has-error', hasError);
    input.classList.toggle('invalid',   hasError);
    input.setAttribute('aria-invalid',  hasError ? 'true' : 'false');
  }

  /** Return true when the field value is acceptable */
  function isValid(id) {
    const el = document.getElementById(id);
    if (!el) return false;
    const val = el.value.trim();
    if (id === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (id === 'message') return val.length >= 20;
    return val.length > 0;
  }

  // Field-to-group mapping
  const fieldMap = {
    name:    'fg-name',
    email:   'fg-email',
    subject: 'fg-subject',
    message: 'fg-message',
  };

  // Real-time validation (on blur + on input once invalid)
  Object.keys(fieldMap).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener('blur', () => {
      setError(fieldMap[id], id, !isValid(id));
    });

    el.addEventListener('input', () => {
      if (el.classList.contains('invalid')) {
        setError(fieldMap[id], id, !isValid(id));
      }
    });
  });

  // Submit handler
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Reset message banner
    msgBox.className  = 'form-message';
    msgBox.textContent = '';

    // Validate all fields
    let allValid = true;
    Object.keys(fieldMap).forEach(id => {
      const ok = isValid(id);
      setError(fieldMap[id], id, !ok);
      if (!ok) allValid = false;
    });

    if (!allValid) {
      msgBox.textContent = 'Please fix the errors above and try again.';
      msgBox.className   = 'form-message error';
      return;
    }

    // Simulate network request
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(() => {
      msgBox.textContent = "✅ Message sent! I'll get back to you within 24 hours.";
      msgBox.className   = 'form-message success';
      form.reset();
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send Message ✉️';
    }, 1200);
  });

}); // end DOMContentLoaded
