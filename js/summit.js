  document.addEventListener('DOMContentLoaded', function () {
    const formAlert = document.querySelector('[data-form-alert]');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (!mutation.target.hasAttribute('hidden')) {
          // Esperar un segundo antes de redirigir
          setTimeout(() => {
            window.location.href = 'summit.html';
          }, 1000);
        }
      });
    });

    if (formAlert) {
      observer.observe(formAlert, { attributes: true, attributeFilter: ['hidden'] });
    }
  });

