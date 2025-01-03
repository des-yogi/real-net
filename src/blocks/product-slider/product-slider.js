(function(){
  var productThumb = new Swiper(".product-slider__thumb", {
    spaceBetween: 16,
    slidesPerView: 'auto', //4
    grabCursor: true,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var productMain = new Swiper(".product-slider__main", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    //spaceBetween: 10,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    thumbs: {
      swiper: productThumb,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}());
