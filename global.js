
const header = document.querySelector("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {

    const currentScrollY = window.scrollY;

    // Scroll ke bawah
    if (currentScrollY > lastScrollY && currentScrollY > 100) {

        header.classList.add("navbar-hidden");

    }

    // Scroll ke atas
    else if (currentScrollY < lastScrollY) {

        header.classList.remove("navbar-hidden");

    }

    lastScrollY = currentScrollY;
});
const revealElements = document.querySelectorAll(
    "main section, main .divider-thick, main .divider-barbell"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
    revealObserver.observe(element);
});