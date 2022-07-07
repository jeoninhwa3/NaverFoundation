	// jquery
	$(function() {
		Tabmenu();
	})

	// fullpage
	new fullpage('.container', {
		scrollingSpeed: 1000,
	});  

	// main slide
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
		loop: true,
		autoplay: true,
		// initialSlide: 0,
		// loopAdditionalSlides: 1,
      });

	// news_section tabmenu
	function Tabmenu() {
		$(".tab_menu > li").click(function () {
			$(".tab_menu > li").removeClass("on");
			$(this).addClass("on");

			tap = $(this).attr('data-tab')
			$(".tab_list").removeClass("active");
			$("#" + tap).addClass("active");
		});
	};

	// const tabMenuLi = document.querySelectorAll('tab_menu > li');
	// function Tabmenu() {
	// 	tabMenuLi.classList.remove('on');
	// 	$(this).classList.add('on'); 
	// }

	// tabMenuLi.addEventListener('click', Tabmenu);