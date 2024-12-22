/* script.js */

// Espera a que todo el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente.');
    alert('Bienvenido a Prueba Git'); // Comentado para mejorar la experiencia del usuario

    // Funcionalidad para cambiar el color del slogan al hacer clic
    const slogan = document.querySelector('.slogan');

    if (slogan) {
        slogan.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            slogan.style.color = randomColor;
            console.log(`Color del slogan cambiado a: ${randomColor}`);
        });
    }

    // Funcionalidad para el Inicio de Sesión

    
    const loginForm = document.querySelector('#login form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Inicio de sesión exitoso (simulado).');
                loginForm.reset(); // Limpia los campos del formulario
        });
    }
    
    
    // Funcionalidad para el menú hamburguesa
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');

            // Cambiar el atributo aria-expanded para accesibilidad
            const isExpanded = navList.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    } else {
        console.error('No se encontraron los elementos .nav-toggle o .nav-list en el DOM.');
    }

    // Funcionalidad para mostrar la sección de Servicios
    const serviciosBtn = document.getElementById('servicios-btn');
    const inicioBtn = document.getElementById('inicio');
    const serviciosSection = document.getElementById('servicios');
    const mainContent = document.getElementById('main-content');

    if (serviciosBtn && serviciosSection && inicioBtn && mainContent) {
        serviciosBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Mostrar la sección de servicios
            serviciosSection.classList.add('active');

            // Opcional: desplazar la vista hacia la sección de servicios
            serviciosSection.scrollIntoView({ behavior: 'smooth' });

            // Si el menú está activo en dispositivos móviles, cerrarlo
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            }
        });

        inicioBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Ocultar la sección de servicios
            serviciosSection.classList.remove('active');

            // Opcional: desplazar la vista hacia el contenido principal
            mainContent.scrollIntoView({ behavior: 'smooth' });

            // Si el menú está activo en dispositivos móviles, cerrarlo
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            }
        });
    } else {
        console.error('No se encontraron los elementos necesarios para la funcionalidad de Servicios e Inicio.');
    }


    document.querySelectorAll('.testimonial').forEach(item => {
        item.addEventListener('click', () => {
            alert('Gracias por tu interés en nuestros testimonios!');
        });
    });
});


