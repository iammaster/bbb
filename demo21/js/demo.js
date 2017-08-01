var $audio = $("#myMusic");
var $progress = $(".progress");
var $bar = $(".bar");
var $pause = $(".pause");
$(".play").click(function(){
	$(this).hide();
	play();
});
$(".pause").click(function(){
	$(this).hide();
	pause();
});
function play(){
	$audio.get(0).play();
	$(".pause").show();
	$(".singer").addClass("rotate");
}
function pause(){
	$audio.get(0).pause();
	$(".play").show();
	$(".singer").removeClass("rotate");
}

$audio.get(0).addEventListener("timeupdate",function(){
	var scale = this.currentTime/this.duration;
	var allWidth = $progress.width() - $bar.width();
	var _left = allWidth * scale;
	$bar.css("transform","translate("+_left+"px,-0.15rem)");
	$(".bg").css("width",+_left+"px");
});

$bar.get(0).addEventListener("touchstart",function(e){
	var x = e.changedTouches[0].pageX - $bar.offset().left;
	document.addEventListener("touchmove",function(e){
		var l = e.changedTouches[0].pageX;
		var _left = l - x - $progress.offset().left;
		if (_left<0)
		{
			_left = 0;
		}
		if (_left > $progress.width() - $bar.width())
		{
			_left = $progress.width() - $bar.width()
		}
		$bar.css("transform","translate("+_left+"px,-0.15rem)");
		$(".bg").css("width",+_left+"px");
	
		var scale = _left / ($progress.width() - $bar.width());
		$audio.get(0).currentTime = scale*$audio.get(0).duration;
	});
	return false;
});
var arr = [
	{'src': '付笛声任静 - 知心爱人.mp3'},
	{'src': '儿童歌曲 - 捉泥鳅.mp3'},
	{'src': '儿童歌曲 - 童年.mp3'},
	{'src': '刘珂矣 - 半壶纱.mp3'},
	{'src': '李茂山 - 迟来的爱.mp3'},
	{'src': '王菲 - 爱不可及.mp3'}
];
function title(){
	var title=arr[n].src.split("-");
	$("header h3").html(title[1].split(".")[0]);
	$("header p").html(title[0]);
}
var n = 0;
$(".next").click(function () {
	n++;
	n%=arr.length;
	title();
	$(".play").hide();
	$audio.get(0).src = "mp3/"+arr[n].src;
	play();
})
$(".prev").click(function () {
	n--;
	if (n<0) {
		n = arr.length-1;
	}
	title();
	$audio.get(0).src = "mp3/"+arr[n].src;
	$(".play").hide();
	play();
})