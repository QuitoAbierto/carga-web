$(function() {
  let errorAlert = `<div class="alert alert-warning alert-dismissible fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    Todos los campos son obligatorios
  </div>`
  let messageBox = $('#message-box')
  $('#next-button').click(() => {
    let name = $('#name-field').val()
    let description = $('#description-field').val()
    if (!!name && !!description) {
      $('#next-button').removeClass("fadeInUp").addClass('fadeOutDown')
      if ($('.progress-form li').hasClass('active')) {
        $('p.alerted').removeClass('fadeInLeft').addClass('fadeOutUp')
        let $active = $('li.active')
        let $inactive = $('li.inactive')
        let $play = $('#play-button')
        $active.removeClass("fadeInRightBig active").addClass('fadeOutLeftBig')
        $inactive.removeClass("hide inactive").addClass("active fadeInRightBig").next().addClass('inactive')
        $play.removeClass("hide").addClass('fadeInUp')
      }
      initMap();
    } else {
      messageBox.html(errorAlert)
    }
  })
})
