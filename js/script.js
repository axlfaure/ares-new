const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const categories = document.querySelectorAll(".nav-links li"); // Sélectionne toutes les catégories du menu

// Ouvre ou ferme le menu
function toggleMenu() {
  navLinks.classList.toggle('mobile-menu');
  if (menuBtn.classList.contains('open')) {
    menuBtn.classList.remove('open');
    menuBtn.classList.add('closed'); // Ajoute une nouvelle classe "closed" pour changer l'icône du bouton
  }
  else if (menuBtn.classList.contains('closed')) {
    menuBtn.classList.remove('closed');
    menuBtn.classList.add('open'); // Ajoute la classe "open" pour rétablir l'icône du bouton
  }
}

// Ajoute un écouteur d'événements "click" sur chaque catégorie du menu
categories.forEach(category => {
  category.addEventListener('click', () => {
    toggleMenu(); // Appelle la fonction pour fermer le menu
  });
});

// Ajoute un écouteur d'événements "click" sur le bouton du menu hamburger
menuBtn.addEventListener('click', () => {
  toggleMenu(); // Appelle la fonction pour ouvrir ou fermer le menu
});

// COULEUR AU SCROLL

window.addEventListener("load", function () {

    let header = document.querySelector(".header");

    document.addEventListener('scroll', function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        }

        else if (window.scrollY < 500) {
            header.classList.remove("scrolled");
        }

    });

});

// FIN COULEUR AU SCROLL

// CLIENTS SLIDER

new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 120,
        },
    },
});

// TEMOIGNAGES SLIDER

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
swiperEl.initialize();