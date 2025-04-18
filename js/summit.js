  document.getElementById('formEmail').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_k5jtzoe","template_ypfiuci");
      .then(function() {
        alert('Mensaje enviado correctamente ✅');
        window.location.href = 'https://www.elevadoresdiamante.cl/summit.html'; // Redirección tras envío
      }, function(error) {
        alert('Hubo un error 😥: ' + JSON.stringify(error));
      });
  });


