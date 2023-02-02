function powersSlider () {
  const swiper = new Swiper('.powers__slider', {
    loop: true,
    speed: 1500,
    slidesPerView: '2',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.powers__btn--next',
      prevEl: '.powers__btn--prev',
    },
  });
}

export {powersSlider};
