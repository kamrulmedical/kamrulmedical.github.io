jQuery(document).ready(function($) {
	$(".slide-list").slick({
		prevArrow: "<i class='fa fa-angle-left'></i>",
		nextArrow: "<i class='fa fa-angle-right'></i>",
	});

	$(".course-carousel").slick({
		slidesToShow: 3,
		prevArrow: "<i class='fa fa-angle-left'></i>",
		nextArrow: "<i class='fa fa-angle-right'></i>",
	});

});