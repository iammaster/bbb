var imgLen = $("img").length;
var lastIndex = Math.floor(imgLen/2);

var imgLeft = [];

for(var i=0;i<imgLen;i++){
	if(i<lastIndex){
		$('img').eq(i).addClass('front');
	}else if(i>lastIndex){
		$('img').eq(i).addClass('back');
	}else{
		$('img').eq(i).addClass('now');
	}
}

function mid(){
	var oWid = $(window).width();
	var mIndex = $('.now').index();
	$('.now').css('left',oWid/2-150+'px');
	for(var i=0;i<imgLen;i++){
		$('img').eq(i).css('left',oWid/2-150-100*(mIndex-i)+'px');
		imgLeft[i] = parseInt($('img').eq(i).css('left'));
	}
}
$(window).resize(function(){
	mid();
});
mid();
$('img').click(function(){
	var nowIndex = $(this).index();
	
	for(var i=0;i<imgLen;i++){
		imgLeft[i] -=  100*(nowIndex-lastIndex);
		$('img').eq(i).css('left',imgLeft[i]);
	}

	for( var i=0;i<imgLen;i++){
		if(i<nowIndex){
			$('img').eq(i).removeClass().addClass('front');
		}else if(i>nowIndex){
			$('img').eq(i).removeClass().addClass('back');
		}
	}
	lastIndex = nowIndex;
	$(this).removeClass().addClass('now').siblings().removeClass('now');
});