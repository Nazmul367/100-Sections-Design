(function ($) {
    "use strict";

    jQuery(document).ready(function() {
    
      $(".theme-one-select").on('click', function() {
          $("body").addClass("theme-1").removeClass("theme-2");
          return false;
      });
        
      $(".theme-two-select").on('click', function() {
          $("body").addClass("theme-2").removeClass("theme-1");
          return false;
      });
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












