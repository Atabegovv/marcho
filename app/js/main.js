$(function () {

  $('.burger-menu').on('click' , function(){
    $('.menu , .user-nav , .burger-line').toggleClass('active');
  });

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


  $('.productone-slider__nav').slick({
    asNavFor: '.productone-slider__show',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    infinite: true,
  });
  $('.productone-slider__show').slick({
    asNavFor: '.productone-slider__nav',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: 'linear',
  });


  $('.blogpage-item__slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>',
  });



  $(".product-card__stars").rateYo({
    starWidth: "17px",
    ratedFill: "#ffc35b",
    normalFill: "#ccccce",
    readOnly: true,
  });




  $(".tab_item").not(":first").hide();
  $(".tabs-wrapper .tab").click(function () {
    $(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  $(".price-range__slider").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".price-range__info-from").text(data.from);
      $(".price-range__info-to").text(data.to);
    },
    onChange: function (data) {
      $(".price-range__info-from").text(data.from);
      $(".price-range__info-to").text(data.to);
    },
  });



  $('.catalog-top__select , .productone-btns__regulate').styler();


  const items = document.querySelector('.items');
  const temp = localStorage.getItem('temp');
  items.dataset.temp = temp;
  document.querySelectorAll('button[data-view]').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      items.dataset.temp = view;
      localStorage.setItem('temp', view);
    });
  });


});

let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  function updateClock() {
    const t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
const deadline = $('.promo-clock').attr('data-time');
initializeClock('timer', deadline);