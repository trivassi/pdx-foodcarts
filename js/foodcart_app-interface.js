var GoogleMap = require('./../js/map.js').googleMapModule;
var apiKey = require('./../.env').apiKey;
var FoodCart = require('./../js/foodcart.js').foodCartModule;


$(document).ready(function() {

var googleMapsScript = document.createElement('script');

googleMapsScript.type = 'text/javascript';
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key='+ apiKey;
googleMapsScript.async = true;
googleMapsScript.defer = true;

$("head").append(googleMapsScript);

var googlePlacesScript = document.createElement('script');

googleMapsScript.type = 'text/javascript';
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key' + apiKey + '&libraries=places';

$("head").append(googlePlacesScript);

var foodCartMap = new GoogleMap(45.5208161, -122.6805825);

setTimeout(function(){
  foodCartMap.initMap();
}, 1000);

});
