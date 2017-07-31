$(function(){
	//容器对象
	var $container = $("#Tz_container");
	var $loader = $("#Tz_loader");
	
	//固定宽度
	var width = 200;
	//间距
	var space = 16;
	//真实距离
	var outerWidth = width +space;
	//求列数
	var cells = 0;
	//数据jsonp拿数据包
	var sUrl = 'https://www.wookmark.com/api/json/popular?callback=?';
	var pageNo = 0;
	var mark = true;
	
	function getCells(){
		//求出列数
		cells = Math.floor(window.innerWidth /outerWidth);
		if(cells<3)cells = 3;
		if(cells>6)cells = 6;
		//将容器的宽度用真实的大小进行计算，就完整的宽度
		$container.width(cells * outerWidth-space);
	}
	
	getCells();
	
	//定义第一排的图片的位置
	var arrLeft = [];
	var arrTop = [];
	for(var i=0;i<cells;i++){
		arrTop.push(0);
		arrLeft.push(i*outerWidth);//固定不变的
	}
	
	var mark = true;
	function loadData(){
		if(mark){
			$loader.show();
			mark = false;
			$.getJSON(sUrl,{page:pageNo},function(data){
				data.forEach(function(obj,index){
					//计算出图片宽度缩小以后的比例，用户计算高度的缩放比例.
					var sbit = width/obj.width;
					var iheight = obj.height *sbit;
					//创建一个div
					var $div = $("<div/>");
					//获取到最小的位置,下一元素将放在位置最短的位置后面
					var minindex = getMinIndex(arrTop);
					//放一张图片
					$div.addClass("items").animate({
						left:arrLeft[minindex],
						top:arrTop[minindex]
					},"slow").html("<a href='"+obj.url+"' title='"+obj.title+"' target='_blank'><img src='"+obj.preview+"' width='"+width+"' height='"+iheight+"'/></a><p>我是描述内容</p>");
					//添加到容器中
					$container.append($div);
					//累加的目的，是决定下一个元素的top的起点。
					arrTop[minindex] += $div.height() +space;
				});
				mark = true;
				$loader.hide();
			});
		}
	};
	
	loadData();
	
	//滚动加载数据
	$(window).on("scroll",function(){
		//获取滚动条的位置
		var sheight = $(window).scrollTop() + $(window).innerHeight();
		//最小距离
		var minindex = getMinIndex(arrTop) + $container.offset().top;//最小位置
		if(minindex < sheight && mark){
			pageNo++;
			loadData();
		}
	});
	//滚动加载数据
	$(window).on("resize",function(){
		var oldCells = cells;
		getCells();
		//原来的列和现在的列一样就返回不执行
		if(oldCells==cells)return;
		arrLeft=[];
		arrTop=[];
		for (var i=0;i<cells;i++) {
			arrTop.push(0);
			arrLeft.push(i*outerWidth)
		}
		
		//缩小的时候也要加载数据
		var maxHeight = $(window).scrollTop()+$(window).innerHeight();
		var minIndex  = getMinIndex(arrTop);
		if(arrTop[minIndex]+$container.offset().top < maxHeight){
			pageNo++;
			loadData();
		}
		
		//获取现有的元素进行交换位置
		var $items =  $container.find(".items");
		$items.each(function(){
			var minindex = getMinIndex(arrTop);
			//设定位置
			$(this).stop(true,true).animate({
				left:arrLeft[minindex],
				top:arrTop[minindex]
			},"slow");
			//替换数组中的高度
			arrTop[minindex] += $(this).height()+space;
		});
	
	});
});
/*找到数组最小元素坐在的位置和元素*/
function getMinIndex(arr){
	var value = arr[0];
	var index = 0;
	for (var i=1;i<arr.length;i++) {
		if(arr[i] < value){
			value = arr[i];
			index = i;
		}
	}
	return index;
};