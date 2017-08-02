var oShow = document.getElementById("Tz_show");
var oBox = document.getElementById("Tz_box");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var oLi = oBox.getElementsByTagName("ul")[0].getElementsByTagName("li");
var oImg = oBox.getElementsByTagName("ul")[0].getElementsByTagName("img");
oShow.iNow = 0;//给oShow 对象添加一个自定义属性保存当前显示的图片
oShow.urls = [];//保存图片路径
oShow.off = false;
var h = oBox.offsetHeight;
var w = oBox.offsetWidth;
window.onload = function(){
	w = oBox.offsetWidth;
	h = oBox.offsetHeight;
	init();
}
init();
function init(){
	for (var i=0;i<10 ;i++ )
	{
		var oDiv1 = document.createElement("div");
		var oDiv2 = document.createElement("div");
		oDiv1.style.height = h/10+"px";
		oDiv2.style.height = h/10+"px";
		oDiv2.className = 'div2';
		oDiv1.innerHTML = "<em class='em1' style='background-position:0px -"+i*h/10+"px'></em><span class='span1'></span><em class='em2' style='background-position:0px -"+i*h/10+"px'></em><span class='span2'></span>";
		oDiv2.innerHTML = "<em class='em1' style='background-position:-"+w/2+"px -"+i*h/10+"px'></em><span class='span1'></span><em class='em2' style='background-position:-"+w/2+"px -"+i*h/10+"px'></em><span class='span2'></span>";
		oShow.appendChild(oDiv1);
		oShow.appendChild(oDiv2);
	}
}

oLi[0].style.display = "block";
//获取所有的图片路径
for (var i=0;i<oImg.length;i++)
{
	oShow.urls.push(oImg[i].getAttribute("src"));
}

prev.onclick = function(){
	if (oShow.off)
	{
		return;//直接返回 后面的代码都不会执行了
	}
	oShow.off = true;
	var iNext = oShow.iNow - 1;
	if (iNext < 0 )
	{
		iNext = oShow.urls.length-1;
	}
	tab(iNext);//切换图片
}
next.onclick = function(){
	if (oShow.off)
	{
		return;//直接返回 后面的代码都不会执行了
	}
	oShow.off = true;
	var iNext = oShow.iNow + 1;
	if (iNext >= oShow.urls.length)
	{
		iNext = 0;
	}
	tab(iNext);//切换图片
}

function tab(iNext){
	var oEm1 = oShow.getElementsByClassName("em1");
	var oEm2 = oShow.getElementsByClassName("em2");
	var oDiv = oShow.getElementsByTagName("div");
	for (var i=0;i<oEm1.length ; i++)
	{
		//当前的这一张
		oEm1[i].style.backgroundImage = "url("+ oShow.urls[oShow.iNow] +")";
		//后面那一张
		oEm2[i].style.backgroundImage = "url("+ oShow.urls[iNext] +")";
	}
	oShow.style.display = "block";
	//console.log(oShow.iNow);
	oLi[oShow.iNow].style.display = "none";
	//给具体的十个div绑定定时器实现旋转的效果
	for (var i=0;i<oDiv.length ;i+=2 )
	{
		var time = (i+1)*50;
		oDiv[i].style.transform = "rotateX(0deg)";//左边div
		oDiv[i+1].style.transform = "rotateX(0deg)";//右边div
		//具体每个div绑定定时器
		setTimer(oDiv[i],time,"move1");
		setTimer(oDiv[i+1],time,"move2");
	}
	//动画执行完成之后
	setTimeout(function(){
		oShow.iNow = iNext;
		oLi[iNext].style.display = "block";
		oShow.style.display = "none";
		oShow.off = false;
	},(oDiv.length*50+1500));
	
}

function setTimer(obj,time,name){
	obj.timer = setTimeout(function(){
		//开启定时器之前先清楚定时器
		clearTimeout(obj.timer);
		obj.style.WebkitAnimation = name + " 1.5s";
		obj.style.WebkitTransform = "rotateX(180deg)";
		obj.timer = setTimeout(function(){
			obj.style.WebkitAnimation = "";
			clearTimeout(obj.timer);
			obj.timer = null;
		},1500)
	},time);
};