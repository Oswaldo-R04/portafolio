document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("is-open");
            navToggle.classList.toggle("is-open");
            document.body.classList.toggle("nav-open");
        });

        // Cerrar menú al hacer clic en un enlace de navegación interno
        navMenu.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("is-open");
                navToggle.classList.remove("is-open");
                document.body.classList.remove("nav-open");
            });
        });
    }
});

