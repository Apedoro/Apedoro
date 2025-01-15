document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;

    // Navbar: Ocultar al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
    if (navbar) {
        window.addEventListener("scroll", function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                navbar.style.top = "-60px"; // Ocultar navbar
            } else {
                navbar.style.top = "0"; // Mostrar navbar
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }

    // Reiniciar el scroll al inicio al recargar la página
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    // Intersection Observer: Detectar visibilidad de secciones y activar animaciones
    const sections = document.querySelectorAll(".mission, .vision, .intro-content");

    const observerOptions = {
        root: null, // Usa la ventana como viewport
        rootMargin: "0px",
        threshold: 0.3, // La sección debe estar al menos un 30% visible para activarse
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Agrega la clase cuando es visible
                observer.unobserve(entry.target); // Deja de observar esta sección
            }
        });
    }, observerOptions);

    // Observar cada sección seleccionada
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Activar animaciones al ver la sección
const valoresBoxes = document.querySelectorAll(".valor-box");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInBox 1s forwards";
        }
    });
}, { threshold: 0.5 });

valoresBoxes.forEach((box) => observer.observe(box));


// Animar la sección "Nuestra Historia" cuando sea visible
const historiaSection = document.querySelector(".historia");

const historiaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.5 });

historiaObserver.observe(historiaSection);



// Animar la galería cuando sea visible
const galeriaSection = document.querySelector(".galeria-grid");

const galeriaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });

galeriaObserver.observe(galeriaSection);



// Animar la sección de productos cuando sea visible
const productosSection = document.querySelector(".productos-grid");

const productosObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });

productosObserver.observe(productosSection);

