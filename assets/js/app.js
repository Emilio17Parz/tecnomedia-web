document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const menu = document.querySelector('[data-mobile-menu]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const page = document.body.dataset.page;

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const syncThemeIcon = () => {
    const dark = root.classList.contains('dark');
    document.querySelectorAll('[data-theme-icon]').forEach(el => el.textContent = dark ? '☀' : '☾');
  };
  syncThemeIcon();

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dark = !root.classList.contains('dark');
      root.classList.toggle('dark', dark);
      localStorage.setItem('tm-theme', dark ? 'dark' : 'light');
      syncThemeIcon();
    });
  });

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.classList.toggle('is-open', open);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuBtn.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  if (page) document.querySelectorAll(`[data-nav="${page}"]`).forEach(el => el.classList.add('is-active'));

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Evita el ícono de imagen rota para logos de alianzas todavía no copiados.
  document.querySelectorAll('.partner-card img').forEach(img => {
    img.addEventListener('error', () => img.classList.add('hidden'));
  });

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.querySelector(':invalid')?.focus();
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Enviando…';
      }
    });
  }
});
