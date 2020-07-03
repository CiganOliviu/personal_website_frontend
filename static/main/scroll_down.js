$(function() {
$('.scroll-down').click (function() {
  $('html, body').animate({scrollTop: $('#wrapper').offset().top }, 'slow');
  return false;
});
});
