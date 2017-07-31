var $li = $('.box ul li');
$li.hover(function(){
	$(this).find('p').stop().animate({bottom:'0px'},300);
	$(this).find('.top').stop(true).delay(300).animate({width:'243px'},300);
	$(this).find('.bottom').stop(true).delay(300).animate({width:'243px'},300);
	$(this).find('.left').stop(true).animate({height:'243px'},300);
	$(this).find('.right').stop(true).animate({height:'243px'},300);
},function(){
	$(this).find('p').stop().animate({bottom:'-50px'},300);
	$(this).find('.top').stop(true).animate({width:0},300);
	$(this).find('.bottom').stop(true).animate({width:0},300);
	$(this).find('.left').stop(true).delay(200).animate({height:0},300);
	$(this).find('.right').stop(true).delay(200).animate({height:0},300);
});