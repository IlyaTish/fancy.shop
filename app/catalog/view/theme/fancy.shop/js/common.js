$(document).ready(function() {
  // ====== Swiper slider options ====== //
  /*
    Banner slider on home page ('.banner')
  */
  const s1 = new Swiper ('.s1', {
    loop: false,
    autoplay: {
      delay: 10000,
    },
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 'auto'
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
    Navigation list on main page ('.slider-cat')
  */
  // $(() => {
  //   let catMenuSlider, isActive;
  //   const $window = $(window);

  //   swiperFunc();
  //   $window.on('resize', swiperFunc);

  //   function swiperFunc() {
  //     const initNeeded = $window.width() < 599;

  //     isActive = isActive !== undefined ? isActive : !initNeeded;

  //     if(initNeeded && !isActive) {
  //       catMenuSlider = new Swiper('.swiper-container.header__cat-slider', {
  //         loop: false,
  //         freeMode: true,
  //         slidesPerView: 'auto'
  //       });

  //       isActive = true;

  //       catMenuSlider.update();

  //       btnCat.on('click', function(e) {
  //         catMenuSlider.update();
  //       });
  //     }
  //     if(!initNeeded && isActive) {
  //       catMenuSlider.destroy(true, true);
  //       isActive = false;
  //     }
  //   }
  // });


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
        btnCat   = $('.btn-cat'),
        $window  = $(window);

  let request;

  var mediaQuery = window.matchMedia('(min-width: 599px)');

  loadCatLink();
  $window.on('resize', loadCatLink);

  function loadCatLink() {
    if (mediaQuery.matches) {
      window.onload = function() {
        catLink.bind('loadChildCat', function(event) {
          const thisCatLink = $(this);
          let   target = event.target;

          request = $.ajax({
            url: target.attributes.href.value,
            dataType: 'html',
            success: function(data) {
              catCont.html($(data).find('#content'));

              catLink.removeClass('active');
              thisCatLink.addClass('active');

              if (catCont.has('.cat .cat-list').length) {
                catCont.addClass('header__cat-list-full--active');
              } else {
                catCont.removeClass('header__cat-list-full--active');
              }
            }
          });
        });

        let timeout;

        catLink.mouseenter(function(e) {
          const self = this;

          clearTimeout(timeout);
          timeout = setTimeout(function() {
            $(self).trigger('loadChildCat')
          });
        });

        catLink.mouseleave(function() {
          if (request) {
            request.abort();
            request = null;
          }
        });

        loadFirstCatLink('mouseenter');
      }
    }

    else {
      catLink.click(function(event) {
        /* Act on the event */
        event.preventDefault();

        const thisCatLink = $(this);
        let   target = event.target;

        request = $.ajax({
          url: target.attributes.href.value,
          dataType: 'html',
          success: function(data) {
            catCont.html($(data).find('#content'));

            catLink.removeClass('active');
            thisCatLink.addClass('active');

            if (catCont.has('.cat .cat-list').length) {
              catCont.addClass('header__cat-list-full--active');
            } else {
              catCont.removeClass('header__cat-list-full--active');
            }
          }
        });
      });

      loadFirstCatLink('click');
    }
  }



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

function loadFirstCatLink(event) {
  const firstCat = $('.header__cat-list__item:first-child .header__cat-list__link');
  firstCat.trigger(event);
}