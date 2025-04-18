  document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop2");
    const heroSection = document.getElementById("hero");

    window.addEventListener("scroll", function () {
      const heroBottom = heroSection.getBoundingClientRect().bottom;

      if (heroBottom < 0) {
        backToTop.classList.add("show");
        backToTop.classList.remove("hide");
      } else {
        backToTop.classList.remove("show");
        backToTop.classList.add("hide");
      }
    });

    // Volver arriba cuando se hace clic
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

