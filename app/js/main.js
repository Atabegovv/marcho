$(function () {

  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  $(".product-card__stars").rateYo({
    starWidth: "17px",
    ratedFill: "#ffc35b",
    normalFill: "#ccccce",
    readOnly: true,
  });

});