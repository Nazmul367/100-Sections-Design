(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
      var center = [23.7823453, 90.4274226];
        
    $('.map')
      .gmap3({
        center: center,
        zoom: 16,
        scrollwheel: false,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
    .circle({
        center: center,
        radius : 250,
        fillColor : "#ddd",
        strokeColor : "green"
    }); 
        
    $('.map2')
      .gmap3({
        center: [23.7823453, 90.4274226],
        zoom: 9,
        scrollwheel: false,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .route({
        origin:"Dhaka,Bangladesh",
        destination:"Rajshahi,Bangladesh",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      })
        
      .directionsrenderer(function (results) {
        if (results) {
          return {
            panel: "#box",
            directions: results
          }
        }
      })
        
        
      .infowindow({
        position: center,
        content: "Welcome to Dhaka"
      })
      .then(function (infowindow) {
        infowindow.open(this.get(0));
      });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	