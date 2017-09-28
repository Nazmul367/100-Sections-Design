(function ($) {
    "use strict";

    jQuery(document).ready(function($){

        $(".homepage-slides").owlCarousel({
            items: 1,
            autoplay: false,
            dots: true,
            nav: true,
            loop: true,
            dotsData: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 