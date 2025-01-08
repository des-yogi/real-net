(function(){
  spOffer = new Swiper('.sp-offers-slider__container', {
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
      //clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      // 960: {
      //   slidesPerView: 3,
      //   spaceBetween: 16
      // },
      1280: {
        slidesPerView: 4,
        spaceBetween: 18
      }
    }
  });
}());
