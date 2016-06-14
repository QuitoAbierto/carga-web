let routeMap
let currentLocation
let marker = L.marker()
let circle = L.circle()

function locateUser() {
  routeMap.locate({
    setView: true,
    maxZoom: 18,
    watch: true,
    enableHighAccuracy: true
  })
}

function onLocationFound(e) {
    var radius = e.accuracy / 2
    currentLocation = e.latlng

    marker.setLatLng(e.latlng).update().addTo(routeMap)
    circle.setLatLng(e.latlng).setRadius(radius).addTo(routeMap)
}

function initMap() {
  routeMap = L.map('route-map').setView([-0.1828190562356577, -78.48433256149292], 16)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(routeMap)
  routeMap.on('locationfound', onLocationFound);
  locateUser()
}
