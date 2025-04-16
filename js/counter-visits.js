window.addEventListener('DOMContentLoaded', () => {
    let visits = localStorage.getItem("visitCount");
  
    if (!visits) {
      visits = 1;
    } else {
      visits = parseInt(visits) + 1;
    }
  
    localStorage.setItem("visitCount", visits);
  
    const visitDisplay = document.getElementById("visit-count");
    if (visitDisplay) {
      visitDisplay.innerText = visits.toString().padStart(5, "0"); // para que aparezca tipo 00001
    }
  });
  