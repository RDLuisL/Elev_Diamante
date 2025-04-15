const scrollIndicator = document.querySelector(".scroll-container");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;

  // Si la parte superior de la sección está por encima del viewport (pasamos la sección)
  if (sectionTop < -100) {
    scrollIndicator.style.display = "none";
  } else {
    scrollIndicator.style.display = "flex";
  }
});
