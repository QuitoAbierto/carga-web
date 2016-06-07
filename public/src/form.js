$(function() {
  $('.next').click(() => {
    $('.next').removeClass("fadeInUp").addClass('fadeOutDown')
    if ($('.progress-form li').hasClass('active')) {
      $('p.alerted').removeClass('fadeInLeft').addClass('fadeOutUp')
      let $active = $('li.active')
      let $inactive = $('li.inactive')
      $active.removeClass("fadeInRightBig active").addClass('fadeOutLeftBig')
      $inactive.removeClass("hide inactive").addClass("active fadeInRightBig").next().addClass('inactive')
    }
  })
})
