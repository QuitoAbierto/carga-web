let myMap = L.map('my-map').setView([-0.1828190562356577, -78.48433256149292], 16)
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)

let selectedLocation = undefined

myMap.locate({setView: true, maxZoom: 18})
let myMarker = L.marker([-0.1828190562356577, -78.48433256149292])
let oval = L.icon({
  iconUrl: '/images/circle.png',
  iconAnchor: [8, 8],
  iconSize: [16, 16]
})
let marker = L.marker([], {
  icon: oval
})
let circle = L.circle()

function addMarker(e) {
  myMarker.setLatLng(e.latlng)
  myMarker.update()
  console.log(e.latlng)
  selectedLocation = e.latlng
  myMarker.addTo(myMap)
  $('#next-button').removeClass('hide')
}

let locatorIcon = 'glyphicon glyphicon-screenshot'
let loadingIcon = 'glyphicon glyphicon-refresh spin'
let icon = $('#locator span')

function locationFound(e) {
  var radius = e.accuracy / 2
  icon.removeClass(loadingIcon)
  icon.addClass(locatorIcon)
  marker.setLatLng(e.latlng).update().addTo(myMap)
  circle.setLatLng(e.latlng).setRadius(radius).addTo(myMap)
}

myMap.on('click', addMarker)
myMap.on('locationfound', locationFound)

function locateUser() {
  icon.removeClass(locatorIcon)
  icon.addClass(loadingIcon)
  myMap.locate({setView: true, maxZoom: 18})
}

$('#locator').on('click', locateUser)
