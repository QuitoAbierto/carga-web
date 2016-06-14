const config = require('./config.js')
let previousPoint;

function successfullySaved() {
  console.log('chevere')
}

function isDistanceGreaterThanTwoMeters(point1, point2) {
  if (!point1) {
    return false;
  }
  let lat1 = point1.lat
  let lat2 = point2.lat
  let lng1 = point1.lng
  let lng2 = point2.lng
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lng2 - lng1) * p))/2;

  let distance = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  console.log(distance)
  return distance < 0.002;
}

function saveRouteNode(data) {
  if (isDistanceGreaterThanTwoMeters(previousPoint, data.location)) {
    console.log('not saving');
  } else {
    $.ajax({
      url: `${config.api.host}api/route`,
      method: 'POST',
      data: JSON.stringify(data),
      contentType: "application/json",
      success: () => {
        previousPoint = data.location
      },
      error: () => {
        console.log('Error accessing the API')
      }
    })
  }
}

function startRouting(name, description) {
  setInterval(() => {
    let location = currentLocation
    let data = {
      name: name,
      description: description,
      location: location
    }
    saveRouteNode(data)
    console.log(data)
  }, 3000)
}

$('#play-button').on('click', (e)=> {
  let name = $('#name-field').val()
  let description = $('#description-field').val()
  startRouting(name, description);
})
