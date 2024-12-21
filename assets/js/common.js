$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

//페이지하단 스크롤탑 버튼
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".btn_gotop").show();
  } else {
    $(".btn_gotop").hide();
  }
});
$(".btn_gotop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400
  );
  return false;
});

// // home 으로 바로 이동
// $(document).ready(function () {
//   $(".menu_home").click(function () {
//     var offset = $("html, body").offset();
//     $("html").animate(
//       {
//         scrollTop: scrollTop-59,
//       },
//       300
//     );
//   });
// });

//about으로 바로 이동
// $(document).ready(function () {
//   $(".menu_about").click(function () {
//     var offset = $(".section02").offset();
//     $("html").animate(
//       {
//         scrollTop: offset.top,
//       },
//       300
//     );
//   });
// });


