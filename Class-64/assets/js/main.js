(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".case-study-carousel").owlCarousel({
            items: 3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".logo-carousel").owlCarousel({
            items: 7,
            margin:30,
            loop:true,
            nav:false,
            dots:false,
			autoplay:true,
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	