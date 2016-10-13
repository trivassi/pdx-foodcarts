function GoogleMap(lat, lng) {
  this.lat = lat;
  this.lng = lng;
}

function GooglePlaces() {
}

var service;
var panorama;
var map;
var foodCartsLocation = {lat: this.lat, lng: this.lng};

GoogleMap.prototype.initMap = function() {

  panorama = new google.maps.StreetViewPanorama(document.getElementById('streetviewmap'), {
    position: {lat: this.lat, lng: this.lng},
    pov: {
      heading: 288.67,
      pitch: 0
    }
  });

  };

GooglePlaces.prototype.getPlaces = function() {

  map = new google.maps.Map(document.getElementById('map'), {
      center: foodCartsLocation,
      zoom: 15
    });

  var alderPod = new google.maps.LatLngBounds(
    new google.maps.LatLng(45.5210298, -122.6816663),
    new google.maps.LatLng(45.5208193, -122.6812908)
  );

  var alderFoodCarts = {
    bounds: alderPod.getBounds(),
    types: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(alderFoodCarts, callback);

};


function callback(results) {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
    var place = results[i];
    console.log(place);
  }
}



exports.googleMapModule = GoogleMap;
