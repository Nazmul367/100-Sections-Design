(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".fixed-area2").sticky();


    });

    jQuery(document).ready(function($){

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 400) {
                $(".fixed-area").addClass("is-strick");
            }else{
                $(".fixed-area").removeClass("is-strick");
            }
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	