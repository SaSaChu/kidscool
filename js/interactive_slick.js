$(function () {
    if ( $(window).width() < 450 ) {

		if ($('.banner1').length) {
			
			$('.banner1 .boxs').slick({
				infinite: false,
				prevArrow: $('.banner1 label.left'),
				nextArrow: $('.banner1 label.right'),
			});	
		}
		
		if ($('.banner2').length) {
			$('.banner2 .boxs').slick({
				infinite: false,
				prevArrow: $('.banner2 label.left'),
				nextArrow: $('.banner2 label.right'),
			});
		}
		
		if ($('.banner3').length) {
			$('.banner3 .boxs').slick({
				prevArrow: $('.banner3 label.left'),
				nextArrow: $('.banner3 label.right'),
			});
		}
	
		if($('.show-box').length) {
			$('.writeCentBoxs').slick({
				arrows: true,
				prevArrow: $('.icon-arrow-left-thick'),
				nextArrow: $('.icon-arrow-right-thick'),
			});
		}
	}
});
