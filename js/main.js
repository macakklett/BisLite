$(function(){

    $('.slider_inner').slick({
      arrows: false,
      dots: true,
    });

    $('.works_inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-works/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/slider-works/arrow-right.svg" alt=""></button>',
    });

  });