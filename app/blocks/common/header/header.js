//MENU HIDDEN
let menuBurger = $('.tog-nav'),
  menuWrapper = $('.main-menu-wrap'),
  menuWrapperLinks = menuWrapper.find('a');

menuBurger.on('click', () => {
  menuToggle();
});

if ($(window).width() < 768) {
  menuWrapperLinks.on('click', (e) => {
    menuWrapperLinks.removeClass('active');
    e.target.classList.add('active');
    menuToggle()
  });
}

function menuToggle() {
  menuBurger.toggleClass('active');
  $('html').toggleClass('menu-opened');
}

$(window).on('resize', () => {
  if ($(window).width() > 767) {
    menuWrapper.removeAttr('style');
  } else {
    menuBurger.removeClass('active');
  }
});

