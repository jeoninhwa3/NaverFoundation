
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
      });

$(function() {
	newTabmenu();
})

	//   new_section tab menu
	function newTabmenu() {
		$('.tab_menu li').click(function(e) {
			e.preventDefault();
			$('.tab_menu li').remove('on');
			$(this).addclass('on'); 
	
			const idx = $(this).index();
		})
	}
	