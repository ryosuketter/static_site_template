var accordionSpeed = 400;

function rand(min, max) {
  return Math.floor(Math.random() * (max + 1) - min) + min;
}

// $(function () {
//   var offsetY = 100;
//   var time = 600;
//
//   $(document).on('click', '[href^="#"]', function () {
//     var target = $(this.hash);
//     if (!target.length) return;
//     var targetY = target.offset().top - offsetY;
//     if ($(this).data('duration') !== undefined) {
//       time = $(this).data('duration');
//     }
//     $('html, body').animate({
//       scrollTop: targetY
//     }, time, 'swing');
//
//     setTimeout(function () {
//       if (target.find('.accordion-contents').get(0)) {
//         target.find('.accordion-contents').slideDown();
//       }
//     }, time);
//
//     return false;
//   });
//
// });

$(function () {

  $('.accordion-contents').hide();
  $('[class*="internship-title"]').on('click', function () {
    $(this).next('.accordion-contents').slideToggle();
  });

  (function () {
    var $btn = $('#menu_btn');
    $btn.on('click', function () {
      $(document.body).toggleClass('show-menu');
    });
    $('#menu a').on('click',function(){
        $(document.body).removeClass('show-menu');
    })
  })();
  // $('a[href^="#internship"]').on('click', function() {
  //   var target = $(this.hash);
  //   if (!target.get(0)) return;
  //   var $html = $('html');
  //   var top = target.offset().top;
  //   var winH = $(window).height();
  //   var bodyH = document.body.clientHeight;
  //   var diff = bodyH - (top + winH);
  //   if (diff < 0) {
  //     $html.css({ 'paddingBottom': diff * -1 });
  //     setTimeout(function() {
  //       $html.css({ 'paddingBottom': 0 });
  //     }, 1000 + accordionSpeed);
  //   }
  // });
});

// メニューバーのくるくるさせるやつ
$('.menu-btn-wrapper').click(function(){
  $(this).toggleClass('clicked');
});
