// JavaScript para manejar el comportamiento de los enlaces, excluyendo el botón de contacto
document.querySelectorAll('.buttons a').forEach(link => {
    // Verifica si el enlace no es el botón de contacto
    if (link.id !== 'contact-btn') {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace

            const isMobile = window.innerWidth <= 768; // Verifica si es un dispositivo móvil

            if (isMobile) {
                // Abre la URL en la misma ventana en móviles
                window.location.href = this.href;
            } else {
                // Abre la URL en una nueva ventana en computadoras
                window.open(this.href, '_blank');
            }
        });
    }
});

// Manejador para mostrar/ocultar el formulario de contacto con desplazamiento suave
document.getElementById('contact-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    const form = document.getElementById('contact-form');

    // Verifica si el formulario está visible o no
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block"; // Muestra el formulario
        form.scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave hacia el formulario
        });
    } else {
        // Desplazamiento suave hacia arriba antes de ocultar el formulario
        window.scrollTo({
            top: 0, // Cambia esto a la posición deseada para el desplazamiento
            behavior: 'smooth' // Desplazamiento suave hacia arriba
        });

        // Espera a que termine el desplazamiento antes de ocultar el formulario
        setTimeout(() => {
            form.style.display = "none"; // Oculta el formulario si ya está visible
        }, 500); // Tiempo en milisegundos (ajusta según el tiempo que quieras que dure el desplazamiento)
    }
});
