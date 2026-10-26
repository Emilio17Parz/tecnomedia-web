document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = new Date().getFullYear();

  const setNavState = () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 16);
  };
  setNavState();
  window.addEventListener("scroll", setNavState, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) link.classList.add("active");
  });

  // Cierra el menú mobile al navegar.
  const navCollapse = document.getElementById("mainNav");
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navCollapse?.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Formulario:
  // El HTML usa FormSubmit. No se requieren credenciales SMTP ni backend propio.
  // En producción, confirma el correo destino la primera vez y considera CAPTCHA/Turnstile.
  const form = document.querySelector("[data-contact-form]");
  const toastEl = document.getElementById("formToast");

  if (form) {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      form.classList.add("was-validated");

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
      }

      if (toastEl && window.bootstrap) {
        bootstrap.Toast.getOrCreateInstance(toastEl).show();
      }
    });
  }
});
