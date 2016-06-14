$(function() {
  $('#next-button').click(() => {
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
  })
})
