$(document).ready(function () {
  var s1 = new Swiper ('.s1', {
    loop: true,
    autoplay: {
      delay: 12000,
    },
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var s2 = new Swiper ('.s2', {
    loop: false,
    autoplay: {
      delay: 10000,
    },
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.slider-catalog__next',
      prevEl: '.slider-catalog__prev',
    },
  });

  var s3 = new Swiper ('.s3', {
    loop: true,
    autoplay: {
      delay: 10000,
    },
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
  });
});