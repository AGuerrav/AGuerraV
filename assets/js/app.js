$(document).ready(function() {
  $('.info-proyects').hide();
  $('.skills').hide();
  $('#about-me').hide();
  $('.cv').hide();

  $('.me').click(function() {
    $('#about-me').show();
    $('#home').hide();
    $('.info-proyects').hide();
    $('.skills').hide();
    $('.cv').hide();
  });
  $('.intro-menu').click(function() {
    $('#about-me').hide();
    $('#home').show();
    $('.info-proyects').hide();
    $('.skills').hide();
    $('.cv').hide();
  });

  $('.proj').click(function() {
    $('#about-me').hide();
    $('#home').hide();
    $('.info-proyects').show();
    $('.skills').hide();
    $('.cv').hide();
  });
  $('.skill-menu').click(function() {
    $('#about-me').hide();
    $('#home').hide();
    $('.info-proyects').hide();
    $('.skills').show();
    $('.cv').hide();
  });
  $('.cv-menu').click(function() {
    $('#about-me').hide();
    $('#home').hide();
    $('.info-proyects').hide();
    $('.skills').hide();
    $('.cv').show();
  });
  $( ".me" ).on( "click", function() {
    console.log('holo');
  $( "#menu-content" ).removeClass( "in");
});
$( ".proj" ).on( "click", function() {
  console.log('holo');
$( "#menu-content" ).removeClass( "in");
});
$( ".skill-menu" ).on( "click", function() {
  console.log('holo');
$( "#menu-content" ).removeClass( "in");
});
$( ".cv-menu" ).on( "click", function() {
  console.log('holo');
$( "#menu-content" ).removeClass( "in");
});
$('.icon-info').click(function (event) {
    $(this).toggleClass('drop');
});

});
// 
// $(function domReady() {
//   var $image = $('#home');
//
//   try {
//     $image.ripples({
//       resolution: 512,
//       dropRadius: 20, // px
//       perturbance: 0.04,
//     });
//     $image.ripples('play');
//   } catch (e) {
//     $('.error').show().text(e);
//   }
//
//   // Automatic drops
//   // setInterval(function() {
//   //   var $el = $image;
//   //   var x = Math.random() * $el.outerWidth();
//   //   var y = Math.random() * $el.outerHeight();
//   //   var dropRadius = 25;
//   //   var strength = 0.1 + Math.random() * 0.1;
//   //   $el.ripples('drop', x, y, dropRadius, strength);
//   // }, 400);
// });
// $('.button-about').on('click', function() {
//   $('#home').ripples('destroy');
// });
// $('.close').on('click', function() {
//   $(function domReady() {
//     var $image = $('#home');
//
//     try {
//       $image.ripples({
//         resolution: 512,
//         dropRadius: 20, //px
//         perturbance: 0.04,
//       });
//       $image.ripples('play');
//     } catch (e) {
//       $('.error').show().text(e);
//     }
//   });
// });
// function htmlbodyHeightUpdate(){
// var height3 = $( window ).height()
// var height1 = $('.nav').height()+50
// height2 = $('.main').height()
// if(height2 > height3){
//   $('html').height(Math.max(height1,height3,height2)+10);
//   $('body').height(Math.max(height1,height3,height2)+10);
// }
// else
// {
//   $('html').height(Math.max(height1,height3,height2));
//   $('body').height(Math.max(height1,height3,height2));
// }
//
// }
