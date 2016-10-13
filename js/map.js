function GoogleMap(lat, lng) {
  this.lat = lat;
  this.lng = lng;
}

var service;
var panorama;
var map;
var placeId;
var placeDetails = [];

// function FoodCart(name, lat, lng, breakfast, dinner, id) {
//   this.name = name;
//   this.lat = lat;
//   this.lng = lng;
//   this.breakfast = breakfast;
//   this.dinner = dinner;
//   this.heading = heading;
//   this.id = id;
// }



GoogleMap.prototype.initMap = function() {

  panorama = new google.maps.StreetViewPanorama(document.getElementById('streetviewmap'), {
    position: {lat: this.lat, lng: this.lng},
    pov: {
      heading: 288.67,
      pitch: 0
    }
  });

  var foodCartsLocation = {lat: this.lat, lng: this.lng};

  map = new google.maps.Map(document.getElementById('map'), {
      center: foodCartsLocation,
      zoom: 15
    });


  var alderFoodCarts = {
    location: foodCartsLocation,
    radius: '80',
    types: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(alderFoodCarts, callback);

};

function callback(results) {
      for (var i = 0; i < results.length; i++) {
        placeId = results[i].id;
        console.log(placeId);
      }
      placeDetails = service.getDetails(placeId[i]);
      console.log(placeDetails);
}

// function getDetails(ids){
//   for (var i = 0; i < ids.length; i++) {
//     placeDetails = service.getDetails(ids[i]);
//     console.log(placeDetails);
//   }
// }



// function callback(results) {
//       for (var i = 0; i < results.length; i++) {
//         var place = results[i];
//         console.log(place);
//       }
// }

// for (var j=0; j < place.lenght; j++){
//   var ids = service.getDetails(place[i].id);
//   console.log(placeDetails);






exports.googleMapModule = GoogleMap;
