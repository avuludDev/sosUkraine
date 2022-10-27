//Slider options
const gallerySliderOptionsLeft = {
  spaceBetween: 25,
  centeredSlides: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    reverseDirection: false,
  },
  loop: true,
  init: false,
  slidesPerView: 'auto',
  allowTouchMove: false,
  disableOnInteraction: true,
}

let gallerySliderOptionsRight = JSON.parse(JSON.stringify(gallerySliderOptionsLeft));
gallerySliderOptionsRight.autoplay.reverseDirection = true;

window.addEventListener('load', () => {

  const body = document.querySelector('body');
  const preloader = document.querySelector('.preloader');
  const preloaderLineTop = document.querySelector('.preloader .line-top');
  const preloaderLineBottom = document.querySelector('.preloader .line-bottom');
  const timeoutTime = 2699;
  const scrollBtn = $('#scroll-bottom-btn a');

  // Preloader lines
  preloaderLineTop.style.top = '3.2rem';
  preloaderLineBottom.style.bottom = '0';

  const gallerySliderLeft = new Swiper('.gallery-slider_left', gallerySliderOptionsLeft);
  const gallerySliderRight = new Swiper('.gallery-slider_right', gallerySliderOptionsRight);

  function addAnimatedSectionClass(section) {
    setTimeout(() => {
      $(`[data-anchor=${section}]`).addClass('animated');
    }, 1);
  }

  function scrollAnchorDetect(hide = false, currentSection, nextSection ) {

    $(`.main-menu a[data-menuanchor]`).removeClass('active');
    $(`.main-menu a[data-menuanchor="${currentSection}" ]`).addClass('active');

    if (hide) {
      scrollBtn.addClass('hidden');
      return;
    }

    scrollBtn.removeClass('hidden');
    scrollBtn.attr('href', '#' + nextSection)
    scrollBtn.attr('data-menuanchor', nextSection)
  }

  const contentLoadedPromise = new Promise((resolve) => {
    setTimeout(() => {
      body.classList.remove('overflow-hidden');
      preloader.classList.add('hide');
      resolve();
    }, 2600);
  });

  contentLoadedPromise.then(() => {

    const introLineSlider = new Swiper('.marquee-wrap-intro', {
      spaceBetween: 20,
      speed: 3000,
      autoplay: {
        delay: 0,
        reverseDirection: false,
      },
      loop: true,
      slidesPerView: 2.7,
      disableOnInteraction: true,
      breakpoints: {
        768: {
          slidesPerView: 3.3,
        },
        1024: {
          slidesPerView: 4.2,
        },
        1200: {
          slidesPerView: 5.7,
        },
        1440: {
          slidesPerView: 6,
        },
        1921: {
          slidesPerView: 7,
        }
      }
    });

    setTimeout(() => {
      preloader.remove();
    }, 2000);

    $('#fullpage').fullpage({
      sectionSelector: '.section',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'thirdPage2', 'fourthPage'],
      slidesNavigation: true,
      scrollHorizontally: true,
      scrollOverflow: false,
      afterLoad: function (origin) {

        setTimeout(() => {
          preloader.remove();
        }, 2000);

        addAnimatedSectionClass(origin);

        if ($(window).width() < 768) {
          gallerySliderLeft.init();
          gallerySliderRight.init();
        }

        if (origin === 'firstPage') {
          $('.header-wrap').addClass('animated');
          scrollAnchorDetect(false, 'firstPage', 'secondPage');
          return;
        }

        if (origin === 'secondPage') {
          scrollAnchorDetect(false, 'secondPage', 'thirdPage');
        }

        if (origin === 'thirdPage') {
          scrollAnchorDetect(false, 'thirdPage', 'thirdPage2');
        }

        if (origin === 'thirdPage2') {
          scrollAnchorDetect(false, 'thirdPage','fourthPage');
        }


        if (origin === 'fourthPage') {

          scrollAnchorDetect(true, 'fourthPage','' );

          if ($(window).width() >= 768) {
            setTimeout(() => {
              gallerySliderLeft.init();
              gallerySliderRight.init();
            }, timeoutTime)
          }
        }

      },
    })

    // Donate slider
    const swiper = new Swiper('.donate-slider', {
      loop: false,
      allowTouchMove: true,
      speed: 300,
      spaceBetween: 50,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      breakpoints: {
        768: {
          allowTouchMove: false,
        },
      }
    });

    const slidesLength = swiper.slides.length;
    let nextSlide = 1;

    $('.slider-show-arrow').on('click', function () {
      nextSlide = swiper.activeIndex + 1;
      let slideToShow = (slidesLength === nextSlide) ? 0 : nextSlide;
      swiper.slideTo(slideToShow);
    })

  });

});
