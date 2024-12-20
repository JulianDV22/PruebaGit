
// Espera a que todo el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente.');
    alert('Bienvenido a Prueba Git'); // Alerta visible al cargar la página

    // Ejemplo de funcionalidad adicional: Cambiar el color del slogan al hacer clic
    const slogan = document.querySelector('.slogan');

    if (slogan) {
        slogan.addEventListener('click', () => {
            // Genera un color aleatorio en formato hexadecimal
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            slogan.style.color = randomColor;
            console.log(`Color del slogan cambiado a: ${randomColor}`);
        });
    }
});
