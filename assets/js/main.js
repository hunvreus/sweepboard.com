$(document).ready(function() {
  console.log('ready...')
  $('.js-fullheight').css('height', $(window).height() - ($('header').height() + 40));
})