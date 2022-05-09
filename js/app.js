$(function () {
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".btn_next",
          prevEl: ".btn_prev",
        },
        pagination: {
          el: ".btn_pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
})