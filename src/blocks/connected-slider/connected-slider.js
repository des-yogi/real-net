(function(){
  connected = new Swiper('.connected-slider__container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    //loop: true,
    //initialSlide: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 18
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 18
      }
    }
  });
}());
