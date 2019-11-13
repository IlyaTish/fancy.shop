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
    slidesPerView: 1,
    navigation: {
      nextEl: '.popular__btn-next',
      prevEl: '.popular__btn-prev',
    },
    breakpoints: {
      599: {
        slidesPerView: 'auto',
      }
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
    slidesPerView: 1,
    navigation: {
      nextEl: '.new__btn-next',
      prevEl: '.new__btn-prev',
    },
    breakpoints: {
      599: {
        slidesPerView: 'auto',
      }
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
    slidesPerView: 1,
    navigation: {
      nextEl: '.for-moms__btn-next',
      prevEl: '.for-moms__btn-prev',
    },
    breakpoints: {
      599: {
        slidesPerView: 'auto',
      }
    }
  });


  /*
    Product images fade effect ('.product-item__img-catCont')
  */
  var productImages = new Swiper('.product-item__img-catCont.swiper-catContainer', {
    loop: true,
    autoplay: false,
    direction: 'horizontal',
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
      el: '.product-item__img-catCont .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.product-item__img-catCont .swiper-button-next',
      prevEl: '.product-item__img-catCont .swiper-button-prev',
    }
  });


  // ====== Change images in product-item ====== //

  $('.swiper-pagination-bullet').on('mouseenter', function() {
    $(this).trigger('click');
  });

  var catLink = $('.catalog-list__link');
  var catCont = $('.catalog-list-full');
  var timeoutId;

  catLink.hover(function() {
    var thisCatLink = $(this);

    if (!timeoutId) {
      timeoutId = window.setTimeout(function() {
        timeoutId = null;

        catCont.load(thisCatLink.attr('href') + ' #child-cat', function() {
            catLink.removeClass('active');
            thisCatLink.addClass('active');
            catLink.mouseover(function() {
              /* Act on the event */
              catLink.removeClass('active');
              thisCatLink.addClass('active');
            });
        });
      }, 100);
    }
  },

  function(e) {
    var e = $(this);

    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = null;
    }
  });
});