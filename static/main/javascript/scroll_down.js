$(function() {
$('.scroll-down').click (function() {
  $('html, body').animate({scrollTop: $('#progresser').offset().top }, 'slow');
  return false;
});
});
