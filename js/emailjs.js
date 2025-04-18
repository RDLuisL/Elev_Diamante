// Inicializa EmailJS con tu Public Key
(function () {
  emailjs.init("uwidzm1Nde68YH0hv"); // Ej: emailjs.init("iS6tX34asdfgaT")
})();

// Captura y envía el formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formEmail");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_k5jtzoe", "template_ypfiuci", form)
      .then(function () {
        window.location.href = 'summit.html'; // Redirige al terminar
      }, function (error) {
        alert("Hubo un error: " + JSON.stringify(error));
        console.error("EmailJS error:", error);
      });
  });
});
