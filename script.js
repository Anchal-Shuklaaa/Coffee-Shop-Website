const MenuCloseButton = document.getElementById("menu-close-button");
const MenuOpenButton = document.getElementById("menu-open-button");

MenuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

MenuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});