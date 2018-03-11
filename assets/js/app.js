$(document).ready(function() {
  // console.log('holo');
  // htmlbodyHeightUpdate();
  // $(window).resize(function() {
  // 	htmlbodyHeightUpdate();
  // });;
  // $(window).scroll(function() {
  //   height2 = $('.main').height();
  // 			htmlbodyHeightUpdate();
  // });;
  $('#project-menu').click(function() {
    $('.intro').hide();
  });
  $('#project-menu').click(function() {
    $('.info-proyects').hide();
  });
  $('#project-menu').click(function() {
    $('.skills').hide();
  });
});
//
// $(function domReady() {
//   var $image = $('.intro');
//
//   try {
//     $image.ripples({
//       resolution: 512,
//       dropRadius: 20, //px
//       perturbance: 0.04,
//     });
//     $image.ripples('play');
//   } catch (e) {
//     $('.error').show().text(e);
//   }
// //
// //   // Automatic drops
// //   setInterval(function() {
// //     var $el = $image;
// //     var x = Math.random() * $el.outerWidth();
// //     var y = Math.random() * $el.outerHeight();
// //     var dropRadius = 25;
// //     var strength = 0.1 + Math.random() * 0.1;
// //     $el.ripples('drop', x, y, dropRadius, strength);
// //   }, 400);
// });
// $('.button-about').on('click', function() {
//   $('.intro').ripples('destroy');
// });
// $('.close').on('click', function() {
//   $(function domReady() {
//     var $image = $('.intro');
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
