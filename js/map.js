function GoogleMap(lat, lng) {
  this.lat = lat;
  this.lng = lng;
}

var service;


GoogleMap.prototype.initMap = function() {
  var panorama = new google.maps.StreetViewPanorama(document.getElementById('map'), {
    position: {lat: this.lat, lng: this.lng},
    pov: {
      heading: 288.67,
      pitch: 0
    }
  });
  
  service = new google.maps.places.PlacesService(panorama);
  service.textSearch(requestFoodCarts, callback);
  var requestFoodCarts = {
    location: {lat: this.lat, lng: this.lng},
    radius: '500',
    query: 'restaurant'
  };
};

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        console.log(place);
      }
    }
  }



exports.googleMapModule = GoogleMap;
