(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		$(".testimonial-content-bottom-area").owlCarousel({
			items: 4,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			loop: true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		});

		$(".customer-content").owlCarousel({
			items: 2,
			nav: false,
			dots: true,
			autoplay: false,
			autoplayTimeout: 3000,
			loop: true,
			margin: 30,
		});







    });


    jQuery(window).load(function(){

    });


}(jQuery));	