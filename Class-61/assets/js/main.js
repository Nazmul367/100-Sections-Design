(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
      $('.map')
      .gmap3({
        center: [-33.8540399, 150.9893092],
        zoom: 6,
          scrollwheel: false,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .route({
        origin:"48 Pirrama Road, Pyrmont NSW",
        destination:"Bondi Beach, NSW",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      })
      .directionsrenderer(function (results) {
        if (results) {
          return {
            panel: "#box",
            directions: results
          }
        }
      });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	