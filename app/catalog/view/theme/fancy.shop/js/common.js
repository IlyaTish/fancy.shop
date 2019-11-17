$(document).ready(function() {
  // ====== Swiper slider options ====== //
  /*
    Banner slider on home page ('.banner')
  */
  const s1 = new Swiper ('.s1', {
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
    Navigation list on main page ('.slider-cat')
  */
  const s2 = new Swiper ('.s2', {
    loop: false,
    autoplay: {
      delay: 10000,
    },
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.slider-cat__next',
      prevEl: '.slider-cat__prev',
    },
  });


  /*
    Products ('.products')
  */
  const s3 = new Swiper ('.s3', {
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
  const s4 = new Swiper ('.s4', {
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
  const s5 = new Swiper ('.s5', {
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
  const productImages = new Swiper('.product-item__img-catCont.swiper-catContainer', {
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


  // ====== Load child catalog links in catalog menu ====== //

  const catLink  = $('.header__cat-list__link'),
        catCont  = $('.header__cat-list-full'),
        cat      = $('.header__cat'),
        btnCat   = $('.btn-cat');
  let timeoutId;

  catLink.hover(function() {
    const thisCatLink = $(this);

    if (!timeoutId) {
      timeoutId = window.setTimeout(function() {
        timeoutId = null;

        catCont.load(thisCatLink.attr('href') + ' #child-cat', function() {
          catLink.removeClass('active');

          if (catCont.has('.cat .cat-list').length) {
            catCont.addClass('header__cat-list-full--active');
          } else {
            catCont.removeClass('header__cat-list-full--active');
          }

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


  // ====== Fade-in/fade-out animation for catalog menu ====== //

  btnCat.on('click', function(e) {
    $(this).toggleClass('btn-cat--active');

    if (cat.hasClass('hidden')) {
      // show
      cat.addClass('transition');
      cat.innerWidth();
      cat.removeClass('hidden');
    } else {
      // hide
      cat.addClass('transition');
      cat.addClass('hidden');
    }
  });

  cat.on('transitionend', function() {
    cat.removeClass('transition');
  });
});

$(document).ready(function() {
  const firstCat = $('.header__cat-list__item:first-child .header__cat-list__link');
  firstCat.mouseover();
});