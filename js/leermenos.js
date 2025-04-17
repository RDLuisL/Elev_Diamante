  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.toggle-text');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const moreText = this.previousElementSibling;

        if (moreText.style.display === 'none' || moreText.style.display === '') {
          moreText.style.display = 'inline';
          this.textContent = 'Leer menos...';
        } else {
          moreText.style.display = 'none';
          this.textContent = 'Leer más...';
        }
      });
    });
  });

