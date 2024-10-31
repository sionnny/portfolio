$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

//페이지하단 스크롤탑 버튼
$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.btn_gotop').show();
	} else{
		$('.btn_gotop').hide();
	}
});
$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});