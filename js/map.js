function initialize() {
  var x = 59.936379;
  var y = 30.321495;
  var con_map = document.querySelector(".contact__map");
  con_map.classList.add("contact__map--js");


  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(x, y),
    scrollwheel: false,
    disableDefaultUI: true
  }
  var map = new  google.maps.Map(
    document.querySelector(".contact__map"),
    mapOptions
  );
  var image = "img/icon-map-pin.svg";
  var myLatLng = new google.maps.LatLng(x, y);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
