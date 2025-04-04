document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;

    // Navbar scroll behavior
    if (navbar) {
        window.addEventListener("scroll", function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            navbar.style.top = (currentScroll > lastScrollTop) ? "-60px" : "0";
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }

    // Scroll to top on reload
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    // Intersection Observer para animaciones
    const sections = document.querySelectorAll(".mission, .vision, .intro-content");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const valoresBoxes = document.querySelectorAll(".valor-box");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInBox 1s forwards";
            }
        });
    }, { threshold: 0.5 });
    valoresBoxes.forEach((box) => observer.observe(box));

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

    // Popup inicial
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    if (popup) {
        setTimeout(() => {
            popup.style.display = "flex";
        }, 1000); // Mostrar después de 1 segundo
    }

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
