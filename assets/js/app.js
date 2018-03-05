$(document).ready(function() {

});
//
$(function domReady() {
  var $image = $('.intro');

  try {
    $image.ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });
    $image.ripples('play');
  } catch (e) {
    $('.error').show().text(e);
  }
//
//   // Automatic drops
//   setInterval(function() {
//     var $el = $image;
//     var x = Math.random() * $el.outerWidth();
//     var y = Math.random() * $el.outerHeight();
//     var dropRadius = 25;
//     var strength = 0.1 + Math.random() * 0.1;
//     $el.ripples('drop', x, y, dropRadius, strength);
//   }, 400);
});
$('.button-about').on('click', function() {
  $('.intro').ripples('destroy');
});
$('.close').on('click', function() {
  $(function domReady() {
    var $image = $('.intro');

    try {
      $image.ripples({
        resolution: 512,
        dropRadius: 20, //px
        perturbance: 0.04,
      });
      $image.ripples('play');
    } catch (e) {
      $('.error').show().text(e);
    }
    });
});
