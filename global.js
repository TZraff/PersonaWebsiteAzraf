// Navbar hide on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const menuOpen = document.querySelector('.navbar-collapse.show');
        if (window.scrollY > lastScrollY && window.scrollY > 100 && !menuOpen) {
            header.classList.add('navbar-hidden');
        } else {
            header.classList.remove('navbar-hidden');
        }
        lastScrollY = window.scrollY;
    }, { passive: true });
}

// Otomatis terapkan efek reveal ke blok konten di dalam <main>
const autoTargets = document.querySelectorAll(
    'main > section, main > div > section, .timeline-item, .project-item, .social-item-left, .social-item-right, .scroll-reveal'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
});

autoTargets.forEach(el => {
    // Hindari elemen pembungkus besar yang punya anak yang juga di-animate
    if (el.querySelector('.timeline-item, .project-item, .social-item-left')) return;

    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
});
// Reveal elements as they enter the viewport
const revealElements = document.querySelectorAll('.scroll-reveal');

revealElements.forEach(el => revealObserver.observe(el));

const filterBar = document.querySelector("#filter-proyek");
if (filterBar) {
    const kartu = document.querySelectorAll(".project-item");
    const pesan = document.querySelector("#hasil-filter");

    filterBar.addEventListener("click", (event) => {
        const tombol = event.target.closest(".filter-btn");
        if (!tombol) return;

        const kategori = tombol.dataset.filter;
        for (const btn of filterBar.querySelectorAll(".filter-btn")) {
            btn.classList.toggle("aktif", btn === tombol);
        }

        let tampil = 0;
        for (const item of kartu) {
            const cocok = kategori === "all" || item.dataset.kategori === kategori;
            item.classList.toggle("sembunyi", !cocok);
            if (cocok) tampil += 1;
        }

        pesan.textContent = tampil ? "" : "Tidak ada proyek di kategori ini.";
    });
}
