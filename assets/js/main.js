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
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
    slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
    slidesToScroll: 6,

        },
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
    dots: false,

        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
    dots: false,

        },
      },
    ],
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