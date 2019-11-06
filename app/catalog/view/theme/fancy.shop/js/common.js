$(document).ready(function() {
  // ====== Swiper slider options ====== //
  /*
    Banner slider on home page ('.banner')
  */
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


  /*
    Navigation list on main page ('.slider-catalog')
  */
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


  /*
    Products ('.products')
  */
  var s3 = new Swiper ('.s3', {
    loop: true,
    autoplay: {
      delay: 5000
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


  /*
    Products ('.products')
  */
  var s4 = new Swiper ('.s4', {
    loop: true,
    autoplay: {
      delay: 8000
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


  /*
    Products ('.products')
  */
  var s5 = new Swiper ('.s5', {
    loop: true,
    autoplay: {
      delay: 10000
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


  /*
    Product images fade effect ('.product-item__img-cont')
  */
  var productImages = new Swiper('.product-item__img-cont.swiper-container', {
    loop: true,
    autoplay: false,
    direction: 'horizontal',
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
      el: '.product-item__img-cont .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.product-item__img-cont .swiper-button-next',
      prevEl: '.product-item__img-cont .swiper-button-prev',
    }
  });


  // ====== Change images in product-item ====== //

  // var id = 0;

  // $('.products .product-item__img-cont').hover(
  //   /* Stuff to do when the mouse enters the element */
  //   function(el) {
  //   var el = $(this);
  //   id = setInterval(function() {
  //     el.find($('.swiper-button-next')).trigger('click');
  //   }, 1000);
  // }, function(el) {
  //   /* Stuff to do when the mouse leaves the element */
  //   clearInterval(id);
  // });

  $('.swiper-pagination-bullet').on('mouseenter', function() {
    $(this).trigger('click');
    console.log('Курсор прошел');
  });
});