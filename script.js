'use strict';

//swiper sliders
const swiper1thumbs = new Swiper(".mySwiper-1-thumbs", {
  spaceBetween: 16,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper1 = new Swiper(".mySwiper-1", {
  spaceBetween: 0,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper1thumbs,
  },
});
