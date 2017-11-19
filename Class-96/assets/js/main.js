jQuery(document).ready(function($) {
    
     $(".slider-area").owlCarousel({
         items:1,
         loop:true,
         dots:true,
         autoplay:true,
         nav:false
     });
    
	$(".logo-carousel").owlCarousel({
		 items:5,
         margin:30,
         loop:true,
         dots:true,
         autoplay:true,
         nav:false
    });
});