function powersSlider () {
  const swiper = new Swiper('.powers__slider', {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.powers__btn--next',
      prevEl: '.powers__btn--prev',
    },
    breakpoints: {
      // when window width is >= 720px
      676: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    }
  });
}

export {powersSlider};
