$( () => {
  const config = require('./config.js')
  let submitButton = $('#submit')
  let messageBox = $('#message-box')
  let nameField = $('#name-field')
  let lineFied = $('#line-field')
  let descriptionField = $('#description-field')
  let successAlert = `<div class="alert alert-success alert-dismissible fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    Guardado exitosamente
  </div>`
  let errorAlert = `<div class="alert alert-warning alert-dismissible fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    Todos los campos son obligatorios
  </div>`
  submitButton.on('click', () => {
    let line = lineFied.val()
    let name = nameField.val()
    let description = descriptionField.val()
    if (!!line && !!name && !!description && !!selectedLocation) {
      let data = {
        line: line,
        name: name,
        description: description,
        location: selectedLocation
      }
      $.ajax({
        url: `${config.api.host}api/parada`,
        method: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: () => {
          nameField.val('')
          descriptionField.val('')
          messageBox.html(successAlert)
        },
        error: () => {
          console.log('Error accessing the API')
        }
      })
    } else {
      messageBox.html(errorAlert)
    }
  })
})
