jQuery(document).ready(function($) {
	$(".hero-area").owlCarousel({
		items:1,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
	$(".featured-box-bottom").owlCarousel({
		items:4,
		margin:20,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});


});