'use strict';

//swiper sliders

function createSwiper(swiperSelector, swiperMiniSelector) {
    const swiperThumbs = new Swiper(swiperMiniSelector, {
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          570: {
            spaceBetween: 16,
        slidesPerView: 'auto'
          },
          300: {
            spaceBetween: 8,
        slidesPerView: 'auto'
          },
        }
      });
      
      const swiper = new Swiper(swiperSelector, {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiperThumbs,
        },
      });
}

createSwiper(".mySwiper", ".mySwiper-thumbs");
createSwiper(".mySwiper-1", ".mySwiper-thumbs-1");
createSwiper(".mySwiper-2", ".mySwiper-thumbs-2");

