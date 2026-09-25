
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