$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside__menu").removeClass("rightside__menu--close");
  });
  $(".rightside__menu-close").on("click", function () {
    $(".rightside__menu").addClass("rightside__menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  $(".contact__slider").slick({
    slidesToShow:10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
  });

  $('.article-slider__box').slick({
prevArrow: '<div class="article-slider__arrows"><button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./assets/img/icons/slider-blog-left.svg" alt=""></button></div>',
nextArrow: '<div class="article-slider__arrows"><button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./assets/img/icons/slider-blog-right.svg" alt=""></button></div>',
  });

  var mixer = mixitup('.gallery__inner',{
    load: {
      filter: '.living'
  }
  });
});