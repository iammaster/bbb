$(function(){
	var liNum = 5*5*5; // 暂且认为li个数为 5*5*5 个
	var tX = 400 , tY = 400 , tZ = 800;  // 水平 垂直间隔
	var firstX = - 2*tX; //第一个li水平偏移量
	var firstY = - 2*tY; //第一个li垂直偏移量
	var firstZ = - 2*tZ; //第一个li Z轴偏移量
		//给#main里面添加 liNum个 li标签
	for ( var i=0 ; i<liNum ; i++ )
	{	var $li = $('<li></li>');
		var iX = (i % 25) % 5; // x方向，要增加的倍数
		var iY = parseInt((i % 25) / 5); //y方向，要增加的倍数
		var iZ = parseInt(i / 25); //z方向，要增加的倍数
		$li.css({
			'transform' : 'translate3d('+ ( firstX + iX*tX ) +'px,'+ ( firstY + iY*tY ) +'px,'+ (firstZ + iZ*tZ) +'px)'
		});
		$('#Tz_main').append($li);
	}

	(function(){
		var nowX , lastX , minusX , nowY , lastY , minusY;
		var roY = 0 , roX = 0;
		$(document).mousedown(function(ev){
			ev = ev || window.event;
			lastX = ev.clientX;
			lastY = ev.clientY;
			$(this).on('mousemove',function(ev){
				ev = ev || window.event; //ev 事件对象 存放事件的相关信息
				nowX = ev.clientX;  // ev.clientX  clientX属性存放鼠标x坐标
				nowY = ev.clientY;
				minusX = nowX - lastX;  // 两者差值
				minusY = nowY - lastY;
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#Tz_main').css({
					'transform' : 'translateZ(-2000px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				})
				lastX = nowX; // 存放前一点的x坐标
				lastY = nowY;
			});
			return false;
		}).mouseup(function(){
			$(this).off('mousemove');
		});
	})()
});