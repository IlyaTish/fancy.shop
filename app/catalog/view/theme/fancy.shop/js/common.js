$(document).ready(function() {
  // ====== Swiper slider options ====== //
  /*
    Banner slider on home page ('.banner-swiper')
  */
  const bannerSwiper = new Swiper ('.banner-swiper', {
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
    Navigation list on main page ('.slider-cat__swiper')
  */
  const sliderCatSwiper = new Swiper ('.slider-cat__swiper', {
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
    Navigation links for electronics category ('.products__cat__swiper')
  */
  const productsCat = new Swiper ('.products__cat', {
    loop: false,
    autoplay: {
      delay: 10000,
    },
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.products__cat-btn-next',
      prevEl: '.products__cat-btn-prev',
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

  $('.products__swiper').each(function(index, element) {
    const $this   = $(this),
          btnPrev = $this.parent().find('.products__swiper-btn-prev'),
          btnNext = $this.parent().find('.products__swiper-btn-next'),
          btn     = $this.find('.btn');

    $this.addClass('swiper-' + index);
    btnPrev.addClass('btn-prev-' + index);
    btnNext.addClass('btn-next-' + index);

    const productsSwiper = new Swiper('.swiper-' + index, {
      loop: true,
      autoplay: {
        delay: ((index * 1000) + 5000),
        disableOnInteraction: true
      },
      freeMode: true,
      freeModeMomentumRatio: 0.1,
      freeModeSticky: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ('.btn-next-' + index),
        prevEl: ('.btn-prev-' + index),
      },
      breakpoints: {
        599: {
          slidesPerView: 'auto',
        }
      }
    });

    $this.hover(function() {
      /* Stuff to do when the mouse enters the element */
      productsSwiper.autoplay.stop();
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      productsSwiper.autoplay.start();
    });
  });



  /*
    Product images fade effect ('.product-item__img-сont')
  */
  $('.product-item__img-cont').each(function(index, value) {
    var productItemImages = new Swiper(value, {
      loop: true,
      autoplay: false,
      direction: 'horizontal',
      effect: 'fade',
      spaceBetween: 0,
      pagination: {
        el: $(value).find('.swiper-pagination'),
        clickable: true
      }
    });
  });



  // ====== Change images in product-item ====== //

  var timeout;

  function returnFirstImg(el) {
    timeout = setTimeout(function() {
      el.find('.swiper-pagination .swiper-pagination-bullet:first-of-type').trigger('click');
    }, 1000);
  }

  function clearTimer() {
    clearTimeout(timeout);
  }

  $('.product-item__img-cont').on('mouseenter', function(event) {
    clearTimer();
  }).on('mouseleave', function(el) {
    $el = $(this);
    returnFirstImg($el);
  });

  $('.product-item').on('mouseenter', function(event) {
    clearTimer();
  }).on('mouseleave', function(el) {
    $el = $(this);
    returnFirstImg($el);
  });

  $('.swiper-pagination-bullet').on('mouseover', function(event) {
    let target = event.target;
    $(target).trigger('click');
  }).on('mouseout', function() {
    return;
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
              catCont.html($(data).find('#menu'));

              catLink.removeClass('active');
              thisCatLink.addClass('active');

              if (catCont.has('#menu .cat-list').length) {
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
            catCont.html($(data).find('#menu'));

            catLink.removeClass('active');
            thisCatLink.addClass('active');

            if (catCont.has('#menu .cat-list').length) {
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
