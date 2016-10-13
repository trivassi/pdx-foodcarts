function FoodCart(name, lat, lng, breakfast, dinner, id) {
  this.name = name;
  this.lat = lat;
  this.lng = lng;
  this.breakfast = breakfast;
  this.dinner = dinner;
  this.heading = heading;
  this.id = id;
}

FoodCart.prototype.getName = function () {
  return this.name;
};
FoodCart.prototype.getLat = function () {
  return this.lat;
};
FoodCart.prototype.getLng = function () {
  return this.lng;
};
FoodCart.prototype.getBreakfast = function () {
  return this.breakfast;
};
FoodCart.prototype.getDinner = function () {
  return this.dinner;
};
FoodCart.prototype.getHeading = function () {
  return this.heading;
};
FoodCart.prototype.getId = function () {
  return this.id;
};


FoodCart.prototype.chooseLocation = function() {
  panorama = new google.maps.StreetViewPanorama(document.getElementById('map'), {
    position: {lat: this.lat, lng: this.lng},
    pov: {
      heading: 288.67,
      pitch: 0
    }
  });
};

exports.foodCartModule = FoodCart;
