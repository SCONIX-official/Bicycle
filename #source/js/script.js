/* ibg */
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();
/* active */

$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu , .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/* Slider */
$(document).ready(function (){
	$('.slider__body').slick({
		//autoplay:true,
		//infinite:false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight:true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		nextArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
});