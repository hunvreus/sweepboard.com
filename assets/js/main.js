$(document).ready(function() {
  $('.js-fullheight').css('height', $(window).height() - ($('header').height() + 40));
})

window.scrollReveal = new scrollReveal();