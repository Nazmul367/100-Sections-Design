(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $('#clock').countdown('2019/08/14', function(event) {
          $(this).html(event.strftime('<span class="coundown-wrap"> <span class="single-counter-item"> %w <br /><span> Weeks </span></span> <span class="single-counter-item"> %D <br /><span> Days </span></span> <span class="single-counter-item"> %H <br /><span> Hours </span></span> <span class="single-counter-item"> %M <br /><span> Minutes </span></span> <span class="single-counter-item"> %S <br /><span> Seconds </span></span> </span>'));
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	