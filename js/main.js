var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: '.arrow'
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
  });

var menuBotton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuBotton.addEventListener('click', function () {
  menuBotton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})
