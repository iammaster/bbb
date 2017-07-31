window.onload = function(){
	$("#Tz_nav .txt").mouseover(function(){
		$(this).addClass("hov").siblings().removeClass("hov");
		var tWid = $(this).width();
		var bWid = tWid + 28;
		var fWid = $(this).position().left + 36;
		$(".bor").stop(true).animate({width:bWid+"px",left:fWid+"px"},500);
	});

	$("#Tz_nav ul").mouseleave(function(){
		$(".bor").stop(true).animate({width:"56px",left:"36px"},200);
		$(this).find("li").eq(0).addClass("hov").siblings().removeClass("hov");
	});

	$(window).scroll(function(){
		var n = parseInt($(window).scrollTop() / $(window).height());
		$("#Tz_l-nav ul li").eq(n).addClass("cho").siblings().removeClass("cho");
	});
}