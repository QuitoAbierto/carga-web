$( () => {
  const config = require('./config.js')
  let submitButton = $('#submit')
  let newButton = $('#new-stop')
  let messageBox = $('#message-box')
  let nameField = $('#name-field')
  let lineFied = $('#line-field')
  let formFields = $('#form-fields')
  let descriptionField = $('#description-field')
  let savingText = 'Guardando... <span class="fa fa-spinner fa-pulse fa-fw"></span>'
  let successAlert = `<div class="alert alert-success alert-dismissible fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    Parada guardada exitosamente
  </div>`
  let errorAlert = `<div class="alert alert-warning alert-dismissible fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    Todos los campos son obligatorios
  </div>`

  function disableButton() {
    submitButton.addClass('disabled')
    submitButton.html(savingText)
  }

  function successfullySaved() {
    messageBox.html(successAlert)
    newButton.removeClass('hide')
    submitButton.addClass('hide')
    formFields.addClass('form-hidden disabled')
  }

  submitButton.on('click', () => {
    let line = lineFied.val()
    let name = nameField.val()
    let description = descriptionField.val()
    if (!!line && !!name && !!description && !!selectedLocation) {
      disableButton()
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
        success: successfullySaved,
        error: () => {
          console.log('Error accessing the API')
        }
      })
    } else {
      messageBox.html(errorAlert)
    }
  })
})
