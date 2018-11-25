(function ($) {
	"use strict";

    jQuery(document).ready(function($){
//        slicknav js start
			$("ul#navigation").slicknav({
				prependTo: ".responsive-menu-wrap"
			});
//        slicknav js end   

		$(".testimonial-content").owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3000,
			loop: true,
		});
		
		$(".full-customer").owlCarousel({
			items: 2,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3000,
			loop: true,
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		});

		$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};









    });


    jQuery(window).load(function(){

		jQuery(".portfolio-items").isotope();
    });


}(jQuery));	