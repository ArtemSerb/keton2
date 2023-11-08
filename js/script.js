$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1750,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
});


$(document).ready(function () {
	$('.second_slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

