const config = require('./config.js')
let previousPoint;
let routeInterval;
let successAlert = `<div class="alert alert-success alert-dismissible fade in" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
  Ruta guardada exitosamente
</div>`

let startAlert = `<div class="alert alert-success alert-dismissible fade in" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
  Mapeando ruta...
</div>`

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
  return distance < 0.002;
}

function saveRouteNode(data) {
  if (isDistanceGreaterThanTwoMeters(previousPoint, data.location)) {
    console.log('not saving');
  } else {
    console.log('saving');
    $.ajax({
      url: `${config.api.host}api/ruta`,
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
  routeInterval = setInterval(() => {
    let location = currentLocation
    let data = {
      name: name,
      description: description,
      location: location
    }
    if (!!currentLocation) {
      saveRouteNode(data)
      console.log('data: ', data)
    } else {
      console.log('not saving')
    }
  }, 3000)
}

let playButton = $('#play-button')
let stopButton = $('#stop-button')
let newButton = $('#new-button')
let messageBox = $('#message-box')

playButton.on('click', (e)=> {
  let name = $('#name-field').val()
  let description = $('#description-field').val()
  startRouting(name, description);
  messageBox.html(startAlert)
  playButton.addClass('hide')
  stopButton.removeClass("hide")
})

stopButton.on('click', (e)=> {
  stopButton.addClass('hide')
  messageBox.html(successAlert)
  newButton.removeClass("hide")
  clearInterval(routeInterval)
})
