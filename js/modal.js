window.onload = function () {
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");
    const goHomeBtn = document.getElementById("goHome");
  
    // Cerrar modal con X
    closeBtn.onclick = () => modal.style.display = "none";
  
    // Cerrar modal clic fuera del contenido
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  
    // Volver al inicio (ajusta según tu página)
    goHomeBtn.onclick = () => {
      window.location.href = "/";
    };
  };
  