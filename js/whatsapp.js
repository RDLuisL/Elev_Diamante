document.addEventListener('DOMContentLoaded', () => {
    const popupWhatsApp = () => {
        const btnClosePopup = document.querySelector('.closePopup');
        const btnOpenPopup = document.querySelector('.whatsapp-button');
        const popup = document.querySelector('.popup-whatsapp');
        const sendBtn = document.getElementById('send-btn');

        // Cerrar el popup
        btnClosePopup.addEventListener("click", () => {
            popup.classList.remove('is-active-whatsapp-popup');
        });

        // Abrir el popup
        btnOpenPopup.addEventListener("click", () => {
            popup.classList.add('is-active-whatsapp-popup');
            popup.style.animation = "fadeIn .6s 0.0s both";
        });

        // Enviar mensaje
        sendBtn.addEventListener("click", () => {
            const msg = document.getElementById('whats-in').value;
            const relmsg = encodeURIComponent(msg);
            window.open('https://wa.me/+56955212659?text=' + relmsg, '_blank');
        });

        // Abrir automáticamente después de 3 segundos
        setTimeout(() => {
            popup.classList.add('is-active-whatsapp-popup');
        }, 3000);
    }

    popupWhatsApp();
});
