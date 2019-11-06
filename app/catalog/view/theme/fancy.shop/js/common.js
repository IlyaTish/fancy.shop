$(document).ready(function() {
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
      delay: 5000,
      disableOnInteraction: false
    },
    freeMode: true,
    freeModeMomentumRatio: 0.1,
    freeModeSticky: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.popular__btn-next',
      prevEl: '.popular__btn-prev',
    }
  });

  var s4 = new Swiper ('.s4', {
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    freeMode: true,
    freeModeMomentumRatio: 0.1,
    freeModeSticky: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.new__btn-next',
      prevEl: '.new__btn-prev',
    }
  });

  var s5 = new Swiper ('.s5', {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    freeMode: true,
    freeModeMomentumRatio: 0.1,
    freeModeSticky: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.for-moms__btn-next',
      prevEl: '.for-moms__btn-prev',
    }
  });
});