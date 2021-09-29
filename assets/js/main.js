
$(document).ready(function () {

  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('.header-navbar__btn');
    $('.header-navbar__btn--active').toggleClass('.header-navbar__list');
  });
});
