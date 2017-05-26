(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".featureed-trailors-carousel").owlCarousel({
           items: 1,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
        });

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	