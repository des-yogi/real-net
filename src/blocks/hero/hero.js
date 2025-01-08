(function(){
  hero = new Swiper('.hero__container', {
    slidesPerView: 1,
    spaceBetween: 16,
    //grabCursor: true,
    //autoHeight: true,
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
      1280: {
        slidesPerView: 1,
        spaceBetween: 18
      }
    }
  });
}());
