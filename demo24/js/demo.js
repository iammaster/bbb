var oLi = document.getElementsByTagName("li");
var box = document.getElementsByClassName("box")[0];
for (var i = 0;i<oLi.length ;i++ )
{
	oLi[i].onmousemove = function(){
		var _left = this.offsetLeft;
		var _top = this.offsetTop;
		box.style.left = _left + "px";
		box.style.top = _top + "px";
		this.style.backgroundPositionY = "-150px";
	}
	oLi[i].onmouseout = function(){
		this.style.backgroundPositionY = "0px";
	}
}